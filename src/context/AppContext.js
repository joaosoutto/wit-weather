import React, { createContext, useState } from 'react';

import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const history = useHistory();

  const [city, setCity] = useState();
  const [data, setData] = useState([]);
  const [forecastData, setForecastData] = useState([])
  const [tempType, setTempType] = useState('celsius');
  const [loading, setLoading] = useState(false)

  const convertToF = (celsius) => celsius * 9/5 + 32;

  const context = {
   city,
   setCity,
   data,
   setData,
   tempType,
   setTempType,
   convertToF,
   loading,
   setLoading,
   forecastData,
   setForecastData
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };