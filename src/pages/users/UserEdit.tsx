import axios from "axios";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { Role } from "../../models/role";

const UserEdit = (props: any) => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role_id, setRoleId] = useState("");
  const [roles, setRoles] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await axios.get("roles");

      setRoles(response.data);

      const { data } = await axios.get(`users/${props.match.params.id}`);

      setFirstName(data.first_name);
      setLastName(data.last_name);
      setEmail(data.email);
      setRoleId(data.role.id);
    })();
  }, []);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.put(`users/${props.match.params.id}`, {
      first_name,
      last_name,
      email,
      role_id,
    });

    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to={"/users"} />;
  }

  return (
    <Wrapper>
      <form onSubmit={submit}>
        <h2 className="my-3 fw-bold">Modification des Utilisateurs</h2>
        <div className="form-control w-auto mt-3">
          <div className="mb-3">
            <label>Prenom</label>
            <input
              className="form-control"
              defaultValue={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Nom</label>
            <input
              className="form-control"
              defaultValue={last_name}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input
              className="form-control"
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Role</label>
            <select
              className="form-control"
              value={role_id}
              onChange={(e) => setRoleId(e.target.value)}
            >
              {roles.map((r: Role) => {
                return (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                );
              })}
            </select>
          </div>

          <button className="btn btn-outline-secondary" type="submit">Sauvegarder</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default UserEdit;
