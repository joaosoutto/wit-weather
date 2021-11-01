import React, { useContext } from "react";
import * as S from "./styles";
import { AppContext } from "../../context/AppContext";
import { Container } from "../../components/Container";
import SearchBar from "../../components/SearchBar";
import CityWeather from "../../components/CityWeather";
import Loading from "../../components/Loading";
import NoResults from "../../components/NoResults";
import Error from "../../components/Error";

const Home: React.FC = () => {
  const { loading, data, error } = useContext(AppContext);
  return (
    <Container>
      <S.Wrapper>
        <SearchBar />
        {loading && <Loading />}
        {!loading && data.length === 0 && <NoResults />}
        {!error && data.length !== 0 &&  <CityWeather />}
        {error && <Error />}
      </S.Wrapper>
    </Container>
  );
};

export default Home;
