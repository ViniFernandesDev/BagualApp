export interface Order {
    id: string;
    table: string;
    status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
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

