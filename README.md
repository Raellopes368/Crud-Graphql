# Crud-Graphql

## Instalação

npm install ou yarn

## Configuração

Renomear .env.example para .env, e preencher variável PORT com a porta em que quer utilizar.
NAME com o nome do usuário do postgres;
PASS com a senha para esse usuário;

Alterar em src/config/database.js o host e nome da base de dados.

## Exemplo de uso (teste local no navegador)

Acesse http://localhost:port

### Create (Mutation)

```
mutation{
  newUser(data:{
    name:"",
    email:"",
    password:"",
    cpf:"",
    contacts:"",
    address: ""
  }){
    id
    name
    email
    cpf
    contacts
    address
  }
}
```

### Read (Query)

```
  query{
    users{
      id
      name
      email
      cpf
      contacts
      address
    }
  }
```

e

```
  query{
    user(id:5){
      id
      name
      email
      cpf
      contacts
      address
    }
}

```

### Update (Mutation)

```
  mutation{
  updateUser(data:{
    id: id,
    name: "newName",
    email: "newEmail",
    contacts: "newContacts",
    address: "newAddress"
  }){
    id
    name
    email
    cpf
  }
}
```

### Delete (Mutation)

```
  mutation{
  deleteUser(id:6){
    status
  }
}
```
