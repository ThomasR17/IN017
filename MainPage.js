import "../styles.css";
import { Component } from "react";
import NavigationPannel from "./NavigationPannel";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { pagecourante: "connexion", isConnected: false };
  }

  getConnected = () => {
    alert("Connexion en cours..");
    this.setState({ pagecourante: "Mur de tweets" });
    this.setState({ isConnected: true });
  };

  setLogout = () => {
    this.setState({ pagecourante: "connexion et utilisateur non connecte" });
    this.setState({ isConnected: false });
  };

  testcliquer = () => {
    console.log("Trop bg mon logo. N'est-ce pas? ?");
  };

  useEffect = () => {
    document.title = "Se Connecter";
  };

  render() {
    return (
      <div>
        <head>
          <title>Notre réseau social est cool!</title>
        </head>
        <body>
          <NavigationPannel
            login={this.getConnected}
            logout={this.setLogout}
            isConnected={this.state.isConnected}
          />
        </body>
      </div>
    );
  }
}

export default MainPage;
