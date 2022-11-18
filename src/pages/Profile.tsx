// import axios from 'axios';
// import React, { SyntheticEvent, useEffect, useState } from 'react';
// import Wrapper from "../components/Wrapper";
// import { User } from "../models/user";

// const Profile = (props: { user: User, setUser: (user: User) => void }) => {

//     const [first_name, setFirstName] = useState('');
//     const [last_name, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [password_confirm, setPasswordConfirm] = useState('');

//     useEffect(() => {

//         setFirstName(props.user.first_name);
//         setLastName(props.user.last_name);
//         setEmail(props.user.email);
//     }, [props.user]);


//     const infoSubmit = async (e: SyntheticEvent) => {
//         e.preventDefault();

//         const { data } = await axios.put('users/info', {
//             first_name,
//             last_name,
//             email
//         });

//         props.setUser(new User(
//             data.id,
//             data.first_name,
//             data.last_name,
//             data.email,
//             data.role
//         ));

//     }

//     const passwordSubmit = async (e: SyntheticEvent) => {
//         e.preventDefault();

//         await axios.put('users/password', {
//             password,
//             password_confirm
//         });
//     }

//     return (
//         <Wrapper>

//             <h3>Informations du Compte</h3>

//             <form onSubmit={infoSubmit}>
//                 <div className="mb-3">
//                     <label>Prénom</label>
//                     <input className="form-control"
//                         defaultValue={first_name}
//                         onChange={e => setFirstName(e.target.value)}
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label>Nom</label>
//                     <input className="form-control"
//                         defaultValue={last_name}
//                         onChange={e => setLastName(e.target.value)}
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label>Email</label>
//                     <input className="form-control"
//                         defaultValue={email}
//                         onChange={e => setEmail(e.target.value)}
//                     />
//                 </div>

//                 <button className="btn btn-outline-secondary" type="submit">Sauvegarder</button>
//             </form>

//             <h3 className="mt-4">Modification du Mot de Passe</h3>

//             <form onSubmit={passwordSubmit}>
//                 <div className="mb-3">
//                     <label>Mot de Passe</label>
//                     <input type="password" className="form-control"
//                         onChange={e => setPassword(e.target.value)}
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label>Password Confirm</label>
//                     <input type="password" className="form-control"
//                         onChange={e => setPasswordConfirm(e.target.value)}
//                     />
//                 </div>

//                 <button className="btn btn-outline-danger" type="submit">Sauvegarder</button>
//             </form>
//         </Wrapper>
//     );
// };

// export default Profile;

import { Component, SyntheticEvent } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import Wrapper from '../components/Wrapper';
import { User } from '../models/user';

class Profile extends Component<any> {
    state = {
        first_name: '',
        last_name: '',
        email: '',
    }
    first_name = '';
    last_name = '';
    email = '';
    password = '';
    password_confirm = '';

    updateInfo = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await axios.put('users/info', {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
        })

        const user: User = response.data;

        this.props.setUser(new User(
            user.id,
            user.first_name,
            user.last_name,
            user.email,
            user.role
        ));
    }

    updatePassword = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.put('users/password', {
            password: this.password,
            password_confirm: this.password_confirm
        })
    }

    render() {
        return (
            <Wrapper>
           
                    <h2 className="my-4">Informations du Compte</h2>

                <hr />
                <form onSubmit={this.updateInfo}>
                    <div className="form-group">
                        <label>Prénom</label>
                        <input type="text" className="form-control" name="first_name"
                            defaultValue={this.first_name = this.props.user.first_name}
                            onChange={e => this.first_name = e.target.value}
                        />
                    </div>

                    <div className="form-group">
                        <label>Nom</label>
                        <input type="text" className="form-control" name="last_name"
                            defaultValue={this.last_name = this.props.user.last_name}
                            onChange={e => this.last_name = e.target.value}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" name="email"
                            defaultValue={this.email = this.props.user.email}
                            onChange={e => this.email = e.target.value}
                        />
                    </div>

                    <button className="btn btn-outline-secondary my-3" type="submit">Sauvegarder</button>
                </form>

                <h2 className="my-4">Changement du Mot de Passe</h2>
                <hr />
                <form onSubmit={this.updatePassword}>
                    <div className="form-group">
                        <label>Mot de Passe</label>
                        <input type="password" className="form-control" name="password"
                            onChange={e => this.password = e.target.value}
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirmation du Mot de Passe</label>
                        <input type="password" className="form-control" name="password_confirm"
                            onChange={e => this.password_confirm = e.target.value}
                        />
                    </div>

                    <button className="btn btn-outline-danger my-3">Sauvegarder</button>
                </form>
            </Wrapper>
        );
    }
}

// @ts-ignore
export default connect(state => ({ user: state.user }), dispatch => ({ setUser: user => dispatch(setUser(user)) }))(Profile);