import { styled } from 'styled-components';
import { BASE_TEXT_COLOR } from './commonStyle';

const Button = styled.button`
    display: flex;
    align-items: center;
    background-color: #2E3063;
    color: #FFFFFF;
    border: 2px solid #A2B9DB;
    font-weight: bold;
    font-size: 18px;
    padding: 5px 15px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
        transition: all 0.3s;
    }
`

const TitleH2 = styled.h2`
    ${BASE_TEXT_COLOR}
`
const TitleH1 = styled.h1`
    ${BASE_TEXT_COLOR}
`

export { Button, TitleH2, TitleH1 };