import { CLOSE_MODAL, INSERT_CONTENT, HANDLE_FAVORITES } from "./type"

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}

export const insertModal = (content) => {
    return {
        type: INSERT_CONTENT,
        payload: content
    }
}

export const handleFavoritesAction = (user) => {
    return {
        type: HANDLE_FAVORITES,
        payload: user
    }
}