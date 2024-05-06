import { styled } from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { setFilterTodo, clearFilterTodo } from '../../../../store/modules/todo';

import {
  FormArea,
  FormButton,
  FormButtonRow,
  FormInputBetween,
  FormInputBetweenDate,
  FormItemAndInput,
  FormInput,
  UpdateTodoForm,
  UpdateForm,
  FormItem,
  FormButtonClear,
} from "../../../common/commonForm";
import { toggleFilterBackForm } from "../../../../store/modules/backForm";
import React from 'react';

const INPORTANCE_RADIO = ["全て", "高", "中", "低"];

const RATE_OF_PROGRESS_RADIO = ["全て", "完了", "未完了"];

const FormInputRadio = styled.input`
    width: 20px;
    height: 20px;
    margin: 0;
    margin-right: 5px;
`

const FormInputRadioLabel = styled.label`
    margin-right: 20px;
`

export const TodosBackFilterForm = () => {

    const todoFilter = useSelector(state => state.todos.filterTodo);

    console.log(todoFilter);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: todoFilter,
    mode: "onSubmit",
  });

  const blockBubbling = (e) => {
    e.stopPropagation();
  };

  const dispatch = useDispatch();

  const closeTodoFilterForm = () => {
     dispatch(toggleFilterBackForm(false));
  };

  const updateFilterTodo = (data) => {
    dispatch(setFilterTodo(data));
  }

  const clearFilter = () => {
    dispatch(clearFilterTodo());
    reset();
  }

  return (
    <UpdateTodoForm onClick={closeTodoFilterForm}>
        <UpdateForm onClick={blockBubbling}  onSubmit={handleSubmit(updateFilterTodo)}>
            <FormArea>
                <FormItemAndInput>
                    <FormItem>タイトル</FormItem>
                    <FormInput {...register("title")}/>
                </FormItemAndInput>
                <FormItemAndInput>
                    <FormItem>詳細</FormItem>
                    <FormInput {...register("detail")}/>
                </FormItemAndInput>
                <FormItemAndInput>
                    <FormItem>期限</FormItem>
                    <FormInputBetweenDate type='datetime-local' {...register("deadlineStart")}/>
                    <FormInputBetween>～</FormInputBetween>
                    <FormInputBetweenDate type='datetime-local' {...register("deadlineEnd")}/>
                </FormItemAndInput>
                <FormItemAndInput>
                    <FormItem>登録日</FormItem>
                    <FormInputBetweenDate type='datetime-local' {...register("createDateStart")} />
                    <FormInputBetween>～</FormInputBetween>
                    <FormInputBetweenDate type='datetime-local' {...register("createDateEnd")} />
                </FormItemAndInput>
                <FormItemAndInput style={{ alignItems: "center"}}>
                    <FormItem>進捗</FormItem>
                    {
                        RATE_OF_PROGRESS_RADIO.map(item => {
                            return (
                                <React.Fragment key={item}>
                                    <FormInputRadio type='radio' name='rateOfProgress' value={item} {...register("rateOfProgress")} id={`${item}_rate`}/>
                                    <FormInputRadioLabel htmlFor={`${item}_rate`}>{item}</FormInputRadioLabel>
                                </React.Fragment>
                            );
                        })
                    }
                </FormItemAndInput>
                <FormItemAndInput>
                    <FormItem>重要度</FormItem>
                    {
                        INPORTANCE_RADIO.map(item => {
                            return (
                                <React.Fragment key={item}>
                                    <FormInputRadio type='radio' name='importance' value={item} {...register("importance")} id={item}/>
                                    <FormInputRadioLabel htmlFor={item}>{item}</FormInputRadioLabel>
                                </React.Fragment>
                            );
                        })
                    }
                </FormItemAndInput>
                <FormItemAndInput>
                    <FormItem style={{ display: "flex", alignItems: "center"}}>クリア</FormItem>
                    <FormButtonClear type='button' onClick={clearFilter}>クリア</FormButtonClear>
                </FormItemAndInput>
                <FormButtonRow style={{ marginBottom: "0"}}>
                    <FormButton type='button' onClick={closeTodoFilterForm}>キャンセル</FormButton>
                    <FormButton type='submit'>検索</FormButton>
                </FormButtonRow>
            </FormArea>
        </UpdateForm>
    </UpdateTodoForm>
  );
};
