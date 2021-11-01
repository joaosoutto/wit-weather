import React, { useContext } from "react";
import * as S from "./styles";
import { AppContext } from "../../context/AppContext";
import { Container } from "../../components/Container";
import SearchBar from "../../components/SearchBar";
import CityWeather from "../../components/CityWeather";
import Loading from "../../components/Loading";
import NoResults from "../../components/NoResults";

const Home: React.FC = () => {
  const { tempType, loading, data } = useContext(AppContext);
  console.log(tempType);
  return (
    <Container>
      <S.Wrapper>
        <SearchBar />
        {loading && <Loading />}
        {!loading && data.length === 0 && <NoResults />}
        {data.length !== 0 && <CityWeather />}
      </S.Wrapper>
    </Container>
  );
};

export default Home;
