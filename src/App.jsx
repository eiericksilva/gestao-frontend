import AdicionarFuncionariosForm from "./components/forms/adicioanarFuncionarioForm";
import TableFuncionarios from "./components/tableFuncionarios";

function App() {
  return (
    <div>
      <h1>Gestão de Funcionários</h1>
      <AdicionarFuncionariosForm />
      <TableFuncionarios />
    </div>
  );
}

export default App;
