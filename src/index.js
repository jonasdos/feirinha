import express from "express";
import chalk from "chalk";
import validaNovoItem from "./scripts/valida.js";

const listadeItens = [
  { id: 1, name: "laranja", quantity: 10, type: 'fruta', },
  { id: 2, name: "Morango", quantity: 20, type: 'fruta', },
  { id: 3, name: "Tomate", quantity: 7, type: 'legume', },
];

const app = express();
app.use(express.json());

const porta = 5000;
const msg = chalk.blue("Servidor rodando em: ") + chalk.bgBlackBright(`http://localhost:${porta}`);

app.post('/items', (req, res) => {
  const itemReq = req.body;

  // Verifique se o body está vindo corretamente
  if (!itemReq || !itemReq.name || !itemReq.quantity || !itemReq.type) {
    return res.status(422).send('Dados inválidos');
  }

  const valida = validaNovoItem(itemReq.name, itemReq.quantity, itemReq.type);

  if (valida) {
    const itemExistente = listadeItens.find((item) => item.name.toLowerCase() === itemReq.name.toLowerCase());

    if (itemExistente) {
      console.log(itemReq.name + ': esse item já existe');
      res.status(409).send(listadeItens);
    } else {
      itemReq.id = listadeItens.length + 1;
      listadeItens.push(itemReq);
      res.status(201).send(listadeItens);
    }

  } else {
    res.status(422).send('Não foi possível processar os dados');
  }
});

app.get('/items', (req, res) => {
  const { type } = req.query
  if (type) {
    const itensFiltrados = listadeItens.filter(item => item.type === type)
    res.send(itensFiltrados)
  } else {
    res.send(listadeItens);
  }
});

app.get('/items/:id', (req, res) => {

  const id = parseInt(req.params.id)

  if (isNaN(id) || id <= 0) {
    return res.status(400).send('ID deve ser um número inteiro positivo')
  }
  const item = listadeItens.find(item => item.id === id)

  if (!item) {
    return res.status(404).send('Item não encontrado')
  }
  res.send(item)
})

app.listen(porta, () => {
  console.log(msg);
});
