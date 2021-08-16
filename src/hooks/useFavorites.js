import { useSelector, useDispatch } from "react-redux";
import { handleFavoritesAction } from "redux/action";

export const useFavorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites)

    const handleFavorites = (user) => {
        dispatch(handleFavoritesAction(user))
    }
    return { favorites, handleFavorites };
};
