import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './nav.css';
//import Nav from './Nav';
import Listeuser from './Listeuser';
import Listegenre from './Listegenre';
import Listeauteur from './Listeauteur';
import reportWebVitals from './reportWebVitals';

function Nav() {
  
  /*
  this.state = {data:"genre"};
  //const [state, setstate] = useState({data:""})
  
  const changeState = () => {  
    this.setState({data : "user"})
    console.log(this.state);
  }; 
  */

  const [state, setstate] = React.useState({affiche:"user"})
  
  const clickGenre = () => {
      setstate({affiche:"genre"});
  };
  const clickAuteur = () => {
      setstate({affiche:"auteur"});
  };
  const clickUser = (evenlent) => {
    console.log(evenlent);
      setstate({affiche:"user"});
  };

  return (
    <main>
      <ul>
        <li><button value="USER" onClick={e => clickUser(e.target.value)}>User</button></li>
        <li><button value="GENRE" onClick={clickGenre}>Genre</button></li>
        <li><button value="AUTEUR" onClick={clickAuteur}>Auteur</button></li>
      </ul>
      <Affichage affiche={state.affiche} />
    </main>
  );
}

function Affichage(props) {

  console.log(props);
  const affiche = props.affiche;

  switch (affiche) {
    case "user":
    return <Listeuser />;
    break;
    case "auteur":
    return <Listeauteur />;
    break;
    case "genre":
    return <Listegenre />;
    break;
    default:
    return affiche;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
