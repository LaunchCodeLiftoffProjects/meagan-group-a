export class Item {

  constructor(
    public name?: string,
    public description?: string,
    public price?: number,
    public id?: string,
    public sizes?: string[],
    public colors?: string[],
    public photos?:string[]

  ) { }

}
