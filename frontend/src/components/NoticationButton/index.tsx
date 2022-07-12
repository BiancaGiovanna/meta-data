import icon from "../../assets/img/notification-icon.svg";
import "./styles.css";
export function NoticationButton() {
  return (
    <>
      <div className='red-btn-container'>
        <div className='red-btn'>
          <img src={icon} alt='Notificar' />
        </div>
      </div>
    </>
  );
}
