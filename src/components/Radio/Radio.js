import React, { Component } from "react";
import "./Radio.scss";

class Radio extends Component {
  render() {
    const clickRadio = this.props.clickRadio;
    const radioActive = this.props.radioActive;
    return (
      <label className="radio" onClick={clickRadio}>
        <input
          type="radio"
          className={
            radioActive ? "radio__input radio__input_active" : "radio__input"
          }
        />
        <span className="radio__checkmark" />
        <span className={"radio__text"}> {this.props.children}</span>
      </label>
    );
  }
}

export default Radio;
