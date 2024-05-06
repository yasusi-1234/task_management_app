import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';

import { TaskDetail } from './TaskDetail';
import { TitleH2, Button } from '../../../common/commonParts';
import { setTargetTask, toggleTaskBackForm } from '../../../../store/modules/backForm';

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const newTask = {
    id: null,
    title: "",
    detail: "",
    deadline: "",
    importance: "",
    rateOfProgress: 0,
};

export const TaskArea = ({ tasks }) => {

    const dispatch = useDispatch();

    const showNewTaskForm = () => {
        dispatch(setTargetTask(newTask));
        dispatch(toggleTaskBackForm(true));
    }

    return (
        <>
            <Flex>
                <TitleH2 style={{ width: "50%" }}>Task一覧</TitleH2>
                <Button style={{ height: "50px"}} onClick={showNewTaskForm}>タスク追加</Button>
            </Flex>
            {
                tasks.map(task => {
                    return (
                        <TaskDetail task={ task } key={ task.id } />
                    )
                })
            }
        </>
    );
}