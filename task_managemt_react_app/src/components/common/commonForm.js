import { styled } from 'styled-components';
import { Button } from './commonParts';
import { BASE_TEXT_COLOR, MIDLE_LOW_TEXT_SIZE_BOLD, MIDLE_TEXT_SIZE_BOLD } from './commonStyle';
import { fadeIn } from './commonAnimation';

const Form = styled.form`
    
`

const FormArea = styled.div`
    background-color: white;
    padding: 40px;
    box-shadow: 4px 6px 10px 0px #00000080;
`

const FormItem = styled.label`
    width: 25%;
    ${BASE_TEXT_COLOR}
    ${MIDLE_LOW_TEXT_SIZE_BOLD}
`

const FormInput = styled.input`
    width: 70%;
    border-radius: 10px;
    border: 2px solid #2E3063;
    height: 28px;
    font-size: 15px;
    padding-left: 10px;
    padding-right: 10px;
`

const FormInputBetweenDate = styled(FormInput)`
    width: 30%;
    padding-left: 5px;
    padding-right: 5px;
`

const FormInputBetween = styled.div`
    width: 10%;
    ${BASE_TEXT_COLOR}
    ${MIDLE_LOW_TEXT_SIZE_BOLD}
    text-align: center;
`

const FormInputTextArea = styled.textarea`
    width: 70%;
    border-radius: 10px;
    // border-bottom-right-radius: 0px;
    border: 2px solid #2E3063;
    height: 100px;
    font-size: 15px;
    padding: 10px;
    resize: none;
`
const FormInputSelect = styled.select`
    width: 10%;
    border: 2px solid #2E3063;
    height: 28px;
    border-radius: 10px;
    font-size: 15px;
    padding-left: 5px;
`
const FormInputOption = styled.option`
    width: 10%;
    border: 2px solid #2E3063;
    height: 28px;
    border-radius: 10px;
    font-size: 15px;
`

const FormItemAndInput = styled.div`
    display: flex;
    margin-bottom: 30px;
`

const FormErrorArea = styled.div`
    display: flex;
    margin-bottom: 10px;
`

const FormErrorInfo = styled.div`
    font-size: 14px;
    color: crimson;
`

const FormButtonRow = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
`
const FormButton = styled(Button)`
    width: 150px;
    justify-content: center;
    margin: 0 50px;
`

const FormButtonClear = styled(Button)`
    margin: 0;
    background-color: #d8d9fd;
`

const UpdateTodoForm = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #858a917a;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    cursor: pointer;
    z-index: 100;
    ${fadeIn}
`

const UpdateForm = styled(Form)`
    width: 50%;
    cursor: auto;
`

const UpdateFormInput = styled(FormInput)`
    width: 70%;
`

const UpdateFormInputTextArea = styled(FormInputTextArea)`
    width: 70%;
`
const UpdateFormItem = styled(FormItem)`
    width: 25%;
`

export {FormArea, FormButton, FormButtonRow, 
    FormErrorArea, FormErrorInfo, FormInput, 
    FormInputOption, FormInputSelect, FormInputTextArea,
    FormItem, FormItemAndInput,
    UpdateTodoForm, UpdateForm, UpdateFormInput,
    UpdateFormInputTextArea, UpdateFormItem,
    FormInputBetweenDate, FormInputBetween,
    FormButtonClear
};