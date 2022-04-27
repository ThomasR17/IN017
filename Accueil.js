import { Component } from "react";
import logo from "../assets/logo.png";
import profil from "../assets/profil.png";
import Murdetweets from "./Murdetweets";
import Menu from "./Menu";
import Logout from "./Logout";
import Header from "./Header";
import { Helmet } from 'react-helmet'

class Accueil extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Rainbow</title>
        </Helmet>
        <Header />
        <div className="mur">
          <Murdetweets />
        </div>
      </div>
    );
  }
}

export default Accueil;
