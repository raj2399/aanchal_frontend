export class stock{
  constructor(
    public Fk_supplier_id:number,
    public Fk_size_id:number,
    public Fk_color_id:number,
    public Fk_product_id:number,
    public Quantity:number,
  ){}
};
