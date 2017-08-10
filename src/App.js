import React, { Component } from 'react';
import Tweet from './Tweet';
import axios from 'axios';
import SearchBox from './SearchBox';
import Hashtags from './Hashtags';
import Composition from './Composition';
import TimeLine from './TimeLine';


class App extends Component {
  constructor(){
    super()
    this.state = {
      tweets: []
    }
    this.updateState = this.updateState.bind(this);
  }

  updateState(tweet){
    this.setState({tweets: [tweet].concat(this.state.tweets)})
  }

  componentDidMount(){
    axios.get('http://localhost:8080/tweets/recent')
      .then((response)=>{
        this.setState({tweets: response.data})
      })
  }

  render() {
    return (
      <div id="app">
        <SearchBox/>
        <section className="container">
          <Composition addTweet={this.updateState}/>
          <Hashtags />
          <TimeLine tweets={this.state.tweets}/>
        </section>
      </div>
    );
  }
}

export default App;
