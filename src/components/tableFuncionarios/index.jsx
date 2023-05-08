import { useState, useEffect } from "react";
import { Container } from "./styles";
import Button from "../../components/button";
import api from "../../services/api";
import { useFuncionarioContext } from "../../context/Funcionario.context";
import Modal from "../modal/modal";

const TableFuncionarios = () => {
  const {
    funcionarios,
    setFuncionarios,
    setFuncionarioEstaSendoEditado,
    setFuncionarioParaEditar,
  } = useFuncionarioContext();

  const [salario, setSalario] = useState(0);
  const [mediaSalarial, setMediaSalarial] = useState(0);
  const [departamento, setDepartamento] = useState("");

  const formatterNumber = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  useEffect(() => {
    filtrarTabelaFuncionariosDepartamento(departamento);
  }, [funcionarios, departamento]);

  useEffect(() => {
    calcularMediaSalarial();
  }, [funcionarios]);

  const excluirFuncionario = async (id) => {
    await api.delete(`/funcionario/${id}`);
    api
      .get("funcionario")
      .then((res) => setFuncionarios(res.data))
      .catch((error) => console.log(error));
  };

  const [funcionariosFiltrados, setFuncionariosFiltrados] =
    useState(funcionarios);

  const filtrarTabelaFuncionariosPorSalario = (salario) => {
    const tabelaFiltrada = funcionarios.filter(
      (funcionario) => funcionario.salario > salario
    );
    setFuncionariosFiltrados(tabelaFiltrada);
  };

  const filtrarTabelaFuncionariosDepartamento = (departamento) => {
    const tabelaFiltrada = funcionarios.filter((funcionario) =>
      funcionario.departamento.includes(departamento)
    );
    setFuncionariosFiltrados(tabelaFiltrada);
  };

  const calcularMediaSalarial = () => {
    if (funcionarios.length === 0) {
      setMediaSalarial(formatterNumber.format(0));
      return;
    }

    const somaDosSalarios = Number(
      funcionarios.reduce(
        (acc, funcionario) => Number(acc) + Number(funcionario.salario),
        0
      )
    );
    setMediaSalarial(
      formatterNumber.format(somaDosSalarios / funcionarios.length)
    );
  };

  const lidandoComEdicaoFuncionario = (id) => {
    setFuncionarioEstaSendoEditado(true);

    const funcionarioSelecionado = funcionarios.find(
      (funcionario) => funcionario._id === id
    );
    setFuncionarioParaEditar(funcionarioSelecionado);
  };

  return (
    <Container>
      <div className="filters">
        <div>
          <label htmlFor="filtroMediaSalarial">
            Filtrar por salário
            <input
              id="filtroMediaSalarial"
              type="number"
              placeholder="0,00"
              value={salario}
              onChange={(e) => setSalario(e.target.value)}
            />
          </label>
          <Button
            title="Aplicar filtro"
            onClick={() => filtrarTabelaFuncionariosPorSalario(salario)}
          />
        </div>
        <div>
          <label htmlFor="filtroDepartamento">
            Filtrar por Departamento
            <input
              id="filtroDepartamento"
              type="text"
              placeholder="digite o departamento..."
              value={departamento}
              onChange={(e) => setDepartamento(e.target.value)}
            />
          </label>
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Cargo</th>
              <th>Departamento</th>
              <th>Salário</th>
              <th>Admissão</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {funcionariosFiltrados.map((funcionario) => (
              <tr key={funcionario._id}>
                <td>{funcionario.nome}</td>
                <td>{funcionario.cargo}</td>
                <td>{funcionario.departamento}</td>
                <td>{formatterNumber.format(funcionario.salario)}</td>
                <td>{funcionario.admissao}</td>
                <td>
                  <div>
                    <Button
                      title="Editar Funcionário"
                      onClick={() =>
                        lidandoComEdicaoFuncionario(funcionario._id)
                      }
                    />
                    <Modal />
                    <Button
                      title="Excluir Funcionário"
                      onClick={() => excluirFuncionario(funcionario._id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <span>Média Salarial: {mediaSalarial}</span>
    </Container>
  );
};

export default TableFuncionarios;
