import { useDispatch } from 'react-redux';

import { Card, CardElement, CardElementAndItem, CardItem, CardTitle, CardTitleArea, CardUpdateButton } from '../../../common/commonCard';
import { setTargetTask, toggleTaskBackForm } from '../../../../store/modules/backForm';

export const TaskDetail = ({ task }) => {

    const dispatch = useDispatch();
    const showTaskForm = () => {
        dispatch(setTargetTask(task));
        dispatch(toggleTaskBackForm(true));
    }

    return (
        <>
            <Card key={task.id}>
                <CardTitleArea>
                    <CardTitle>{ task.title}</CardTitle>
                    <CardUpdateButton onClick={showTaskForm}>内容更新</CardUpdateButton>
                </CardTitleArea>
                <CardElement style={{width: "100%"}}>{ task.detail }</CardElement>
                <CardElementAndItem>
                    <CardItem>期限 </CardItem>
                    <CardElement>{ task.deadline}</CardElement>
                </CardElementAndItem>
                <CardElementAndItem>
                    <CardItem>重量度 </CardItem>
                    <CardElement>{ task.importance}</CardElement>
                </CardElementAndItem>
                <CardElementAndItem>
                    <CardItem>進捗率 </CardItem>
                    <CardElement>
                        { 
                            `${task.rateOfProgress}%`
                        }
                    </CardElement>
                </CardElementAndItem>
            </Card>
        </>
    );
}