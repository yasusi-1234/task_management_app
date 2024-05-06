import { styled } from 'styled-components';
import { BASE_TEXT_COLOR, MIDLE_LOW_TEXT_SIZE_BOLD } from './commonStyle';
import { Button } from './commonParts';

const Card = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    padding: 20px 30px;
    box-shadow: 4px 6px 10px 0px #00000080;
    margin-bottom: 50px;
`;

const CardTitle = styled.h2`
    width: 50%;
    margin-top: 0;
    margin-bottom: 15px;
    ${BASE_TEXT_COLOR}
`

const CardElement = styled.div`
    width: 70%;
    margin-bottom: 12px;
`

const CardItem = styled.div`
    ${BASE_TEXT_COLOR};
    ${MIDLE_LOW_TEXT_SIZE_BOLD}
    width: 30%;
`

const CardElementAndItem = styled.div`
    width: 50%;
    display: flex;
`

const CardTitleArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const CardUpdateButton = styled(Button)`
    height: 40px;
`;

export { Card, CardTitle, CardElement, CardElementAndItem, CardItem, CardTitleArea, CardUpdateButton };