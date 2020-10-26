import React from "react";
import PropTypes from "prop-types";
import { Rate } from "antd";
import { iconStar } from "media/svg";

const desc = ["very bad", "bad", "normal", "good", "very good"];

class Rater extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <span>
        <Rate
          style={{ color: "#82ADD7", fontSize: 60 }}
          tooltips={desc}
          onChange={this.handleChange}
          value={value}
          // character={({ index }) => {
          //   return <iconStar />;
          // }}
        />
        {/* {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""} */}
      </span>
    );
  }
}

export default Rater;
