import biblio from './bddBiblio.json';
import React from 'react';
import Livre from './Livre';

function Genre (props) {

const chooseLivre = (choiceLivre) => {
    React.setstate({choiceLivre:choiceLivre});
};

  var nom;
  for (var genre in biblio.genre) {
    if (biblio.genre[genre].id == props.id) {
      nom = biblio.genre[genre].nom;
    }
  }

  var listeLivre = "[";
  for (var value in biblio.livregenre) {
    if (biblio.livregenre[value].id_genre== props.id) {
      for (var livre in biblio.livre) {
        if (biblio.livre[livre].id == biblio.livregenre[value].id_livre) {
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
    <p>Livre du genre { nom } :</p>
    <div id="listeLivre">
    { listeLivreParsed.map(post => {
      return (
        <button key={ post.id } value={ post.id } onClick={e => chooseLivre(e.target.value)}>{ post.titre }</button>
      )
    }) }
    </div>
    </div>
  );
}

export default Genre;