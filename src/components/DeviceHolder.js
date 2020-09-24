import React from "react";
import "../styles/main.css";
import { connect } from "react-redux";
import {ListDevices} from "../components";
import logo from "../resources/Hid.png";
import { Link } from "react-router-dom";

class DeviceHolder extends React.Component {
  render() {
    return (
      <div className="body-main">
        DeviceHolder
        <div className="device-placeholder">
          <ListDevices/>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  // const { user } = state.authentication;
  // const { firstname, username, address } = state.searchUser;
  return {

  };
}

const DeviceHolderComponent = connect(mapStateToProps)(DeviceHolder);
export { DeviceHolderComponent as DeviceHolder };