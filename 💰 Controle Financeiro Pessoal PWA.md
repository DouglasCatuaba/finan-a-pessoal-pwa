# 💰 Controle Financeiro Pessoal PWA

Um aplicativo web progressivo (PWA) para controle financeiro pessoal, desenvolvido com React, TypeScript e Tailwind CSS. Totalmente estático, sem necessidade de backend, ideal para deploy no GitHub Pages.

## 🚀 Características Principais

- **PWA Completo**: Funciona offline, instalável no dispositivo
- **100% Estático**: Sem necessidade de servidor backend
- **Responsivo**: Interface adaptada para desktop e mobile
- **Tema Claro/Escuro**: Alternância entre temas
- **IndexedDB**: Armazenamento local dos dados
- **TypeScript**: Tipagem estática para maior confiabilidade
- **Tailwind CSS**: Design system moderno e consistente

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Database**: Dexie (IndexedDB wrapper)
- **Charts**: Recharts
- **PWA**: vite-plugin-pwa
- **File Handling**: react-dropzone

## 📱 Funcionalidades

### ✅ Implementadas
- Layout responsivo com navegação
- Dashboard com KPIs básicos
- Alternância de tema claro/escuro
- Estrutura de dados com IndexedDB
- Sistema de componentes reutilizáveis
- PWA configurado (service worker, manifest)

### 🔄 Em Desenvolvimento
- Modal de transação funcional
- Gráficos interativos (Recharts)
- Importação/Exportação de dados
- Movimentações recorrentes
- Sistema de orçamentos
- Regras de categorização automática
- Configurações avançadas

## 🏗️ Estrutura do Projeto

```
src/
├── app/                    # Configurações da aplicação
├── components/            # Componentes reutilizáveis
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── CurrencyInput.tsx
│   ├── DatePicker.tsx
│   ├── Select.tsx
│   ├── Modal.tsx
│   ├── Table.tsx
│   ├── Card.tsx
│   └── Toast.tsx
├── db/                    # Configuração do banco IndexedDB
│   └── index.ts
├── features/              # Funcionalidades por domínio
│   ├── dashboard/
│   ├── transactions/
│   ├── recurrings/
│   ├── budgets/
│   ├── rules/
│   └── settings/
├── store/                 # Gerenciamento de estado (Zustand)
│   └── useFinanceStore.ts
├── utils/                 # Utilitários
│   ├── formatCurrency.ts
│   ├── dateHelpers.ts
│   └── calcMetrics.ts
└── App.tsx               # Componente principal
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone <repository-url>
cd personal-finance-pwa

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da versão de produção
npm run preview
```

## 📦 Deploy

### GitHub Pages
1. Faça o build do projeto:
   ```bash
   npm run build
   ```

2. Configure o GitHub Pages para usar a pasta `dist/`

3. A aplicação estará disponível em: `https://seu-usuario.github.io/personal-finance-pwa`

### Outros Provedores
- **Netlify**: Arraste a pasta `dist/` para o Netlify Drop
- **Vercel**: Conecte o repositório e configure o build command como `npm run build`
- **Surge**: `npm install -g surge && surge dist/`

## 🎨 Design System

### Cores
- **Primary**: #2563eb (Azul)
- **Success**: #16a34a (Verde)
- **Warning**: #f59e0b (Amarelo)
- **Danger**: #dc2626 (Vermelho)

### Componentes
- Botões com variantes (primary, secondary, outline)
- Inputs com validação
- Modais responsivos
- Cards com sombras
- Tabelas com paginação
- Toasts para notificações

## 💾 Estrutura de Dados

### Transações
```typescript
interface Transaction {
  id?: number;
  date: string;           // yyyy-mm-dd
  type: 'entrada' | 'saida';
  amount: number;         // em centavos
  category: string;
  subcategory?: string;
  account?: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}
```

### Recorrentes
```typescript
interface Recurring {
  id?: number;
  title: string;
  type: 'entrada' | 'saida';
  amount: number;
  category: string;
  dayOfMonth: number;     // 1..31
  active: boolean;
  lastEmitted?: string;   // yyyy-mm
}
```

## 🔧 Configuração PWA

- **Manifest**: Configurado para instalação
- **Service Worker**: Cache de recursos estáticos
- **Ícones**: Múltiplos tamanhos para diferentes dispositivos
- **Offline**: Funcionalidade básica disponível offline

## 📱 Responsividade

- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Botões e elementos com tamanho adequado para toque

## 🧪 Testes

```bash
# Executar testes (quando implementados)
npm run test

# Coverage
npm run test:coverage
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, leia as diretrizes de contribuição antes de submeter pull requests.

## 📞 Suporte

Para dúvidas ou suporte, abra uma issue no repositório do projeto.

---

**Desenvolvido com ❤️ usando React + TypeScript + Tailwind CSS**
