<br/>

<p align="center" style="margin-top: 10px">
  <a href="https://muda.education/" target="blank"><img src="https://www.cannect.life/static/media/logo2.54b3411ddf1ec384b17d1338e4425523.svg" width="200" alt="Muda Logo" /></a>
</p>

<p align="center">Cannect Progressive Web Application (PWA)</p>
<p align="center">
  <a href="emailto:rennan@muda.education" target="_blank">
    <img src="https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg" alt="contact email">
  </a>
  <a href="https://cannect.life/" target="_blank">
    <img src="https://img.shields.io/website-up-down-green-red/http/monip.org.svg" alt="cannect website">
  </a>
  <a href="https://github.com/MudaBrasil/muda-api/blob/main/LICENSE" target="_blank">
    <img src="https://img.shields.io/github/license/MudaBrasil/muda-web.svg" alt="Mit License">
  </a>
  <a href="https://react.dev/" target="_blank">
    <img src="https://badgen.net/badge/lib/React" alt="React">
  </a>
  <a href="https://vitejs.dev/" target="_blank">
    <img src="https://badgen.net/badge/bundler/Vite" alt="Vite">
  </a>
  <a href="https://vitest.dev/" target="_blank">
    <img src="https://badgen.net/badge/unit test/Vitest" alt="Vitest">
  </a>
  <a href="https://cypress.io/" target="_blank">
    <img src="https://badgen.net/badge/e2e test/Cypress" alt="Cypress">
  </a>
</p>

## Descrição

