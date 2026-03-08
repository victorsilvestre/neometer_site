---
name: brand-webapp-system
description: Transform an analyzed brand identity into a comprehensive web interface design system. Use whenever the user needs to create a design system, component library, UI architecture, or structural/visual patterns for websites and webapps from brand materials or analysis outputs. Creates framework-agnostic structural artifacts (foundations, tokens, components, page patterns) without writing production code.
---

# Brand WebApp System

Brand WebApp System é uma skill especializada em transformar a identidade de uma marca em um design system completo para interfaces web.

Essa skill utiliza como base os outputs de análise de marca (como os produzidos pelas skills brand-anatomy e brand-anatomy-lite) e converte essas informações em um sistema de interface estruturado, pronto para servir de referência para agentes de implementação técnica.

O objetivo da skill é construir um Design System robusto e framework-agnostic, contendo:
- Fundamentos visuais da interface
- Design tokens
- Biblioteca de componentes
- Padrões de layout
- Padrões de páginas
- Padrões de interação
- Organização de conteúdo
- Padrões de uso de mídia e imagens

**Importante:** A skill **não** implementa código de produção e não define tecnologias específicas. Em vez disso, ela produz artefatos estruturais e visuais que podem ser utilizados por agentes ou desenvolvedores para implementar interfaces em qualquer stack técnica.

## Role of This Skill in the System

Essa skill atua como a camada de arquitetura de interface dentro do pipeline de criação baseado em marca. Pipeline típico:

`Brand Materials` → `brand-anatomy` / `brand-anatomy-lite` → **`brand-webapp-system`** → `Implementation Agents`

Onde:
- As skills de anatomy entendem a marca.
- **Esta skill** traduz a marca em um sistema de interface.
- Agentes de código implementam o sistema.

## When To Use This Skill

Use Brand WebApp System quando precisar:
- Transformar uma identidade de marca em um design system para interfaces web
- Criar padrões visuais e estruturais para sites e webapps
- Definir componentes reutilizáveis
- Definir organização de layouts e páginas
- Estruturar um sistema de interface consistente
- Preparar insumos para agentes de implementação técnica
- Consolidar decisões de UI/UX de forma estruturada

## When NOT To Use This Skill

Não utilize essa skill quando:
- O objetivo for apenas analisar uma marca (neste caso use `brand-anatomy` ou `brand-anatomy-lite`)
- O objetivo for gerar apenas layouts isolados
- O objetivo for implementar código de produção diretamente
- Não houver informações suficientes sobre a identidade da marca

## Accepted Inputs

A skill pode receber como insumo:
- Outputs de análise de marca: `brand-style.md`, `brand-style-tokens.json`, `brand-style-prompts.md`, `brand-radiography.md`, `brand-summary.md`, `brand-tokens.json`, `brand-prompt-kit.md`, `brand-checklist.md`
- Ou qualquer combinação de: materiais de marca, prints de interfaces existentes, websites da marca, aplicações existentes, design guidelines.

## Core Principles

1. **Framework Agnostic:** O design system deve ser independente de React, Vue, Angular, Tailwind, CSS frameworks ou bibliotecas específicas. Nenhuma decisão de stack tecnológica deve ser tomada.
2. **No Production Code:** A skill não deve gerar código de produção, como: HTML final de produto, CSS, JavaScript, React components, Tailwind classes. A saída deve ser especificação estrutural e visual.
3. **Implementation Support:** Os outputs devem servir como referência para agentes implementadores, fornecendo: estrutura clara, regras consistentes, tokens reutilizáveis e padrões de interface.
4. **Expand When Necessary:** Se a marca não possuir elementos suficientes para um design system completo, a skill pode expandir o sistema, criando componentes e padrões coerentes com a identidade da marca.

## Output Files

Ao final da execução, a skill deve produzir os seguintes artefatos para compor o Design System Web completo:

