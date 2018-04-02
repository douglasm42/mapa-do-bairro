# mapa-do-bairro
Mapa de pontos de interesse.

Como executar o código:
* `npm install` para instalar as dependências.
* `npm run start` para rodar o servidor de desenvolvimento.
* `npm run build` para construir o código.
* `npm run watch` para vigiar o código e construir quando necessário.

Foi utilizado o `React` para implementar a interface, `sass` para
lidar com o `css` e `superagent` para requisições `http`.

API de mapas do Google para criar o mapa e API da wikipédia para
obter mais informações sobre os lugares.

## Estrutura do projeto

O código está todo na pasta src, dividido em `css`, `img` e `js`.

Dentro de `js` o projeto está dividido em `components` para o código
dos componentes `React`, `data` para os dados do aplicativo e `map`
para o código que lida com a API do Google Maps.

O aplicativo começa iniciando os componentes `react`, depois inicia
o carregamento do mapa do Google, e quando isso é concluido,
adiciona os pontos ao mapa e libera a aplicação para o uso.

### `components`
Os componentes `React` estão divididos em cinco partes enraizadas no
componente `Layout`. As partes são: `Header`, `SideBar`, `MapContainer`,
`Details` e `Loading`.

`Loading` é usado para mostrar uma tela preta indicando que o aplicativo
está carregando, e impedir qualquer interação com o aplicativo até
o carregamento ser concluído.

`Header` possui um botão para mostrar a barra lateral e o título do
aplicativo.

`Sidebar` contém a lista de lugares e um campo para filtrar os lugares.

`MapContainer`, como o nome diz, é onde o mapa da API do Google Maps
é inserido.

`Details` mostra detalhes de um lugar, quando ele é selecionado.

### `data`

`places_container` é uma classe para facilitar a manipulação dos
lugares e `places_data` carrega os lugares dentro do container e
exporta ele. Mais detalhes nos comentários.

### `map`

Aqui está o código responsavel por criar e manter o mapa.
`init` inicializa o mapa, `map` controla o mapa e `marker` é
responsavel pelos marcadores no mapa.
