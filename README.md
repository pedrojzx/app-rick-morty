# Personagens de Rick and Morty

App simples feito com **React Native + Expo** que consome a API pública
[Rick and Morty API](https://rickandmortyapi.com/) e exibe uma lista de
personagens com foto, nome, espécie e status.

## Como rodar

```bash
npm install
npx expo start
```

Depois, escaneie o QR Code com o app **Expo Go** no celular,
ou rode `npx expo start --web` para abrir no navegador.

## O que o app faz

- Busca os dados da API com `fetch`
- Mostra um indicador de carregamento
- Trata erros de conexão
- Exibe os personagens em uma `FlatList`

## Tecnologias

- React Native
- Expo