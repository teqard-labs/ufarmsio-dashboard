import React, { Component } from "react";

import { db } from "../firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import Barn from './media/barn.png';
import Air from './media/air.png';
import Community from './media/comm.png';
import Carbon from './media/mole.png';

import Navbar from "./Navbar";

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



export default class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      device_elements: [],
    };
    this.unsub = null;
  }

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
     
  }}
  render() {
    return (
      <div className="bg-slate-200 h-screen">
        <Navbar />
        <div className=" flex flex-wrap flex-shrink justify-center">
          {" "}
          {this.state.device_elements}
     
    <div className="gap-x-24 gap-y-8 grid grid-cols-3 grid-flow-row justify-center ">

    <div className="circle justify-center border-lime-500 border-4 border-solid mt-10 ">
        <div className="indicator">
          <span className="indicator-item indicator-start badge bg-lime-400 rounded-full flex flex-wrap justify-center w-[9vh] h-[9vh]  "><p className="text-black text-center text-xs">120 Kg/Month</p></span>
          <span className="indicator-item indicator-bottom badge bg-black rounded-full flex flex-wrap justify-center w-[7.5vh] h-[7.5vh]  "><p className="text-white text-center text-xs">0.2Kg CO2</p></span>
          <button>
            <img className="w-[13vh] h-[13vh] justify-center ml-3" src={Barn} alt="barn" />
            <div className="justify-center mb-4">
            <p className="text-xs">Farm 1</p>
            <p className="text-xs">Farm ID: UUID12345</p>
            </div>
          </button>
        </div>
      </div>

      <div className="circle justify-center flex flex-wrap border-lime-500 border-4 border-solid mt-10">
        <div className="indicator">
          <span className="indicator-item indicator-start badge bg-lime-400 rounded-full flex flex-wrap justify-center w-[9vh] h-[9vh]  "><p className="text-black text-center text-xs">300 Kg/Month</p></span>
          <span className="indicator-item indicator-bottom badge bg-black rounded-full flex flex-wrap justify-center w-[7.5vh] h-[7.5vh]  "><p className="text-white text-center text-xs">1.2Kg CO2</p></span>
          <button>
            <img className="w-[13vh] h-[13vh] justify-center ml-3" src={Barn} alt="barn" />
            <div className="justify-center mb-4">
            <p className="text-xs">Farm 2</p>
            <p className="text-xs">Farm ID: UUID14286</p>
            </div>
          </button>
        </div>
      </div>

      <div className="circle justify-center flex flex-wrap border-lime-500 border-4 border-solid mt-10">
        <div className="indicator">
          <span className="indicator-item indicator-start badge bg-lime-400 rounded-full flex flex-wrap justify-center w-[9vh] h-[9vh]  "><p className="text-black text-center text-xs">700 Kg/Month</p></span>
          <span className="indicator-item indicator-bottom badge bg-black rounded-full flex flex-wrap justify-center w-[7.5vh] h-[7.5vh]  "><p className="text-white text-center text-xs">0.2Kg CO2</p></span>
          <button>
            <img className="w-[13vh] h-[13vh] justify-center ml-3" src={Barn} alt="barn" />
            <div className="justify-center mb-4">
            <p className="text-xs">Farm 3</p>
            <p className="text-xs">Farm ID: UUID18445</p>
            </div>
          </button>
        </div>
      </div>
      
      <div className="circle justify-center flex flex-wrap border-lime-500 border-4 border-solid mt-10">
        <div className="indicator">
          <span className="indicator-item indicator-start badge bg-lime-400 rounded-full flex flex-wrap justify-center w-[9vh] h-[9vh]  "><p className="text-black text-center text-xs">240 Kg/Month</p></span>
          <span className="indicator-item indicator-bottom badge bg-black rounded-full flex flex-wrap justify-center w-[7.5vh] h-[7.5vh]  "><p className="text-white text-center text-xs">0.6Kg CO2</p></span>
          <button>
            <img className="w-[13vh] h-[13vh] justify-center ml-3" src={Barn} alt="barn" />
            <div className="justify-center mb-4">
            <p className="text-xs">Farm 4</p>
            <p className="text-xs">Farm ID: UUID12455</p>
            </div>
          </button>
        </div>
      </div>

      <div className="circle justify-center flex flex-wrap border-lime-500 border-4 border-solid mt-10">
        <div className="indicator">
          <span className="indicator-item indicator-start badge bg-lime-400 rounded-full flex flex-wrap justify-center w-[9vh] h-[9vh]  "><p className="text-black text-center text-xs">400 Kg/Month</p></span>
          <span className="indicator-item indicator-bottom badge bg-black rounded-full flex flex-wrap justify-center w-[7.5vh] h-[7.5vh]  "><p className="text-white text-center text-xs">1Kg CO2</p></span>
          <button>
            <img className="w-[13vh] h-[13vh] justify-center ml-3" src={Barn} alt="barn" />
            <div className="justify-center mb-4">
            <p className="text-xs">Farm 5</p>
            <p className="text-xs">Farm ID: UUID12867</p>
            </div>
          </button>
        </div>
      </div>

      <div className="circle justify-center flex flex-wrap border-lime-500 border-4 border-solid mt-10">
        <div className="indicator">
          <span className="indicator-item indicator-start badge bg-lime-400 rounded-full flex flex-wrap justify-center w-[9vh] h-[9vh]  "><p className="text-black text-center text-xs">250 Kg/Month</p></span>
          <span className="indicator-item indicator-bottom badge bg-black rounded-full flex flex-wrap justify-center w-[7.5vh] h-[7.5vh]  "><p className="text-white text-center text-xs">0.5Kg CO2</p></span>
          <button>
            <img className="w-[13vh] h-[13vh] justify-center ml-3" src={Barn} alt="barn" />
            <div className="justify-center mb-4">
            <p className="text-xs">Farm 6</p>
            <p className="text-xs">Farm ID: UUID12874</p>
            </div>
          </button>
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

