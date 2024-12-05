export interface Order {
    id: string;
    table: string;
    status: string;
    products: Array<{
        id: string;
        quantity: number;
        product: {
            name: string;
            imagePath: string;
            price: number;
        }
    }>
}
