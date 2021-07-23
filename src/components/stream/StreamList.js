import React, { Component } from "react";
import { connect } from "react-redux";

import { streamsList } from "../../actions";

class StreamList extends Component {
  componentDidMount() {
    this.props.streamsList();
  }

  renderStreamsList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div style={{ maxWidth: 500, margin: "0 auto" }}>
        <h2>Streams List</h2>
        <div className="ui celled list">{this.renderStreamsList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.stream),
  };
};

export default connect(mapStateToProps, { streamsList })(StreamList);
