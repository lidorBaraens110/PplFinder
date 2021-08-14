import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = ({ countries, pageNumber }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, [countries, pageNumber]);
  useEffect(() => {
    setUsers([])
  }, [countries])

  async function fetchUsers() {
    setIsLoading(true);
    const filterBy = countries.reduce((acc, val) => {
      if (val.checked) {
        acc = acc + val.value + ','
      }
      return acc
    }, '')

    const response = await axios.get(`https://randomuser.me/api/?results=25&page=${pageNumber}&nat=${filterBy}`);
    setUsers(pre => [...pre, ...response.data.results]);
    setIsLoading(false);
  }

  return { users, isLoading, fetchUsers };
};
