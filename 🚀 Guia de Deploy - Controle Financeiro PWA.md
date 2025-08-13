# 🚀 Guia de Deploy - Controle Financeiro PWA

Este documento fornece instruções detalhadas para fazer o deploy da aplicação em diferentes plataformas.

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn
- Projeto buildado (`npm run build`)

## 🌐 GitHub Pages

### Método 1: Deploy Manual

1. **Build do projeto:**
   ```bash
   npm run build
   ```

2. **Configurar GitHub Pages:**
   - Vá para Settings > Pages no seu repositório
   - Selecione "Deploy from a branch"
   - Escolha a branch `main` e pasta `/docs` (ou configure para usar `/dist`)

3. **Mover arquivos (se necessário):**
   ```bash
   # Se configurou para usar /docs
   cp -r dist/* docs/
   git add docs/
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

### Método 2: GitHub Actions (Recomendado)

1. **Criar arquivo `.github/workflows/deploy.yml`:**
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     pull_request:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       
       steps:
       - name: Checkout
         uses: actions/checkout@v3

       - name: Setup Node.js
         uses: actions/setup-node@v3
         with:
           node-version: '18'
           cache: 'npm'

       - name: Install dependencies
         run: npm ci

       - name: Build
         run: npm run build

       - name: Deploy to GitHub Pages
         uses: peaceiris/actions-gh-pages@v3
         if: github.ref == 'refs/heads/main'
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./dist
   ```

2. **Configurar base URL no vite.config.ts:**
   ```typescript
   export default defineConfig({
     base: '/nome-do-repositorio/',
     // ... resto da configuração
   })
   ```

## 🔷 Netlify

### Deploy via Drag & Drop

1. **Build do projeto:**
   ```bash
   npm run build
   ```

2. **Acessar Netlify:**
   - Vá para [netlify.com](https://netlify.com)
   - Arraste a pasta `dist/` para a área de deploy

### Deploy via Git (Recomendado)

1. **Conectar repositório:**
   - Clique em "New site from Git"
   - Conecte seu repositório GitHub

2. **Configurar build:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

3. **Configurar redirects (para SPA):**
   Criar arquivo `public/_redirects`:
   ```
   /*    /index.html   200
   ```

## ▲ Vercel

### Deploy via CLI

1. **Instalar Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

### Deploy via Dashboard

1. **Conectar repositório:**
   - Vá para [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Conecte seu repositório

2. **Configurar build:**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

## 🌊 Surge.sh

1. **Instalar Surge:**
   ```bash
   npm install -g surge
   ```

2. **Build e Deploy:**
   ```bash
   npm run build
   surge dist/
   ```

3. **Configurar domínio customizado:**
   ```bash
   surge dist/ meu-controle-financeiro.surge.sh
   ```

## 🔥 Firebase Hosting

1. **Instalar Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Inicializar projeto:**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Configurar firebase.json:**
   ```json
   {
     "hosting": {
       "public": "dist",
       "ignore": [
         "firebase.json",
         "**/.*",
         "**/node_modules/**"
       ],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

4. **Deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

## 🐳 Docker

### Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf

```nginx
events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    server {
        listen 80;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;

        location / {
            try_files $uri $uri/ /index.html;
        }

        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
}
```

### Build e Run

```bash
# Build da imagem
docker build -t controle-financeiro .

# Executar container
docker run -p 8080:80 controle-financeiro
```

## ⚙️ Configurações Importantes

### Base URL

Para deploys em subdiretórios, configure a `base` no `vite.config.ts`:

```typescript
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/meu-app/' : '/',
  // ...
})
```

### Environment Variables

Para diferentes ambientes, crie arquivos:

- `.env.development`
- `.env.production`
- `.env.local`

```env
VITE_APP_TITLE=Controle Financeiro
VITE_APP_VERSION=1.0.0
```

### PWA Configuration

Para PWA funcionar corretamente em produção:

```typescript
// vite.config.ts
VitePWA({
  registerType: 'autoUpdate',
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg}']
  },
  manifest: {
    name: 'Controle Financeiro',
    short_name: 'FinanceApp',
    start_url: '/',
    display: 'standalone',
    theme_color: '#2563eb',
    background_color: '#ffffff'
  }
})
```

## 🔍 Verificação de Deploy

Após o deploy, verifique:

- [ ] Aplicação carrega corretamente
- [ ] Navegação funciona
- [ ] PWA é instalável
- [ ] Service Worker está ativo
- [ ] Recursos estão sendo cacheados
- [ ] Responsividade em diferentes dispositivos

## 🐛 Troubleshooting

### Problemas Comuns

1. **404 em rotas:**
   - Configurar redirects para SPA
   - Verificar base URL

2. **PWA não instala:**
   - Verificar HTTPS
   - Validar manifest.json
   - Checar service worker

3. **Assets não carregam:**
   - Verificar caminhos relativos
   - Configurar base URL corretamente

4. **Build falha:**
   - Verificar versão do Node.js
   - Limpar cache: `npm ci`
   - Verificar dependências

### Logs e Debug

```bash
# Verificar build localmente
npm run build
npm run preview

# Debug do service worker
# Abrir DevTools > Application > Service Workers

# Verificar manifest
# Abrir DevTools > Application > Manifest
```

## 📊 Monitoramento

Após o deploy, considere adicionar:

- Google Analytics
- Sentry para error tracking
- Lighthouse CI para performance
- Uptime monitoring

---

**Dica:** Sempre teste o deploy em ambiente de staging antes de produção!

