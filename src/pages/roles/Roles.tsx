import axios from 'axios';
import { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../../components/Wrapper';
import { Role } from '../../models/role';

const Roles = () => {
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        (
            async () => {
                const { data } = await axios.get('roles');

                setRoles(data);
            }
        )();
    }, []);

    const del = async (id: number) => {
        if (window.confirm("Voulez-vous vraiment supprimer ce rôle?")) {
            await axios.delete(`roles/${id}`);

            setRoles(roles.filter((r: Role) => r.id !== id));
        }
    }

    return (
        <Wrapper>
            <div className="pt-3 pb-2 mb-3 border-bottom">
                <Link to={"/roles/create"} className="my-3 btn btn-sm btn-outline-primary">Ajouter</Link>
            </div>

            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Fonction</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roles.map((role: Role) => {
                            return (
                                <tr key={role.id}>
                                    <td>{role.id}</td>
                                    <td>{role.name}</td>

                                    <td>
                                        <div className="btn btn-link">
                                            <Link to={`/roles/${role.id}/edit`}
                                                className="btn btn-sm btn-outline-secondary">Editer</Link>
                                        </div>

                                        <div className="btn btn-link">
                                            <a href="#" className="btn btn-sm btn-outline-danger"
                                                onClick={() => del(role.id)}
                                            >Supprimer</a>
                                        </div>
                                    </td>
                                    
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </Wrapper>
    )
}

export default Roles;