### 1️⃣ Design Foundations (`design-foundations.md`)
Documento que define os fundamentos do design system:
- Princípios de design
- Interpretação da identidade da marca na interface
- Tipografia aplicada à interface
- Cores e hierarquia cromática
- Espaçamento
- Bordas e raios
- Sombras e profundidade
- Motion e transições conceituais
- Iconografia
- Estilo de ilustração
- Uso de imagens

### 2️⃣ Design Tokens (`design-tokens.json`)
Estrutura universal de tokens para implementação. Exemplo:
```json
{
  "colors": {},
  "typography": {},
  "spacing": {},
  "radius": {},
  "shadow": {},
  "motion": {},
  "zIndex": {}
}
```
Esse arquivo deve permitir que agentes convertam tokens para CSS variables, Tailwind configs, design tokens engines ou style dictionaries.

### 3️⃣ Component Library (`component-library.md`)
Biblioteca completa de componentes da interface. Para cada componente definir **propósito**, **estrutura**, **estados**, **variações** e **regras de uso**.
Categorias principais:
- **Navigation:** navbar, sidebar, breadcrumbs, tabs, pagination
- **Actions:** buttons, icon buttons, floating actions
- **Inputs:** text input, textarea, select, dropdown, checkbox, radio, switch, date picker, tag input
- **Data Display:** cards, tables, badges, avatars, stats, progress indicators
- **Feedback:** alerts, toasts, notifications, banners, loaders
- **Overlays:** modals, drawers, popovers, tooltips

### 4️⃣ Layout System (`layout-system.md`)
Define a arquitetura de layout. Conteúdo:
- Containers, grid system, colunas
- Espaçamentos de seção
- Organização de conteúdo
- Responsividade conceitual
- Organização de áreas

### 5️⃣ Page Patterns (`page-patterns.md`)
Modelos estruturais de páginas. Cada página inclui estrutura de seções, hierarquia de conteúdo e fluxo de leitura.
Tipos de página:
- **Marketing:** homepage, landing page, pricing page, product page, blog page
- **Application:** dashboard, analytics page, list view, detail page, settings page

### 6️⃣ Interaction Patterns (`interaction-patterns.md`)
Define padrões de UX. Inclui:
- Comportamento de menus e modais
- Estados de loading e vazios
- Mensagens de erro e validação de formulários
- Feedback visual

### 7️⃣ Component Map (`component-map.json`)
Mapa estrutural de blocos reutilizáveis que ajuda agentes a montar páginas automaticamente.
Exemplo:
```json
{
  "hero": ["headline", "subheadline", "cta", "image"],
  "feature_grid": ["icon", "title", "description"],
  "pricing_table": ["plan", "price", "features", "cta"],
  "testimonial": ["avatar", "quote", "name", "role"]
}
```

## Visual Outputs

Além da documentação estrutural, a skill deve produzir artefatos visuais consolidados do design system.

### 8️⃣ Design System Showcase (`design-system-showcase.html`)
Página HTML contendo a **visualização completa** do design system em blocos organizados e seções claras.
Essa página deve apresentar visualmente:
- Paleta de cores, tipografia e espaçamentos
- Botões, inputs e componentes (cards, badges)
- Layouts, padrões de seção, navegação e feedback
*Importante:* Este arquivo não representa código de produção, e sim uma representação visual do sistema de interface. Serve para visualização humana, revisão e referência visual para agentes.

### 9️⃣ Visual Preview (`design-system-preview.png`)
Imagem consolidada contendo uma prévia visual do design system. Essa imagem deve mostrar a paleta de cores, botões, inputs, componentes principais e exemplos de layout, servindo como referência rápida.

---

**Expected Behavior Resumo:**
A skill deve traduzir a identidade da marca em um design system completo gerando outputs estruturados. Jamais deve gerar código de produção, assumir frameworks, definir stack tecnológica ou criar dependência de ferramentas específicas.
