import { Component } from "react";
import accueil from "../assets/accueil.png";
import amis from "../assets/amis.png";
import notif from "../assets/notif.png";
import parametre from "../assets/parametre.png";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <nav className="nav">
          <li>
            <input type="image" src={accueil} layout= "fixed" alt="accueil"/>
          </li>
          <li>
            <input type="image" src={amis} layout= "fixed" alt="amis"/>
          </li>
          <li>
            <input type="image" src={notif} layout= "fixed" alt="notif"/>
          </li>
          <li>
            <input type="image" src={parametre} layout= "fixed" alt="parametre"/>
          </li>
        </nav>
      </div>
    );
  }
}

export default Menu;
