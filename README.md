# 💰 CriptoApp

Uma aplicação web moderna desenvolvida em React e TypeScript para consultar informações sobre criptomoedas em tempo real. O projeto consome a API do CoinCap para exibir dados atualizados sobre as principais moedas digitais do mercado.

## 📸 Preview

### Página Inicial
![Página Inicial](./docs/screenshots/home.png)

### Página de Detalhes
![Página de Detalhes](./docs/screenshots/detail.png)

### Busca de Moedas
![Busca de Moedas](./docs/screenshots/search.png)

## 🚀 Funcionalidades

- **Listagem de Criptomoedas**: Visualize as principais criptomoedas do mercado em uma tabela organizada
- **Busca de Moedas**: Pesquise por qualquer criptomoeda digitando seu nome ou símbolo
- **Detalhes da Moeda**: Acesse informações detalhadas sobre cada criptomoeda
- **Paginação**: Carregue mais moedas conforme necessário
- **Dados em Tempo Real**: Informações atualizadas sobre preço, volume, capitalização de mercado e variação de 24h
- **Interface Responsiva**: Design adaptável para diferentes tamanhos de tela

## 🛠️ Tecnologias Utilizadas

- **React 19.2.0** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool moderna e rápida
- **React Router DOM 7.12.0** - Roteamento para aplicações React
- **React Icons 5.5.0** - Biblioteca de ícones
- **CSS Modules** - Estilização com escopo local
- **CoinCap API** - API para dados de criptomoedas

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn** (gerenciador de pacotes)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
```

2. Entre na pasta do projeto:
```bash
cd criptoapp
```

3. Instale as dependências:
```bash
npm install
```

## ▶️ Como Executar

### Modo de Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173` (ou outra porta indicada no terminal).

### Build para Produção

Para criar uma build otimizada para produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist`.

### Preview da Build

Para visualizar a build de produção localmente:

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
criptoapp/
├── public/              # Arquivos estáticos
├── src/
│   ├── assets/         # Imagens e recursos
│   ├── components/     # Componentes reutilizáveis
│   │   ├── header/     # Cabeçalho da aplicação
│   │   └── layout/     # Layout principal
│   ├── pages/          # Páginas da aplicação
│   │   ├── home/       # Página inicial com listagem
│   │   ├── detail/     # Página de detalhes da moeda
│   │   └── notfound/   # Página 404
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Ponto de entrada
│   └── router.tsx      # Configuração de rotas
├── package.json
└── vite.config.ts
```

## 🎯 Rotas da Aplicação

- `/` - Página inicial com listagem de criptomoedas
- `/detail/:cripto` - Página de detalhes de uma criptomoeda específica
- `*` - Página 404 para rotas não encontradas

## 📊 Dados Exibidos

Para cada criptomoeda, a aplicação exibe:

- **Nome e Símbolo**: Identificação da moeda
- **Preço**: Valor atual em USD
- **Capitalização de Mercado**: Valor total de mercado
- **Volume 24h**: Volume negociado nas últimas 24 horas
- **Variação 24h**: Percentual de mudança no preço (com destaque visual para ganhos/perdas)

## 🔍 Como Usar

1. **Visualizar Moedas**: Na página inicial, você verá uma tabela com as principais criptomoedas
2. **Buscar Moeda**: Use o campo de busca no topo da página para pesquisar por nome ou símbolo (ex: "bitcoin")
3. **Ver Detalhes**: Clique no nome de qualquer moeda na tabela para ver informações detalhadas
4. **Carregar Mais**: Use o botão "Carregar mais" para exibir mais moedas na listagem

## 🧪 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter para verificar o código

## 📝 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👨‍💻 Desenvolvido por

Projeto desenvolvido como parte do curso Full Stack Pro da Sujeito Programador.

---

**Nota**: Este projeto utiliza a API do CoinCap. Certifique-se de que você tem uma conexão com a internet para que a aplicação funcione corretamente.
