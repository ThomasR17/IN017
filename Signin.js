import "../styles.css";
import { Component } from "react";

class Signin extends Component {
  render() {
    return (
      <div>
        <form>
          <label>
            <strong className="titre">Créer votre compte</strong>
            <nav className="signin">
              <p className="prenom">
                Prénom :
                <input type="text" prenom="prenom" />
              </p>
              <p className="nom">
                Nom :
                <input type="text" nom="nom" />
              </p>
              <p className="Username">
                Username :
                <input type="text" username="username" />
              </p>
              <p className="Email">
                Email :
                <input type="text" email="email" />
              </p>
              <p>
                Mot de passe :
                <input type="password" password="mot de passe" />
              </p>
              <p>
                Confirmez votre mot de passe :
                <input type="password" password="mot de passe" />
              </p>
              <input
                className="boutons"
                type="submit"
                value="Créer mon compte"
              />
            </nav>
          </label>
        </form>
      </div>
    );
  }
}

export default Signin;
