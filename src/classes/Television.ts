import { Electronic } from "./Electronic";

export class Television extends Electronic {
  private inches: number = 0

  setTax(tax: number) {
    this.tax = tax
  }

  getInches() {
    return this.inches
  }

  setInches(inches: number) {
    if(inches > 80) {
      throw new Error('As polegadas da TV não pode ser maior que 80')
    }

    this.inches = inches
  }
}