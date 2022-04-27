import { Component } from "react";

class Quoideneuf extends Component {
  sendPost = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="creerTweet">
        <strong className="creerUnePub">
          Créer une publication
        </strong>
        <form className="case">
          <input type="text" placeholder={`What's up ?`} />
        </form>
        <button className="boutons" type="submit" onClick={this.sendPost}>
          Partager
        </button>
      </div>
    );
  }
}

export default Quoideneuf;
