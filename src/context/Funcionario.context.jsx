import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FuncionarioContext = createContext();

// eslint-disable-next-line react/prop-types
export const FuncionarioProvider = ({ children }) => {
  const [funcionarios, setFuncionarios] = useState([]);
  const [funcionarioEstaSendoEditado, setFuncionarioEstaSendoEditado] =
    useState(false);
  const [funcionarioParaEditar, setFuncionarioParaEditar] = useState({});
  const funcionario = {
    id: uuidv4(),
    nome: "",
    departamento: "",
    salario: 0,
    admissao: "",
  };

  return (
    <FuncionarioContext.Provider
      value={{
        funcionario,
        funcionarios,
        setFuncionarios,
        funcionarioEstaSendoEditado,
        setFuncionarioEstaSendoEditado,
        funcionarioParaEditar,
        setFuncionarioParaEditar,
      }}
    >
      {children}
    </FuncionarioContext.Provider>
  );
};

export default FuncionarioContext;
