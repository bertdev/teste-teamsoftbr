## Teste Teamsoftbr

### Tecnologias

- Node
- Adonis
- Lucid
- MySql

### Instruções

Crie um arquivo .env com base no .env.example e preencha as variaveis com base no arquivo docker-compose.yml

Para criar o container com o banco de dados para rodar a aplicação deve-se rodar o comando: `docker-compose up -d`

Após a criação do container rode o comando: `node ace migration:run` para rodar as migrations para estruturação das tabelas

Após isso rode o comando `yarn dev` para subir o server de desenvolvimento

Após isso basta testar as rotas, recomendo que use o arquivo de insomnia disponível no projeto(na pasta insomnia), importe no seu insomnia e use-o

#### Rotas de clientes

| Rota             | Metodo   | Função              |
| ---------------- | -------- | ------------------- |
| `/clientes`      | `get`    | lista clientes      |
| `/clientes/{id}` | `get`    | exibe um cliente    |
| `/clientes`      | `post`   | cria um cliente     |
| `/clientes/{id}` | `patch`  | atualiza um cliente |
| `/clientes/{id}` | `delete` | deleta um cliente   |

- Para criar um cliente ou atualizar deve ser passado no corpo da requisição o seguinte body:

```json
{
  "cnpj": "2324.3453.63453-12",
  "razaoSocial": "Teste 2",
  "nomeDoContato": "Teste e mais teste",
  "telefone": "(65)2342-34234"
}
```

#### Rotas de endereços

| Rota              | Metodo   | Função               |
| ----------------- | -------- | -------------------- |
| `/enderecos`      | `get`    | lista enderecos      |
| `/enderecos/{id}` | `get`    | exibe um endereco    |
| `/enderecos`      | `post`   | cria um endereco     |
| `/enderecos/{id}` | `patch`  | atualiza um endereco |
| `/enderecos/{id}` | `delete` | deleta um endereco   |

- Para criar um endereco ou atualizar deve ser passado no corpo da requisição o seguinte body:

```json
{
  "logradouro": "rua sem fim",
  "numero": "30",
  "bairro": "algum bairro",
  "cidade": "tal cidade",
  "estado": "algum estado",
  "cep": "65500-234",
  "client_id": "e4702559-93f4-4c23-8f51-3a0a2b49f219"
}
```

### TODO

- Cliente
  - [x] Criação de cliente
  - [x] Listar todos os clientes
  - [x] Listar um cliente em detalhes
  - [x] Atualizar dados de cliente
  - [x] Deletar um cliente
- Endereço
  - [x] Criação de um endereço
  - [x] Listagem de endereços
  - [x] Listar um endereço especifico
  - [x] Atualizar dados de um endereço
  - [x] Deletar um endereço
- Bônus
  - [ ] Latitude e Longituge - não foi feito
