export class Order {
    order_items: any;

    constructor(
        public id: number,
        public name: string,
        public email: string,
        public total: number
    ) { }
    
}