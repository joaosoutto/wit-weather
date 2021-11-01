import { useState, InputHTMLAttributes, useContext } from "react";
import { SearchAlt } from "@styled-icons/boxicons-regular";

import * as S from "./styles";
import { getCity } from "../../services/getCity";
import { AppContext } from "../../context/AppContext";
import { getCityForecast } from "../../services/getCityForecast";

export type SearchBarProps = {
  onInput?: (value: string) => void;
  initialValue?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const SearchBar = ({
  initialValue = "",
  onInput,
  ...props
}: SearchBarProps) => {
  const { setData, setLoading, setForecastData, setError } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setSearchValue(newValue);
    console.log(newValue);
  };

  const makeSearch = async (value: string) => {
    try {
      setLoading(true);
      setData([]);

      const response = await getCity(value);
      console.log(response);
      if (response.cod === '404') {
        setError(true);
      }
      const forecastResponse = await getCityForecast(value);
      setData(response);
      setForecastData(forecastResponse.list);

      setSearchValue("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <S.Wrapper>
      <S.InputWrapper>
        <S.Icon>
          <SearchAlt />
        </S.Icon>
        <S.Input
          type="text"
          role="search"
          placeholder="Search city"
          onChange={onChange}
          value={searchValue}
          {...props}
        />
      </S.InputWrapper>
      <S.SearchButton onClick={() => makeSearch(searchValue)}>
        Search
      </S.SearchButton>
    </S.Wrapper>
  );
};

export default SearchBar;
