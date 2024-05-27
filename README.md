# Teste Petize

## Sobre o teste

- O objetivo do teste é medir minhas capacidades técnicas em Front-end utilizando o framework Angular, a ser avaliado pela empresa Petize;
- A proposta: Construir uma aplicação Angular que busque o perfil de desenvolvedores na API pública do GitHub e exibir os seus dados em uma página de perfil;

## Referências e API's utilizadas

- API de busca de usuários do GitHub: https://api.github.com/users/username
- API de busca de repositórios do usuário pesquisado: https://api.github.com/users/username/repos
- Documentação oficial do GitHub: https://docs.github.com/en/rest

## Escolha das bibliotecas e estrutura
Optei por fazer uma parte mais específica do css "puro", onde a opção se fazia mais viável. Em boa parte do projeto, utilizei bootstrap para facilitar o desenvolvimento de flexbox, grid, sizing, spacing etc.

O projeto é component-based, afim de tentar economizar linhas de código por meio do princípio DRY: Don't Repeat Yourself, que visa diminuir a quantidade de código repetidos, problema que vai diretamente contra as boas práticas e princípios de SOLID

## Versões e Dependências

- Angular CLI: 18.0.1
- Node: 22.2.0
- npm: 10.7.0
- TypeScript: 5.4.2

## Instalação do Projeto

- Certifique-se de instalar O Angular CLI, Node e NPM nas versões citadas acima;
- Clone o projeto utilizando o git clone;
- Na pasta do projeto, execute no terminal o comando npm install;
- Após finalização, basta digitar o comando ng serve, para subir a aplicação localmente na sua máquina;
- Caso queira um build da aplicação, execute o comando ng build e, após o processo, os arquivos gerados estarão disponíveis na pasta dist.
