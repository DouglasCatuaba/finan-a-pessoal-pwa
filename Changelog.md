# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [1.0.0] - 2025-08-13

### Adicionado
- Estrutura inicial do projeto com Vite + React + TypeScript
- Configuração do Tailwind CSS para styling
- Sistema de componentes reutilizáveis:
  - Button (com variantes primary, secondary, outline)
  - Input (com validação)
  - CurrencyInput (formatação automática)
  - DatePicker (seleção de datas)
  - Select/Combobox (dropdown customizado)
  - Modal/Dialog (modais responsivos)
  - Table (tabelas com paginação)
  - Tag/Badge (etiquetas coloridas)
  - ProgressBar (barras de progresso)
  - Card (containers com sombra)
  - DateRangePicker (seleção de períodos)
  - FileDropzone (upload de arquivos)
  - Toast (notificações)

- Layout principal responsivo:
  - Topbar com navegação
  - Menu desktop e mobile
  - Alternador de tema claro/escuro
  - Container principal responsivo

- Configuração do banco de dados IndexedDB:
  - Tabela de transações
  - Tabela de recorrentes
  - Tabela de orçamentos
  - Tabela de regras

- Gerenciamento de estado com Zustand:
  - Estado global da aplicação
  - Controle de modais
  - Gerenciamento de transações

- Dashboard básico:
  - KPIs de saldo, entradas e saídas
  - Cards informativos
  - Layout responsivo

- Utilitários:
  - Formatação de moeda brasileira
  - Helpers para manipulação de datas
  - Cálculos de métricas financeiras

- Configuração PWA:
  - Service Worker para cache
  - Manifest para instalação
  - Ícones em múltiplos tamanhos
  - Funcionalidade offline básica

- Sistema de navegação:
  - Roteamento entre páginas
  - Estados ativos nos menus
  - Navegação responsiva

### Configurado
- Build otimizado para produção
- TypeScript com tipagem estrita
- ESLint e Prettier para qualidade de código
- Vite para desenvolvimento rápido
- Tailwind CSS com design system customizado

### Testado
- Build de produção funcional
- Responsividade em diferentes dispositivos
- Navegação entre páginas
- Alternância de temas
- PWA instalável

## [Próximas Versões]

### Planejado para v1.1.0
- Modal de transação funcional
- Integração completa com IndexedDB
- Gráficos interativos com Recharts
- Funcionalidade de adicionar transações

### Planejado para v1.2.0
- Sistema de movimentações recorrentes
- Importação/Exportação de dados
- Regras de categorização automática

### Planejado para v1.3.0
- Sistema de orçamentos
- Relatórios avançados
- Configurações personalizáveis
- Backup e sincronização local

