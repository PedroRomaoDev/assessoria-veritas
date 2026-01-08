# Instruções do Projeto - Landing Page

## Contexto do Projeto

Este é um projeto de landing page para serviços de edição de vídeo profissional, construído com React, Vite e Tailwind CSS.

## Tecnologias

- **Framework**: React 18.3.1
- **Build Tool**: Vite 6.0.5
- **Estilização**: Tailwind CSS 3.4.18
- **Animações**: Framer Motion 11.15.0
- **Ícones**: Lucide React 0.469.0

## Estrutura do Projeto

```
/Componentes
  /Pousar - Componentes da landing page
    - secaoDeHerois.jsx
    - secaoDeBeneficios.jsx
    - secaoDeResultados.jsx
    - secaoDeServicos.jsx
    - secaoDeDepoimentos.jsx
    - secaoDePrecos.jsx
    - secaoDeCTAs.jsx
  /ui - Componentes de UI reutilizáveis
    - button.jsx
/pages
  - Lar.jsx (página principal)
```

## Convenções de Código

### Nomenclatura

- **Arquivos**: camelCase (ex: `secaoDeBeneficios.jsx`)
- **Componentes**: PascalCase (ex: `BenefitsSection`)
- **Variáveis/Funções**: camelCase
- Sem espaços ou acentos nos nomes de arquivos

### Imports

- Use alias `@/` para importar componentes
- Exemplo: `import { Button } from "@/Componentes/ui/button"`

### Estilização

- Usar Tailwind CSS classes sempre que possível
- Cores principais do tema:
  - Dourado primário: `#C9A24D`
  - Dourado claro: `#E6C97A`
  - Fundo escuro: `#0F0F0F`
  - Cinza intermediário: `#1E1E1E`
  - Texto cinza: `#B5B5B5`

### Componentes

- Sempre exportar como `export default function NomeDoComponente()`
- Usar `framer-motion` para animações
- Usar `lucide-react` para ícones
- Componentes devem ser responsivos (mobile-first)

### Animações Padrão

```jsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
```

### Hover States

- Usar `onMouseEnter` e `onMouseLeave` para efeitos de hover complexos
- Transições suaves com `transition-all duration-300`

## Padrões de Design

- Layout com max-width de 6xl (1152px)
- Espaçamento vertical: `py-24` para seções
- Cards com bordas arredondadas: `rounded-2xl` ou `rounded-3xl`
- Efeitos de sombra em hover para cards
- Gradientes dourados para destaques

## Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza build de produção

## Padrão de Commits

Utilize **Conventional Commits** com mensagens em **inglês**.

### Formato

```
<tipo>(<escopo-opcional>): <descrição>
```

### Tipos Principais

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Mudanças na documentação
- `style`: Formatação, ponto e vírgula, etc (sem mudança de código)
- `refactor`: Refatoração de código
- `perf`: Melhorias de performance
- `test`: Adição ou correção de testes
- `chore`: Mudanças em ferramentas, configs, dependências

### Exemplos

```bash
feat: add hero section component
fix: resolve button hover animation issue
docs: update copilot instructions
style: format pricing section code
refactor: simplify benefits section structure
chore: install framer-motion dependency
```

### Processo

Ao sugerir uma mensagem de commit:

1. **Analise os arquivos staged** para entender as mudanças
2. **Identifique o tipo correto** baseado nas alterações
3. **Sugira uma mensagem clara e concisa** em inglês que descreva o que foi feito

## Observações Importantes

- Todos os textos devem estar em português (pt-BR)
- Foco em conversão para serviços de edição de vídeo
- Design moderno e premium com tema escuro
- Componentes Button customizados em `/Componentes/ui/button.jsx`
