import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { TitleH1 } from '../../common/commonParts';
import { styled } from 'styled-components';
import { 
    FormArea, FormButton, FormButtonRow, 
    FormErrorArea, FormErrorInfo, FormInput, 
    FormInputOption, FormInputSelect, FormInputTextArea, 
    FormItem, FormItemAndInput } from '../../common/commonForm';
import { PAGE_NAMES, movePage } from '../../../store/modules/curentPage';

const INPORTANCE = ["低", "中", "高"];

const Form = styled.form`
    
`


export const TodoForm = () => {

    const {register, handleSubmit, formState : {errors}} = useForm(
        {
            defaultValues:
                {
                    todoTitle: '',
                    todoDetail: '',
                    deadline: '',
                    importance: ''
                },
                mode: 'onSubmit'
        }
    );

    const dispatch = useDispatch();

    const prevPage = useSelector(state => state.currentPage.prevPage);

    const onSubmit = (data) => {
        // e.preventDefault();
        console.log("hello form");
        console.log(data);
        // 登録処理が必要

        dispatch(movePage(PAGE_NAMES.TODO_LIST));
    }

    const onChancel = () => {
        dispatch(movePage(prevPage));
    }

    console.log(errors);

    console.log(prevPage);

    return (
        <>
            <TitleH1>新規Todo登録</TitleH1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormArea>
                    {
                        errors.todoTitle && 
                        (
                            <FormErrorArea>
                                <FormItem></FormItem>
                                <FormErrorInfo>タイトルは必須項目です</FormErrorInfo>
                            </FormErrorArea>
                        )
                    }
                    <FormItemAndInput>
                        <FormItem>Todoタイトル</FormItem>
                        <FormInput {...register("todoTitle", { required: "タイトルは必須項目です", })}/>
                    </FormItemAndInput>
                    {
                        errors.todoDetail &&
                        (
                            <FormErrorArea>
                                <FormItem></FormItem>
                                <FormErrorInfo>詳細は必須項目です</FormErrorInfo>
                            </FormErrorArea>
                        )
                    }
                    <FormItemAndInput>
                        <FormItem>Todo詳細</FormItem>
                        <FormInputTextArea {...register("todoDetail", { required: "詳細は必須項目です", })}  />
                    </FormItemAndInput>
                    {
                        errors.deadline && 
                        (
                            <FormErrorArea>
                                <FormItem></FormItem>
                                <FormErrorInfo>期限は必須項目です</FormErrorInfo>
                            </FormErrorArea>
                        )
                    }
                    <FormItemAndInput>
                        <FormItem>期限</FormItem>
                        <FormInput type='datetime-local' {...register("deadline", { required: "期限は必須項目です", })}/>
                    </FormItemAndInput>
                    {
                        errors.importance &&
                        (
                            <FormErrorArea>
                                <FormItem></FormItem>
                                <FormErrorInfo>重要度は必須項目です</FormErrorInfo>
                            </FormErrorArea>
                        )
                    }
                    <FormItemAndInput>
                        <FormItem>重要度</FormItem>
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
                        <FormButton type='button' onClick={onChancel}>キャンセル</FormButton>
                        <FormButton type='submit'>登録</FormButton>
                    </FormButtonRow>
                </FormArea>
            </Form>
        </>
    );
}