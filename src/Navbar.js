import "./navbar.css";
import rick from '../src/img/rickandmorty.png';

export function Navbar() {
    return (

        <nav className="navbar">
            <div className="navbar__logo">
                <img className="navbar__logo-img" src={rick} />
            </div>
            <div className="navbar__menu">
                <ul className="menu__list">
                    <a className="menu__list-link" href="#home">
                        <li className="menu__list-item">Inicio</li>
                    </a>
                    <a className="menu__list-link" href="#personajes">
                        <li className="menu__list-item">Personajes</li>
                    </a>
                    <a className="menu__list-link" href="ubicaciones">
                        <li className="menu__list-item">Ubicaciones</li>
                    </a>
                    <a className="menu__list-link" href="episodios">
                        <li className="menu__list-item">Episodios</li>
                    </a>
                </ul>
            </div>
            <div className="menu__btn">
                <ion-icon className="menu__btn-icon" name="menu-outline"></ion-icon>
            </div>
        </nav>
    )
}