# Design Foundations
## Neometer Web Interface Design System

> **Versão:** 1.0 | **Base:** brand-style.md + brand-style-tokens.json (12 slides, assets visuais confirmados)

---

## 1. Princípios de Design

### 1.1 Tech-Premium com Acessibilidade
A interface Neometer opera em dois registros visuais complementares: **dark-premium** (navy profundo + teal vibrante) para impacto e confiança tecnológica, e **clean-light** (branco + teal pálido) para acessibilidade e conteúdo. Esses dois modos alternam ritmicamente ao longo de qualquer página.

### 1.2 Dado como Protagonista
Números e métricas têm tratamento visual privilegiado — são grandes, bold, com unidades em tamanho menor ao lado. A interface deve sempre levar o olho ao dado primeiro.

### 1.3 Elemento-Assinatura Ubíquo
Os **arcos circulares concêntricos** são a assinatura gráfica da Neometer. Devem aparecer como elemento decorativo de fundo em praticamente todas as seções — em teal sobre fundos claros, em azul-petróleo sobre fundos escuros. Nunca devem competir com o conteúdo; são textura, não informação.

### 1.4 Contraste como Princípio Estrutural
Altíssimo contraste é inegociável: texto branco sobre navy, navy sobre branco, teal sobre navy. Nunca cinza médio sobre branco — sempre contraste máximo ou near-maximum.

### 1.5 Mobile-First, Espaçamento Generoso
Seções hero são espaçosas e dramáticas. Conteúdo pode ser denso (2–3 colunas), mas com padding e line-height generosos. Nunca comprimir informação ao ponto de parecer apertado.

---

## 2. Interpretação da Identidade de Marca na Interface

| Traço da Marca | Expressão na Interface |
|---|---|
| Tecnológica | Dark navy dominante, arcos concêntricos, diagrama de rede IoT como elemento visual |
| Confiável | Tipografia ultra-limpa, espaçamento consistente, dados numericamente precisos |
| Audaciosa | Títulos hero enormes em thin-italic, alternância dramatic dark/light |
| Empoderada | CTAs personalizados por audiência ("Para o condomínio" / "Para o morador"), linguagem de parceiro |
| Eficiente | Layout organizado, hierarquia clara, sem decoração excessiva |

---

## 3. Sistema de Cores

### 3.1 Paleta Core

| Token | Valor | Uso |
|---|---|---|
| `color-navy` | `#0D1B35` | Fundo principal dark — fundos de seção, navbar dark, footer |
| `color-teal` | `#00C8C3` | Acento principal — títulos hero, badges, CTAs, ícones, destaques inline |
| `color-blue-mid` | `#2563A8` | Azul secundário — botões "Para o morador", suporte em seções claras |
| `color-blue-gradient-start` | `#2D6FA0` | Início do gradiente statement |
| `color-blue-gradient-end` | `#36B5A8` | Fim do gradiente statement |
| `color-white` | `#FFFFFF` | Texto sobre escuro, fundos clean |
| `color-teal-pale` | `#E0F7F5` | Fundo de seções claras, versão suave do teal |
| `color-teal-cta` | `#00C4BE` | Variante CTA — botão primário "Para o condomínio" |

### 3.2 Tons de Apoio (derivados)

| Token | Valor | Uso |
|---|---|---|
| `color-navy-light` | `#0A2A4A` | Fundo dark alternativo, cards elevados em modo dark |
| `color-navy-deep` | `#071224` | Superfície mais funda em modo dark (footer, overlays) |
| `color-teal-dim` | `rgba(0,200,195,0.12)` | Fundo de tag buttons dark semi-transparentes |
| `color-teal-border` | `rgba(0,200,195,0.30)` | Borda sutil em modo dark |
| `color-white-80` | `rgba(255,255,255,0.80)` | Texto secundário sobre fundo dark |
| `color-white-50` | `rgba(255,255,255,0.50)` | Texto terciário, placeholders em dark |

### 3.3 Gradientes Funcionais

| Token | Definição | Uso |
|---|---|---|
| `gradient-light-bg` | `linear-gradient(135deg, #FFFFFF 0%, #E0F7F5 100%)` | Seções claras intermediárias |
| `gradient-dark-bg` | `linear-gradient(135deg, #0D1B35 0%, #0A2A4A 100%)` | Hero, footer, seções de produto |
| `gradient-statement` | `linear-gradient(160deg, #2D6FA0 0%, #36B5A8 100%)` | Seções de propósito/declaração de valor |
| `gradient-overlay-teal` | `linear-gradient(to top, rgba(0,200,195,0.60), transparent)` | Overlay sobre fotos |
| `gradient-overlay-dark` | `linear-gradient(to top, rgba(13,27,53,0.70), transparent)` | Overlay alternativo sobre fotos |

