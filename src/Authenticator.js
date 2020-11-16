import React from "react";
import { Note1Grey } from "common";
import { withRouter } from "react-router-dom";

import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";

const styles = {
  buttonContainer: {
    display: "flex",
    marginBottom: "30px",
    justifyContent: "center",
  },
  button: {
    width: "100px",
    paddingBottom: "10px",
    cursor: "pointer",
    borderBottom: "2px solid transparent",
  },
};

class Authenticator extends React.Component {
  state = {
    showSignIn: true,
  };

  switchState = (showSignIn) => {
    this.setState({
      showSignIn,
    });
  };

  render() {
    const { showSignIn } = this.state;
    const styleSignIn = {
      ...styles.button,
      borderBottomColor: !showSignIn ? "#ddd" : "",
    };
    const styleSignOut = {
      ...styles.button,
      borderBottomColor: showSignIn ? "#ddd" : "",
    };

    return (
      <div style={{ marginTop: "60px" }}>
        <div style={styles.buttonContainer}>
          <Note1Grey style={styleSignIn} onClick={() => this.switchState(true)}>
            Sign In
          </Note1Grey>
          <Note1Grey
            onClick={() => this.switchState(false)}
            style={styleSignOut}
          >
            Sign Up
          </Note1Grey>
        </div>
        {showSignIn ? <SignIn /> : <SignUp />}
      </div>
    );
  }
}

export default withRouter(Authenticator);
