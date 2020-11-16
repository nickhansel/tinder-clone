import React from "react";
import { Rate } from "antd";

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
        />
      </span>
    );
  }
}

export default Rater;
