import { HANDLE_FAVORITES } from '../type';

const initialState = [];

const modalReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case HANDLE_FAVORITES:
            const id = payload.login.uuid
            if (state.find(fav => fav.login.uuid === id)) {
                return state.filter(fav => fav.login.uuid !== id)
            } else {
                return [...state, payload]
            }
        default:
            return state
    }
}

export default modalReducer;