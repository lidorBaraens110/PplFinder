import { combineReducers, createStore } from 'redux';
import modalReducer from './reducers/modalReducer';
import favoritesReducer from './reducers/favoritesReducer';


const initialState = {
    favorites: JSON.parse(localStorage.getItem('Favorites'))
}

const reducers = combineReducers({
    modal: modalReducer,
    favorites: favoritesReducer
})

const store = createStore(reducers, initialState)
store.subscribe(() => {
    const { favorites } = store.getState();
    localStorage.setItem('Favorites', JSON.stringify(favorites));
});
export { store }
