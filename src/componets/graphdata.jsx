import React, { Component } from "react";
import { db } from "../firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";

import {
  Chart as ChartJS,
  CategoryScale,
  BarController,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
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


export default class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      device_elements: [],
    };
    this.uid = "user1";
    this.unsub = null;
    this.devices = {};
  }
  requestConfig = async (uid) => {
    console.log(uid);
    const rpath = `${this.uid}.requests`;

    if (this.devices[this.uid].requests.indexOf(uid) === -1) {
      this.devices[this.uid].requests.push(uid);
    }
    const updatedRequests = this.devices[this.uid].requests;
    await updateDoc(doc(db, "devices", "iot"), {
      [rpath]: updatedRequests,
    });
    alert("Requested Config");
  };
  componentDidMount() {
    this.unsub = onSnapshot(doc(db, "devices", "iot"), async (doc) => {
      const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      const devices = await doc.data();
      this.devices = devices;
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
            className="card m-5 p-5  w-80%   mr-6 lg:w-[81vw]   shadow-xl bg-white"
          ><div><h2 className="text-gray-600">Yield</h2></div>
            <Bar options={options} data={data} height="110" />
            <div className="card-body">
              <h2 className="card-title text-gray-600">
                User 1 @ {devices[user].location}
              </h2>
              <div className="card-actions justify-end">
                <button
                  onClick={(e) => {
                    this.requestConfig(user);
                  }}
                  className="btn btn-primary"
                >
                  Request Config
                </button>
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
      
        
        <div className="flex flex-row flex-wrap justify-center  ">
          {" "}
          {this.state.device_elements}
        </div>
      
    );
  }
}
