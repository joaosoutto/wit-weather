import * as S from "./globalStyles";
import Home from "./pages/Home";
import Header from "./components/Header";
import { AppProvider } from "./context/AppContext";

const App = () => (
  <AppProvider>
    <S.Wrapper>
      <Header />
      <Home />
    </S.Wrapper>
  </AppProvider>
);

export default App;