### 3.4 Hierarquia Cromática por Modo

**Modo Dark (Navy):**
1. Background: `#0D1B35`
2. Surface elevada: `#0A2A4A`
3. Texto principal: `#FFFFFF`
4. Texto secundário: `rgba(255,255,255,0.80)`
5. Acento: `#00C8C3`
6. Borda: `rgba(0,200,195,0.30)`

**Modo Light (Teal Pálido):**
1. Background: `linear-gradient(135deg, #FFFFFF → #E0F7F5)`
2. Surface elevada: `#FFFFFF`
3. Texto principal: `#0D1B35`
4. Texto secundário: `rgba(13,27,53,0.70)`
5. Acento: `#00C8C3`
6. Separador: linha vertical fina `rgba(0,200,195,0.40)`

---

## 4. Tipografia

### 4.1 Fontes

| Papel | Família | Fallback |
|---|---|---|
| Display / Hero | Raleway | "Nunito", "Montserrat", sans-serif |
| Body / UI | Inter | "DM Sans", "Helvetica Neue", sans-serif |

### 4.2 Escala Tipográfica

| Token | Tamanho | Peso | Estilo | Line-Height | Letter-Spacing | Uso |
|---|---|---|---|---|---|---|
| `type-display-xl` | 72–96px | 200 (ExtraLight) | italic | 1.0 | -0.04em | Hero titles — o impacto máximo |
| `type-display-lg` | 48–64px | 200–300 (ExtraLight/Light) | italic | 1.05 | -0.03em | Subtítulo hero, declarações de propósito |
| `type-heading-xl` | 40–48px | 300 (Light) | normal | 1.1 | -0.02em | Título de seção dark |
| `type-heading-lg` | 32–40px | 300–400 | normal | 1.2 | -0.02em | Título de seção light |
| `type-heading-md` | 24–28px | 400–600 | normal | 1.3 | -0.01em | Subtítulo de seção, cabeçalho de card |
| `type-heading-sm` | 18–20px | 600 | normal | 1.4 | 0 | Cabeçalho de card, título de feature |
| `type-label-caps` | 11–13px | 600 | normal | 1.2 | 0.12em | Labels uppercase small-caps, section tags |
| `type-body-lg` | 18–20px | 400 | normal | 1.75 | 0 | Corpo de texto hero, parágrafos principais |
| `type-body-md` | 16px | 400 | normal | 1.7 | 0 | Corpo geral |
| `type-body-sm` | 14px | 400 | normal | 1.65 | 0 | Texto auxiliar, captions |
| `type-numeric-hero` | 48–72px | 700 | normal | 1.0 | -0.03em | Dados numéricos de destaque (50%, R$15) |
| `type-numeric-unit` | 20–24px | 400 | normal | 1.0 | 0 | Unidade ao lado do número (posição superscript) |
| `type-cta` | 15–17px | 600 | normal | 1.2 | 0.04em | Texto de botão |

### 4.3 Regras Tipográficas

- Títulos hero **sempre** em Raleway ExtraLight italic
- Palavras-chave dentro de corpo de texto: **bold inline** (400 → 700) para guiar leitura
- Section labels: UPPERCASE, letter-spacing 0.12em, sem itálico
- Dados numéricos: número grande bold + unidade menor regular ao lado
- Nunca misturar mais de 2 pesos na mesma linha
- Manter hierarquia clara: display → heading → body → label

---

## 5. Espaçamento

### 5.1 Escala Base (múltiplos de 4)

| Token | Valor | Uso Típico |
|---|---|---|
| `space-1` | 4px | Gap mínimo, ícone-texto |
| `space-2` | 8px | Padding interno de badge, gap entre ícone e label |
| `space-3` | 12px | Padding de tags, gap entre itens de lista |
| `space-4` | 16px | Padding interno de input/button, gap entre feature items |
| `space-5` | 20px | Gap entre elementos de card |
| `space-6` | 24px | Padding de card, gap entre cards em grid |
| `space-8` | 32px | Margem de seção interna, gap entre grupos |
| `space-10` | 40px | Padding de seção mobile |
| `space-12` | 48px | Gap entre blocos maiores |
| `space-16` | 64px | Padding de seção tablet |
| `space-20` | 80px | Padding de seção desktop |
| `space-24` | 96px | Margem entre seções principais |
| `space-32` | 128px | Padding hero desktop |
| `space-40` | 160px | Espaçamento máximo hero em telas grandes |

