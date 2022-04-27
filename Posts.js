import { Component } from "react";
import Post from "./Post";
const docs=[
  {nom:"Ruan", prenom:"Thomas", msg:"Bonjour à tous !"},
  {nom:"Ruan", prenom:"Thomas", msg:"Bonjour à tous !"},
  {nom:"Ruan", prenom:"Thomas", msg:"Bonjour à tous !"}
]

class Posts extends Component {
  render() {
    return (
      <div>
        {docs.map((post) => (
          <Post nom={post.nom} prenom={post.prenom} msg={post.msg}/>
        ))}
      </div>
    );
  }
}

export default Posts;
