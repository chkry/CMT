import React from "react";
import "../styles/main.css";
import { connect } from "react-redux";
import logo from "../resources/Hid.png";
import { Link } from "react-router-dom";
import { deviceActions } from "../actions";

class ListDevices extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      deviceList: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDevices = this.handleDevices.bind(this);
    const { dispatch } = this.props;
    dispatch(deviceActions.fetchDevices());
  }


  handleSubmit(e) {
    e.preventDefault();
    console.log("handleSubmit clicked");
    const { dispatch } = this.props;
    dispatch(deviceActions.fetchDevices());
  }

  handleDevices(e) {
    e.preventDefault();
    const { deviceList } = this.props;
    console.log("handleDevices clicked");
    deviceList.map(element =>
      console.log(element.name.toString()))
      console.log("handleDevices done");
      // deviceList.map(element =>
      //   console.log(element[0].name))
  }


  render() {
    const { deviceList } = this.props;
    return (
      <div>
        List of Connected Devices
        <div>
          <ul>
            
            {!!deviceList && (deviceList.map((element) => (
              <li key={element.index}>{element.name.toString()}</li>
            )) )}
          </ul>
        </div>

      </div>
    );
  }
}


function mapStateToProps(state) {
  const { deviceList } = state.listOfDevices;
  // const { firstname, username, address } = state.searchUser;
  return {
    deviceList
    // user,
    // firstname,
    // address,
    // username
  };
}

const ListDevicesComponent = connect(mapStateToProps)(ListDevices);
export { ListDevicesComponent as ListDevices };