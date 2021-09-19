import { Item } from './item';

export class CustomerOrder {

  constructor(
    public purchasedItems?: Item[],
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
