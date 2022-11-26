import React, { Component } from "react";

import { db } from "../firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import Barn from './media/barn.png'

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
import { getAuth } from "firebase/auth";

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
      
    });
  }

  render() {
    return (
      <div className=" h-screen bg-slate-700">
        <Navbar />
        <div className=" flex flex-shrink justify-center" >
          {" "}
          {this.state.device_elements}
     
    <div className="flex gap-x-24 gap-y-8 grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 grid-row-none justify-center mt-10">

    

      <div class="flex justify-center ">
  <div class="block p-6 rounded-lg shadow-lg bg-gradient-to-r from-green-500 to-yellow-400">
    <div className="circle justify-center border-lime-500 border-4 border-solid mt-5 mb-5 ">
        <div className="indicator ">
          <span className="indicator-item indicator-start badge bg-lime-400 rounded-full flex flex-wrap justify-center w-[9vh] h-[9vh] "><p className="text-black text-center text-xs">120 Kg/Month</p></span>
          <span className="indicator-item indicator-bottom badge bg-black rounded-full flex flex-wrap justify-center w-[7.5vh] h-[7.5vh]  "><p className="text-white text-center text-xs">0.2Kg CO2</p></span>
          <button>
          <a href="/ufarmsio-dashboard/dashboard">
            <img className="w-[13vh] h-[13vh] justify-center mt-2 ml-1.5" src={Barn} alt="barn" /></a>
            <div className="justify-center mb-4">
            <p className="text-xs text-black">Farm 1</p>
            <p className="text-xs text-black">Farm ID: UUID12345</p>
            </div>
          </button>
        </div>
      </div>
  </div>
</div>




<div class="flex justify-center">
  <div class="block p-6 rounded-lg shadow-lg bg-gradient-to-r from-green-500 to-yellow-400">
    <div className="circle justify-center border-lime-500 border-4 border-solid mt-5 mb-5">
        <div className="indicator">
          <span className="indicator-item indicator-start badge bg-lime-400 rounded-full flex flex-wrap justify-center w-[9vh] h-[9vh] "><p className="text-black text-center text-xs">120 Kg/Month</p></span>
          <span className="indicator-item indicator-bottom badge bg-black rounded-full flex flex-wrap justify-center w-[7.5vh] h-[7.5vh]  "><p className="text-white text-center text-xs">0.2Kg CO2</p></span>
          <button>
          <a href="/ufarmsio-dashboard/dashboard">
            <img className="w-[13vh] h-[13vh] justify-center mt-2 ml-1.5" src={Barn} alt="barn" /></a>
            <div className="justify-center mb-4">
            <p className="text-xs text-black">Farm 1</p>
            <p className="text-xs text-black">Farm ID: UUID12345</p>
            </div>
          </button>
        </div>
      </div>
  </div>
</div>

<div class="flex justify-center">
  <div class="block p-6 rounded-lg shadow-lg bg-gradient-to-r from-green-500 to-yellow-400">
    <div className="circle justify-center border-lime-500 border-4 border-solid mt-5 mb-5">
        <div className="indicator">
          <span className="indicator-item indicator-start badge bg-lime-400 rounded-full flex flex-wrap justify-center w-[9vh] h-[9vh] "><p className="text-black text-center text-xs">120 Kg/Month</p></span>
          <span className="indicator-item indicator-bottom badge bg-black rounded-full flex flex-wrap justify-center w-[7.5vh] h-[7.5vh]  "><p className="text-white text-center text-xs">0.2Kg CO2</p></span>
          <button>
          <a href="/ufarmsio-dashboard/dashboard">
            <img className="w-[13vh] h-[13vh] justify-center mt-2 ml-1.5" src={Barn} alt="barn" /></a>
            <div className="justify-center mb-4">
            <p className="text-xs text-black">Farm 1</p>
            <p className="text-xs text-black">Farm ID: UUID12345</p>
            </div>
          </button>
        </div>
      </div>
  </div>
</div>

<div class="flex justify-center">
  <div class="block p-6 rounded-lg shadow-lg bg-gradient-to-r from-green-500 to-yellow-400">
    <div className="circle justify-center border-lime-500 border-4 border-solid mt-5 mb-5">
        <div className="indicator">
          <span className="indicator-item indicator-start badge bg-lime-400 rounded-full flex flex-wrap justify-center w-[9vh] h-[9vh] "><p className="text-black text-center text-xs">120 Kg/Month</p></span>
          <span className="indicator-item indicator-bottom badge bg-black rounded-full flex flex-wrap justify-center w-[7.5vh] h-[7.5vh]  "><p className="text-white text-center text-xs">0.2Kg CO2</p></span>
          <button>
          <a href="/ufarmsio-dashboard/dashboard">
            <img className="w-[13vh] h-[13vh] justify-center mt-2 ml-1.5" src={Barn} alt="barn" /></a>
            <div className="justify-center mb-4">
            <p className="text-xs text-black">Farm 1</p>
            <p className="text-xs text-black">Farm ID: UUID12345</p>
            </div>
          </button>
        </div>
      </div>
  </div>
</div>

<div class="flex justify-center">
  <div class="block p-6 rounded-lg shadow-lg bg-gradient-to-r from-green-500 to-yellow-400">
    <div className="circle justify-center border-lime-500 border-4 border-solid mt-5 mb-5">
        <div className="indicator">
          <span className="indicator-item indicator-start badge bg-lime-400 rounded-full flex flex-wrap justify-center w-[9vh] h-[9vh] "><p className="text-black text-center text-xs">120 Kg/Month</p></span>
          <span className="indicator-item indicator-bottom badge bg-black rounded-full flex flex-wrap justify-center w-[7.5vh] h-[7.5vh]  "><p className="text-white text-center text-xs">0.2Kg CO2</p></span>
          <button>
          <a href="/ufarmsio-dashboard/dashboard">
            <img className="w-[13vh] h-[13vh] justify-center mt-2 ml-1.5" src={Barn} alt="barn" /></a>
            <div className="justify-center mb-4">
            <p className="text-xs text-black">Farm 1</p>
            <p className="text-xs text-black">Farm ID: UUID12345</p>
            </div>
          </button>
        </div>
      </div>
  </div>
</div>

<div class="flex justify-center">
  <div class="block p-6 rounded-lg shadow-lg bg-gradient-to-r from-green-500 to-yellow-400">
    <div className="circle justify-center border-lime-500 border-4 border-solid mt-5 mb-5">
        <div className="indicator">
          <span className="indicator-item indicator-start badge bg-lime-400 rounded-full flex flex-wrap justify-center w-[9vh] h-[9vh] "><p className="text-black text-center text-xs">120 Kg/Month</p></span>
          <span className="indicator-item indicator-bottom badge bg-black rounded-full flex flex-wrap justify-center w-[7.5vh] h-[7.5vh]  "><p className="text-white text-center text-xs">0.2Kg CO2</p></span>
          <button>
          <a href="/ufarmsio-dashboard/dashboard">
            <img className="w-[13vh] h-[13vh] justify-center mt-2 ml-1.5" src={Barn} alt="barn" /></a>
            <div className="justify-center mb-4">
            <p className="text-xs text-black">Farm 1</p>
            <p className="text-xs text-black">Farm ID: UUID12345</p>
            </div>
          </button>
        </div>
      </div>
  </div>
</div>
      

     
    </div>
    
    {/* <div className="flex flex-wrap columns-3">
        <img src={Air} alt="air"><p className="text-xs">Produced 7 tons of Oxygen</p></img>
        <img src={Community} alt="air"><p className="text-xs">Allows 6200 people to breath for an entire day</p></img>
        <img src={Carbon} alt="air"><p className="text-xs">Stores 2.5 tons of carbon</p></img>
      </div> */}

        </div>
      </div>
    );
  }
}

