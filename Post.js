function Post({nom, prenom, msg}) {
  return (
    <div className="post">
      <p></p>
      <strong>{nom} {prenom}</strong>
      <p>{msg}</p>
      <p></p>
    </div>
  );
}

export default Post;