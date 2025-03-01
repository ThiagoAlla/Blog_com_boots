# Blog das Lendas do Xadrez - De Cara Nova!

Este projeto é um blog dedicado aos maiores jogadores de xadrez da história. Ele apresenta postagens detalhadas sobre as lendas do xadrez, incluindo suas biografias, conquistas e legados alem de uma resenha interna.

# OBS:
#### Devido a limitação do sigaa estou mandando este readme e aqui está o link para o projeto:



## Funcionalidades

- **Página inicial** com carrossel de postagens destacadas.
- **Página de sobre**, com informações sobre o blog e seus integrantes.
- **Página individual de postagens** com detalhes completos sobre cada jogador de xadrez.
- **Formulário de contato** para interagir com os administradores.
- **Formulário de comentários** para os visitantes interagirem nas postagens.

## Estrutura do Projeto
        BOOT_BLOG/
        ├── node_modules/
        ├── public/
        │   └── assets/
        │       ├── Alexander_Alekhine-07.png
        │       ├── Anatoly_Karpov-03.png
        │       ├── Bobby_Fischer-04.png
        │       ├── chess-computer-strategy-svgrepo-com.svg
        │       ├── Garry_Kasparov-02.png
        │       ├── icons8-github.svg
        │       ├── Jose_Raul_Capablanca-05.png
        │       ├── Magnus_Carlsen-01.png
        │       ├── Mikhail_Botvinnik-06.png
        │       ├── Paul_Morphy-10.png
        │       ├── Predote.png
        │       ├── Thiago.png
        │       ├── Viswanathan_Anand-09.png
        │       ├── Vladimir_Kramnik-08.png
        │       └── icons8-xadrez-com.svg
        ├── src/
        │   ├── components/
        │   │   ├── About.jsx
        │   │   ├── Carousel.jsx
        │   │   ├── CommentForm.jsx
        │   │   ├── Footer.jsx
        │   │   ├── Navbar.jsx
        │   │   ├── PostDetail.jsx
        │   │   └── PostList.jsx
        │   ├── postagens/
        │   │   └── todas_postagens.json
        │   ├── App.css
        │   ├── App.jsx
        │   ├── index.css
        │   └── main.jsx
        ├── .env.local
        ├── .gitignore
        ├── eslint.config.js
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── README.md
        └── vite.config.js

O blog foi desenvolvido utilizando:

- **React** para a construção da interface.
- **Bootstrap** para o layout responsivo.
- **Vite** para o ambiente de desenvolvimento rápido.
- **EmailJS** para enviar comentários via e-mail.
- **React Router** para navegação entre páginas.

---

## Instruções para Rodar o Projeto

### Pré-requisitos

- Node.js instalado (pode ser baixado [aqui](https://nodejs.org/)).
- npm (gerenciador de pacotes do Node) ou yarn instalado.

### Passo 1: Clonar o Repositório

Primeiro, clone o repositório para a sua máquina local:

##````bash
git clone https://github.com/ThiagoAlla/blog-das-lendas-do-xadrez.git
cd blog-das-lendas-do-xadrez
##````

### Passo 2: Instalar Dependências

Instale as dependências necessárias usando o npm (ou yarn se preferir):

##````bash
npm install
##````

ou, se estiver utilizando o Yarn:

##````bash
yarn install
##````

### Passo 3: Rodar o Projeto em Desenvolvimento

Com as dependências instaladas, inicie o servidor de desenvolvimento com o comando:

##````bash
npm run dev
##````

ou com o Yarn:

##````bash
yarn dev
##````

O servidor estará rodando e você poderá acessar o blog no navegador através do endereço:

> http://localhost:5173

---

## Estrutura de Arquivos

- `src/`: Contém todos os arquivos principais do React.
  - `components/`: Componentes reutilizáveis como `Navbar`, `Footer`, etc.
  - `postagens/`: Pasta com o arquivo `todas_postagens.json` contendo as informações sobre as postagens de xadrez.
  - `pages/`: Páginas do site, como a página de detalhes da postagem e a página "Sobre".
  - `App.jsx`: Arquivo principal de entrada da aplicação.
- `public/`: Arquivos públicos, como imagens e ícones.

---

## Customização

### Temas e Estilo

- O blog foi criado com um tema escuro, com algumas personalizações no Bootstrap. Os estilos podem ser encontrados nos componentes e no arquivo CSS.
- Para customizar o estilo, altere o arquivo `App.css` ou adicione novas classes no componente de seu interesse.

### Conteúdo de Postagens

- As postagens estão armazenadas em `src/postagens/todas_postagens.json`. Para adicionar novas postagens, basta seguir a estrutura do JSON, adicionando novos objetos com os campos `id`, `titulo`, `imagem`, `descricao`, `conteudo` e `Wikipedia` (opcional).

---

## Como Enviar um Comentário

Para que os comentários sejam enviados para o e-mail, é necessário configurar o EmailJS.

### Passo 1: Criar uma Conta no [EmailJS](https://www.emailjs.com/)

1. Registre-se no EmailJS.
2. Crie um novo serviço de e-mail e um novo template de e-mail.
3. Copie os seguintes valores:
   - **Service ID**
   - **Template ID**
   - **User ID**

### Passo 2: Configurar o EmailJS

No arquivo `src/components/CommentForm.jsx`, substitua os seguintes valores:

##````javascript
emailjs.send(
  "service_5esgvj7", // Substitua pelo seu Service ID
  "template_fi4iram", // Substitua pelo seu Template ID
  templateParams,
  "szX6gi5ARKzBYNLZ0" // Substitua pela sua User ID
);
##````

Depois de configurar, os comentários enviados pelo formulário de contato serão enviados para o seu e-mail.

---

## Adicionando Novas Postagens

As postagens estão armazenadas em um arquivo JSON dentro de `src/postagens/todas_postagens.json`. A estrutura de cada postagem é a seguinte:

##````json
{
  "id": 1,
  "titulo": "Magnus Carlsen",
  "imagem": "/assets/magnus.jpg",
  "descricao": "Magnus Carlsen é um dos maiores jogadores de xadrez da história...",
  "conteudo": [
    "Magnus Carlsen foi um prodígio do xadrez desde muito jovem...",
    "Em 2013, ele se tornou o campeão mundial de xadrez..."
  ],
  "Wikipedia": "https://pt.wikipedia.org/wiki/Magnus_Carlsen"
}
##````

Adicione ou edite as postagens seguindo essa estrutura.

---

## Contribuições

Se você deseja contribuir para o projeto, basta fazer um fork do repositório, criar uma branch com sua alteração e enviar um pull request.

---

## Licença

Este projeto é de código aberto, e você pode utilizá-lo e modificá-lo conforme suas necessidades, desde que cite a autoria do projeto.

---