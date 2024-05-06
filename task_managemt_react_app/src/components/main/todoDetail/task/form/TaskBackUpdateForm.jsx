import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import {
  FormArea,
  FormButton,
  FormButtonRow,
  FormErrorArea,
  FormErrorInfo,
  FormInputOption,
  FormInputSelect,
  FormItemAndInput,
  UpdateTodoForm,
  UpdateForm,
  UpdateFormItem,
  UpdateFormInputTextArea,
  UpdateFormInput,
} from "../../../../common/commonForm";
import { toggleTaskBackForm } from "../../../../../store/modules/backForm";

const INPORTANCE = ["低", "中", "高"];

export const TaskBackUpdateForm = ({ task }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taskId: task.id,
      taskTitle: task.title,
      taskDetail: task.detail,
      deadline: task.deadline,
      importance: task.importance,
      rateOfProgress: task.rateOfProgress,
    },
    mode: "onSubmit",
  });

  const blockBubbling = (e) => {
    e.stopPropagation();
  };

  const dispatch = useDispatch();

  const closeTaskUpdateForm = () => {
    dispatch(toggleTaskBackForm(false));
  };

  const updateTask = (data) => {
    console.log(data);
  }

  console.log(task);

  return (
    <UpdateTodoForm onClick={closeTaskUpdateForm}>
        <UpdateForm onClick={blockBubbling} onSubmit={handleSubmit(updateTask)}>
            <input type="hidden" {...register("taskId")} />
            <FormArea>
                {
                    errors.taskTitle && 
                    (
                        <FormErrorArea>
                            <UpdateFormItem></UpdateFormItem>
                            <FormErrorInfo>タイトルは必須項目です</FormErrorInfo>
                        </FormErrorArea>
                    )
                }
                <FormItemAndInput>
                    <UpdateFormItem>Taskタイトル</UpdateFormItem>
                    <UpdateFormInput {...register("taskTitle", { required: "タイトルは必須項目です", })}/>
                </FormItemAndInput>
                {
                    errors.taskDetail &&
                    (
                        <FormErrorArea>
                            <UpdateFormItem></UpdateFormItem>
                            <FormErrorInfo>詳細は必須項目です</FormErrorInfo>
                        </FormErrorArea>
                    )
                }
                <FormItemAndInput>
                    <UpdateFormItem>Task詳細</UpdateFormItem>
                    <UpdateFormInputTextArea {...register("taskDetail", { required: "詳細は必須項目です", })}  />
                </FormItemAndInput>
                {
                    errors.deadline && 
                    (
                        <FormErrorArea>
                            <UpdateFormItem></UpdateFormItem>
                            <FormErrorInfo>期限は必須項目です</FormErrorInfo>
                        </FormErrorArea>
                    )
                }
                <FormItemAndInput>
                    <UpdateFormItem>期限</UpdateFormItem>
                    <UpdateFormInput type='datetime-local' {...register("deadline", { required: "期限は必須項目です", })}/>
                </FormItemAndInput>
                {
                    errors.rateOfProgress && 
                    (
                        <FormErrorArea>
                            <UpdateFormItem></UpdateFormItem>
                            <FormErrorInfo>進捗率は必須項目です</FormErrorInfo>
                        </FormErrorArea>
                    )
                }
                <FormItemAndInput>
                    <UpdateFormItem>進捗率</UpdateFormItem>
                    <UpdateFormInput type='number' 
                    {...register("rateOfProgress", 
                        { required: "進捗率は必須項目です", 
                        min: { value: 0, message: "0未満の値は設定できません"}, 
                        max: { value: 100, message: "100より大きい値は設定できません"}})}
                    style={{width: "65px"}}/>
                </FormItemAndInput>
                {
                    errors.importance &&
                    (
                        <FormErrorArea>
                            <UpdateFormItem></UpdateFormItem>
                            <FormErrorInfo>重要度は必須項目です</FormErrorInfo>
                        </FormErrorArea>
                    )
                }
                <FormItemAndInput>
                    <UpdateFormItem>重要度</UpdateFormItem>
                    <FormInputSelect  {...register("importance", { required: "期限は必須項目です", })}>
                        <FormInputOption></FormInputOption>
                        {
                            INPORTANCE.map(item => {
                                return (
                                    <FormInputOption value={item} key={item}>{item}</FormInputOption>
                                );
                            })
                        }
                    </FormInputSelect>
                </FormItemAndInput>
                <FormButtonRow style={{ marginBottom: "0"}}>
                    <FormButton type='button' onClick={closeTaskUpdateForm}>キャンセル</FormButton>
                    <FormButton type='submit'>
                        { task.id === null ? "新規作成" : "更新"}
                    </FormButton>
                </FormButtonRow>
            </FormArea>
        </UpdateForm>
    </UpdateTodoForm>
  );
};
