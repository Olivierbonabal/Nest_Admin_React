import axios from "axios";
import { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  //   const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  
  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    //envoie request a nest
    await axios.post('login', {
            email: email,
            password: password
    });
    // console.log(data);
    setRedirect(true);
  };

  if(redirect) {
        return <Navigate to={"/"}/>;
  }
  
  return (
  
    <div className="container">
    <main className="form-signin">
      <form onSubmit={submit}>

        <h1 className="my-1 p-5">Connexion</h1>

        <input
          type="email"
          className="form-control mt-1"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control my-3"
          placeholder="Mot de Passe"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-100 mt-3 btn btn-lg btn-success" type="submit">
          Se Connecter
        </button>

        <p className="mt-2 p-5 text-white">&copy; 2021–2022🚀OlivierBonabal</p>
      </form>
    </main>
    </div>
  );
};

export default Login;