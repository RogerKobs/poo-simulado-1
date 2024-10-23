import { Radio } from "./classes/Radio";

// Carrega os valores dos inputs do HTML
const input_brand = document.getElementById('input_brand') as HTMLInputElement;
const input_voltage = document.getElementById('input_voltage') as HTMLInputElement;
const input_tax = document.getElementById('input_tax') as HTMLInputElement;
const input_weight = document.getElementById('input_weight') as HTMLInputElement;

const table_list_radio = document.getElementById('table_list_radio')
const radio_list: Radio[] = []

function register_radio() {
  try {
    const radio = new Radio(input_brand.value)
    radio.voltage = Number(input_voltage.value)
    radio.setTax(Number(input_tax.value))
    radio.weight = Number(input_weight.value)

    alert('Rádio cadastrado com sucesso')
    radio_list.push(radio)
  } catch(error) {
    alert(error)
  }
}

function list_radio() {
  let content_body_table_radio = ''
  for(let radio of radio_list) {
    content_body_table_radio = content_body_table_radio + `
      <tr>
        <td>${radio.brand}</td>
        <td>${radio.voltage}</td>
        <td>${radio.getTax()}</td>
        <td>${radio.weight}</td>
      </tr>
    `
  }

  table_list_radio!.innerHTML = content_body_table_radio
}

const button_save_radio = document.getElementById('button_save_radio')
button_save_radio?.addEventListener('click', register_radio)

const button_list_radio = document.getElementById('button_list_radio')
button_list_radio?.addEventListener('click', list_radio)
