import styled from "styled-components";

export const SButton = styled.button`
  border: none;
  outline: none;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background: linear-gradient(to right, #00ffa3, #dc1fff);
  cursor: pointer;

  &::before {
    content: attr(data-label);
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
    background-color: #ffffff;
    border-radius: calc(0.25rem - 1px);
  }
`;
