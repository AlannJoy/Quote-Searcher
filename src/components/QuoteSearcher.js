import React, { Component } from "react";
import Quote from "./Quote";

export default class QuoteSearcher extends Component {
  state = {
    loading: false,
    quotes: []
  };

  increment = index => {
    // console.log(this.state.quotes.map(q => q.likes))
    // console.log("increment!!!", index);
    const quotes = [...this.state.quotes];
    quotes[index].likes++;
    this.setState({ quotes: quotes });
  };

  decrement = index => {
    // console.log("decrement!!!", index);
    const quotes = [...this.state.quotes];
    quotes[index].dislikes++;
    this.setState({ quotes: quotes });
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
            <Quote
              key={index}
              id={quotes.id}
              index={index}
              quoteText={quotes.quoteText}
              quoteAuthor={quotes.quoteAuthor}
              likes={quotes.likes}
              dislikes={quotes.dislikes}
              increment={this.increment}
              decrement={this.decrement}
            />
          ))}
        </div>
      </div>
    );
  }
}
