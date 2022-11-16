import axios from 'axios';

const ImageUpload =  (props: { uploaded: (url: string) => void }) => {

    const upload = async (files: FileList | null) => {
        if (files === null) return;

        const formData = new FormData();
        formData.append('image', files[0]);

        const { data } = await axios.post('upload', formData);

        props.uploaded(data.url);
    }

    return (
        <label className="btn btn-primary">
            Chargement de l'image <input type="file" hidden onChange={e => upload(e.target.files)} />
        </label>
    )
}

export default ImageUpload;