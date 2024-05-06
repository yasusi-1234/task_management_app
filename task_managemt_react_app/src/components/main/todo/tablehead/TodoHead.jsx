import { useDispatch } from 'react-redux';

import { styled } from "styled-components";
import { FaFilter } from "react-icons/fa";
import { BASE_TEXT_COLOR, MIDLE_TEXT_SIZE_BOLD } from '../../../common/commonStyle';
import { Button } from '../../../common/commonParts';
import { movePage, PAGE_NAMES } from '../../../../store/modules/curentPage';
import { toggleFilterBackForm } from '../../../../store/modules/backForm';

const TodoHeadArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 10px;
`

const Div = styled.div`
    ${BASE_TEXT_COLOR}
    ${MIDLE_TEXT_SIZE_BOLD}
`

const TodoHead = () => {

    const dispatch = useDispatch();

    const moveTodoAdd = () => {
        dispatch(movePage(PAGE_NAMES.TODO_FORM));
    }

    const showBackTodosFilter = () => {
        dispatch(toggleFilterBackForm(true));
    }

    return (
        <TodoHeadArea>
            <Button onClick={showBackTodosFilter}>
                <FaFilter size={20} style={{ "marginRight": "10px"}}/>フィルター
            </Button>
            <Div>現在のページ 1/1</Div>
            <Div>取得件数: 〇件</Div>
            <Button onClick={moveTodoAdd}>Todo追加</Button>
        </TodoHeadArea>
    );
}


export { TodoHead };