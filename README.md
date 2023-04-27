# Sistema de Gestão de Funcionários de uma Academia ⏳

Sistema sugerido pelo mentor Rodrigo Lima para treinar JavaScript e ter clareza na qualidade do código.

## Estruturas

```javascript
const cargos = [
  "gerente geral", // 3.500 a 6.000
  "coordenador de operacoes", // 2.500 a 4.000
  "recepcionista", // 1.200 a 2.000
  "instrutor", // 1.500 a 3.000
  "personal training", // 3.000 a 6.000
  "auxiliar de musculacao", // 1.200 a 2.000
  "auxiliar de limpeza", // 1.000 a 2.500
  "segurança", // 1.500 a 2.500
];
```

```javascript
const departamentos = [
  "administrativo",
  "recepção",
  "musculação",
  "aulas coletivas",
  "nutrição",
  "limpeza e manutenção",
  "segurança",
];
```

```javascript
const funcionario = {
    id:"",
    nome: "",
    cargo: "",
    departamento: "",
    salario: "",
    admissao: "",
};
```

## Funcionalidades básicas

- Adicionar novo funcionário ✅
- Editar informação de um funcionário existente ✅
- Remover funcionário existente ✅
- Listar todos funcionários por **departamento** ✅
- Listar todos os funcionários pelo **salário** ✅
- Calcular média salarial total da empresa ✅

## Implementações extras

- Teste (Vitest)
- Interface gráfica (ReactJS + Styled-Components)
