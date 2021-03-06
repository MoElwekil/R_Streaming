import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
            <Link to={`stream/show/${stream.id}`} className="header">
              {stream.title}
            </Link>
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
          <Link className="ui button primary" to={`/stream/edit/${stream.id}`}>
            Edit
          </Link>
          <Link
            className="ui button negative"
            to={`stream/delete/${stream.id}`}
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderCreateStreamButton() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ float: "right" }}>
          <Link to="/stream/create" className="ui button primary">
            Create Post
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div style={{ maxWidth: 500, margin: "0 auto" }}>
        <h2>Streams List</h2>
        <div className="ui celled list">{this.renderStreamsList()}</div>
        <div>{this.renderCreateStreamButton()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.stream),
    currentUserId: state.googleAuth.userId,
    isSignedIn: state.googleAuth.isSignedIn,
  };
};

export default connect(mapStateToProps, { streamsList })(StreamList);
