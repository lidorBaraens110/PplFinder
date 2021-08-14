import React, { useEffect, useState } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import * as S from "./style";

const Favorite = () => {

    const [favorites, setFavorites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        const data = localStorage.getItem('Favorites')
        setFavorites(JSON.parse(data) || [])
        setIsLoading(false)
    }, [])

    useEffect(() => {
        localStorage.setItem('Favorites', JSON.stringify(favorites))
    }, [favorites])

    const handleFavorites = (user) => {
        const id = user.login.uuid
        if (favorites.find(fav => fav.login.uuid === id)) {
            setFavorites(pre => pre.filter(fav => fav.login.uuid !== id))
        } else {
            setFavorites(pre => [...pre, user])
        }
    }

    const handleChecked = (val) => {
        setChecked(pre => {
            return { ...pre, [val]: !pre[val] }
        })
    }

    return (
        <S.Favorite>
            <S.Content>
                <S.Header>
                    <Text size="64px" bold>
                        PplFinder
                    </Text>
                </S.Header>
                <UserList
                    users={favorites}
                    handleFavorites={handleFavorites}
                    favorites={favorites}
                    isLoading={isLoading}
                />
            </S.Content>
        </S.Favorite>
    );
};

export default Favorite;
