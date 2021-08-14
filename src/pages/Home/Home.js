import React, { useState, useEffect } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import * as S from "./style";

const Home = () => {
  const [countries, setCountries] = useState([
    {
      name: "Brazil",
      value: "BR",
      checked: false
    },
    {
      name: "Australia",
      value: "AU",
      checked: false
    },
    {
      name: "Canada",
      value: "CA",
      checked: false
    },
    {
      name: "Germany",
      value: "DE",
      checked: false
    },
    {
      name: "Switzerland",
      value: "CH",
      checked: false
    }
  ]);
  const [favorites, setFavorites] = useState([]);
  const { users, isLoading } = usePeopleFetch({ countries });

  const handleChecked = (val) => {
    const newCountries = countries.map(country => {
      if (val === country.value) {
        return { ...country, checked: !country.checked }
      } else {
        return country
      }
    })
    setCountries([...newCountries])
  }

  useEffect(() => {
    const data = localStorage.getItem('Favorites')
    setFavorites(JSON.parse(data) || [])
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

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <UserList
          users={users}
          isLoading={isLoading}
          countries={countries}
          handleChange={handleChecked}
          handleFavorites={handleFavorites}
          favorites={favorites}
        />
      </S.Content>
    </S.Home>
  );
};

export default Home;
