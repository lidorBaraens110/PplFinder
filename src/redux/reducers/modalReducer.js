import { OPEN_MODAL, CLOSE_MODAL, INSERT_CONTENT } from '../type';

const initialState = {
    open: false,
    content: {}
};

const modalReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CLOSE_MODAL:
            return { open: false, content: {} }
        case INSERT_CONTENT: {
            return { open: true, content: payload }
        }
        default:
            return state
    }
}

export default modalReducer;