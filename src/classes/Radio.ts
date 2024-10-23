import { Electronic } from "./Electronic";

export class Radio extends Electronic {
  weight: number = 0

  setTax(tax: number) {
    if(tax > 50) {
      throw new Error('A taxa de juros não pode ser maior que 50%')
    }

    this.tax = tax
  }
}