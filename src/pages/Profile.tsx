import axios from 'axios';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import Wrapper from "../components/Wrapper";
import { User } from "../models/user";

const Profile = (props: { user: User, setUser: (user: User) => void }) => {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirm, setPasswordConfirm] = useState('');

    useEffect(() => {

        setFirstName(props.user.first_name);
        setLastName(props.user.last_name);
        setEmail(props.user.email);
    }, [props.user]);


    const infoSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const { data } = await axios.put('users/info', {
            first_name,
            last_name,
            email
        });

        props.setUser(new User(
            data.id,
            data.first_name,
            data.last_name,
            data.email,
            data.role
        ));
       
    }

    const passwordSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.put('users/password', {
            password,
            password_confirm
        });
    }

    return (
        <Wrapper>

            <h3>Informations du Compte</h3>

            <form onSubmit={infoSubmit}>
                <div className="mb-3">
                    <label>Prénom</label>
                    <input className="form-control"
                        defaultValue={first_name}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Nom</label>
                    <input className="form-control"
                        defaultValue={last_name}
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input className="form-control"
                        defaultValue={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <button className="btn btn-outline-secondary" type="submit">Sauvegarder</button>
            </form>

            <h3 className="mt-4">Modification du Mot de Passe</h3>

            <form onSubmit={passwordSubmit}>
                <div className="mb-3">
                    <label>Mot de Passe</label>
                    <input type="password" className="form-control"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Password Confirm</label>
                    <input type="password" className="form-control"
                        onChange={e => setPasswordConfirm(e.target.value)}
                    />
                </div>

                <button className="btn btn-outline-danger" type="submit">Sauvegarder</button>
            </form>
        </Wrapper>
    );
};

export default Profile;