import React, { Component } from "react";

export default class ColorBox extends Component {
  changeColor(color) {
    this.props.onChangeColor(color);
  }
  render() {
    let { color } = this.props;
    return (
      <div
        className="color-box"
        style={{ backgroundColor: color }}
        onClick={this.changeColor.bind(this, color)}
      ></div>
    );
  }
}
