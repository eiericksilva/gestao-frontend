import { useForm } from "react-hook-form";
import { useFuncionarioContext } from "../../../context/Funcionario.context";
import { useEffect } from "react";
import {
  ButtonContainer,
  Container,
  Form,
  InputContainer,
} from "../adicioanarFuncionarioForm/styles.js";
import Button from "../../button";
import api from "../../../services/api";

const AdicionarFuncionariosForm = () => {
  const { funcionarios, setFuncionarios } = useFuncionarioContext();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    try {
      api
        .post("/funcionario", data)
        .then((res) => setFuncionarios([...funcionarios, res.data]));
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    api
      .get(`/funcionario`)
      .then((res) => setFuncionarios(res.data))
      .catch((error) => console.log(error));
  }, [setFuncionarios]);

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <input type="text" placeholder="Nome:" {...register("nome")} />
          <select {...register("cargo")} defaultValue="">
            <option value="" disabled>
              Cargo
            </option>
            <option value="gerente geral">Gerente Geral</option>
            <option value="coordenador de operacoes">
              Coordenador de Operacões
            </option>
            <option value="recepcionista">Recepcionista</option>
            <option value="instrutor">Instrutor</option>
            <option value="personal trainer">Personal Trainer</option>
            <option value="auxiliar de musculacao">
              Auxiliar de Musculação
            </option>
            <option value="auxiliar de limpeza">Auxiliar de Limpeza</option>
            <option value="seguranca">Segurança</option>
          </select>
          <select {...register("departamento")} defaultValue="">
            <option value="" disabled>
              Departamento
            </option>
            <option value="administrativo">administrativo</option>
            <option value="musculaçao">musculação</option>
            <option value="aulas coletivas">aulas coletivas</option>
            <option value="nutriçao">nutrição</option>
            <option value="limpeza e manutenção">limpeza e manutenção</option>
            <option value="seguranca">segurança</option>
          </select>
          <input
            type="number"
            placeholder="Salário:"
            {...register("salario")}
          />
          <input type="date" placeholder="Admissão" {...register("admissao")} />
        </InputContainer>
        <ButtonContainer>
          <Button type="submit" title="Cadastrar" />
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default AdicionarFuncionariosForm;
