import { styled } from "styled-components";
import { LuUserCircle2 } from "react-icons/lu";
import { MIDLE_TEXT_SIZE_BOLD } from "../common/commonStyle";

import { useSelector } from 'react-redux'

const HeaderLi = styled.li`
  list-style: none;
  padding: 0 15px;
  margin: 0 15px;
  background-color: green;
`;

const HeaderUl = styled.ul`
  display: flex;
  padding: 0 15px;
  background-color: aqua;
  align-items: center;
`;

const PageHeader = styled.header`
  width: 100%;
  display: flex;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  background-color: #2E3063;
`;
const HeaderTitle = styled.h1`
  font-family: "RocknRoll One", sans-serif;
  margin: 0 50px;
  color: #FFFFFF;
  font-size: 38px;
  letter-spacing: 0.1em;
`;
const ButtonLogout = styled.button`
  height: 45px;
  margin-right: 50px;
  ${MIDLE_TEXT_SIZE_BOLD}
  border-radius: 50px;
  border: 2px solid #FFFFFF;
  cursor: pointer;
    background-color: #2E3063;
color: #FFFFFF;
display: flex;
justify-content: space-evenly;
align-items: center;
width: 150px;
`;
const FlexDIV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderBottom = styled.div`
    width: 100%;
    height: 40px;
    background-color: #FFFFFF;
`

const UserIcon = styled(LuUserCircle2)`
    
`

const Header = () => {

  const currentPage = useSelector(state => state.currentPage)
  const selectTodo = useSelector(state => state.todos.selectTodo)

  console.log(selectTodo);
  return (
    <>
        <PageHeader>
            <FlexDIV>
                    <HeaderTitle>タスク管理君</HeaderTitle>
                    <div style={{color:"white", fontSize: "25px"}}>{ currentPage.currentPage }</div>
            </FlexDIV>
            <ButtonLogout>
                <UserIcon size={32} />
                <div>Logout</div>
            </ButtonLogout>
        </PageHeader>
        <HeaderBottom></HeaderBottom>
    </>
  );
};

export { Header };
