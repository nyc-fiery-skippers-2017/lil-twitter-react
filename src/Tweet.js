import React, { Component } from 'react';

export default class Tweet extends Component {
  render() {
    let {avatar_url, handle, content, username} = this.props.data
    return (
      <li className="tweet">
        <img className="avatar" src={avatar_url} alt="" />
        <div className="tweet-content">
          <p>
            <span className="full-name">{username}</span>
            <span className="username">{handle}</span>
            <span className="timestamp">- 8m</span>
          </p>
          <p>{content}</p>
        </div>
      </li>
    )
  }
}
