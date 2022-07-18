import axios from "axios";
import icon from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/request";
import "./styles.css";

type Props = {
  saleId: number;
};

export function NoticationButton({ saleId }: Props) {
  function handleClick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`).then((response) => {});
  }
  return (
    <>
      <div className='red-btn-container'>
        <div className='red-btn' onClick={() => handleClick(saleId)}>
          <img src={icon} alt='Notificar' />
        </div>
      </div>
    </>
  );
}
