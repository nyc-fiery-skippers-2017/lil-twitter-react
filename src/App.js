import React, { Component } from 'react';
import Tweet from './Tweet';

const tweets = [
  {
    id: 1,
    content: "Sint quia voluptas hic illum sunt excepturi dignissimos ut.",
    username: "Pan Wangperawong",
    handle: "@itspanw",
    avatar_url: "https://pbs.twimg.com/profile_images/677609475285495810/Lq1GCf5h_400x400.jpg",
    created_at: "2017-08-09T14:26:04.180Z",
    updated_at: "2017-08-09T14:26:04.180Z",
    hashtag_names: [
    "inventore",
    "necessitatibus",
    "et",
    "animi"
    ]
  },
  {
    id: 2,
    content: "Sint quia voluptas hic illum sunt excepturi dignissimos ut.",
    username: "Mr. Matteo Mertz",
    handle: "@sincere_mccullough",
    avatar_url: "https://robohash.org/sincere_mccullough.png?size=300x300&set=set1",
    created_at: "2017-08-09T14:26:04.180Z",
    updated_at: "2017-08-09T14:26:04.180Z",
    hashtag_names: [
    "inventore",
    "necessitatibus",
    "et",
    "animi"
    ]
  },
  {
    id: 3,
    content: "Sint quia voluptas hic illum sunt excepturi dignissimos ut.",
    username: "Mr. Matteo Mertz",
    handle: "@sincere_mccullough",
    avatar_url: "https://robohash.org/sincere_mccullough.png?size=300x300&set=set1",
    created_at: "2017-08-09T14:26:04.180Z",
    updated_at: "2017-08-09T14:26:04.180Z",
    hashtag_names: [
    "inventore",
    "necessitatibus",
    "et",
    "animi"
    ]
  },
  {
    id: 500,
    content: "Sint quia voluptas hic illum sunt excepturi dignissimos ut.",
    username: "Mr. Matteo Mertz",
    handle: "@sincere_mccullough",
    avatar_url: "https://robohash.org/sincere_mccullough.png?size=300x300&set=set1",
    created_at: "2017-08-09T14:26:04.180Z",
    updated_at: "2017-08-09T14:26:04.180Z",
    hashtag_names: [
    "inventore",
    "necessitatibus",
    "et",
    "animi"
    ]
  },
]

class App extends Component {
  render() {
    return (
      <div id="app">
        <header id="top-nav">
          <div id="brand">Lil Twitter API</div>
          <form id="search-form">
            <input id="search" type="text" name="query" />
          </form>
          <i className="fa fa-search"></i>
        </header>
        <section className="container">
          <section id="tweet-box">
            <p id="tweet-box-title">Compose New Tweet</p>
            <form id="tweet-form">
              <textarea id="new-tweet" cols="30" rows="5" maxLength="140" name="tweet"></textarea>
              <input type="submit" value="Tweet" />
            </form>
          </section>
          <section id="trends-container">
            <h3>Trends</h3>
            <ul>
              <li>filler</li>
              <li>filler</li>
              <li>filler</li>
              <li>filler</li>
              <li>filler</li>
              <li>filler</li>
              <li>filler</li>
              <li>filler</li>
              <li>filler</li>
              <li>filler</li>
            </ul>
          </section>
          <section id="tweets-container">
            <h3>Tweets</h3>
            <ul>
              {tweets.map((tweet, i) => {
                return (
                  <Tweet key={i}
                    data={tweet}
                  />
                )
              })}
            </ul>
          </section>
      </section>
      </div>
    );
  }
}

export default App;
