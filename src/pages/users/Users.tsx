import axios from "axios";
import { useEffect, useState } from "react";
import Paginator from "../../components/Paginator";
import Wrapper from "../../components/Wrapper";
import { User } from "../../models/user";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    (
      async () => {
      const { data } = await axios.get(`users?page=${page}`);

      console.log(data);

      //1:axios --- 2:nestjs
      setUsers(data.data);
      setLastPage(data.meta.last_page);
    })();
  }, [page]);
  
  const del = async (id: number) => {
    if(window.confirm('Voulez vous supprimez cet enregistrement')) {
      await axios.delete(`users/${id}`);

      setUsers(users.filter((u: User)=> u.id !== id));
    }
  }

  return (
    <Wrapper>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th className="col">#</th>
              <th className="col">Name</th>
              <th className="col">Email</th>
              <th className="col">Role</th>
              <th className="col">Action</th>
            </tr>
          </thead>

          <tbody>
              {users.map((user: User) => {
                return (
                  //loop
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>
                      {user.first_name} {user.last_name}
                    </td>
                    <td>{user.email}</td>
                    <td>{user.role.name}</td>

                    <td>
                      <div className="btn-group mr-2">
                        <a href="#" className="btn btn-sm btn-outline-secondary" onClick={()=> del(user.id)}>
                          Supprimer
                        </a>
                      </div>
                    </td>

                  </tr>
                );
              })}

          </tbody>
        </table>
      </div>

      <Paginator page={page} lastPage={lastPage} pageChanged={setPage}/>
    </Wrapper>
  );
};

export default Users;
