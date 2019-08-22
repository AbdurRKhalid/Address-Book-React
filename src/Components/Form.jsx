import React, { Component } from "react";

class Form extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <form>
          <div className="form-row">
            <div className="div.form-group col-md-6">
              <label for="inputEmail4">Name</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Enter Name"
              />
            </div>
            <div className="div form-group col-md-6">
              <label for="inputPassword4">Cell Number</label>
              <input
                type="number"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="form-group">
            <label for="inputAddress">Enter Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Enter Address"
            />
          </div>
          <div className="form-group">
            <label for="inputAddress">Enter Permanent Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Enter Permanet Address"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputCity">Enter Province</label>
              <input type="text" className="form-control" id="inputProvince" />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">City</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>Lahore</option>
                <option>Islamabad</option>
                <option>Karachi</option>
                <option>Peshawar</option>
                <option>Queta</option>
                <option>Sargodha</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label for="inputZip">Enter Zip</label>
              <input type="number" className="form-control" id="inputZip" />
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
