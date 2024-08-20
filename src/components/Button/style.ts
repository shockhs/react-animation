import styled from "styled-components";

export const SButton = styled.button`
  padding: 0;
  border: none;
  outline: none;
  position: relative;
  background-clip: padding-box;
  border: solid $border transparent;
  border-radius: 1em;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    background-color: #dc1fff11;
    display: flex;
  }

  &::before {
    border-radius: 0.25rem;
    content: '';
    position: absolute;
    top: 0; 
    right: 0; 
    bottom: 0; 
    left: 0;
    z-index: -1;
    margin: -5px;
    border-radius: inherit;
    background: linear-gradient(to right, #00ffa3, #dc1fff);
  }
`;
