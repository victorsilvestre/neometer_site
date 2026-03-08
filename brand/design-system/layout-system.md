# Layout System
## Neometer Web Interface Design System

---

## 1. Princípios de Layout

### 1.1 Ritmo Dark/Light
O layout da Neometer segue uma alternância rítmica entre seções escuras (dark navy) e claras (teal pálido/branco). Essa alternância cria respiração visual e guia o olho pela página.

**Padrão para Homepage:**
```
→ Hero               [DARK]
→ Métricas de prova  [LIGHT]
→ Sobre              [DARK]
→ Soluções           [LIGHT → DARK alternado por solução]
→ Ecossistema        [DARK]
→ Síndicos           [LIGHT]
→ Moradores          [DARK]
→ FAQ                [LIGHT]
→ CTA Final          [DARK]
→ Footer             [DARK DEEP]
```

### 1.2 Mobile-First
Todo layout começa do menor breakpoint e expande progressivamente. As decisões de grid, espaçamento e tipografia partem do mobile.

### 1.3 Container Centrado
Todo o conteúdo respeita um container máximo de `1280px` centrado, com padding lateral que escala por breakpoint.

### 1.4 Arcos como Âncoras Visuais
Os arcos circulares concêntricos funcionam como âncoras visuais assimétricos — sempre em cantos (superior direito ou inferior esquerdo), criando tensão diagonal que direciona o olhar ao conteúdo central.

---

## 2. Container e Grid

### 2.1 Container Principal

| Breakpoint | Max-Width | Padding Lateral |
|---|---|---|
| Mobile (<640px) | 100% | 20px |
| Tablet (640–1023px) | 100% | 32px |
| Desktop (1024–1279px) | 100% | 48px |
| Desktop XL (≥1280px) | 1280px | 48px |

### 2.2 Grid System

**12 colunas, com gutters variáveis:**

| Breakpoint | Colunas | Gutter |
|---|---|---|
| Mobile | 4 | 16px |
| Tablet | 8 | 24px |
| Desktop | 12 | 32px |

**Combinações comuns:**

| Padrão | Mobile | Tablet | Desktop | Uso |
|---|---|---|---|---|
| Full width | 4/4 | 8/8 | 12/12 | Hero, CTA banner, footer |
| Metades | 4/4 | 4/4 | 6/6 | Síndicos/moradores split |
| Terços | 4/4 | 4/4 | 4/4/4 | Feature grid de soluções |
| Quartos | 2/2 | 2/2/2/2 | 3/3/3/3 | Stats row |
| 2/3 + 1/3 | 4/4 | 5/3 | 8/4 | Hero com imagem lateral |
| Conteúdo central | 4/4 | 6 (center) | 8 (center) | About, FAQ |

---

## 3. Espaçamento de Seção

### 3.1 Paddings Verticais por Tipo

| Tipo de Seção | Mobile | Tablet | Desktop |
|---|---|---|---|
| Hero | 80px top / 96px bottom | 96px / 112px | 128px / 140px |
| Seção padrão | 64px / 64px | 80px / 80px | 96px / 96px |
| Seção compacta | 48px / 48px | 64px / 64px | 80px / 80px |
| Stats row | 40px / 40px | 56px / 56px | 64px / 64px |
| Footer | 48px / 32px | 64px / 40px | 80px / 48px |

### 3.2 Espaçamento Interno de Seção

| Elemento | Valor |
|---|---|
| Section label → Título | 16px |
| Título → Subtítulo | 20px |
| Subtítulo → Corpo | 16px |
| Corpo → CTAs | 32px |
| Entre grupos de CTAs | 12px |
| Título de seção → Grid de cards | 48px (desktop) / 32px (mobile) |

---

## 4. Áreas de Layout

### 4.1 Navbar Area
- Altura: 72px fixo
- Position: sticky top-0
- Não afeta o layout de seções (compensar com `padding-top` no primeiro elemento ou no body)
- Z-index: 40

