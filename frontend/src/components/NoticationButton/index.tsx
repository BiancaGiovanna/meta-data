import icon from "../../assets/img/notification-icon.svg";
import "./styles.css";
export function NoticationButton() {
  return (
    <>
      <div className='dsmeta-red-btn-container'>
        <div className='dsmeta-red-btn'>
          <img src={icon} alt='Notificar' />
        </div>
      </div>
    </>
  );
}
