// Code YouTubeDebugger Component Here

import React, { Component } from "react";

export default class YoutubeDebugger extends Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p",
        },
      },
    };
  }

  changeBitrate = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12,
      }),
    });
  };

  changeResolution = () => {
    this.setState(
      {
        settings: Object.assign({}, this.state.settings, {
          bitrate: 8,
          video: {
            resolution: "720p",
          },
        }),
      },
      () => console.log(this.state)
    );
  };

  //   changeResolution = () => {
  //     this.setState(
  //       {
  //         video: Object.assign({}, this.state.settings.video, {
  //           resolution: "720p",
  //         }),
  //       },
  //       () => console.log(this.state)
  //     );
  //   };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.changeBitrate}>
          Change Bitrate
        </button>

        <button className="resolution" onClick={this.changeResolution}>
          Change Resolution
        </button>
      </div>
    );
  }
}
