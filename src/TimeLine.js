import React, { Component } from 'react';
import Tweet from './Tweet';

export default class TimeLine extends Component {
  render() {
    return (
      <section id="tweets-container">
        <h3>Tweets</h3>
        <ul>
          {this.props.tweets.map((tweet, i) => {
            return (
              <Tweet key={i}
                data={tweet}
              />
            )
          })}
        </ul>
      </section>
    )
  }
}
