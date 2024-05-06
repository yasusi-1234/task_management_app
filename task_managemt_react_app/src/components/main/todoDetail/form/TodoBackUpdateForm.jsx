import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { FormArea, FormButton, FormButtonRow,
    FormErrorArea,FormErrorInfo, FormInputOption,
    FormInputSelect,FormItemAndInput, UpdateTodoForm, 
    UpdateForm, UpdateFormItem, UpdateFormInputTextArea, 
    UpdateFormInput } from '../../../common/commonForm';
import { toggleTodoBackForm } from '../../../../store/modules/backForm';

const INPORTANCE = ["低", "中", "高"];

export const TodoBackUpdateForm = ({ todo }) => {

    const {register, handleSubmit, formState : {errors}} = useForm(
        {
            defaultValues:
                {
                    todoTitle: todo.title,
                    todoDetail: todo.detail,
                    deadline: todo.deadline,
                    importance: todo.importance
                },
                mode: 'onSubmit'
        }
    );

    const blockBubbling = (e) => {
        e.stopPropagation();
        console.log();
    };

    const dispatch = useDispatch();

    const closeTodoUpdateForm = () => {
        dispatch(toggleTodoBackForm(false));
    }

    const onSubmit = (data) => {
        //e.preventDefault();
        console.log(data);
        console.log('ok')
    }

    console.log(todo);

    return (
    <UpdateTodoForm  onClick={closeTodoUpdateForm}>
        <UpdateForm onClick={blockBubbling} onSubmit={handleSubmit(onSubmit)}>
            <FormArea>
                {
                    errors.todoTitle && 
                    (
                        <FormErrorArea>
                            <UpdateFormItem></UpdateFormItem>
                            <FormErrorInfo>タイトルは必須項目です</FormErrorInfo>
                        </FormErrorArea>
                    )
                }
                <FormItemAndInput>
                    <UpdateFormItem>Todoタイトル</UpdateFormItem>
                    <UpdateFormInput {...register("todoTitle", { required: "タイトルは必須項目です", })}/>
                </FormItemAndInput>
                {
                    errors.todoDetail &&
                    (
                        <FormErrorArea>
                            <UpdateFormItem></UpdateFormItem>
                            <FormErrorInfo>詳細は必須項目です</FormErrorInfo>
                        </FormErrorArea>
                    )
                }
                <FormItemAndInput>
                    <UpdateFormItem>Todo詳細</UpdateFormItem>
                    <UpdateFormInputTextArea {...register("todoDetail", { required: "詳細は必須項目です", })}  />
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
                    <FormButton type='button' onClick={closeTodoUpdateForm}>キャンセル</FormButton>
                    <FormButton type='submit'>登録</FormButton>
                </FormButtonRow>
            </FormArea>
        </UpdateForm>
    </UpdateTodoForm>
    );
}