### 5.2 Espaçamento de Seção

| Contexto | Mobile | Tablet | Desktop |
|---|---|---|---|
| Hero section (vertical) | 80px t / 80px b | 96px t / 96px b | 128px t / 128px b |
| Seção padrão | 64px t / 64px b | 80px t / 80px b | 96px t / 96px b |
| Seção compacta (features grid) | 48px t / 48px b | 64px t / 64px b | 80px t / 80px b |
| Footer | 48px t / 32px b | 64px t / 40px b | 80px t / 48px b |

---

## 6. Bordas e Raios

| Token | Valor | Uso |
|---|---|---|
| `radius-sm` | 6px | Input, card com arestas mais definidas |
| `radius-md` | 12px | Card padrão, modal |
| `radius-lg` | 20px | Card hero, painéis maiores |
| `radius-xl` | 32px | Blob orgânico aproximado, feature highlight |
| `radius-pill` | 9999px | Badges, tags, botões pill, section labels |
| `radius-circle` | 50% | Avatares, ícone circular, arcos (via SVG) |

**Regra:** A identidade visual usa formas mistas — buttons são pill, cards têm radius-md, e o elemento blob é completamente orgânico. Evitar cantos retos (`radius-0`) em elementos interativos.

---

## 7. Sombras e Profundidade

### 7.1 Sistema de Camadas (Z-plane)

| Camada | Uso | Elevação |
|---|---|---|
| Base | Fundo de seção, backgrounds | 0 |
| Surface | Cards, inputs, botões | 1 |
| Elevated | Cards com hover, componentes flutuantes | 2 |
| Floating | Dropdowns, tooltips, popovers | 3 |
| Overlay | Modais, drawers | 4 |

### 7.2 Sombras (dark-tinted)

| Token | Valor | Uso |
|---|---|---|
| `shadow-sm` | `0 2px 8px rgba(0,200,195,0.08), 0 1px 3px rgba(13,27,53,0.20)` | Cards sutis em modo light |
| `shadow-md` | `0 4px 20px rgba(0,200,195,0.12), 0 2px 8px rgba(13,27,53,0.25)` | Cards elevados, botões com shadow |
| `shadow-lg` | `0 8px 40px rgba(0,200,195,0.16), 0 4px 16px rgba(13,27,53,0.30)` | Modais, drawers |
| `shadow-teal-glow` | `0 0 30px rgba(0,200,195,0.35)` | Hover em elementos teal (badge, botão) |
| `shadow-navy-deep` | `0 8px 48px rgba(7,18,36,0.60)` | Overlay modal em dark |

**Regra:** Todas as sombras têm tint de teal ou navy — nunca sombra negra neutra. Isso mantém coerência com a paleta.

---

## 8. Motion e Transições

### 8.1 Princípios

- Animar apenas `transform` e `opacity` — nunca `width`, `height`, `background-color` diretamente
- Easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (ease-out suave) para entradas; `cubic-bezier(0.55, 0, 1, 0.45)` (ease-in rápido) para saídas
- Spring-style para hover: escala 1.02–1.05 com ease-out

### 8.2 Durações

| Token | Valor | Uso |
|---|---|---|
| `duration-instant` | 80ms | Feedback de click, estado active |
| `duration-fast` | 150ms | Hover states, focus rings |
| `duration-normal` | 250ms | Transições de componente, slide-in de dropdown |
| `duration-slow` | 400ms | Animações de seção, entrada de modal |
| `duration-xslow` | 600ms | Animações de scroll reveal, hero animations |

### 8.3 Padrões de Animação

- **Hover button:** `transform: scale(1.02)` + `shadow-teal-glow` em 150ms ease-out
- **Card hover:** `transform: translateY(-4px)` + `shadow-md → shadow-lg` em 200ms ease-out
- **Scroll reveal:** `opacity: 0 → 1` + `transform: translateY(20px) → 0` em 500ms ease-out, delay escalonado por item (50ms entre filhos)
- **Arcos concêntricos:** rotação lenta e contínua, 30–60s por volta, baixíssima opacidade — ambiente, não distração
- **Badge de número:** `transform: scale(0.8) → 1` ao entrar na viewport, 400ms ease-out spring

---

## 9. Iconografia

