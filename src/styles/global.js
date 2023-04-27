import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #f1f1f1;
    }

    input, select {
        padding: 0 10px;
        width: 100%;
        height: 50px;
        border: none;
        border-radius: 5px;
        border-bottom: 2px solid #ffa500;
        outline: none;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        @media (max-width: 1024px) {
            margin: 0 auto;
        }
    }
`;
