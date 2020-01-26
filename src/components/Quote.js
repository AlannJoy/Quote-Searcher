import React, { Component } from "react";

export default class Quote extends Component {
  render() {
    const { quoteText, quoteAuthor, likes, dislikes } = this.props;
    return (
      <div>
        <div>{quoteText}</div>
        <p />
        {"By: "} {quoteAuthor}
        <p />
        <div>
          <p>
            <div>
              <p>
                Likes /<b>{likes}</b>
                <b>Dislikes!{dislikes}</b>
              </p>
              <button
                className="plus-button"
                onClick={this.props.incrementLike}
              >
                LikeIt x
              </button>
            </div>
          </p>
        </div>
      </div>
    );
  }
}
