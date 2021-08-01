import React, { Component } from "react";
import { connect } from "react-redux";

import { streamShow } from "../../actions";

class StreamShow extends Component {
  componentDidMount() {
    this.props.streamShow(this.props.show.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div>helleeeeeeo</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.stream[ownProps.match.params.id],
    show: ownProps,
  };
};

export default connect(mapStateToProps, { streamShow })(StreamShow);
