module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:@tanstack/eslint-plugin-query/recommended', // Adiciona recomendações para TanStack Query
  ],
  plugins: [
    'import', // Plugin para gerenciar e ordenar importações
    '@tanstack/query', // Plugin específico para TanStack Query
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Aplica regras específicas para arquivos TypeScript
      rules: {
        'import/order': [
          // Regras para ordenar importações
          'error',
          {
            groups: ['external', 'builtin', 'internal', 'parent', 'sibling'],
            pathGroups: [
              {
                pattern: 'react+(|-native)',
                group: 'external',
                position: 'before',
              },
              {
                pattern:
                  '@+(routes|screens|components|hooks|theme|icons|domain|api|types|utils|infra|services|test)',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: './',
                group: 'internal',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['react+(|-native)'],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
            'newlines-between': 'always',
          },
        ],
        'react-native/no-inline-styles': 'off', // Permite estilos inline no React Native
      },
    },
  ],
};
