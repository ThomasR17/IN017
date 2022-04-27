import Quoideneuf from "./Quoideneuf";
import Contacts from "./Contacts";
import Posts from "./Posts";

function Murdetweets() {
  return (
    <main>
      <div className="haut">
        <div className="publication">
          <Quoideneuf />
        </div>
        <div className="contacts">
          <Contacts />
        </div>
      </div>
      <div className="posts">
        <p className="titre"> Fil d'actualité </p>
        <Posts />
      </div>
    </main>
  );
}

export default Murdetweets;
