import Ami from "./Ami";

const contacts = [
  { src: "https://img.icons8.com/office/2x/circled-user-male-skin-type-4.png", nom: "Ruan", prenom: "Thomas" },
  { src: "https://img.icons8.com/office/2x/circled-user-male-skin-type-4.png", nom: "Ruan", prenom: "Thomas" },
  { src: "https://img.icons8.com/office/2x/circled-user-male-skin-type-4.png", nom: "Ruan", prenom: "Thomas" },
  { src: "https://img.icons8.com/office/344/circled-user-female-skin-type-4.png", nom: "Sun", prenom: "Amelie" },
  { src: "https://img.icons8.com/office/344/circled-user-female-skin-type-4.png", nom: "Sun", prenom: "Amelie" },
  { src: "https://img.icons8.com/office/344/circled-user-female-skin-type-4.png", nom: "Sun", prenom: "Amelie" }
];

function Contacts() {
  return (
    <div>
      <div>
        <h2 className="titrecontact">Contacts</h2>
      </div>
      {contacts.map((ami) => (
        <Ami src={ami.src} nom={ami.nom} prenom={ami.prenom} />
      ))}
    </div>
  );
}

export default Contacts;
