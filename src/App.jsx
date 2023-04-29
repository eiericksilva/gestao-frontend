import AdicionarFuncionariosForm from "./components/forms/adicioanarFuncionarioForm";
import RelacaoFuncionarios from "./components/relacaoFuncionarios";
import EditarFuncionarioForm from "./components/forms/editarFuncionarioForm";
import { useContext } from "react";
import FuncionarioContext from "./context/Funcionario.context";

function App() {
  const { funcionarioEstaSendoEditado } = useContext(FuncionarioContext);
  return (
    <div>
      <h1>Gestão de Funcionários</h1>
      {funcionarioEstaSendoEditado ? (
        <EditarFuncionarioForm />
      ) : (
        <AdicionarFuncionariosForm />
      )}

      <RelacaoFuncionarios />
    </div>
  );
}

export default App;
