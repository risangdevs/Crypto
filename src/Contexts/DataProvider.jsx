import { useEffect, useState } from "react";
import { BASE_URL } from "../Config/config";
import { DataContext } from './dataContext'

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const fetchData = async (url, method = 'GET') => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const {data} = await response.json();
      setData(data);
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchData(BASE_URL('assets'))
  }, [])
  const props = {
    data
  }

  return (
    <DataContext.Provider value={props}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider