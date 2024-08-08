import { default as styled, createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
        overflow: hidden;
        height: 100%;
        width: 100%;
    }

    body {
        min-height: 100%;
        font-family: sans-serif;
    }
    
    *, *::before, &::after {
    box-sizing: border-box;}
`;

export const SContainer = styled.div`
  padding: 2rem;
`;
