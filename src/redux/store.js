import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

//funkcia, która służy do modyfikacji danych
//pierwszy argument - aktualny stan
//drugi argument - obiekt akcji z informacją, co trzeba zmienić i w jaki sposób
const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN' :
      return { ...state, columns: [...state.columns, {...action.payload, id: shortid() }]}
    case 'ADD_CARD' :
      return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }] };
    default: 
      return state;
  }
    //if(action.type === 'ADD_COLUMN') return { ...state, columns: [...state.columns, {...action.payload, id: shortid() }]}
    //return state;
  };

//pierwszy argument - funkcja która odpowiada za modyfikację danych z magazynu
//drugi argument - informacja o danych startowych magazynu
//trzeci argument (opcjonalny) - jakie puginy powinny być wykorzystywane
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;