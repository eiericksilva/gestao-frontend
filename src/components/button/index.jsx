import { Container } from "./styles";

const Button = ({ onClick, title, type }) => {
  return (
    <Container onClick={onClick} type={type}>
      {title}
    </Container>
  );
};

export default Button;
