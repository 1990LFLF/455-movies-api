## Usage

First clone this repository to your laptop. You must have Node (> v4) and [yarn](https://yarnpkg.com/lang/en/docs/install/) installed.

```bash
cd ~/code/$USER
git clone git@github.com:andrerferrer/455-movies-api.git
cd 455-movies-api
yarn install
stt # Open this folder in Sublime Text
```

## Para adicionar um plugin, precisamos de:

1. `yarn add <nome do plugin>`
1. criar o arquivo do plugin na pasta plugins
1. criar a função lá dentro e exportá-la
1. importar a função na entry file (index.js) e chamá-la

* (reiniciar o servidor se você tentar - sem sucesso - ser multitarefa que nem o André)
