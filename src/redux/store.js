import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';


//funkcia, która służy do modyfikacji danych
//pierwszy argument - aktualny stan
//drugi argument - obiekt akcji z informacją, co trzeba zmienić i w jaki sposób
/* reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN' :
      return { ...state, columns: [...state.columns, {...action.payload, id: shortid() }]}
    case 'ADD_CARD' :
      return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }] };
    case 'UPDATE_SEARCHSTRING' :
      return { ...state, searchString: action.payload };
    case 'ADD_LIST' :
      return {...state, lists: [...state.lists, {...action.payload, id: shortid() }]};
    case 'TOGGLE_CARD_FAVORITE' :
      return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };
    default: 
      return state;
  }
}; */

const subreducers = {
    lists: listsReducer,
    columns: columnsReducer,
    cards: cardsReducer,
    searchString: searchStringReducer
  };

const reducer = combineReducers(subreducers); 


//pierwszy argument - funkcja która odpowiada za modyfikację danych z magazynu
//drugi argument - informacja o danych startowych magazynu
//trzeci argument (opcjonalny) - jakie puginy powinny być wykorzystywane
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;