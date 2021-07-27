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
          {this.renderEditButtons(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  renderEditButtons(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <button className="ui button primary">Edit</button>
          <button className="ui button negative">Remove</button>
        </div>
      );
    }
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
    currentUserId: state.googleAuth.userId,
  };
};

export default connect(mapStateToProps, { streamsList })(StreamList);
