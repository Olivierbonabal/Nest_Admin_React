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
    // <div className="container">
    //   <h1>Count {count}</h1>
    //   <input
    //     type="number"
    //     onChange={(e) => setCount(parseInt(e.target.value))}
    //   />
    // </div>
    <main className="form-signin">
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Connexion</h1>

        <input
          type="email"
          className="form-control mt-3"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mt-3"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-100 mt-3 btn btn-lg btn-success" type="submit">
          Se Connecter
        </button>

        <p className="mt-2 p-5 text-muted">&copy; 2021–2022🚀OlivierBonabal</p>
      </form>
    </main>
  );
};

export default Login;