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

-  [Vuetify](https://github.com/vuetifyjs/vuetify) _(UI Framework)_

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

- Instale as ferramentas de linha de comando _CLI_ do _Firebase_
```bash
$ npm install -g firebase-tools
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

- __./src__

Este diretório contém o código fonte da aplicação [Nuxt.js](https://nuxtjs.org/). As pastas internas contém READMEs específicos do próprio [Nuxt.js](https://nuxtjs.org/).

## Desenvolvendo

Para iniciar o Nuxt.js em modo de desenvolvimento, na raiz do projeto:
``` bash
$ npm run dev
```

---
© 2019 Danilo Narnatonis