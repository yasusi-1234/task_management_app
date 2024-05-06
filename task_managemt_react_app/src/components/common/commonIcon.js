import { styled, css } from "styled-components";
import { AiOutlineMenu, AiTwotoneFileAdd } from "react-icons/ai";
import { FaCalendarAlt, FaThList } from "react-icons/fa";

const IconBase = css`
    width: 2em;
    height: 2em;
    margin: 15px 0px;
    cursor: pointer;
    color: #FFFFFF; 
`;

const MenuIcon = styled(AiOutlineMenu)`
    ${IconBase}
`;

const ListIcon = styled(FaThList)`
    ${IconBase}
`;

const AddIcon = styled(AiTwotoneFileAdd)`
    ${IconBase}
`;

const CalendarIcon = styled(FaCalendarAlt)`
    ${IconBase}
`;

export {IconBase, MenuIcon, ListIcon, AddIcon, CalendarIcon};