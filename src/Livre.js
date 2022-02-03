import biblio from './bddBiblio.json';

function Livre (props) {

  var titre,auteur,genre;
  for (var livre in biblio.livre) {
    if (biblio.livre[livre].id == props.id) {
     titre = biblio.livre[livre].titre;
    }
  }

  for (var value in biblio.livregenre) {
    if (biblio.livregenre[value].id_livre == props.id) {
      for (var genre in biblio.genre) {
        if (biblio.genre[genre].id == biblio.livregenre[value].id_genre) {
          genre = biblio.genre[genre].nom;
        }
      } 
    }
  }

  for (var value in biblio.livre) {
    if (biblio.livre[value].id == props.id) {
      for (var auteur in biblio.personne) {
        if (biblio.personne[auteur].id == biblio.livre[value].auteur) {
          auteur = biblio.personne[auteur].prenom + " " + biblio.personne[auteur].nom;
        }
      } 
    }
  }

  return (
    <div id="user">
    <h3>{ titre }</h3>
    <p>un livre de { genre } par { auteur }</p>
    </div>
  );
}

export default Livre;