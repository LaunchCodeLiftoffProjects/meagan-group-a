import { Item } from './item';
import { CartItem } from './cartItem';

export class CustomerOrder {

  constructor(
    public purchasedItems?: CartItem[],
    public name?: string,
    public email?: string,
    public address?: string,
    public country?: string,
    public state?: string,
    public city?: string,
    public postalCode?: string,
    public address2?: string
  ) { }

}
