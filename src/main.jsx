import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FuncionarioProvider } from "./context/Funcionario.context.jsx";
import { GlobalStyle } from "./styles/global.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FuncionarioProvider>
      <App />
    </FuncionarioProvider>
    <GlobalStyle />
  </React.StrictMode>
);
