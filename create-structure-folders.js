const fs = require('fs');
const path = require('path');

const structure = {
  src: {
    api: ['apiConfig.ts', 'index.ts'],
    assets: {
      brand: [],
      fonts: [],
      icons: [],
    },
    components: ['index.ts'],
    domain: {
      Auth: ['adapter.ts', 'api.ts', 'service.ts', 'types.ts'],
      '': ['index.ts'],
    },
    hooks: ['index.ts'],
    infra: {
      hooks: [],
      types: ['types.ts'],
      '': ['index.ts'],
    },
    routes: ['index.ts'],
    screens: ['index.ts'],
    services: ['index.ts'],
    test: {
      server: ['handlers.ts', 'server.ts'],
      jestSetup: ['jestSetup.ts'],
      testUtils: ['test-utils.tsx'],
      '': ['index.ts'],
    },
    theme: ['theme.ts'],
    types: ['index.ts'],
    utils: ['index.ts'],
  },
};

function createStructure(basePath, struct) {
  for (const key in struct) {
    const currentPath = path.join(basePath, key);
    if (Array.isArray(struct[key])) {
      if (!fs.existsSync(currentPath)) {
        fs.mkdirSync(currentPath, { recursive: true });
      }
      struct[key].forEach(file => {
        const filePath = path.join(currentPath, file);
        if (!fs.existsSync(filePath)) {
          fs.writeFileSync(filePath, '');
        }
      });
    } else {
      if (!fs.existsSync(currentPath)) {
        fs.mkdirSync(currentPath, { recursive: true });
      }
      createStructure(currentPath, struct[key]);
    }
  }
}

const basePath = path.join(__dirname, 'src');
createStructure(basePath, structure);

console.log('Estrutura de pastas e arquivos criada com sucesso!');
