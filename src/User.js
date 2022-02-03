import biblio from './bddBiblio.json';

function User (props) {

  var prenom,nom,auteur;
  for (var user in biblio.personne) {
    if (biblio.personne[user].id == props.id) {
      prenom = biblio.personne[user].prenom;
      nom = biblio.personne[user].nom;
      auteur = biblio.personne[user].auteur;
      if (auteur) {
        auteur = "est un auteur";
      } else {
        auteur = "n'est pas un auteur";
      }
    }
  }

  var listeLivre = "[";
  for (var value in biblio.personnelivre) {
    if (biblio.personnelivre[value].id_personne == props.id) {
      for (var livre in biblio.livre) {
        if (biblio.livre[livre].id == biblio.personnelivre[value].id_livre) {
          listeLivre+='{"titre":"'+biblio.livre[livre].titre+'","id":"'+biblio.livre[livre].id+'"},';
        }
      } 
    }
  }
  listeLivre = listeLivre.slice(0, -1);
  listeLivre+="]";

  var listeLivreParsed = JSON.parse(listeLivre);
  console.log(listeLivreParsed);

  return (
    <div id="user">
    <p>{ prenom } { nom } ({ auteur })<br/><br/>Livre(s) possédé(s) :</p>
    <div id="listeLivre">
    { listeLivreParsed.map(post => {
      return (
        <button key={ post.id }>{ post.titre }</button>
      )
    }) }
    </div>
    </div>
  );
}

export default User;