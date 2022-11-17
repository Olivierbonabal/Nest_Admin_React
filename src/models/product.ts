import { ProductImage } from "../components/ImageUpload";

export class Product {

    constructor(
        public id = 0,
        public title = '',
        public description = '',
        public image: ProductImage,
        public price = 0
    ) { }

}