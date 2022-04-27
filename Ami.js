function Ami({ src, nom, prenom }) {
  return (
    <div className="ami">
      <img src={src} alt="" className="pdp" />
      <div>{nom}</div>
      <div>{prenom}</div>
    </div>
  );
}

export default Ami;
