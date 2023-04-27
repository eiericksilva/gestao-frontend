import styled from "styled-components";

export const Container = styled.div``;

export const InputContainer = styled.div`
  display: flex;
  width: 80%;
  gap: 10px;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
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
`;
