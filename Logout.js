import { Component } from "react";

class Logout extends Component {
  render() {
    return (
      <div>
        <button className="boutons" onClick={this.props.setLogout}>
          Déconnexion
        </button>
      </div>
    );
  }
}

export default Logout;
