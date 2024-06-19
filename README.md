# Documentação do Projeto

Este documento descreve a estrutura do projeto e a organização dos arquivos para facilitar o entendimento e a manutenção do código.

## Estrutura do Projeto

Abaixo está a estrutura do projeto, com a descrição de cada diretório e sua finalidade.


## Descrição dos Diretórios e Arquivos

### Raiz do Projeto

- **`App.tsx`**: Arquivo principal do aplicativo que configura e inicia a aplicação. Geralmente, ele contém o provedor de navegação e as configurações globais.

### `src/`

- **`api/`**
  - **`apiConfig.ts`**: Configuração das chamadas de API, como URLs base, interceptores e headers.
  - **`index.ts`**: Exporta as funcionalidades de API para uso em outras partes da aplicação.

- **`assets/`**
  - **`brand/`**: Contém imagens e recursos de branding.
  - **`fonts/`**: Armazena as fontes usadas na aplicação.
  - **`icons/`**: Armazena os ícones.

- **`components/`**
  - **`DrinkCard/`**
    - **`DrinkCard.tsx`**: Componente para exibir informações resumidas de um drink.
    - **`DrinkCardStyles.ts`**: Estilos específicos para o `DrinkCard`.
  - **`Filter/`**
    - **`Filter.tsx`**: Componente de filtro para buscar drinks por categoria, ingrediente, etc.
    - **`FilterStyles.ts`**: Estilos específicos para o `Filter`.
  - **`Loading/`**
    - **`Loading.tsx`**: Componente para exibir um indicador de carregamento.
    - **`LoadingStyles.ts`**: Estilos específicos para o `Loading`.
  - **`index.ts`**: Exporta todos os componentes do diretório para facilitar a importação.

- **`domain/`**
  - **`Auth/`**
    - **`adapter.ts`**: Adaptações ou transformações de dados relacionados à autenticação.
    - **`api.ts`**: Funções para chamadas de API relacionadas à autenticação.
    - **`service.ts`**: Serviços de autenticação, como login e registro de usuários.
    - **`types.ts`**: Definições de tipos e interfaces para a autenticação.
  - **`index.ts`**: Exporta as funcionalidades ou constantes relacionadas ao domínio.

- **`hooks/`**
  - **`Drinks/`**
    - **`useDrinks.ts`**: Hook personalizado para gerenciar a lógica dos drinks, incluindo operações de CRUD.
  - **`index.ts`**: Exporta todos os hooks do diretório para facilitar a importação.

- **`infra/`**
  - **`hooks/`**: Diretório para hooks relacionados à infraestrutura (ainda não utilizados).
  - **`index.ts`**: Exporta as funcionalidades de infraestrutura.
  - **`types/`**
    - **`types.ts`**: Definições de tipos utilizados na infraestrutura.

- **`routes/`**
  - **`index.ts`**: Configuração da navegação entre as telas da aplicação.

- **`screens/`**
  - **`DrinkDetail/`**
    - **`DrinkDetailScreen.tsx`**: Tela para visualizar detalhes e editar um drink.
    - **`DrinkDetailStyles.ts`**: Estilos específicos para a tela de detalhes do drink.
  - **`Home/`**
    - **`HomeScreen.tsx`**: Tela inicial da aplicação.
    - **`HomeStyles.ts`**: Estilos específicos para a tela inicial.
  - **`Menu/`**
    - **`MenuScreen.tsx`**: Tela de listagem e filtro de drinks.
    - **`MenuStyles.ts`**: Estilos específicos para a tela de listagem.
  - **`RegisterDrink/`**
    - **`RegisterDrinkScreen.tsx`**: Tela para adicionar um novo drink.
    - **`RegisterDrinkStyles.ts`**: Estilos específicos para a tela de registro de drinks.
  - **`StockControl/`**
    - **`StockControlScreen.tsx`**: Tela para controle de estoque de ingredientes.
    - **`StockControlStyles.ts`**: Estilos específicos para a tela de controle de estoque.
  - **`index.ts`**: Exporta todas as telas do diretório para facilitar a importação.

- **`services/`**
  - **`Drink/`**
    - **`DrinkService.ts`**: Serviço para operações CRUD relacionadas a drinks no banco de dados.
  - **`index.ts`**: Exporta todos os serviços do diretório para facilitar a importação.

- **`test/`**
  - **`index.ts`**: Ponto de entrada para configuração ou inicialização de testes.
  - **`jestSetup/`**
    - **`jestSetup.ts`**: Configurações específicas para o Jest.
  - **`server/`**
    - **`handlers.ts`**: Handlers de servidor (provavelmente mocks ou stubs para testes).
    - **`server.ts`**: Configuração do servidor de teste.
  - **`testUtils/`**
    - **`test-utils.tsx`**: Utilitários para facilitar a escrita de testes.

- **`theme/`**
  - **`theme.ts`**: Definições de tema e estilos globais usados na aplicação.

- **`types/`**
  - **`index.ts`**: Definições de tipos globais utilizados em toda a aplicação.

- **`utils/`**
  - **`index.ts`**: Funções utilitárias e helpers gerais.

## Como Contribuir

Para contribuir com este projeto, siga as etapas abaixo:

1. Faça um fork do repositório.
2. Crie um branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -am 'Adiciona nova feature'`).
4. Faça o pull request se necessário
