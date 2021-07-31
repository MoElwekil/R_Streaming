import React, { Component } from "react";
import { connect } from "react-redux";
import { streamShow, streamDelete } from "../../actions";
import history from "../../history";
import Modal from "../../model";

class StreamDelete extends Component {
  componentDidMount() {
    this.props.streamShow(this.props.match.params.id);
  }

  actions() {
    return (
      <React.Fragment>
        <button
          className="ui primary button"
          onClick={() => this.onDeleteStream(this.props.stream.id)}
        >
          Delete
        </button>
        <button className="ui button">Cancel</button>
      </React.Fragment>
    );
  }

  onDeleteStream(id) {
    this.props.streamDelete(id);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div>Delete</div>
        <Modal
          title="Delete Stream"
          content={`Are you sure you want to delete ${this.props.stream.title}?`}
          actions={this.actions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.stream[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { streamShow, streamDelete })(
  StreamDelete
);
