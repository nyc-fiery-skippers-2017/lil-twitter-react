import React, { Component } from 'react';
import axios from 'axios';
import querystring from 'querystring';

export default class Composition extends Component {
  constructor(){
    super()
    this.createTweet = this.createTweet.bind(this);
  }

  createTweet(e){
    e.preventDefault();
    console.log("test")
    axios.post('http://localhost:8080/tweets',
    querystring.stringify({tweet: ''}))
    .then((response) => {
      this.props.addTweet(response.data);
    })
  }

  render() {
    debugger
    return (
      <section id="tweet-box">
        <p id="tweet-box-title">Compose New Tweet</p>
        <form id="tweet-form" onSubmit={this.createTweet}>
          <textarea ref="usertTweet" id="new-tweet" cols="30" rows="5" maxLength="140" name="tweet"></textarea>
          <input type="submit" value="Tweet" />
        </form>
      </section>
    )
  }
}
