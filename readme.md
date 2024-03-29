# Estoque

## Objetivo

Praticar conteúdo visto em sala para criação de uma página para controle de estoque para produtos, usando comunicação **HTTP** entre Cliente / Servidor, técnicas mais utilizadas e boas práticas de codificação.

### Conteúdos abordados:

- HTML
  - `<form>`
  - `<fieldset>`
  - `<label>`
  - `<input>`
  - `<select>`
  - `<button>`
  - `<dialog>`
  - `<output>`
  - `<table>`
  - `<template>`
- Web APIs:
  - `DOM`
  - `Fetch API`
  - `UI Events`
  - `Storage`
- HTTP:
  - `POST`
  - `GET`
  - `PUT`
  - `DELETE`

#### Conteúdo para aprendizado sobre a base do HTML

- [Semântica, Estrutura e APIs de Documentos HTML](https://www.notion.so/guiseek/HTML-c575c12e2175477586607fdce72a0cbc?pvs=4)

---

### Utilitários disponíveis

No diretório `src/utilities` estão disponíveis algumas funções e/ou classes utilitárias que são comuns de se encontrar em projetos e não devem ser o foco nesta atividade, sobrando mais tempo para que desenvolvam as partes mais importantes.

#### Para coletar dados do formulário em formato JSON, use:

```ts
const form = document.querySelector('form')
const data = getFormData<CreateProductDto>(form)
```

#### Para clonar um fragmento ou elemento template no HTML, use:

```ts
const template = document.querySelector('template')
const fragment = cloneTemplate(template)
```

---

## CRUD

### Interface base para construção

```ts
interface Product {
  id: number
  name: string
  price: string
  detail?: string
  amount?: string
  category?: string
  visible?: boolean
  created: Date
  updated: Date
}

interface CreateProductDto {
  name: string
  price: string
  detail?: string
  amount?: string
  category?: string
  visible?: boolean
}

interface UpdateProductDro extends Partial<CreateProductDto> {
  id: number
}
```

### Create

#### Com **HTML**

Crie um formulário para cadastro usando como base os campos da interface `CreateProductDto` acima usando [elementos semânticos](https://seek.surge.sh/posts/semantica-dos-elementos-html/).

> _**Observação**_
>
> Não é necessário o uso de todos elementos ou atributos apresentados como referência. Use o que entender que faça sentido e por último mas não menos importante, que haja tempo hábil para sua implementação.

#### Conteúdo para aprendizado, referência e exemplos de uso

- Elementos
  - Elemento [`<fieldset>`](https://www.notion.so/guiseek/Fieldset-50408fd02eac45cf9996fd9e967594f8?pvs=4)
  - Elemento [`<form>`](https://www.notion.so/guiseek/Form-75d237944516426cba4d93068d24bc52?pvs=4)
  - Elemento [`<label>`](https://www.notion.so/guiseek/Label-302046c8e99d4ce4a6a917600277ba68?pvs=4)
  - Elemento [`<input>`](https://www.notion.so/guiseek/Input-fa8d6c4457b741b8a7e91c587eaa52b5?pvs=4)
  - Elemento [`<select>`](https://www.notion.so/guiseek/Select-d1dc0ea926034560bc732f1545694d6f?pvs=4)
  - Elemento [`<button>`](https://www.notion.so/guiseek/Button-4101c114027544c2857cb99025f27e69?pvs=4)
  - Elemento [`<output>`](https://www.notion.so/guiseek/Output-86a7a92833714c8991fb3debed3a7636?pvs=4)
  - Elemento [`<dialog>`](https://www.notion.so/guiseek/Dialog-c8b52a43d031474e9b2d42f3a0660047?pvs=4)
- Atributos
  - Atributo [`[autocomplete]`](https://guiseek.notion.site/HTML-Forms-658f918f02434b438bdbff5d40885533)
- Validações
  - HTML5 [Form Validation](https://www.notion.so/guiseek/HTML-Form-Validation-feed32def6d64a278f4ecd1e6e2d70f7?pvs=4)

#### Com **TypeScript**

1. Escreva uma função que adicione aguarde o evento de submissão do formulário.
1.

### Retrieve

#### Conteúdo para conhecimento, referência e exemplos

- Elemento [`<table>`](https://www.notion.so/guiseek/Template-42678a5e9fe24b3694a7c262b61a0243?pvs=4)
- Elemento [`<template>`](https://www.notion.so/guiseek/Table-6ac55fb2532c47e29e38b4fd4ebcaf3f?pvs=4)
- Elemento [`<button>`](https://www.notion.so/guiseek/Button-4101c114027544c2857cb99025f27e69?pvs=4)

### Update

### Delete

---

## Stack

<section style="display: flex; align-items: flex-end">
	<figure>
		<img src=./public/html.svg width=200>
	</figure>
	<figure>
		<img src=./public/typescript.svg width=160>
	</figure>
</section>
