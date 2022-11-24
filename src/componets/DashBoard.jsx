import React, { Component } from "react";

import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Navbar from "./Navbar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "",
    },
  },
};

const labels = [
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
];

export default class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      device_elements: [],
    };
    this.unsub = null;
  }

  componentDidMount() {
    this.unsub = onSnapshot(doc(db, "devices", "iot"), async (doc) => {
      const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      const devices = await doc.data();
      let device_elements = [];
      for (let user in devices) {
        const data = {
          labels,
          datasets: [
            {
              label: "Yield",
              data: devices[user].sensor_data.yield,
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        };
        device_elements.push(
          <div
            key={user}
            className="card m-5 p-5 lg:card-side bg-base-100 lg:w-[40vw] shadow-xl"
          >
            <Line options={options} data={data} height="250" />
            <div className="card-body">
              <h2 className="card-title">
                {devices[user].user_name} @ {devices[user].location}
              </h2>
              <p>{devices[user].sensor_data.ph}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Request Config</button>
              </div>
            </div>
          </div>
        );
      }
      this.setState({
        device_elements: device_elements,
      });
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="flex flex-row flex-wrap justify-center">
          {" "}
          {this.state.device_elements}
        </div>
      </div>
    );
  }
}
