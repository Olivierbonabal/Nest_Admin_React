import axios from 'axios';
import { SyntheticEvent, useEffect, useRef, useState } from 'react'
import { Navigate } from 'react-router-dom';
import ImageUpload from '../../components/ImageUpload';
import Wrapper from '../../components/Wrapper';

const ProductEdit = (props: any) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [redirect, setRedirect] = useState(false);
    const ref = useRef<HTMLInputElement>(null);


    useEffect(() => {
        (
            async () => {
                const { data } = await axios.get(`products/${props.match.params.id}`);

                setTitle(data.title);
                setDescription(data.description);
                setImage(data.image);
                setPrice(data.price);
            }
        )();
    }, []);


    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.put(`products/${props.match.params.id}`, {
            title,
            description,
            image,
            price
        });

        setRedirect(true);
    }


    const updateImage = (url: string) => {
        if (ref.current) {
            ref.current.value = url;
        }
        setImage(url);
    }

    if (redirect) {
        return <Navigate to="/products" />;
    }


    return (

        <Wrapper>
            <form onSubmit={submit}>

            <h2 className="my-3 fw-bold">Modification des Produits</h2>

                <div className="mb-3">
                    <label>Titre</label>
                    <input className="form-control"
                        defaultValue={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label>Description</label>
                    <textarea className="form-control"
                        defaultValue={description}
                        onChange={e => setDescription(e.target.value)}
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label>Image</label>
                    <div className="input-group">
                        <input className="form-control" ref={ref} defaultValue={image} onChange={e => setImage(e.target.value)} />

                        <ImageUpload uploaded={updateImage} />

                    </div>
                </div>

                <div className="mb-3">
                    <label>Prix</label>
                    <input type="number" className="form-control"
                        defaultValue={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                </div>

                <button className="btn btn-outline-secondary" type="submit">Sauvegarder</button>

            </form>
        </Wrapper>
    )
}

export default ProductEdit;