import React, { Component } from "react";
import "./Checkbox.scss";

class Checkbox extends Component {
  render() {
    const className = this.props.className;
    const clickCheckbox = this.props.clickCheckbox;
    const checkboxActive = this.props.checkboxActive;
    return (
      <label
        className={className ? className + " checkbox" : "checkbox"}
        onClick={clickCheckbox}
      >
        <input
          type="checkbox"
          className={
            checkboxActive
              ? "checkbox__input checkbox__input_active"
              : "checkbox__input"
          }
        />
        <span className="checkbox__checkmark" />
        <span className={"checkbox__text"}> {this.props.children}</span>
      </label>
    );
  }
}

export default Checkbox;
