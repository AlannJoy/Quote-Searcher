import React, { Component } from "react";

export default class QuoteSearcher extends Component {
  state = {
    loading: true,
    quotes: []
  };

  async componentDidMount() {
    const url = "https://quote-garden.herokuapp.com/quotes/search/tree";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      quotes: data.results,
      loading: false
    });
    // console.log(data.results[2]);
  }

  render() {
    const quotes = this.state.quotes;
    console.log(quotes);
    return (
      <div>
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
          {this.state.quotes.map(quotes => (
            <div>
              <div>
                <strong>{quotes.quoteText}</strong>
              </div>
              <div>By: {quotes.quoteAuthor}</div>
            </div>
          ))}
        </div>

        {/* <p>
          {this.state.quotes.map(quote => (
            <div>
              <ul>{quote.quoteText}</ul>
              {"By: "}
              {quote.quoteAuthor}
            </div>
          ))}
        </p> */}
      </div>
    );
  }
}
