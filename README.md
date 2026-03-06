# Dashboard de Campanha - Jamyl Asfury 2026

Dashboard profissional de análise de dados eleitorais desenvolvido com **Next.js 15**, **TypeScript** e **Tailwind CSS**.

## 📋 Requisitos

- **Node.js** 18.17 ou superior
- **npm** ou **yarn**

## 🚀 Instalação e Execução

### 1. Descompactar o projeto

```bash
unzip jamyl_nextjs_dashboard.zip
cd jamyl_next
```

### 2. Instalar dependências

```bash
npm install
```

Ou com yarn:

```bash
yarn install
```

### 3. Executar em desenvolvimento

```bash
npm run dev
```

Ou com yarn:

```bash
yarn dev
```

O servidor iniciará em **http://localhost:3000**

### 4. Build para produção

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
jamyl_next/
├── app/                          # App Router do Next.js
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Dashboard (home)
│   ├── globals.css              # Estilos globais
│   ├── analytics/               # Página de Análises
│   ├── regional/                # Página de Cobertura Regional
│   ├── growth/                  # Página de Crescimento
│   ├── supporters/              # Página de Apoiadores
│   ├── projection/              # Página de Projeção
│   └── comparison/              # Página de Comparativo 2022
├── components/
│   └── Sidebar.tsx              # Componente de navegação
├── lib/
│   └── municipalityData.ts      # Dados eleitorais
├── public/                      # Arquivos estáticos
├── package.json                 # Dependências
├── tsconfig.json                # Configuração TypeScript
├── tailwind.config.ts           # Configuração Tailwind
├── postcss.config.js            # Configuração PostCSS
└── next.config.js               # Configuração Next.js
```

## 🎨 Páginas Disponíveis

| Página | Descrição |
|--------|-----------|
| **Dashboard** | KPIs principais, gráficos de evolução e distribuição de votos |
| **Análises** | Perfil demográfico do eleitorado acreano (idade, escolaridade, gênero) |
| **Cobertura Regional** | Distribuição de votos por município e região do Acre |
| **Crescimento** | Análise de tendências e evolução de votos 2010-2024 |
| **Apoiadores** | Métricas de engajamento e tipos de apoiadores |
| **Projeção** | Dados detalhados por município de todas as candidaturas |
| **Comparativo 2022** | Análise comparativa Deputado Estadual 2022 vs 2026 |

## 📊 Dados Integrados

O projeto inclui dados eleitorais verificados do TSE:

- **5 eleições**: 2010, 2014, 2018, 2020, 2024
- **22 municípios** do Acre
- **5 regionais**: Baixo Acre, Alto Acre, Tarauacá/Envira, Vale do Purus, Vale do Juruá
- **Perfil demográfico** do eleitorado acreano 2020

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React moderno
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Estilização utilitária
- **Recharts** - Gráficos interativos
- **Lucide React** - Ícones SVG
- **React 19** - Biblioteca UI

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start

# Verificar tipos TypeScript
npm run type-check
```

## 🔧 Configuração

### Tailwind CSS

O projeto usa Tailwind CSS v4 com configuração customizada em `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#1e3a8a',      // Azul profundo
      secondary: '#16a34a',    // Verde
      accent: '#f59e0b',       // Âmbar
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
  },
}
```

### Variáveis de Ambiente

Crie um arquivo `.env.local` se precisar de variáveis de ambiente:

```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## 📱 Responsividade

O dashboard é totalmente responsivo:

- **Mobile**: Layout otimizado com sidebar colapsável
- **Tablet**: Navegação adaptada
- **Desktop**: Sidebar fixa com conteúdo expandido

## 🎯 Próximas Melhorias

- [ ] Adicionar autenticação com NextAuth.js
- [ ] Integrar API backend para dados em tempo real
- [ ] Implementar filtros avançados
- [ ] Adicionar exportação de relatórios em PDF
- [ ] Implementar dark mode
- [ ] Adicionar notificações em tempo real

## 📄 Licença

Projeto desenvolvido para análise de dados eleitorais da campanha de Jamyl Asfury 2026.

## 📧 Suporte

Para dúvidas ou sugestões sobre o projeto, entre em contato com a equipe de desenvolvimento.

---

**Desenvolvido com ❤️ usando Next.js e Tailwind CSS**