### 4.2 Hero Area

**Desktop (layout 2 colunas):**
```
┌─────────────────────────────────────────────────────────┐
│  [Arcos no canto superior direito]                      │
│                                                         │
│  [Section label]              ┌──────────────────────┐  │
│                               │                      │  │
│  Título hero muito            │   Imagem/mockup      │  │
│  grande em thin italic        │   com overlay teal   │  │
│                               │   blob mask          │  │
│  Subtítulo regular            └──────────────────────┘  │
│                                                         │
│  [CTA Primary] [CTA Secondary]                          │
│                                                         │
│  [Arcos no canto inferior esquerdo — menor]             │
└─────────────────────────────────────────────────────────┘
```
- Coluna texto: 7/12 colunas
- Coluna imagem: 5/12 colunas
- Imagem com position absolute ou visual overflow para criar impressão de profundidade

**Mobile (layout 1 coluna):**
```
┌──────────────────────────┐
│  [Section label]         │
│                          │
│  Título hero             │
│  (menor, 40px)           │
│                          │
│  Subtítulo               │
│                          │
│  [Imagem full-width]     │
│  com overlay teal        │
│                          │
│  [CTA Primary]           │
│  [CTA Secondary]         │
└──────────────────────────┘
```

### 4.3 Content Area — Seção Padrão

**Layout de conteúdo centralizado:**
```
┌─────────────────────────────────────────────────────────┐
│              [Section label chip]                       │
│                                                         │
│              Título da Seção                            │
│                                                         │
│         Subtítulo descritivo opcional                   │
│                                                         │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐            │
│  │  Card 1  │   │  Card 2  │   │  Card 3  │            │
│  └──────────┘   └──────────┘   └──────────┘            │
└─────────────────────────────────────────────────────────┘
```
- Cabeçalho centralizado (texto-center)
- Grid de cards com 3 colunas (desktop) / 1 coluna (mobile)

**Layout de conteúdo split:**
```
┌─────────────────────────────────────────────────────────┐
│  [Texto/conteúdo à esquerda]    [Visual à direita]      │
│                                                         │
│  [Section label]                [Imagem / 3D render /   │
│  Título da seção                 mockup / diagram]      │
│  Corpo de texto                                         │
│  Lista de benefícios                                    │
│  [CTA]                                                  │
└─────────────────────────────────────────────────────────┘
```
- Proporção: 5/12 texto × 7/12 visual (desktop)
- Alterna lado do visual entre seções consecutivas (esq/dir)

### 4.4 Stats Row Area

```
┌─────────────────────────────────────────────────────────┐
│   [50%]          │   [15 anos]      │   [R$ 15/mês]     │
│   REDUÇÃO NAS    │   EXPERIÊNCIA    │   POR UNIDADE      │
│   CONTAS         │   ENERGÉTICA     │   POR MÊS          │
└─────────────────────────────────────────────────────────┘
```
- Sempre full-width
- Separadores verticais entre items
- 3–4 métricas principais

### 4.5 Dual-Audience Area (Síndicos + Moradores)

```
┌──────────────────────────┬──────────────────────────────┐
│ [LIGHT]                  │ [DARK]                       │
│                          │                              │
│ Para o Síndico           │ Para o Morador               │
│                          │                              │
│ [Imagem profissional     │ [Imagem família              │
│  síndico + blob teal]    │  moradores + blob teal]      │
│                          │                              │
│ Lista de benefícios      │ Lista de benefícios          │
│                          │                              │
│ [Para o condomínio →]    │ [Para o morador →]           │
└──────────────────────────┴──────────────────────────────┘
```
- Lado a lado em desktop (6/6 colunas)
- Empilhado em mobile (síndico primeiro)
- Contraste de modo proposital: um light, um dark
- Separador vertical no meio (desktop)

---

## 5. Responsividade Conceitual

### 5.1 Estratégia Mobile-First

