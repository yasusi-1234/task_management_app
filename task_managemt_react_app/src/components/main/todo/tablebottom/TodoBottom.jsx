import { styled } from "styled-components";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import { BASE_TEXT_COLOR, MIDLE_TEXT_SIZE_BOLD } from '../../../common/commonStyle'

const PageSelection = styled.ul`
    padding: 0;
    display: flex;
    justify-content: center;
`

const PageLi = styled.li`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    ${BASE_TEXT_COLOR}
    ${MIDLE_TEXT_SIZE_BOLD}
    padding: 5px 10px;
    margin: 0 5px;
    background-color: #d3d3d3;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
        transition: all .3s;
    }
`

const PageLiSide = styled.li`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    margin: 0 5px;
    background-color: #d3d3d3;
`

const TodoBottom = () => {
    return (
        <PageSelection>
            <PageLi>
                <FaChevronLeft color="#5B5B5B" size={25} style={{ cursor: "pointer"}}/>
            </PageLi>
            <PageLi>1</PageLi>
            <PageLi>2</PageLi>
            <PageLi>3</PageLi>
            <PageLi>
                <FaChevronRight color="#5B5B5B" size={25} style={{ cursor: "pointer"}}/>
            </PageLi>
        </PageSelection>
    );
}

export { TodoBottom };