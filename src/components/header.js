import React from "react";
import "../styles/main.css";
import { connect } from "react-redux";
// import "../styles/mobile.css";
// import "../styles/tablet.css";
// import "../styles/mediumdevice.css";
import logo from "../resources/Hid.png";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="main-header">
      <Link to="/">
        {" "}
        <img
          src={logo}
          align="left"
          className="main-header-logo"
          alt="logo"
        />{" "}
      </Link>
    </header>
    );
  }
}


function mapStateToProps(state) {
  // const { user } = state.authentication;
  // const { firstname, username, address } = state.searchUser;
  return {
    // user,
    // firstname,
    // address,
    // username
  };
}

const HeaderComponent = connect(mapStateToProps)(Header);
export { HeaderComponent as Header };