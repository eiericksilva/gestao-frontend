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
`;
