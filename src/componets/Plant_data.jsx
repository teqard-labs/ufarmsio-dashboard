import React, { Component } from "react";

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
  <h2 class="mb-4 ml-4 mt-4 text-2xl font-bold text-black">Sensor Data</h2>

  <div class="mt-4 ml-4 mr-4 grid grid-cols-6 grid-rows-none gap-4 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
    <div class="flex w-48 items-start rounded-xl bg-white p-4 shadow-lg">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      </div>

      <div class="ml-4">
        <h2 class="font-semibold">Temperature</h2>
        <p class="mt-2 text-sm text-gray-500">{devices[user].sensor_data.Temperature}</p>
      </div>
    </div>

    <div class="flex w-48 items-start rounded-xl bg-white p-4 shadow-lg">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>

      <div class="ml-4">
        <h2 class="font-semibold">Humidity</h2>
        <p class="mt-2 text-sm text-gray-500">{devices[user].sensor_data.Humidity}</p>
      </div>
    </div>
    <div class="flex w-48 items-start rounded-xl bg-white p-4 shadow-lg">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>

      <div class="ml-4">
        <h2 class="font-semibold">Water level</h2>
        <p class="mt-2 text-sm text-gray-500">{devices[user].sensor_data.Water_level}</p>
      </div>
    </div>
    <div class="flex w-48 items-start rounded-xl bg-white p-4 shadow-lg">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      </div>

      <div class="ml-4">
        <h2 class="font-semibold">Water temp</h2>
        <p class="mt-2 text-sm text-gray-500">{devices[user].sensor_data.Water_temp}</p>
      </div>
    </div>
    <div class="flex w-48 items-start rounded-xl bg-white p-4 shadow-lg">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      </div>

      <div class="ml-4">
        <h2 class="font-semibold">pH</h2>
        <p class="mt-2 text-sm text-gray-500">{devices[user].sensor_data.ph}</p>
      </div>
    </div>
    <div class="flex w-48 items-start rounded-xl bg-white p-4 shadow-lg">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
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
          >
            <Line options={options} data={data} height="250" />
            <div className="card-body">
              <h2 className="card-title">
                {devices[user].user_name} @ {devices[user].location}
              </h2>
              <p>{devices[user].sensor_data.ph}</p>
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
      <div className="h-full bg-gradient-to-r from-green-400 to-yellow-400">
        <Navbar />
        <div className="flex flex-row flex-wrap justify-center  ">
          {" "}
          {this.state.device_elements}
        </div>
      </div>
    );
  }
}
