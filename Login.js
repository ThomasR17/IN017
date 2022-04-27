import { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <label>
            <strong className="titre">Connectez-vous</strong>
            <p>
              Login :
              <input
                type="text"
                login="login"
                placeholder=" Email / Username"
              />
            </p>
            <p>
              Mot de passe :
              <input type="password" password="mot de passe" />
            </p>
            <input className="boutons" type="submit" value="Connexion" />
          </label>
        </form>
      </div>
    );
  }
}

export default Login;
