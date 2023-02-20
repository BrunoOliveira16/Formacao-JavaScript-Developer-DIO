# 📌 **Aula 06 - Dominando o protocolo HTTP**

## ✅ **Requisição HTTP**
### URL: https://pokeapi.co/docs/v2#pokemon
    ${IP}/${path = caminho de identificação do recurso}

### IP: https://pokeapi.co

<br>

## ✅ **Request Method: GET | POST | PUT | DELETE** 

- **GET:** O método get em uma url, o servidor irá entender que se quer buscar um recurso;

- **POST:** Caso a API siga os padrões de projeto rest o servidor irá entender que etarei inserindo um recurso;

- **PUT:** Atualiza as informações da API;

- **DELETE:** deleta informações da API;

<br>

## ✅ **Querry string**
URL: https://pokeapi.co/docs/v2#pokemon?type=grass&&name=i

type=grass
name=i

### **Request Headers**
- Configuração da API
- Autenticações da api

### **Response Headers**
- Configuração da API

### **Request body**

### **Status Code**
- Oque aconteceu com a requisição, informada em forma de valor numérico (200 é sucess)

<br>

```
Request Headers
    content-type: application/json

Request body
{
    "name": "Teste"
}

STATUS CODE: 200 OK

Response headers

Response body
```