| Elemento | Mobile | Tablet | Desktop |
|---|---|---|---|
| Hero title size | 40px | 56px | 80px |
| Grid de cards | 1 col | 2 col | 3 col |
| Navbar | Hamburger + 1 CTA | Hamburger + 2 CTAs | Full nav + 2 CTAs |
| Stats row | 2×2 | 2×2 | 1×4 |
| Seção split | Stack vertical | Stack vertical | Side by side |
| Dual audience | Stack vertical | Stack vertical | Side by side |
| Padding seção | 64px | 80px | 96px |

### 5.2 Hierarquia de Breakpoints

```
375px  → Mobile pequeno (base)
640px  → Mobile largo (sm) — 2 colunas para cards, nav parcial
768px  → Tablet (md) — ajustes de typography e grid
1024px → Desktop pequeno (lg) — layout horizontal completo
1280px → Desktop padrão (xl) — container máximo atingido
1536px → Desktop grande (2xl) — apenas padding aumenta
```

### 5.3 Touch Targets

- Todos os elementos clicáveis: mínimo 44×44px área de toque
- Botões: mínimo 44px de altura
- Links de navegação mobile: mínimo 48px de altura
- Gap entre elementos clicáveis: mínimo 8px

---

## 6. Elementos Decorativos no Layout

### 6.1 Arcos Concêntricos — Posicionamento

| Seção | Posição | Tamanho | Modo |
|---|---|---|---|
| Hero | Canto superior direito | 400–600px | Dark (azul-petróleo) |
| Hero | Canto inferior esquerdo | 200–300px | Dark (sutil) |
| Sobre/About | Canto inferior direito | 300–400px | Dark |
| Seção light | Canto superior esquerdo | 300–500px | Light (teal) |
| CTA Final | Canto superior direito | 400–600px | Dark |
| Footer | Canto inferior direito | 300px | Dark (muito sutil) |

**Implementação visual dos arcos:**
- SVG com múltiplos `<circle>` apenas com stroke, sem fill
- `overflow: hidden` no container (arcos "sangram" para fora)
- Position: absolute dentro do container da seção
- Pointer-events: none (nunca interferem na interação)

### 6.2 Linha Vertical Fina

- Usada como separador em seções light
- Espessura: 1px
- Cor: `rgba(0,200,195,0.40)` (teal suave)
- Altura: relativa ao conteúdo ao lado
- Não usar em seções dark (usar separador horizontal sutil)

### 6.3 Grain/Textura

- SVG noise filter (feTurbulence + feColorMatrix) aplicado como layer de textura
- Opacidade: 3–5% sobre fundos dark
- Cria profundidade e qualidade visual premium
- Não visível em telas de baixa qualidade — tratado como enhancement progressivo

---

## 7. Footer

### 7.1 Estrutura

```
┌─────────────────────────────────────────────────────────┐
│ [Background: #071224 — dark deep]                       │
│                                                         │
│  [Logo Neometer]                                        │
│  Telemetria Inteligente                                 │
│                                                         │
│  Soluções      Empresa       Contato                    │
│  ─────────     ─────────     ─────────                  │
│  Telemetria    Sobre         Email                      │
│  Eficiência    Blog          Telefone                   │
│  Reservatório               WhatsApp                   │
│                                                         │
│  ─────────────────────────────────────────────────────  │
│  © 2024 Neometer       [Instagram] [LinkedIn]          │
└─────────────────────────────────────────────────────────┘
```

### 7.2 Especificações

- Background: `#071224` (navy-deep)
- Logo: versão branca
- Links: branco 60%, hover teal
- Colunas: 1 col (mobile) → 4 cols (desktop: logo + 3 grupos)
- Linha divisória: `1px solid rgba(255,255,255,0.10)`
- Copyright: white 40%, body-sm
- Ícones sociais: 24px, hover teal

---

*Sistema de layout baseado nos padrões visuais confirmados dos 12 slides da apresentação Neometer e na identidade visual documentada em `design-foundations.md`.*
