import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = ({ countries }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsers(countries);
  }, [countries]);

  async function fetchUsers(countries) {
    setIsLoading(true);
    const filterBy = countries.reduce((acc, val, index, arr) => {
      if (val.checked) {
        acc = acc + val.value + ','
      }
      return acc
    }, '')
    const response = await axios.get(`https://randomuser.me/api/?results=5&page=1&nat=${filterBy}`);
    setIsLoading(false);
    setUsers(response.data.results);
  }

  return { users, isLoading, fetchUsers };
};
