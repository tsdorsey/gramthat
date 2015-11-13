import React, { Component } from 'react';
// var passport = require('passport');

export class App extends Component {
  render() {
    return (
      <div>
        <h2>gramThat</h2>
        <InstagramLogin />
      </div>
    );
  }
}

var instagramLogin = function() {
  console.log('login with IG');
  // passport.authenticate('instagram');
}

class InstagramLogin extends Component {
  render() {
    return (
      <button onClick={instagramLogin}>Login with instagram</button>
    )
  }
}
