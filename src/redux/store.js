import { createStore } from 'redux';
import initialState from './initialState';

const reducer = (state, action) => {
  return state;
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