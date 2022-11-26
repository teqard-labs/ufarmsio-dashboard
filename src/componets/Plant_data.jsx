import React, { Component } from "react";
import Humid from "./media/humid.png";
import Waterlevel from "./media/water_level.png";
import Watertemp from "./media/water_temp.png";
import Ph from "./media/ph.png";
import Ec from "./media/ec.png";
import { db } from "../firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";

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
            <div>
            <div class="flex flex-col">
  <h2 class="mb-4 ml-4 text-2xl font-bold">Sensor Data</h2>

  <div class="mt-4 ml-4 mr-4 grid grid-cols-6 grid-rows-none gap-4 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
    <div class="flex w-48 items-start rounded-xl bg-white p-4 shadow-lg">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-green-100 bg-green-50">
      <img src="https://www.freeiconspng.com/uploads/temperature-icon-png-17.png" class="block w-8 h-8" />
      </div>

      <div class="ml-4">
        <h2 class="font-semibold">Temperature</h2>
        <p class="mt-2 text-sm text-gray-500">{devices[user].sensor_data.Temperature}</p>
      </div>
    </div>

    <div class="flex w-48 items-start rounded-xl bg-white p-4 shadow-lg">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-green-100 bg-green-50">
      <img src={Humid} class="block w-8 h-8" />
      </div>

      <div class="ml-4">
        <h2 class="font-semibold">Humidity</h2>
        <p class="mt-2 text-sm text-gray-500">{devices[user].sensor_data.Humidity}</p>
      </div>
    </div>
    <div class="flex w-48 items-start rounded-xl bg-white p-4 shadow-lg">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-green-100 bg-green-50">
      <img src={Waterlevel} class="block w-8 h-8" />
      </div>

      <div class="ml-4">
        <h2 class="font-semibold">Water level</h2>
        <p class="mt-2 text-sm text-gray-500">{devices[user].sensor_data.Water_level}</p>
      </div>
    </div>
    <div class="flex w-48 items-start rounded-xl bg-white p-4 shadow-lg">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-green-100 bg-green-50">
      <img src={Watertemp} class="block w-8 h-8" />
      </div>

      <div class="ml-4">
        <h2 class="font-semibold">Water temp</h2>
        <p class="mt-2 text-sm text-gray-500">{devices[user].sensor_data.Water_temp}</p>
      </div>
    </div>
    <div class="flex w-48 items-start rounded-xl bg-white p-4 shadow-lg">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-green-100 bg-green-50">
      <img src={Ph} class="block w-8 h-8" />
      </div>

      <div class="ml-4">
        <h2 class="font-semibold">pH</h2>
        <p class="mt-2 text-sm text-gray-500">{devices[user].sensor_data.ph}</p>
      </div>
    </div>
    <div class="flex w-48 items-start rounded-xl bg-white p-4 shadow-lg">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-green-100 bg-green-50">
      <img src={Ec} class="block w-8 h-8" />
      </div>

      <div class="ml-4">
        <h2 class="font-semibold">EC</h2>
        <p class="mt-2 text-sm text-gray-500">{devices[user].sensor_data.EC}</p>
      </div>
    </div>
  </div>
</div>
          <div
            key={user}
            className="card m-5 p-5  bg-base-100 lg:w-[40vw] max-w-[450px] shadow-xl"
          ><div><h2>Yield</h2></div>
            <Line options={options} data={data} height="250" />
            <div className="card-body">
              <h2 className="card-title">
                {devices[user].user_name} @ {devices[user].location}
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
