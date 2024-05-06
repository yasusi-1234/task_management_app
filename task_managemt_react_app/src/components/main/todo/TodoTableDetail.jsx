import { styled } from "styled-components";
import { MIDLE_TEXT_SIZE_BOLD } from "../../common/commonStyle";

const TodoDetailElement = styled.div`
    ${MIDLE_TEXT_SIZE_BOLD}
    padding: 5px 15px;
`

const TodoTaskInfo = styled.div`
    // height: 10px;
    overflow: hidden;
    // width: 100%;
    max-width: 25vw;
    // min-width: 200px;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0px 20px 5px 20px;
    font-size: 13px;
`

const TodoTableDetail = ({ detail, tasks }) => {
  return (
    <>
      <TodoDetailElement>{detail}</TodoDetailElement>
      <TodoTaskInfo>
       { tasks.map((task, index) => `${index + 1} : ${task.title} : ${task.detail}`).join(', ') }
      </TodoTaskInfo>
    </>
  );
};

export { TodoTableDetail };
