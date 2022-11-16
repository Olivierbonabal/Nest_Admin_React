import axios from 'axios';
import { SyntheticEvent, useState } from 'react'
import { Navigate } from 'react-router-dom';
import ImageUpload from '../../components/ImageUpload';
import Wrapper from '../../components/Wrapper';

const ProductCreate = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [redirect, setRedirect] = useState(false);


    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.post('products', {
            title,
            description,
            image,
            price
        });

        setRedirect(true);
    };

    if (redirect) {
        return <Navigate to={"/products"}/>;
    }


    return (

        <Wrapper>
            <form onSubmit={submit}>

                <h2 className="my-3 fw-bold">Création des Produits</h2>

                <div className="my-3 w-auto">
                    <label>Titre</label>
                    <input className="form-control"
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label>Description du produit</label>
                    <textarea className="form-control"
                        onChange={e => setDescription(e.target.value)}
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label>Image</label>
                    <div className="input-group">
                        <input className="form-control" value={image} onChange={e => setImage(e.target.value)} />

                        <ImageUpload uploaded={setImage} />

                    </div>
                </div>

                <div className="mb-3">
                    <label>Prix</label>
                    <input type="number" className="form-control"
                        onChange={e => setPrice(e.target.value)}
                    />
                </div>

                <button className="btn btn-outline-secondary" type="submit">Sauvegarder</button>

            </form>
        </Wrapper>
    )
}

export default ProductCreate;