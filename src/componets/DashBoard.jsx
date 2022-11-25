import React, { Component } from "react";

import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";


import Navbar from "./Navbar";



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
