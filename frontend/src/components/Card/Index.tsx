import axios from "axios";
import { useEffect, useState } from "react";
import DataPicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { NoticationButton } from "../NoticationButton";
import "./styles.css";
export function Card() {
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  useEffect(() => {
    axios
      .get("https://metadata-bianca.herokuapp.com/sales")
      .then((response) => {
        console.log(response.data);
      });
  }, []);

  return (
    <div className='card'>
      <h2 className='sales-title'>Vendas</h2>
      <div>
        <div className='form-control-container'>
          <DataPicker
            selected={minDate}
            onChange={(date: Date) => {
              setMinDate(date);
            }}
            className='form-control'
            dateFormat='dd/MM/yyyy'
          />
        </div>
        <div className='form-control-container'>
          <DataPicker
            selected={maxDate}
            onChange={(date: Date) => {
              setMaxDate(date);
            }}
            className='form-control'
            dateFormat='dd/MM/yyyy'
          />
        </div>
      </div>

      <div>
        <table className='sales-table'>
          <thead>
            <tr>
              <th className='show992'>ID</th>
              <th className='show576'>Data</th>
              <th>Vendedor</th>
              <th className='show992'>Visitas</th>
              <th className='show992'>Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='show992'>#341</td>
              <td className='show576'>08/07/2022</td>
              <td>Anakin</td>
              <td className='show992'>15</td>
              <td className='show992'>11</td>
              <td>R$ 55300.00</td>
              <td>
                <NoticationButton />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
