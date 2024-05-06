import { styled, css } from "styled-components";

const PageFooter = styled.footer`
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #333; /* フッターの背景色などを適切に指定 */
    color: #fff; /* フッターのテキスト色などを適切に指定 */
    padding: 10px; 
`

const Footer = () => {
    return (
        <>
            <PageFooter>
                this is footer
            </PageFooter>
        </>
    );
}

export { Footer };