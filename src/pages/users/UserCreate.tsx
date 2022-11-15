import axios from "axios";
import { SyntheticEvent, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { Role } from "../../models/role";

const UserCreate = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [roles, setRoles] = useState([]);
  const [role_id, setRoleId] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("roles");
      setRoles(data);
    })();
  }, []);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.post("users", {
      first_name,
      last_name,
      email,
      role_id
    });

    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to={"/users"} />;
  }

  
  return (
    <Wrapper>
      <form onSubmit={submit}>
        <h2 className="my-3 fw-bold">Création d'utilisateurs</h2>

        <div className="form-control w-auto mt-3">
          <div className="mb-3">
            <label>Prénom</label>
            <input
              className="form-control"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Nom</label>
            <input
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Role</label>
            <select
              className="form-control"
              onChange={(e) => setRoleId(e.target.value)}
            >
              {roles.map((r: Role) => {
                return (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                );
              })};
              
            </select>
          </div>

          <button className="mt-3 btn btn-outline-success" type="submit">Sauvegarder</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default UserCreate;