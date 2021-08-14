import React, { useState } from "react";
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
        />
      </S.Content>
    </S.Home>
  );
};

export default Home;
