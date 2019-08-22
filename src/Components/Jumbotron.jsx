import React, { Component } from "react";

class Jumbotron extends Component {
  state = {};
  styles = {
    Blue: "#3374ff",
    textColor: "#ffffff"
  };
  render() {
    return (
      <div
        className="jumbotron jumbotron-fluid"
        style={{ backgroundColor: this.styles.Blue }}
      >
        <div className="container">
          <h1 className="display-4" style={{ color: this.styles.textColor }}>
            Address Book Application
          </h1>
          <p className="lead" style={{ color: this.styles.textColor }}>
            Allowing User to Add New Contact, Update and Delete an Existing
            Contact As Well!
          </p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
