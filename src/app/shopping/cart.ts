import { Food } from '../food/food';

export interface Cart
{
    
    cartItems: Food[];
    cartTotal: number;
}