import styled from "styled-components";

export const Container = styled.div``;

export const InputContainer = styled.div`
  display: flex;
  width: 80%;
  gap: 10px;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  flex: 1;
  width: 90%;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  gap: 5px;
  padding: 16px;
  gap: 10px;

  @media (max-width: 1024px) {
    flex-direction: column;
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
`;
