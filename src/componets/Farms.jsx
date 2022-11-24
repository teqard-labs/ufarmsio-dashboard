import React, { Component } from "react";
import Navbar from "./Navbar";


export default class farms extends React.Component{
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
