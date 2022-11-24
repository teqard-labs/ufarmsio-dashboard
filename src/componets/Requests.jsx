import React, { Component } from "react";

import { db } from "../firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";

export default class Requests extends Component {
  constructor(props) {
    super(props);
    this.uid = "user1";
    this.unsub = null;
    this.state = {
      request_elements: [],
    };
    this.devices = {};
  }
  allowUser = async (uid) => {
    const supath = `${this.uid}.shared_users`;
    const rpath = `${this.uid}.requests`;
    
    if (this.devices[this.uid].shared_users.indexOf(uid) === -1) {
      this.devices[this.uid].shared_users.push(uid);
      const index = this.devices[this.uid].requests.indexOf(uid)
      if(index > -1){
          this.devices[this.uid].requests.splice(index, 1);
      }
      console.log(index)
    }

    const updatedShared_users = this.devices[this.uid].shared_users;
    const updatedRequests = this.devices[this.uid].requests;
    console.log(updatedRequests);

    await updateDoc(doc(db, "devices", "iot"), {
      [supath]: updatedShared_users,
      [rpath]: updatedRequests,
    });
  };
  denyUser = (uid) => {
    console.log(uid);
  };
  componentDidMount() {
    this.unsub = onSnapshot(doc(db, "devices", "iot"), async (doc) => {
      const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      this.devices = await doc.data();
      let request_elements = [];
      if (this.devices[this.uid].requests.length >= 1) {
        this.devices[this.uid].requests.forEach((user) => {
          request_elements.push(
            <div
              className="card shadow-md bg-primary text-primary-content"
              key={user}
            >
              <div className="card-body">
                <h2 className="card-title capitalize">
                  {this.devices[user].user_name}
                </h2>
                <p>
                  {user} from {this.devices[this.uid].location} is requesting
                  your config file
                </p>
                <div className="btn-group flex justify-center btn-group-horizontal">
                  <button
                    className="btn btn-secondary"
                    onClick={(e) => {
                      this.allowUser(user);
                    }}
                  >
                    Allow
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={(e) => {
                      this.denyUser(user);
                    }}
                  >
                    Deny
                  </button>
                </div>
              </div>
            </div>
          );
        });
      }
      this.setState({
        request_elements: request_elements,
      });
    });
  }
  render() {
    return (
      <div data-theme="emerald" className="min-h-screen">
        Requests
        <div className=" flex justify-center mt-10">
          <div className="stack">{this.state.request_elements}</div>
        </div>
      </div>
    );
  }
}