Aplicação web desenvolvida em ReactJS construido com o Vite para empresa [Cannect](https://www.cannect.life/).

## Tecnologias, bibliotecas e padrões utilizados

<div style="text-align: left; display: grid; grid-template-columns: 1fr 1fr 1fr;">
  <div>

 - [Git](https://git-scm.com/)
 - [Yarn](https://yarnpkg.com/)
 - [ESLint](https://eslint.org/)
 - [Prettier](https://prettier.io/)
 - [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5)
 - [TypeScript](https://www.typescriptlang.org/)
  <!-- - [i18next](https://www.i18next.com/) -->
  </div>
  <div>

 - [TDD](https://pt.wikipedia.org/wiki/Test-driven_development)
 - [PWA](https://web.dev/progressive-web-apps/)
 - [Cypress](https://www.cypress.io/)
 - [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
 - [SCSS](https://sass-lang.com/)
 - [FontAwesome](https://fontawesome.com/)
  <!-- - [Sentry](https://sentry.io/welcome/) -->
  </div>
  <div>

 - [ReactJS](https://reactjs.org/)
 - [Vite](https://vitejs.dev/)
 - [Vitest](https://vitest.dev/)
 - [SWC](https://swc.rs/)
 - [React Router](https://reactrouter.com/)
 - [Styled Components](https://styled-components.com/)
    <!-- - [React Hook Form](https://react-hook-form.com/) -->
    </div>
  </div>

## Requisitos V1 (Concluído)

Esses requisitos foram os que priorizei para atender o básico, e nessa versão eu tentei ser o mais fiel ao layout original. Por isso para testar a fidelidade use a versão v1.1, essas versões podem ser encontradas pelos commits.

Construí utilizando HTML semántico, no inicio eu tentei construir o layout utilizando flex e um sistema de Row e Column que eu criei se baseando no bootstrap. Por mais que esse método que criei seja bom pra construir a responsividade, eu percebi que eu teria muitas dificuldades pra adaptar essa estratégia conforme a responsividade do site original, então eu decidi refazer construindo se baseando nas classes e media queries do original.

O Componente que mais gostei de construir foi o Navbar, mas também criei o Footer usando o sistema de Row e Columns para responsividade e componentes de Cards da tela home para serem reutilizados. Também criei componentes de listas de card para isolar a lógica.

<input type="checkbox" checked/>Adicionando ESLint<br/>
<input type="checkbox" checked/>Adicionando Prettier<br/>
<input type="checkbox" checked/>Componente NavBar<br/>
<input type="checkbox" checked/>Utilizar scss, flex e css grid<br/>
<input type="checkbox" checked/>HTML Semántico<br/>
<input type="checkbox" checked/>Adicionar font: Spartan<br/>
<input type="checkbox" checked/>Componente Footer<br/>
<input type="checkbox" checked/>Componente de cards<br/>
<input type="checkbox" checked/>Componente de botão, com variações e animações<br/>
<input type="checkbox" checked/>Home - Seção 1 - Inicie seu tratamento<br/>
<input type="checkbox" checked/>Home - Seção 2 - Seu caminho para uma vida melhor<br/>
<input type="checkbox" checked/>Home - Seção 3 - Somos o maior ecossistema<br/>
<input type="checkbox" checked/>Home - Seção 4 - Encontre ciência, saúde e bem-estar<br/>
<input type="checkbox" checked/>Home - Seção 5 - Cuidamos de você em todo processo<br/>
<input type="checkbox" checked/>Home - Seção 6 - Quebre o tabu sobre Cannabis<br/>
<input type="checkbox" checked/>Home - Seção 7 - Histórias reais<br/>
<input type="checkbox" checked/>Home - Seção 8 - Parceiros Cannect (usar padrão da /area-parceiros)<br/>
<input type="checkbox" checked/>Home - Seção 9 - Leia aqui as novidades<br/>
<input type="checkbox" checked/>Responsividade com media-queries<br/>
<input type="checkbox" checked/>Background superior esquerdo levemente esverdeado<br/>
<input type="checkbox" checked/>Background inferior direito levemente esverdeado (fixo)<br/>

## Requisitos V2 (Conclúido)

Nessa segunda versão eu implementeu melhorias de acordo com a minha experiencia, então em alguns casos pode ser que algum componente ou responsividade distoe do original. Porém acredito que essas mudanças vão tornar a experiencia do usuário melhor.

<input type="checkbox" checked/>Home: Cards usando Paralax<br/>

## Requisitos V3 (A fazer - Desejáveis)

Esses requisitos são os que eu acho que seriam interessantes para o projeto, mas que ainda não consegui implementar.

<input type="checkbox"/>Dialogo para perguntar sobre Cookies<br/>
<input type="checkbox"/>Banner desktop - Comece seu tratamento inicial<br/>
<input type="checkbox"/>Componente fale conosco com formulário em dialogo<br/>
<input type="checkbox"/>Componente Whatsapp<br/>
<input type="checkbox"/>Desenvolver com TDD<br/>
<input type="checkbox"/>Criar manifest e service work para PWA<br/>
<input type="checkbox"/>Validar PWA passando no PWABuilder<br/>
<input type="checkbox"/>Rodar cypress para cenários de usuários<br/>
<input type="checkbox"/>Chamada RestAPI para algum formulário<br/>
<input type="checkbox"/>Criar uma RestAPI servir requests JSON<br/>
<input type="checkbox"/>Fale conosco em Modal<br/>
<input type="checkbox"/>Login em Modal ou no Top Bar<br/>
<input type="checkbox"/>Home: Titulo "cannabis medicinal" com font-weigh 700<br/>
<input type="checkbox"/>Home: Cards em carousel animado com cards pausando e expandindo no hover<br/>
<input type="checkbox"/>Home: footer "saiba mais" nos cards "cuidamos de voce"<br/>
<input type="checkbox"/>Home: Adicionar letter-spacing de 0.1px para corrigir quando tem escrito "fi" e etc.<br/>
<input type="checkbox"/>Home: Padronizar botoes/links de saiba mais<br/>
<input type="checkbox"/>Home: Criar mais animações e efeitos<br/>
<input type="checkbox"/>Home: Linkar imagens sem links<br/>
<input type="checkbox"/>Footer: Ajustar altura do "Acesso Rápido" com "Fale Conosco" e reordernar<br/>
<input type="checkbox"/>Footer: Mudar cor do botão do assinar newsletter de azul para laranja (#eb903d) e aumentar tamanho<br/>
<input type="checkbox"/>Footer: "Assine a newsletter" com fonte menor<br/>
<input type="checkbox"/>Footer: Licença com ano automático © 2023 Cannect <br/>
<input type="checkbox"/>Implementar i18n<br/>
<input type="checkbox"/>Adicionar internacionalização para Ingles<br/>
<input type="checkbox"/>Adicionar internacionalização para Espanhol<br/>
<input type="checkbox"/>Produtos<br/>
<input type="checkbox"/>Produtos: Loadings contextuais<br/>
<input type="checkbox"/>Agenda sua consulta<br/>
<input type="checkbox"/>Tratamentos<br/>
<input type="checkbox"/>Para profissionais da Saúde<br/>
<input type="checkbox"/>Para parceiros<br/>
<input type="checkbox"/>Blog<br/>
<input type="checkbox"/>Blog: Criar modo mansonry/pinterest<br/>
<input type="checkbox"/>Adicionar Sentry<br/>
<input type="checkbox"/>Adicionar React Hook Form<br/>

## Observações

- Nos desejáveis eu adicionei itens que não foram solicitados, mas que eu acho que seriam mudanças interessantes tanto na interface quanto na experiência do usuário.

## Instalação

```bash
$ yarn install
```

## Executando aplicação

```bash
# development
$ yarn dev

# build
$ yarn build

# production mode
$ yarn preview

```

## Testando

```bash
# unit tests
$ yarn test

# test unit coverage
$ yarn coverage

# e2e tests and coverage
$ yarn cy:run-e2e

# lint
$ yarn lint
```

## Entre em contato

- Author - [Rennan Moreira](https://github.com/rennanmoreira)
- Website - [Muda](https://muda.education/)
- Linkedin - [Software Engineer](https://www.linkedin.com/in/rennanmoreira/)

## Licença

[MIT licensed](LICENSE).

# Cannect Life - Teste Front-End

Olá caro desenvolvedor front-end, nesse teste analisaremos seu conhecimento geral, velocidade de desenvolvimento e padrões de projeto utilizados. Abaixo explicaremos tudo o que será necessário, lembrando que, tecnologias mais recentes, aumento de complexidade, foco em performance, serão pontos positivos na avaliação.

## Descrição do teste

Essa avaliação consiste em testar seus conhecimentos em ReactJS. Você será responsável por desenvolver a HOME do portal da Cannect, presente no link ao lado [Cannect-Projeto-Frontend](https://cannect.life/), com elementos separados e devidamente detalhados.

Atenção: Para a avaliação será necessário desenvolver apenas a HOME, mas caso queria desenvolver outras telas, também será considerado.

O tempo ideal para realização da tarefa é de **5 dias**. Também consideramos que, se demorar pouco mais do que isso, mas entregar um projeto melhor estruturado e com tecnologias mais recentes, também será tão válido quanto o de 3 dias.

- Prazo ideal: 5 dias
- Prazo máximo: 7 dias

## O que você precisará fazer

A forma de entregar o projeto deve ser feita pelo GitHub, através do processo descrito abaixo:

- Clone este repositório para sua máquina;
- Crie uma branch com o nome _teste-front-end-SEUNOME_;
- Faça um commit da sua branch;
- Dê um pull request da sua branch;
- Avise-nos por e-mail que o pull request foi feito (rafaelbiton@cannect.com.br);
- Entregar um arquivo md com um descritivo passo-a-passo (simples) de como executar a aplicação.

## Quais tecnologias você pode utilizar?

Você pode escolher uma ou mais tecnologias para a entrega, exceto o framework Javascript, que é requisito que a entrega seja feita em um deles:

- ReactJS;
- Styled-components para construção do layout;
- HTML compatível com IE8+, Chrome, Firefox e Safari (Cross-browsing);
- FontAwesome para ícones e outros elementos gráficos presentes nas páginas;
- Qualquer outra tecnologia que julgar necessário ou que tiver familiaridade.

## O que será avaliado?

- Clareza do código
- Código 100% responsivo
- HMTL Limpo, claro e organizado
- Controle correto das rotas da aplicação
- Uso correto do Git
- Conhecimento de JS
- Testes Unitários (pode usar qualquer tecnologia).

## Pontos extras (diferencial)

Seria muito interessante se você pudesse trabalhar com algumas das tecnologias abaixo (Já que utilizamos todas elas no dia-a-dia)

- Uso de pré-processador HTML + Modular/Componentizado;
- Uso de pré-processador CSS (SCSS/SASS, Stylus ou PostCSS) + Modular/Componentizado;
- Uso de ES6 / ES7;
- Implementação de chamada para uma RestAPI em qualquer um dos formulários existentes no projeto;
- Implementação de uma RestAPI para receber conteúdo de um dos formulários do projeto - [JSON Placeholder](https://jsonplaceholder.typicode.com/);
- Funcionalidades/tecnologias extras no geral serão sempre bem-vindas, desde que explicadas e bem codadas.

Caso tenha ficado alguma dúvida entre em contato com [rafaelbiton@cannect.com.br](mailto:rafaelbiton@cannect.com.br).

console.log('Boa sorte!')
