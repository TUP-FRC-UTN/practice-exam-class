import { Product } from "./product";

export interface Order {
    id?: number;
    customerName: string;
    email: string;
    products: Product[];
    total: number;
    orderCode?: string;
    timestamp?: string;
}
