import React, { Component } from "react";

import { db } from "../firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import Navbar from './Navbar';

export default class Requests extends Component {
  constructor(props) {
    super(props);
    this.uid = "user1";
    this.unsub = null;
    this.state = {
      request_elements: [],
      shared_elements: [],
    };
    this.devices = {};
  }
  allowUser = async (uid) => {
    const supath = `${this.uid}.shared_users`;
    const rpath = `${this.uid}.requests`;

    if (this.devices[this.uid].shared_users.indexOf(uid) === -1) {
      this.devices[this.uid].shared_users.push(uid);
      const index = this.devices[this.uid].requests.indexOf(uid);
      if (index > -1) {
        this.devices[this.uid].requests.splice(index, 1);
      }
      console.log(index);
    }

    const updatedShared_users = this.devices[this.uid].shared_users;
    const updatedRequests = this.devices[this.uid].requests;
    console.log(updatedRequests);

    await updateDoc(doc(db, "devices", "iot"), {
      [supath]: updatedShared_users,
      [rpath]: updatedRequests,
    });
  };
  denyUser = async (uid) => {
    const supath = `${this.uid}.shared_users`;
    const rpath = `${this.uid}.requests`;
    const sindex = this.devices[this.uid].shared_users.indexOf(uid);
    if (sindex > -1) {
      this.devices[this.uid].shared_users.splice(sindex, 1);
    }
    const rindex = this.devices[this.uid].requests.indexOf(uid);
    if (rindex > -1) {
      this.devices[this.uid].requests.splice(rindex, 1);
    }

    const updatedShared_users = this.devices[this.uid].shared_users;
    const updatedRequests = this.devices[this.uid].requests;

    await updateDoc(doc(db, "devices", "iot"), {
      [supath]: updatedShared_users,
      [rpath]: updatedRequests,
    });
  };
  componentDidMount() {
    
    this.unsub = onSnapshot(doc(db, "devices", "iot"), async (doc) => {
      const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      this.devices = await doc.data();
      let request_elements = [];
      let shared_elements = [];
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
      if (this.devices[this.uid].shared_users.length >= 1) {
        this.devices[this.uid].shared_users.forEach((user) => {
          shared_elements.push(
            <div className="card w-96 bg-base-100 shadow-xl m-5" key={user}>
              <div className="card-body">
                <h2 className="card-title">{this.devices[user].user_name}</h2>
                <p>{this.devices[user].location}</p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    onClick={(e) => {
                      this.denyUser(user);
                    }}
                  >
                    Delete User
                  </button>
                </div>
              </div>
            </div>
          );
        });
      }
      this.setState({
        request_elements: request_elements,
        shared_elements: shared_elements,
      });
    });
  }
  render() {
    return (
      <div data-theme="emerald" className="min-h-screen">
        <Navbar />
        <div className=" flex justify-center mt-10">
          <div className="stack">{this.state.request_elements}</div>
        </div>
        Shared Users
        <div className=" flex justify-center mt-10 flex-row">
          {this.state.shared_elements}
        </div>
      </div>
    );
  }
}
