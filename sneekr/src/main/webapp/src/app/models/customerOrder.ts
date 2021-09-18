export class customerOrder {

  constructor(
    public name: string,
    public email: string,
    public address: string,
    public address2?: string,
    public country: string,
    public state: string,
    public postalCode: string
  ) { }

}
