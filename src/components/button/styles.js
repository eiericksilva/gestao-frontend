import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #ffa500;
  color: #111;
  margin-left: none;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    margin: 0 auto;
  }

  &:hover {
    background-color: #ff8c00;
    color: #000;
    font-weight: bold;
    cursor: pointer;
  }
`;