### 9.1 Estilo
- Line icons (traço aberto), stroke de 1.5–2px, sem fill sólido
- Cantos arredondados (`stroke-linecap: round`, `stroke-linejoin: round`)
- Tamanhos padrão: 16px, 20px, 24px, 32px, 48px

### 9.2 Cores de Ícone

| Contexto | Cor |
|---|---|
| Sobre fundo dark navy | `#00C8C3` (teal) |
| Sobre fundo light | `#0D1B35` (navy) ou `#00C8C3` (teal para destaque) |
| Estado desabilitado | `rgba(255,255,255,0.30)` sobre dark / `rgba(13,27,53,0.25)` sobre light |

### 9.3 Ícones Temáticos da Neometer
- Gota d'água (telemetria de água)
- Raio elétrico (energia)
- Chama (gás)
- Ondas de sinal / Wi-Fi (IoT, telemetria — logo shape)
- Nós de rede conectados (ecossistema)
- Medidor/gauge (monitoramento)
- Alerta/sino (notificações e alertas)
- Gráfico de linha (histórico de consumo)
- Prédio/condomínio (contexto)

---

## 10. Uso de Imagens

### 10.1 Categorias

| Tipo | Tratamento |
|---|---|
| **Fotografia lifestyle** (família, moradores) | Overlay teal gradient `rgba(0,200,195,0.40)` + blob orgânico como mask ou frame |
| **Fotografia de condomínio** (prédio) | Color grading frio, overlay blue-teal leve, saturação controlada |
| **Fotografia profissional** (síndico/homem de terno) | Overlay azul-teal sobre prédios desfocados ao fundo, postura confiante |
| **3D render técnico** (maquinário) | Fundo escuro, luzes néon azul + laranja, muito dramático |
| **Mockup de app** (smartphone + dashboard) | Fundo dark navy com reflexos suaves, mão segurando device |

### 10.2 Tratamento Técnico

- Sempre aplicar filtro de cor fria (blue-teal bias) — nunca warm filters
- Overlay de gradiente: `linear-gradient(to top, rgba(13,27,53,0.60), transparent)` ou `linear-gradient(to top, rgba(0,200,195,0.45), transparent)`
- Blob mask orgânico em teal para fotos lifestyle: forma fluida irregular, sem ângulos
- Composição: sujeito preferencialmente no terço direito, espaço para texto à esquerda

### 10.3 Proporções Recomendadas

| Contexto | Proporção |
|---|---|
| Hero image (desktop) | 16:9 ou wider |
| Blob section photo | 4:5 ou 1:1 (recortado pelo blob) |
| 3D render | Livre — sempre com fundo dark |
| Smartphone mockup | 3:4 vertical |
| Card thumbnail | 16:9 |

---

## 11. Elemento-Assinatura: Arcos Circulares Concêntricos

### 11.1 Definição Visual
Série de 3–5 arcos circulares parciais (não círculos fechados), concêntricos, centrados em um ponto geralmente fora do canvas (canto ou borda). Stroke fino (1–2px), sem fill, alta opacidade de traço mas baixo impacto visual geral.

### 11.2 Variações por Modo

| Modo | Cor dos Arcos | Opacidade |
|---|---|---|
| Dark (navy) | `#1A3A6B` (azul-petróleo) | 0.40–0.60 |
| Light (branco/teal pálido) | `#00C8C3` (teal) | 0.20–0.35 |
| Statement (gradiente) | `rgba(255,255,255,0.25)` | 0.25 |

### 11.3 Posicionamento
- Canto superior direito ou inferior esquerdo — cria tensão diagonal
- Arcos devem "sangrar" para fora do container (parcialmente cortados pela borda)
- Nunca centralizar os arcos — assimetria é essencial
- Diâmetros: de ~200px até ~600px (em desktop), escalando proporcionalmente

---

## 12. Logo

### 12.1 Componentes
- **Ícone:** Ondas de sinal concêntricas (similar a wi-fi ou rádio) — diretamente relacionado aos arcos-assinatura
- **Wordmark:** "neometer" em caixa baixa, sans-serif geométrica, peso regular/medium
- **Tagline:** "Telemetria Inteligente" em pequeno, abaixo do wordmark

### 12.2 Uso
- **Sobre fundo dark:** versão branca (ícone + wordmark brancos)
- **Sobre fundo light:** versão navy ou teal
- **Área de proteção:** mínimo de espaço equivalente à altura do ícone em todos os lados
- **Tamanho mínimo:** 100px de largura

---

*Documento base para o Design System Neometer. Todos os valores derivam dos assets visuais confirmados da apresentação comercial.*
