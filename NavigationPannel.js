import { Component } from "react";
import Login from "./Login";
import Signin from "./Signin";
import logo from "../assets/logo.png";
import Accueil from "./Accueil";
/*import Contacts from "./Contacts";
import Murdetweets from "./Murdetweets";
import Menu from "./Menu";
import Logout from "./Logout";*/

import "../styles.css";

class NavigationPannel extends Component {
  testcliquer = () => {
    console.log("Trop bg mon logo. N'est-ce pas? ?");
  };

  render() {
    if (this.props.isConnected) {
      return (
        <body>
          <Accueil />
        </body>
      );
    }
    return (
      <body>
        <div className="toppagelogin">
          <label className="logologin">
            <img src={logo} alt="logo" onClick={this.testcliquer} />
          </label>
        </div>
        <div className="debut">
          <div className="connexioncreer">
            <Login />
          </div>
          <p className="ou">ou</p>
          <div className="connexioncreer">
            <Signin />
          </div>
        </div>
      </body>
    );
  }
}

export default NavigationPannel;
