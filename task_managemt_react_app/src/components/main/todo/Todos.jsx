import { useEffect } from "react";
import { styled } from "styled-components";
import { useDispatch, useSelector } from 'react-redux'

import { Todo } from "./Todo";
import { TodoHead } from './tablehead/TodoHead';
import { TodoBottom } from './tablebottom/TodoBottom';
import { asyncFindAllTodos } from '../../../store/modules/todo';
import { TodosBackFilterForm } from './form/TodosBackFilterForm';

const TodoTH = styled.th`
  background-color: #9C9C9C;
  color: #FFFFFF;
  font-weight: bold;
  padding: 10px 20px;
`

const TodoTable = styled.table`
  // height: 1px;
  table-layout: auto;
  width: 100%;
`

const Todos = () => {
  
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todos.todos);

  const showTodosFilter = useSelector(state => state.backForm.showFilterBackForm);

  useEffect(() => {
    dispatch(asyncFindAllTodos(1));
  }, []);


    return (
      <>
        {
          showTodosFilter && (<TodosBackFilterForm></TodosBackFilterForm>)
        }
        <TodoHead />
        <TodoTable>
          <thead>
            <tr>
              <TodoTH>ID</TodoTH>
              <TodoTH>タイトル</TodoTH>
              <TodoTH>詳細</TodoTH>
              <TodoTH>期限</TodoTH>
              <TodoTH>重要度</TodoTH>
              <TodoTH>完了</TodoTH>
              <TodoTH>確認</TodoTH>
            </tr>
          </thead>
          <tbody>
            {todos.map(item => {
              return (
                <Todo todo={item} key={item.id}></Todo>
              );
            })}
          </tbody>
      </TodoTable>
      <TodoBottom />
      </>
    );
}

export { Todos };