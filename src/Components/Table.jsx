import React, { Component } from "react";
class Table extends Component {
  state = {};
  render() {
    return (
      <div className="container" style={{ marginTop: "25px" }}>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Sr.No</th>
              <th scope="col">Name</th>
              <th scope="col">Cell No</th>
              <th scope="col">City</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody />
        </table>
      </div>
    );
  }
}

export default Table;
