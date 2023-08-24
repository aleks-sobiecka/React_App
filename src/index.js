import ReactDOM from 'react-dom';
import App from './App';
import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  //wywołuję funkcję komponent o nazwie App
  <App />,
  //To co zwróci funkcja App, jest przekazywane do metody render
  //render przypisuje zwróconą treść do elementu o id root
  document.querySelector('#root')
);
