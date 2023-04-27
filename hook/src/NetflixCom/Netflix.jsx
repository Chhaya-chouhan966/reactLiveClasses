import { Component } from "react";
import './netflix.css'

class Netflix extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }



  render() {
    return (
      <div className="netflix">
        <div className="header">
          <div className="headerLeft">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Netflix logo" width="150" height="50" />
          </div>
          <div className="headerRight">
            <button className="sign">Sign in</button>&nbsp;&nbsp;&nbsp;
            <button className="register">Register</button>
          </div>
        </div>
        <div className="main">
          <h1 className="mainH1">Unlimited movies, TV shows and more.</h1><br />
          <p className="mainP1">Watch anywhere. Cancel anytime.</p><br />
          <p className="mainP2">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <br />
        </div>

      </div>
    )
  }
}

export default Netflix