import { styled, css } from "styled-components";
import { useState } from "react";
import { useSelector } from 'react-redux';

import { Todos } from "./todo/Todos";
import { TodoHead } from "./todo/tablehead/TodoHead";
import { TodoBottom } from "./todo/tablebottom/TodoBottom";
import { TARGET } from "./target";
import { TodoDetailArea } from '../../components/main/todoDetail/TodoDetailArea';
import { TodoForm } from './todoForm/TodoForm';

const MainContainer = styled.div`
    display: flex;
    width: calc(100% - 260px);
    justify-content: center;
    overflow: auto;
`;

const MainContainerInner = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%; // リストのテーブル表示がおかしくなる
`;



const Main = () => {

  const [mainTarget, setMainTarget] = useState(TARGET.TODOS);

  const currentPage = useSelector(state => state.currentPage);

  const renderCurrentPage = () => {
    switch ( currentPage.currentPage ) {
      case "todoList" :
        return (
          <>
            <Todos/>
          </>
        );
      case "todoDetail" :
        return (
          <>
            <TodoDetailArea />
          </>
        );
      case "todoForm" :
        return (
          <>
            <TodoForm />
          </>
        );
      default:
        return <></>;
    }
  }

  return (
      <MainContainer>
        <MainContainerInner>
            { renderCurrentPage() }
        </MainContainerInner>
      </MainContainer>
  );
};

export { Main };
