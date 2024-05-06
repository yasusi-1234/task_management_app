import { styled } from "styled-components";
import { TodoTableDetail } from "./TodoTableDetail";
import { FaChevronRight } from "react-icons/fa";
import { useDispatch } from 'react-redux';

import { movePage, PAGE_NAMES } from '../../../store/modules/curentPage';
import { selectTodo } from '../../../store/modules/todo';
import { formatDate } from "../../../util/dateUtil";
import { BASE_TEXT_COLOR, MIDLE_TEXT_SIZE_BOLD } from '../../common/commonStyle';


const TodoTD = styled.td`
  // background-color: #FFFFFF;
  ${BASE_TEXT_COLOR}
`

const TodoTDCenter = styled(TodoTD)`
    text-align: center;
    font-weight: bold;
`
const TodoTDLeft = styled(TodoTD)`
    padding: 5px 15px;
    ${MIDLE_TEXT_SIZE_BOLD}
`
const TodoTDDate = styled(TodoTD)`
    padding: 5px 15px;
    font-weight: bold;
    font-size: 18px;
`

const TR = styled.tr`
  background-color: #FFFFFF;
  &:hover {
    background-color: #bdebe2;
    transition: background-color 0.3s;
  }
`

const Todo = ({ todo }) => {

  const dispatch = useDispatch();

  const select = () => {
    dispatch(selectTodo(todo.id));
    dispatch(movePage(PAGE_NAMES.TODO_DETAIL));
  }

    return (
        <TR key={todo.id}>
          <TodoTDCenter>{todo.id}</TodoTDCenter>
          <TodoTDLeft>{todo.title}</TodoTDLeft>
          <TodoTDLeft style={{fontWeight: "400", fontSize: "18px", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "500px",  overflow: "hidden"}}>{todo.detail}</TodoTDLeft>
          <TodoTDDate>{ formatDate(todo.deadline)}</TodoTDDate>
          <TodoTDCenter>{todo.importance}</TodoTDCenter>
          <TodoTDCenter>{todo.done ? "完了" : "未完了"}</TodoTDCenter>
          <TodoTDCenter>
          <FaChevronRight color="#5B5B5B" size={25} style={{ cursor: "pointer"}} onClick={select}/>
          </TodoTDCenter>
        </TR>
      );
}

export {Todo};