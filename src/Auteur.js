import biblio from './bddBiblio.json';

function Auteur (props) {

  var prenom,nom,livreoupas;
  for (var user in biblio.personne) {
    if (biblio.personne[user].id == props.id) {
      prenom = biblio.personne[user].prenom;
      nom = biblio.personne[user].nom;
    }
  }

  var listeLivre;
  listeLivre = "[";
  for (var value in biblio.livre) {
    if (biblio.livre[value].auteur == props.id) {
        listeLivre+='{"titre":"'+biblio.livre[value].titre+'","id":"'+biblio.livre[value].id+'"},';
        livreoupas=true;
    }
  }
  listeLivre = listeLivre.slice(0, -1);
  listeLivre+="]";

if (livreoupas) {
  var listeLivreParsed = JSON.parse(listeLivre);
  return (
    <div id="user">
    <p>{ prenom } { nom } a écrit ces livres :</p>
    <div id="listeLivre">
    { listeLivreParsed.map(post => {
      return (
        <button key={ post.id }>{ post.titre }</button>
      )
    }) }
    </div>
    </div>
  );
} else {
  return (
    <div id="user">
    <p>{ prenom } { nom } n'a pas écrit de livre...</p>
    </div>
  );
  
}
}

export default Auteur;