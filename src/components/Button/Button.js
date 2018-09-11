import React, { Component } from "react";
import "./Button.scss";

class Button extends Component {
  render() {
    /*Check Link or Button*/
    const Href = this.props.href;
    const className = this.props.className;
    const clickEvent = this.props.onClick;
    if (Href) {
      return (
        <a
          className={className ? className : "button"}
          onClick={clickEvent}
          href={this.props.href}
        >
          {this.props.children}
        </a>
      );
    }
    return (
      <button className={className ? className : "button"} onClick={clickEvent}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
