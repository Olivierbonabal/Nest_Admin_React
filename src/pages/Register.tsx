import { Component, SyntheticEvent } from "react";
import "../login.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

class Register extends Component {
  first_name = "";
  last_name = "";
  email = "";
  password = "";
  password_confirm = "";
  state = {
    redirect: false
  };

  submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.post("register", {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      password: this.password,
      password_confirm: this.password_confirm,
    });

    this.setState({
      redirect: true
    });
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to={"/login"} />;
    }

    return (
      <main className="form-signin">
        <form onSubmit={this.submit}>
          <h1 className="my-3 fw-normal">Inscription</h1>

          <input
            className="form-control my-1"
            placeholder="Prénom"
            required
            onChange={(e) => (this.first_name = e.target.value)}
          />

          <input
            className="form-control"
            placeholder="Nom"
            required
            onChange={(e) => (this.last_name = e.target.value)}
          />

          <input
            type="email"
            className="form-control my-3"
            placeholder="Votre @mail"
            required
            onChange={(e) => (this.email = e.target.value)}
          />

          <input
            type="password"
            className="form-control"
            placeholder="Mot de Passe"
            required
            onChange={(e) => (this.password = e.target.value)}
          />

          <input
            type="password"
            className="form-control my-1"
            placeholder="Confirmation du mot de passe"
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
