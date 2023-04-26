import styled from "styled-components";

export const Container = styled.div``;
export const Form = styled.form`
  display: flex;
  gap: 5px;
  padding: 16px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 10px;
  }

  input,
  select {
    padding: 0 10px;
    width: 20%;
    height: 40px;
    border: none;
    border-radius: 5px;
    border-bottom: 1px solid #ffa500;
    outline: none;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
      width: 90%;
      height: 50px;
      margin: 0 auto;
    }
  }

  button {
    padding: 5px;
    width: 200px;
    border: 1px solid black;
    background-color: #ffa500;

    @media (max-width: 1024px) {
      width: 90%;
      height: 50px;
      margin: 0 auto;
    }

    &:hover {
      background-color: #ff8c00;
      color: #111;
      cursor: pointer;
    }
  }
`;
