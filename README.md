# Trabalho Eng. Software — João Pedro Lessa e Victor Arndt

Pequeno projeto em TypeScript com menus interativos de linha de comando para escolha de periféricos de computador (entrada e saída).

**Integrantes:** João e Victor

## 📁 Estrutura do projeto

```
src/
├── index.ts                        # Menu principal (une os dois módulos)
├── escolherPerifericoEntrada.ts     # Menu de escolha de periféricos de entrada
├── escolherPerifericoSaida.ts       # Menu de escolha de periféricos de saída
└── utils/
    └── menu.ts                     # Funções reutilizáveis de exibição/leitura de menu
```

## ▶️ Como executar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Rode o menu principal:
   ```bash
   npm start
   ```

   Ou rode um módulo específico direto:
   ```bash
   npm run entrada
   npm run saida
   ```