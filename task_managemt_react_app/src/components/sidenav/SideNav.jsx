import { useDispatch } from 'react-redux';

import { styled, css } from "styled-components";
import { MIDLE_TEXT_SIZE_BOLD } from "../common/commonStyle";
import { movePage, PAGE_NAMES } from '../../store/modules/curentPage';
import { AddIcon, CalendarIcon, ListIcon, MenuIcon } from '../common/commonIcon';

const HoverLink = css`
    &:hover {
        background-color: #4f5fb370;;
        transition: all 0.3s;
    }
`

const SideLeft = styled.nav`
    width: 80px;
    background-color: #1D1F46;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding-top: 5px;
`;

const SideRight = styled.nav`
    width: 180px;
    background-color: #2E3063;
    display: flex;
    align-items: start;
    height: 100%;
    padding-top: 5px;
`;

const SideRightUl = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
`;

const SideRightLi = styled.li`
    list-style: none;
    color: #FFFFFF;
    ${MIDLE_TEXT_SIZE_BOLD}
    padding: 17.5px 20px;
    cursor: pointer;
    ${HoverLink}
`

const SideNav = () => {

    const dispatch = useDispatch();

    const moveTodoListPage = () => {
        dispatch(movePage(PAGE_NAMES.TODO_LIST));
    }

    const moveTodoFormPage = () => {
        dispatch(movePage(PAGE_NAMES.TODO_FORM));
    }

    return (
        <>
            <SideLeft>
                <a>
                    <MenuIcon/>
                </a>
                <a>
                    <ListIcon onClick={moveTodoListPage}/>
                </a>
                <a>
                    <AddIcon onClick={moveTodoFormPage} />
                </a>
                <a>
                    <CalendarIcon />
                </a>
            </SideLeft>
            <SideRight>
                <SideRightUl>
                    <SideRightLi>メインメニュー</SideRightLi>
                    <SideRightLi onClick={moveTodoListPage}>Todo一覧</SideRightLi>
                    <SideRightLi onClick={moveTodoFormPage}>Todo追加</SideRightLi>
                    <SideRightLi>カレンダー</SideRightLi>
                </SideRightUl>
            </SideRight>
        </>

    )
}

export { SideNav };