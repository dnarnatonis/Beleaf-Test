# Beleaf Test

Esta é uma aplicação teste para o processo seletivo da Beleaf.

## Tecnologias

Utilizamos diversas tecnologias do ecossistema para aplicativos [Google Firebase](https://firebase.google.com/) como espinha dorsal do projeto, cobrindo as seguintes áreas do back-end:

- Autenticação: [Firebase Auth](https://firebase.google.com/products/auth/)

- Hosting Estático: [Firebase Hosting](https://firebase.google.com/products/hosting/)

- Lógica Back-end: [Firebase Functions](https://firebase.google.com/products/functions/)

Para elaboração do front-end, utilizamos o _stack_ do [Nuxt.js](https://nuxtjs.org/). Construído para uso em ambiente [Node.js](https://nodejs.org/), contém os seguintes componentes:

-  [Vue 2](https://vuejs.org/)

-  [Vue Router](https://router.vuejs.org/en/)

-  [Vuex](https://vuex.vuejs.org/en/)

-  [Vue Server Renderer](https://ssr.vuejs.org/en/)

-  [vue-meta](https://github.com/declandewet/vue-meta)

> Under the hood we use [webpack](https://github.com/webpack/webpack) with [vue-loader](https://github.com/vuejs/vue-loader) and [babel-loader](https://github.com/babel/babel-loader) to bundle, code-split and minify your code.

Como configuração personalizada, optamos pelos os seguintes componentes:

-  [Buefy](https://buefy.org/) _(UI Framework)_

-  [EsLint](https://eslint.org/) _(Linting tool)_

-  [Prettier](https://prettier.io/) _(Code prettifier)_

Para controle de versão, utilizamos a plataforma [Github](https://github.com/), que provê serviços utilizando a tecnologia [GIT](https://git-scm.com/).

E, finalmente, para CI/CD, optamos pela plataforma [Codeship](https://codeship.com/).


## Instalação

- Verifique se você possui a versão mais recente do [Node.js](https://nodejs.org/)

```bash
$ npm -v
```

- Verifique se você possui a versão mais recente do [GIT](https://git-scm.com/)

```bash
$ git --version
```

- Baixe o projeto do repositório

```bash
$ git clone https://github.com/dnarnatonis/beleaf-test.git
```

- Navegue até a raiz do projeto

```bash
$ cd ./beleaf-test
```

- Rode o _script_ de _setup_

```bash
$ npm run setup
```

## Estrutura de pastas

- __./__

Na raiz do projeto encontram-se todos os arquivos relevantes para a configuração do projeto no [Firebase](https://firebase.google.com/), além deste arquivo README.
	
- __./functions__

Este diretório contém todos os arquivos pertinentes às _functions_ do [Firebase Functions](https://firebase.google.com/products/functions/) do projeto.

- __./public__

Aqui se encontram os arquivos estáticos exportados pelo [webpack](https://github.com/webpack/webpack). Este é o diretório que é transferido para o [Firebase Hosting](https://firebase.google.com/products/hosting/).

- __./nuxt__

Este diretório contém o código fonte da aplicação [Nuxt.js](https://nuxtjs.org/). As pastas internas contém READMEs específicos do próprio [Nuxt.js](https://nuxtjs.org/).

## Desenvolvendo

Para iniciar o Nuxt.js em modo de desenvolvimento, na raiz do projeto:
``` bash
$ npm run dev
```

---
## API

### Considerações Gerais

A API segue padrões __REST__ (_Representational State Transfer_), utilizando nomes ao invés de verbos na convenção de nomenclatura, a fim de facilitar o consumo universal, além de padronizar URIs para que um objeto seja unicamente representado pelas mesmas.

Seguindo a mesma ideia de manter a API universalmente utilizável, todas as respostas são padronizadas em __JSON__ (_JavaScript Object Notation_), que conterá apenas informações sobre o objeto de dados requisitado, enquanto informações sobre as transações estarão contidas no cabeçalho de resposta, salvo em caso de erro, ou seja, HTTP Status de resposta fora do range 200-299.

Todos os _endpoints_ de UPDATE (PUT), vale ressaltar, suportam _body_ de dados JSON parciais para update de campos específicos.

Ainda considerando informações gerais, todas as requisições, exceto as envolvidas em autenticação de usuário, deverão conter o cabeçalho HTTP `Authorization`, portando o _bearer token_ __JWT__ (_JSON Web Token_) fornecido pela API de autenticação.

``` bash
https://us-central1-beleaf-test.cloudfunctions.net/api/v1
```

### Autenticação

Todas as transações não relativas à autenticação, como já mencionado, deverão conter o cabeçalho `Authorization`, onde o cliente fornecerá um _Bearer Token_ JWT que confirmará a identidade do usuário requisitando o revurso. Este _token_ terá, por padrão estabelecido pelo serviço de autenticação do Google Firebase, validade por 01 (uma) hora e será fornecido através da API de autenticação, que também contém um _endpoint_ para _refresh_ do _idToken_.

#### /auth/login

##### Request

- Headers:
```
"Content-Type": "application/json"
```

- Body:
```
  {
    "email": "String",
    "password": "String"
  }
```

##### Response

Em resposta, a API devolverá dois tokens: um `idToken`, que será utilizado em todas as requisições; e um `refreshToken`, que será utilizado para conseguir um novo _token_ caso o anterior expire.

- Status: 200
- Body:
```
  {
    "kind": "String",
    "localId": "String",
    "email": "String",
    "displayName": "String",
    "idToken": "String",
    "registered": "Boolean",
    "refreshToken": "String",
    "expiresIn": "String"
  }
```

#### /auth/refresh

##### Request

- Headers:
```
"Content-Type": "application/json"
```

- Body:
```
  {
    "refreshToken": "String"
  }
```

##### Response

Em resposta, a API devolverá dois tokens: um `idToken`, que será utilizado em todas as requisições; e um `refreshToken`, que será utilizado para conseguir um novo _token_ caso o anterior expire.

- Status: 200
- Body:
```
  {
    "kind": "String",
    "localId": "String",
    "email": "String",
    "displayName": "String",
    "idToken": "String",
    "registered": "Boolean",
    "refreshToken": "String",
    "expiresIn": "String"
  }
```

---
© 2019 Danilo Narnatonis