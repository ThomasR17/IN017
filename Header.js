import { Component } from "react";
import logo from "../assets/logo.png";
import loupe from "../assets/loupe.png";
import profil from "../assets/profil.png";
import Murdetweets from "./Murdetweets";
import Menu from "./Menu";
import Logout from "./Logout";

class Header extends Component {
  render() {
    return (
      <div className="toppagelogout">
        {/* Gauche */}
        <div className="box">
          <div className="logologout">
            <img
              src={logo}
              layout="fixed"
              alt="logo"
              onClick={this.testcliquer}
            />
          </div>
          <div className="recherche">
            <img src={loupe} layout="fixed" alt="loupe" />
            <input className="barrederecherche"type="text" placeholder="Rechercher" />
          </div>
        </div>
        {/* Centre */}
        <div>
          <Menu />
        </div>
        {/* Droite */}
        <div className="profilAccueil">
          <img src={profil} alt="profil" />
          <div className="boutonDeco">
            <Logout />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
