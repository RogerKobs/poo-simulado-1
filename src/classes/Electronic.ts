export class Electronic {
  brand: string
  voltage: number = 0
  protected tax: number = 0

  constructor(brand: string) {
    if(brand.length < 3) {
      throw new Error('A marca deve conter ao menos 3 caracteres')
    }

    this.brand = brand
  }

  getTax() {
    return this.tax
  }
}