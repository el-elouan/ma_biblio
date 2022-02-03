import biblio from './bddBiblio.json';
import React from 'react';
import Auteur from './Auteur';

function Listeauteur (props) {

  const [state, setstate] = React.useState({choice3:""})

  const chooseAuteur = (choice3) => {
      setstate({choice3:choice3});
  };

  var liste = "[";
  for (var user in biblio.personne) {
    if (biblio.personne[user].auteur) {
      liste+='{"prenom":"'+biblio.personne[user].prenom+'","nom":"'+biblio.personne[user].nom+'","id":"'+biblio.personne[user].id+'"},';
    }
  }
  liste = liste.slice(0, -1);
  liste+="]";
  //var genres = biblio.genre;
  console.log(liste);
  var listeParsed = JSON.parse(liste);

  if (state.choice3 != "") {
    return (
      <>
      <Auteur id={state.choice3} />
      <div>
      <h3>Liste des auteurs</h3>
      { listeParsed.map(post => {
        return (
          <button key={ post.id } value={ post.id } onClick={e => chooseAuteur(e.target.value)}>{ post.nom }</button>
        )
      }) }
      </div>
      </>
    );
  }

  return (
    <div>
    <h3>Liste des auteurs</h3>
    { listeParsed.map(post => {
      return (
        <button key={ post.id } value={ post.id } onClick={e => chooseAuteur(e.target.value)}>{ post.nom }</button>
      )
    }) }
    </div>
  );
}

export default Listeauteur;