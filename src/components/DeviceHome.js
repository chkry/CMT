import React from "react";
import {Header,DeviceHolder} from "../components";
import { connect } from "react-redux";

class DeviceHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <DeviceHolder/>
      </div>
    );
  }
}

function mapStateToProps(state) {
//   const { response } = state.response;
  return {

  };
}

const connectedDeviceHome = connect(mapStateToProps)(DeviceHome);
export { connectedDeviceHome as DeviceHome };
