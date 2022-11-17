export interface ProductImage {
    name: string;
    mimeType: string;
    size: number;
    data: string;
}

const ImageUpload = (props: { onImageSelected: (image: File) => void }) => {
    // const ImageUpload = (props: { uploaded: (url: string) => void }) => {
    const upload = async (files: FileList | null) => {
        if (files === null) return;

        const file = files[0];
        props.onImageSelected(file);

        // const formData = new FormData();
        // formData.append('image', files[0]);

        // const {data} = await axios.post('upload', formData);

        // props.uploaded(data.url);
    };

    return (
        <label className="btn btn-primary">
            Chargement de l'image{" "}
            <input
                type="file"
                accept="image/png,image/jpeg"
                hidden
                onChange={(e) => upload(e.target.files)}
            />
        </label>
    );
};

export default ImageUpload;
