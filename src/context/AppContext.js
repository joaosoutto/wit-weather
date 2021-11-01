import { createContext, useState } from "react";

import PropTypes from "prop-types";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [city, setCity] = useState();
  const [data, setData] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  const [tempType, setTempType] = useState("celsius");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const convertToF = (celsius) => (celsius * 9) / 5 + 32;

  const refreshPage = () => {
    setLoading(true);
    setData([])
    setForecastData([])
    setError(false);
    setLoading(false);
  }

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
    setForecastData,
    refreshPage,
    error,
    setError
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
