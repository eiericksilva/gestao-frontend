import { useContext } from "react";
import FuncionarioContext from "../../../context/Funcionario.context.jsx";
import { Container, Form } from "../adicioanarFuncionarioForm/styles.js";

import { useForm } from "react-hook-form";
import Button from "../../button/index.jsx";

import api from "../../../services/api.js";

const EditarFuncionariosForm = () => {
  const {
    funcionarioParaEditar,
    setFuncionarioEstaSendoEditado,
    funcionarios,
    setFuncionarios,
  } = useContext(FuncionarioContext);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      nome: funcionarioParaEditar.nome,
      cargo: funcionarioParaEditar.cargo,
      departamento: funcionarioParaEditar.departamento,
      salario: funcionarioParaEditar.salario,
      admissao: funcionarioParaEditar.admissao,
    },
  });

  const onSubmit = async (data) => {
    setFuncionarioEstaSendoEditado(false);
    const { _id } = funcionarioParaEditar;

    await api
      .put(`funcionario/${_id}`, data)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    /* const copiaFuncionario = { ...funcionarioParaEditar, ...data };
    const novaListaDeFuncionarios = funcionarios.filter(
      (funcionario) => funcionario.id !== copiaFuncionario.id
    );
    setFuncionarios([...novaListaDeFuncionarios, copiaFuncionario]); */
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Nome:" {...register("nome")} />
        <select {...register("cargo")}>
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
          <option value="auxiliar de musculacao">Auxiliar de Musculação</option>
          <option value="auxiliar de limpeza">Auxiliar de Limpeza</option>
          <option value="seguranca">Segurança</option>
        </select>
        <select {...register("departamento")}>
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
        <input type="number" placeholder="Salário:" {...register("salario")} />
        <input type="date" placeholder="Admissão" {...register("admissao")} />
        <Button type="submit" title="Salvar Mudanças" />
      </Form>
    </Container>
  );
};

export default EditarFuncionariosForm;
