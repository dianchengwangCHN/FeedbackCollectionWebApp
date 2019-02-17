import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import M from "materialize-css";
import "./Landing.css";

class Landing extends Component {
  componentDidMount() {
    const slider = document.querySelectorAll(".slider");
    M.Slider.init(slider, {
      indicators: false,
      height: "100%",
      duration: 500,
      interval: 6000
    });
  }
  render() {
    var startButton = null;
    if (this.props.auth) {
      startButton = (
        <Link
          to='surveys'
          className='waves-effect waves-light btn white black-text'
        >
          Get Started
        </Link>
      );
    }
    return (
      <div>
        <div className='slider fullscreen'>
          <ul className='slides'>
            <li>
              <img src={require("../assets/image/landing1.jpg")} />
            </li>
            <li>
              <img src={require("../assets/image/landing2.jpg")} />
            </li>
            <li>
              <img src={require("../assets/image/landing3.jpg")} />
            </li>
          </ul>
        </div>
        <div className='float-wrapper'>
          <h1
            className='white-text'
            style={{ fontSize: "6rem", fontWeight: "600" }}
          >
            Emaily!
          </h1>
          <h5 className='white-text'>Collect feedback from your users</h5>
          {startButton}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
