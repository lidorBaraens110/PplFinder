import React, { useEffect, useState } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { useFavorites } from "hooks";
import * as S from "./style";

const Favorite = () => {

    const { favorites, handleFavorites } = useFavorites()

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
                />
            </S.Content>
        </S.Favorite>
    );
};

export default Favorite;
