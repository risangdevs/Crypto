import React, { createContext, useContext } from 'react';
// import { useQuery } from 'react-query';

export const DataContext = createContext({});

export const useDataContext = () => useContext(DataContext);


