import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {};

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const name = data.get("Name");
    const cellNo = data.get("Cell");
    const address = data.get("address");
    const permanentAddress = data.get("permanent");
    const province = data.get("province");
    const city = data.get("city");
    const zip = data.get("zip");
    console.log(name, cellNo, address, permanentAddress, province, city, zip);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="div.form-group col-md-6">
              <label htmlFor="inputEmail4">Name</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Enter Name"
                name="Name"
              />
            </div>
            <div className="div form-group col-md-6">
              <label htmlFor="inputPassword4">Cell Number</label>
              <input
                type="number"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                name="Cell"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Enter Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Enter Address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Enter Permanent Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Enter Permanet Address"
              name="permanet"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">Enter Province</label>
              <input
                type="text"
                className="form-control"
                id="inputProvince"
                name="province"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">City</label>
              <select id="inputState" className="form-control" name="city">
                <option default>Choose...</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
                <option value="karachi">Karachi</option>
                <option value="Peshawar">Peshawar</option>
                <option value="Queta">Queta</option>
                <option value="Sargodha">Sargodha</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Enter Zip</label>
              <input
                type="number"
                className="form-control"
                id="inputZip"
                name="zip"
              />
            </div>
          </div>
          <button className="btn btn-primary">Add Contact</button>
        </form>
      </div>
    );
  }
}

export default Form;
