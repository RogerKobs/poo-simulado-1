import { Television } from "./classes/Television";

const input_brand = document.getElementById('input_brand') as HTMLInputElement;
const input_voltage = document.getElementById('input_voltage') as HTMLInputElement;
const input_tax = document.getElementById('input_tax') as HTMLInputElement;
const input_inches = document.getElementById('input_inches') as HTMLInputElement;

const table_list_television = document.getElementById('table_list_television')
const television_list: Television[] = []

function register_television() {
  try{
    const television = new Television(input_brand.value)
    television.voltage = Number(input_voltage.value)
    television.setTax(Number(input_tax.value))
    television.setInches(Number(input_inches.value))

    alert('Televisão cadastrada com sucesso')
    television_list.push(television)
  } catch(error) {
    alert(error)
  }
}

function list_television() {
  let content_body_table_television = ''
  for(let television of television_list) {
    content_body_table_television = content_body_table_television + `
      <tr>
        <td>${television.brand}</td>
        <td>${television.voltage}</td>
        <td>${television.getTax()}</td>
        <td>${television.getInches()}</td>
      </tr>
    `
  }

  table_list_television!.innerHTML = content_body_table_television
}

const button_save_television = document.getElementById('button_save_television')
button_save_television?.addEventListener('click', register_television)

const button_list_television = document.getElementById('button_list_television')
button_list_television?.addEventListener('click', list_television)