# 🚀 Guia de Instalação com Yarn

Este documento fornece instruções detalhadas para instalar e executar o Dashboard de Campanha Jamyl Asfury usando **Yarn**.

## 📋 Pré-requisitos

- **Node.js** 18.17 ou superior
- **Yarn** 1.22.0 ou superior (ou Yarn 4.x)

### Verificar versões instaladas

```bash
node --version
yarn --version
```

### Instalar Yarn (se necessário)

```bash
npm install -g yarn
```

## 📦 Instalação

### 1. Extrair o arquivo ZIP

```bash
unzip jamyl_nextjs_dashboard_final.zip
cd jamyl_next
```

### 2. Instalar dependências com Yarn

```bash
yarn install
```

Isso irá:
- Baixar todas as dependências do projeto
- Criar arquivo `yarn.lock` para garantir versões consistentes
- Instalar Next.js, React, Tailwind CSS, Recharts e outras bibliotecas

### 3. Executar em modo desenvolvimento

```bash
yarn dev
```

O servidor iniciará em **http://localhost:3000**

Você verá uma mensagem similar a:

```
  ▲ Next.js 15.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local

 ✓ Ready in 2.5s
```

## 🛠️ Comandos Disponíveis

```bash
# Iniciar servidor de desenvolvimento
yarn dev

# Build para produção
yarn build

# Iniciar servidor de produção
yarn start

# Verificar tipos TypeScript
yarn type-check

# Limpar cache e reinstalar
yarn install --force
```

## 📁 Estrutura do Projeto

```
jamyl_next/
├── app/                    # Pages e layouts (App Router)
│   ├── page.tsx           # Dashboard principal
│   ├── analytics/         # Página de Análises
│   ├── regional/          # Página Regional
│   ├── growth/            # Página de Crescimento
│   ├── supporters/        # Página de Apoiadores
│   ├── projection/        # Página de Projeção
│   ├── comparison/        # Página de Comparativo
│   ├── deputado/          # Página Candidaturas Deputado
│   ├── executivo/         # Página Candidaturas Executivas
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Estilos globais
├── components/
│   └── Sidebar.tsx        # Componente de navegação
├── lib/
│   └── municipalityData.ts # Dados eleitorais
├── public/                # Arquivos estáticos
├── package.json           # Dependências npm/yarn
├── yarn.lock              # Lock file do Yarn
├── tsconfig.json          # Configuração TypeScript
├── tailwind.config.ts     # Configuração Tailwind
├── postcss.config.js      # Configuração PostCSS
└── next.config.js         # Configuração Next.js
```

## 🎨 Páginas Disponíveis

Após iniciar o servidor, acesse:

| URL | Página |
|-----|--------|
| http://localhost:3000 | Dashboard Principal |
| http://localhost:3000/analytics | Análises Demográficas |
| http://localhost:3000/regional | Cobertura Regional |
| http://localhost:3000/growth | Análise de Crescimento |
| http://localhost:3000/supporters | Apoiadores |
| http://localhost:3000/projection | Projeção de Dados |
| http://localhost:3000/comparison | Comparativo 2022 |
| http://localhost:3000/deputado | Candidaturas Deputado |
| http://localhost:3000/executivo | Candidaturas Executivas |

## 🔧 Configuração

### Variáveis de Ambiente

Se precisar de variáveis de ambiente, crie um arquivo `.env.local`:

```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Tailwind CSS

O projeto usa Tailwind CSS v4 com configuração customizada. Veja `tailwind.config.ts` para detalhes.

## 🚀 Build para Produção

### 1. Criar build otimizado

```bash
yarn build
```

Isso irá:
- Compilar TypeScript
- Otimizar componentes React
- Gerar arquivos estáticos

### 2. Iniciar servidor de produção

```bash
yarn start
```

O servidor estará disponível em **http://localhost:3000**

## 🐛 Troubleshooting

### Erro: "Command not found: yarn"

Instale Yarn globalmente:

```bash
npm install -g yarn
```

### Erro: "Port 3000 already in use"

Use uma porta diferente:

```bash
yarn dev -p 3001
```

### Erro ao instalar dependências

Limpe o cache e reinstale:

```bash
yarn install --force
rm -rf node_modules
yarn install
```

### Erro de TypeScript

Verifique tipos:

```bash
yarn type-check
```

## 📊 Dados Integrados

O projeto inclui dados eleitorais verificados do TSE:

- **5 eleições**: 2010, 2014, 2018, 2020, 2024
- **22 municípios** do Acre
- **5 regionais**: Baixo Acre, Alto Acre, Tarauacá/Envira, Vale do Purus, Vale do Juruá
- **Perfil demográfico** do eleitorado acreano 2020

## 🛠️ Tecnologias

- **Next.js 15** - Framework React moderno
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Estilização
- **Recharts** - Gráficos interativos
- **Lucide React** - Ícones
- **React 19** - Biblioteca UI

## 📝 Scripts do Yarn

```bash
# Desenvolvimento com hot reload
yarn dev

# Build otimizado
yarn build

# Produção
yarn start

# Verificação de tipos
yarn type-check
```

## 🔄 Atualizar Dependências

Para atualizar todas as dependências:

```bash
yarn upgrade-interactive
```

Para atualizar uma dependência específica:

```bash
yarn upgrade next@latest
```

## 📱 Responsividade

O dashboard é totalmente responsivo:

- **Mobile**: Sidebar colapsável, layout adaptado
- **Tablet**: Navegação otimizada
- **Desktop**: Sidebar fixa, conteúdo expandido

## 🎯 Próximas Melhorias

- [ ] Autenticação com NextAuth.js
- [ ] API backend para dados em tempo real
- [ ] Filtros avançados
- [ ] Exportação de relatórios em PDF
- [ ] Dark mode
- [ ] Notificações em tempo real

## 📧 Suporte

Para dúvidas ou sugestões, entre em contato com a equipe de desenvolvimento.

---

**Desenvolvido com ❤️ usando Next.js, TypeScript e Tailwind CSS**

**Última atualização**: Março 2026
