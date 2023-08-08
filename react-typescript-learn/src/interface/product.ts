export interface Product {
    _id?: string | number
    name: string;
    price: number;
    image: any
    description: string
    categoryId: string | number
}