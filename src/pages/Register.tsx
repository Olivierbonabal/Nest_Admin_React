import React, { Component, SyntheticEvent } from "react";
import "../login.css";
import axios from "axios";

class Register extends Component {
  first_name = "";
  last_name = "";
  email = "";
  password = "";
  password_confirm = "";

  // submit = (e: SyntheticEvent) => {
  //   e.preventDefault();

  //   // console.log({
  //   //   first_name: this.first_name,
  //   //   last_name: this.last_name,
  //   //   email: this.email,
  //   //   password: this.password,
  //   //   password_confirm: this.password_confirm,
  //   // });

  //   axios.post('http://localhost:3000/api/register', {
  //       first_name: this.first_name,
  //       last_name: this.last_name,
  //       email: this.email,
  //       password: this.password,
  //       password_confirm: this.password_confirm
  //   }).then(res => {
  //       console.log(res);
  //   })

  // };
  submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const response = await axios.post('http://localhost:3000/api/register', {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        password_confirm: this.password_confirm
    });

    console.log(response);
  };

  render() {
    return (
      <main className="form-signin">

        <form onSubmit={this.submit}>
          <h1 className="h3 mb-2 p-5 fw-normal">L'Inscription</h1>

          <input
            className="form-control"
            placeholder="First Name"
            required
            onChange={(e) => (this.first_name = e.target.value)}
          />

          <input
            className="form-control"
            placeholder="Last Name"
            required
            onChange={(e) => (this.last_name = e.target.value)}
          />

          <input
            type="email"
            className="form-control mt-3"
            placeholder="Email"
            required
            onChange={(e) => (this.email = e.target.value)}
          />

          <input
            type="password"
            className="form-control mt-3"
            placeholder="Password"
            required
            onChange={(e) => (this.password = e.target.value)}
          />

          <input
            type="password"
            className="form-control"
            placeholder="Password Confirm"
            required
            onChange={(e) => (this.password_confirm = e.target.value)}
          />

          <button className="w-100 mt-3 btn btn-lg btn-primary" type="submit">
            Sauvegarder
          </button>

          <p className="mt-2 p-5 text-muted">
            &copy; 2017–2022🚀OlivierBonabal
          </p>
        </form>
      </main>
    );
  }
}

export default Register;
