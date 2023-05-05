import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import EditarFuncionariosForm from "../forms/editarFuncionarioForm";
import { useFuncionarioContext } from "../../context/Funcionario.context";

const Modal = () => {
  const { funcionarioEstaSendoEditado, setFuncionarioEstaSendoEditado } =
    useFuncionarioContext();
  const handleDisplayModal = () => {
    setFuncionarioEstaSendoEditado(false);
  };

  return (
    <Dialog
      maxWidth="80%"
      open={funcionarioEstaSendoEditado}
      onClose={handleDisplayModal}
    >
      <DialogTitle>Editar Dados</DialogTitle>
      <DialogContent>
        <EditarFuncionariosForm />
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
