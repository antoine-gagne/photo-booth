
// High-level components
import React, { Component } from "react";
import { render } from "react-dom";

// From https://www.npmjs.com/package/react-webcam
import Webcam from "react-webcam";

import './main.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <WebcamCapture />
        <PictureCaroussel />
      </div>
    )
  }
}


class PictureCaroussel extends React.Component {
  constructor(props) {
    super(props)
    this.state = { imageList: [] }
  }

  addImage(image) {
    let tempList = this.state.imageList;
    tempList.push(image);
    this.setState({ imageList: tempList });
  }

  render() {
    return (
      <div className='container'>
        <ul>
          <li>
            <img src={`data:image/jpeg;base64,${this.state.image}`} />
          </li>
        </ul>
      </div>
    );
  }
}

class WebcamCapture extends React.Component {
  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture photo</button>
      </div>
    );
  }
}


render(
  <App />,
  document.getElementById('app')
);