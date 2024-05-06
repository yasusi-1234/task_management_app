import logo from './logo.svg';
import './App.css';
import { styled, css } from "styled-components";
import { Provider } from 'react-redux';

import store from './store';
import { Main } from './components/main/Main';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { SideNav } from "./components/sidenav/SideNav";

const Container = styled.div`
  display: flex;
  /* justify-content: center;
  gap: 100px; */
  height: calc(100vh - 120px);
`;

function App() {

  
  return (
    <Provider store={store}>
      <Header></Header>
      <Container>
        <SideNav></SideNav>
        <Main></Main>
      </Container>
    </ Provider>
  );
}

export default App;
