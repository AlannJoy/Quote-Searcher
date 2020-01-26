import React, { Component } from "react";
import Quote from "./Quote";

export default class QuoteSearcher extends Component {
  state = {
    loading: false,
    quotes: []
  };

  incrementLike = id => {
    const quotelist = this.state.quotes;
    const updateQuote = quotelist.map(q =>
      q.id === id ? { ...q, likes: q.likes + 1 } : q
    );
    this.setState({ quotes: updateQuote });
  };

  async componentDidMount() {
    const url = "https://quote-garden.herokuapp.com/quotes/search/tree";
    const response = await fetch(url);
    const data = await response.json();
    const dataUpDated = data.results.map(q => {
      return {
        ...q,
        likes: 0,
        dislikes: 0
      };
    });

    console.log(dataUpDated);

    this.setState({ quotes: dataUpDated });
  }

  render() {
    return (
      <div className="quote-searcher">
        <div>
          {this.state.loading || !this.state.quotes ? (
            <div>Loading..</div>
          ) : (
            <div>
              <h1>Quotes</h1>
            </div>
          )}
        </div>
        <div>
          {this.state.quotes.map((quotes, index) => (
            <div>
              <Quote
                id={quotes.id}
                quoteText={quotes.quoteText}
                quoteAuthor={quotes.quoteAuthor}
                key={index}
                incrementLike={this.incrementLike}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
