
# Feirinha
### Feirinha é uma API REST simples para gerenciar uma lista de compras, permitindo adicionar, consultar e filtrar itens por tipo e ID.

- Funcionalidades
- Adicionar itens à lista de compras: Inserir novos itens especificando nome, quantidade e tipo.
- Consultar todos os itens: Listar todos os itens cadastrados na lista de compras.
- Consultar itens por tipo: Filtrar itens por tipo usando query string (ex.: ?type=fruta).
- Consultar item por ID: Buscar um item específico pelo seu ID.
### Tecnologias Utilizadas
- Node.js: Ambiente de execução JavaScript no servidor.
- Express: Framework para construção de aplicações web.
- Chalk: Para estilizar mensagens no console.
- CORS: Para habilitar o Cross-Origin Resource Sharing.

### Endpoints
- Rota: POST /compras (Adicionar Item à Lista)
  Body (JSON):
  {
   "name": "abacaxi",
    "quantity": 1,
    "type": "fruta"
  }
  
### Respostas: 
- 201 Created: Item adicionado com sucesso.
- 409 Conflict: O item já existe na lista.
- 422 Unprocessable Entity: Dados inválidos.

### Consultar Todos os Itens
- Rota: GET /compras
Descrição: Retorna todos os itens da lista de compras.
### Consultar Itens por Tipo
- Rota: GET /compras?type=nome-do-tipo
Descrição: Filtra itens da lista por tipo (case sensitive).
Exemplo: GET /compras?type=fruta
### Consultar Item por ID
- Rota: GET /compras/:id
Descrição: Retorna o item correspondente ao ID especificado.
Exemplo: GET /compras/1
### Respostas:
- 200 OK: Item encontrado.
- 400 Bad Request: ID inválido.
- 404 Not Found: Item não encontrado.

## Autor: Jonas Dos
