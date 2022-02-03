import biblio from './bddBiblio.json';
import React from 'react';
import Genre from './Genre';
import Livre from './Livre';

function Listegenre (props) {

const [state, setstate] = React.useState({choice2:"",choiceLivre:""});

const chooseGenre = (choice2) => {
    setstate({choice2:choice2});
};



  var liste = "[";
  for (var genre in biblio.genre) {
    liste+='{"nom":"'+biblio.genre[genre].nom+'","id":"'+biblio.genre[genre].id+'"},';
  }
  liste = liste.slice(0, -1);
  liste+="]";
  //var genres = biblio.genre;
  var listeParsed = JSON.parse(liste);

  if (state.choice2 != "") {
    return (
      <>
      <Genre id={state.choice2} />
      <div>
      <h3>Liste des genres</h3>
      { listeParsed.map(post => {
        return (
          <button key={ post.id } value={ post.id } onClick={e => chooseGenre(e.target.value)}>{ post.nom }</button>
        )
      }) }
      </div>
      </>
    );

    if (state.choiceLivre != "") {
      return (
        <>
        <Genre id={state.choice2} />
        <div>
        <h3>Liste des genres</h3>
        { listeParsed.map(post => {
          return (
            <button key={ post.id } value={ post.id } onClick={e => chooseGenre(e.target.value)}>{ post.nom }</button>
          )
        }) }
        <Livre id={state.choiceLivre} />
        </div>
        </>
      );
    }
  }

  return (
    <div>
    <h3>Liste des genres</h3>
    { listeParsed.map(post => {
      return (
        <button key={ post.id } value={ post.id } onClick={e => chooseGenre(e.target.value)}>{ post.nom }</button>
      )
    }) }
    </div>
  );
}

export default Listegenre;