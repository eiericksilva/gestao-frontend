import { createContext, useState } from "react";
const FuncionarioContext = createContext();

// eslint-disable-next-line react/prop-types
export const FuncionarioProvider = ({ children }) => {
  const [funcionarios, setFuncionarios] = useState([]);
  const [funcionarioEstaSendoEditado, setFuncionarioEstaSendoEditado] =
    useState(false);
  const [funcionarioParaEditar, setFuncionarioParaEditar] = useState({});
  const funcionario = {
    nome: "",
    cargo: "",
    departamento: "",
    salario: 0,
    admissao: "",
  };

  return (
    <FuncionarioContext.Provider
      value={{
        funcionario,
        funcionarios,
        funcionarioEstaSendoEditado,
        funcionarioParaEditar,
        setFuncionarios,
        setFuncionarioEstaSendoEditado,
        setFuncionarioParaEditar,
      }}
    >
      {children}
    </FuncionarioContext.Provider>
  );
};

export default FuncionarioContext;
