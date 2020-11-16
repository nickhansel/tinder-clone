import React from "react";
import PropTypes from "prop-types";

const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        fontWeight: 500,
        justifyContent: "space-around",
        marginLeft: 40,
        marginTop: 5,
        width: 450,
      }}
    >
      <div>
        <a href="/">Home</a>
      </div>
      <div>
        <a href="/#section1">Features</a>
      </div>
      <div>
        <a href="/#section3">Demo</a>
      </div>
      <div>
        <a href="/#section3">Contact</a>
      </div>
      <div>
        <a href="/auth">Sign In</a>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  profile: PropTypes.object,
};

export default NavBar;
