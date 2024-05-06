import { useSelector, useDispatch } from 'react-redux';
import { styled } from "styled-components";

import { toggleTodoBackForm, toggleTaskBackForm } from '../../../store/modules/backForm';
import { TitleH2 } from '../../common/commonParts';
import { Card, CardElement, CardElementAndItem, CardItem, CardTitle, CardTitleArea, CardUpdateButton } from '../../common/commonCard';
import { TaskArea } from './task/TaskArea';
import { TodoBackUpdateForm } from './form/TodoBackUpdateForm';
import { TaskBackUpdateForm } from './task/form/TaskBackUpdateForm';

const TodoDetailOuter = styled.div`
    
`

export const TodoDetailArea = () => {

    const todo = useSelector(state => state.todos.selectTodo);

    const { showTodoBackForm, showTaskBackForm, targetTask } = useSelector(state => state.backForm);

    const dispatch = useDispatch();
    
    const showTodoUpdateForm = () => {
        dispatch(toggleTodoBackForm(true));
    }

    const showTaskUpdateForm = (task) => {
        console.log(task);
        dispatch(toggleTaskBackForm(true));
    }

    console.log(todo.tasks.filter(t => t.rateOfProgress >= 100));
    console.log(showTodoBackForm, showTaskBackForm, targetTask );

    return (
        <TodoDetailOuter>
            {
                showTodoBackForm &&
                (<TodoBackUpdateForm todo={todo}/>)
            }
            {
                showTaskBackForm && 
                (<TaskBackUpdateForm task={targetTask}/>)
            }
            <TitleH2>Todo詳細</TitleH2>
            <Card>
                <CardTitleArea>
                    <CardTitle>{ todo.title}</CardTitle>
                    <CardUpdateButton onClick={showTodoUpdateForm}>内容更新</CardUpdateButton>
                </CardTitleArea>
                <CardElement style={{width: "100%"}}>{ todo.detail }</CardElement>
                <CardElementAndItem>
                    <CardItem>期限 </CardItem>
                    <CardElement>{ todo.deadline}</CardElement>
                </CardElementAndItem>
                <CardElementAndItem>
                    <CardItem>重量度 </CardItem>
                    <CardElement>{ todo.importance}</CardElement>
                </CardElementAndItem>
                <CardElementAndItem>
                    <CardItem>進捗率 </CardItem>
                    <CardElement>
                        { 
                            todo.tasks.filter(t => t.rateOfProgress >= 100).length === 0 ? 
                            "0%" : 
                            (todo.tasks.length /  todo.tasks.filter(t => t.rateOfProgress >= 100).length * 100) + "%"
                        }
                    </CardElement>
                </CardElementAndItem>
            </Card>

            <TaskArea tasks={ todo.tasks }></TaskArea>
        </TodoDetailOuter>
);
}