import biblio from './bddBiblio.json';
import React from 'react';
import User from './User';

function Listeuser (props) {

  const [state, setstate] = React.useState({choice:""})

  const chooseUser = (choice) => {
      setstate({choice:choice}); 
  };

  var liste = "[";
  for (var user in biblio.personne) {
    liste+='{"prenom":"'+biblio.personne[user].prenom+'","nom":"'+biblio.personne[user].nom+'","id":"'+biblio.personne[user].id+'"},';
  }
  liste = liste.slice(0, -1);
  liste+="]";
  //var genres = biblio.genre;
  var listeParsed = JSON.parse(liste);
  console.log(liste);

  if (state.choice != "") {
    return (
      <>
      <User id={state.choice} />
      <div>
      <h3>Liste des users</h3>
      { listeParsed.map(post => {
        return (
          <button key={ post.id } value={post.id} onClick={e => chooseUser(e.target.value)}>{ post.prenom } { post.nom }</button>
        )
      }) }
      </div>
      </>
    );
  }

  return (
    <div>
    <h3>Liste des users</h3>
    { listeParsed.map(post => {
      return (
        <button key={ post.id } value={post.id} onClick={e => chooseUser(e.target.value)}>{ post.prenom } { post.nom }</button>
      )
    }) }
    </div>
  );
}

export default Listeuser;