import React, { Component } from "react";

export default class Quote extends Component {
  state = {
    backgroundColor: "#fff"
  };

  setLike = index => {
    this.props.increment(index);
    this.setState({
      backgroundColor: "green"
    });
  };

  setDislike = index => {
    this.props.decrement(index);
    this.setState({
      backgroundColor: "red"
    });
  };

  render() {
    const { index, quoteText, quoteAuthor, likes, dislikes } = this.props;
    return (
      <div>
        <div style={{ backgroundColor: this.state.backgroundColor }}>
          {quoteText}
        </div>
        <p />
        {"By: "} {quoteAuthor}
        <p />
        <div>
          <p>
            Likes: <b>{likes} </b>
            Dislikes: {dislikes}
          </p>
          <button className="plus-button" onClick={() => this.setLike(index)}>
            I love this!
          </button>
          <button
            className="minus-button"
            onClick={() => this.setDislike(index)}
          >
            Don't Like it
          </button>
        </div>
      </div>
    );
  }
}
