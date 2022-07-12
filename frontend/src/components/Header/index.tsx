import logo from "../../assets/img/logo-icon.svg";
import "./styles.css";

export function Header() {
  return (
    <header>
      <div className='logo-container'>
        <img src={logo} alt='<metadata>' />
        <h1>Meta Data </h1>
        <p>Desenvolvido por Bianca Gomes</p>
      </div>
    </header>
  );
}
