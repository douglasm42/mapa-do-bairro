# mapa-do-bairro
Penúltimo projeto do curso de desenvolvedor front end da Udacity.

Como executar o código:
* `npm install` para instalar as dependências.
* `npm run start` para rodar o servidor de desenvolvimento.
* `npm run build` para construir o código.
* `npm run watch` para vigiar o código e construir quando necessário.

Eu utilizei o `React` para implementar a interface, `sass` para
lidar com o `css` e `superagent` para requisições `http`.

## Estrutura do projeto

O código está todo na pasta src, dividido em `css`, `img` e `js`.

Dentro de `js` o projeto está dividido em `components` para o código
dos componentes `React`, `data` para os dados do aplicativo e `map`
para o código que lida com a API do Google Maps.

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

Os dados do aplicativo ficam no arquivo `places_data.json`, isso
facilita a manutenção dos lugares disponiveis no aplicativo.
Os lugares são definidos no arquivo da seguinte forma:

```json
  {
    "name": "Palácio das Esmeraldas",
    "position": {
      "lat": -16.681105,
      "lng": -49.256208
    },
    "wikipedia": "Palácio_das_Esmeraldas"
  }
```

O parametro `wikipedia` é o título do artigo que deve ser vinculado
ao local, este parametro existe pois o título na wikipédia pode
ser diferente ou muito longo para ser exibido no aplicativo.

`places_container` é uma classe para facilitar a manipulação dos
lugares e `places_data` carrega os lugares dentro do container e
exporta ele. Mais detalhes nos comentários.

### `map`

Aqui está o código responsavel por criar e manter o mapa.
`init` inicializa o mapa, `map` controla o mapa e `marker` é
responsavel pelos marcadores no mapa.
