# Component Library
## Neometer Web Interface Design System

> Referência estrutural de componentes. Cada componente define propósito, estrutura, estados, variações e regras de uso. **Sem código de produção.**

---

## NAVIGATION

---

### Navbar

**Propósito:** Navegação global persistente. Ancora identidade de marca no topo.

**Estrutura:**
```
[Logo] ............ [Nav Links] ........... [CTAs]
ícone + wordmark   links horizontais      [Para o morador] [Para o condomínio]
```

**Especificações:**
- Altura fixa: 72px
- Position: sticky, z-index 40
- Background: `rgba(#0D1B35, 0.90)` com `backdrop-filter: blur(12px)`
- Borda inferior sutil: `1px solid rgba(0,200,195,0.15)` ao scrollar
- Logo: versão branca, alinhado à esquerda
- Links: branco 80%, peso 400, espaçamento `0.02em`
- CTAs: dois botões pill — "Para o morador" (outline branco) + "Para o condomínio" (teal sólido)

**Estados:**
- `default`: sem borda inferior, background mais transparente `rgba(#0D1B35, 0.80)`
- `scrolled`: borda inferior aparece, background mais opaco `rgba(#0D1B35, 0.95)`
- `mobile-open`: drawer/overlay de menu abre com slide-down
- `link-hover`: texto muda para teal `#00C8C3` com transição 150ms

**Variações:**
- **Desktop (>768px):** Links horizontais visíveis, ambos os CTAs
- **Mobile (<768px):** Links ocultos, hamburger icon, um CTA principal visível

**Regras:**
- Sempre dark — nunca versão clara do navbar
- Logo sempre à esquerda com area de clique de volta ao home
- Hamburger deve ser ícone em teal, não cinza

---

### Mobile Menu

**Propósito:** Navegação expandida em mobile após clicar no hamburger.

**Estrutura:**
```
[Barra superior com logo + close]
[Link 1]
[Link 2]
[Link 3]
[Link 4]
─────────────────────────────────
[Para o morador]
[Para o condomínio]
```

**Especificações:**
- Full-width, altura ocupando toda a viewport
- Background: `#0D1B35` com arcos concêntricos decorativos no fundo
- Links: tamanho grande (24px), peso light, teal ao hover
- CTAs: empilhados verticalmente, largura completa
- Entrada: slide-down + fade-in, 300ms ease-out
- Saída: fade-out, 200ms ease-in

---

### Breadcrumbs

**Propósito:** Orientação de localização em páginas internas.

**Estrutura:** `Home > Soluções > Telemetria`

**Especificações:**
- Separador: `/` ou `›` em teal pálido
- Item ativo: branco ou navy (dependendo do modo)
- Itens anteriores: teal 70% com underline ao hover
- Tamanho: body-sm (14px)

---

### Section Label / Tag Chip

**Propósito:** Identificar o contexto ou categoria de uma seção — "section tag" visual.

**Estrutura:** `[ • TELEMETRIA INTELIGENTE ]`

**Especificações:**
- Pill radius (9999px)
- Background: `rgba(0,200,195,0.12)` (teal-dim)
- Borda: `1px solid rgba(0,200,195,0.30)` (teal-border)
- Texto: uppercase, letter-spacing 0.14em, 11px, teal, peso 600
- Padding: 5px vertical × 12px horizontal
- Ponto decorativo ou ícone pequeno antes do texto (opcional)
- Aparece sempre acima do título da seção

**Variações:**
- **Dark mode:** background teal-dim, texto teal
- **Light mode:** background `rgba(0,200,195,0.10)`, texto `#0D1B35` ou teal dark
- **Statement:** background `rgba(255,255,255,0.20)`, texto branco

---

## ACTIONS

---

### Button — Primary (CTA Principal)

**Propósito:** Ação principal de conversão — "Para o condomínio", "Quero conhecer a solução".

**Estrutura:** `[ Quero conhecer a solução → ]`

**Especificações:**
- Background: `#00C4BE` (teal-cta)
- Texto: branco, peso 600, 15–16px, letter-spacing 0.04em
- Radius: 9999px (pill)
- Padding: 14px vertical × 28px horizontal
- Ícone de seta à direita (arrow-right, 16px)
- Sombra: `shadow-md`

**Estados:**
- `default`: teal sólido
- `hover`: `transform: scale(1.02)` + `shadow-teal-glow`, teal ligeiramente mais claro
- `focus-visible`: outline 2px teal, offset 3px
- `active`: `transform: scale(0.98)`, teal mais escuro
- `disabled`: opacity 40%, cursor not-allowed

---

### Button — Secondary (Outline)

**Propósito:** Ação secundária — "Para o morador", "Saiba mais".

**Estrutura:** `[ Para o morador ]`

**Especificações:**
- Background: transparente
- Borda: `1.5px solid rgba(255,255,255,0.60)` (sobre dark) ou `1.5px solid #0D1B35` (sobre light)
- Texto: branco (sobre dark) ou navy (sobre light), peso 600, 15–16px
- Radius: 9999px (pill)
- Padding: 13px vertical × 28px horizontal (1px a menos por causa da borda)

**Estados:**
- `hover`: background `rgba(255,255,255,0.10)` (dark) ou `rgba(13,27,53,0.08)` (light), borda opaca
- `focus-visible`: outline 2px offset
- `active`: background mais opaco

---

### Button — Ghost/Text

**Propósito:** Ações de baixa prioridade, links dentro de texto.

**Estrutura:** `Saiba mais →`

**Especificações:**
- Sem background, sem borda
- Texto: teal `#00C8C3` com underline ao hover
- Ícone de seta opcional ao lado direito
- Transição de cor: 150ms

---

### Button — Tag/Feature

**Propósito:** Botões-tag de categorias — agrupa features horizontalmente como "chips clicáveis".

**Estrutura:** `[ 💧 Água ] [ ⚡ Energia ] [ 🔥 Gás ]`

**Especificações:**
- Background: `rgba(13,27,53,0.50)` (dark semi-transparente)
- Borda: `1px solid rgba(255,255,255,0.15)`
- Texto: branco 80%, 13–14px, peso 500
- Radius: 9999px (pill)
- Ícone pequeno à esquerda (16px)
- Padding: 8px vertical × 16px horizontal
- Agrupados horizontalmente com gap de 8px

**Estados:**
- `default`: semi-transparente neutro
- `active/selected`: background `rgba(0,200,195,0.20)`, borda teal, texto teal
- `hover`: background `rgba(0,200,195,0.12)`, borda teal sutil

---

### Icon Button

**Propósito:** Ação representada apenas por ícone — fechar modal, voltar, menu.

**Especificações:**
- Círculo 40×40px
- Background: transparente → `rgba(255,255,255,0.10)` no hover
- Ícone: 20px, cor contextual
- Radius: 50%

---

## INPUTS

---

### Text Input

**Propósito:** Campo de texto padrão — formulários de contato, filtros.

**Estrutura:**
```
[Label]
[__________________ placeholder _____]
[Mensagem de erro ou dica]
```

**Especificações:**
- Altura: 48px
- Background: `rgba(255,255,255,0.08)` (dark) ou `#FFFFFF` (light)
- Borda: `1.5px solid rgba(0,200,195,0.25)` (dark) ou `1.5px solid rgba(13,27,53,0.20)` (light)
- Radius: 8px
- Padding: 0 16px
- Texto: branco (dark) ou navy (light), 16px regular
- Placeholder: 50% opacidade
- Label: acima, 13px, uppercase caps, navy ou teal

**Estados:**
- `focus`: borda `#00C8C3` (2px), box-shadow `0 0 0 3px rgba(0,200,195,0.20)`
- `error`: borda vermelha `#EF4444`, mensagem abaixo em vermelho 14px
- `success`: borda teal sólido
- `disabled`: opacity 40%

---

### Textarea

**Propósito:** Campo de texto multilinha — mensagens longas.

**Especificações:** Igual ao Text Input, com:
- Altura mínima: 120px
- Resize: vertical apenas
- Padding: 14px 16px

---

### Select / Dropdown

**Propósito:** Seleção de uma opção entre múltiplas.

**Estrutura:**
```
[Label]
[Selecione uma opção          ▾]
```

**Especificações:**
- Mesmas dimensões e estilos do Text Input
- Ícone chevron-down à direita, teal
- Menu dropdown: background `#0D1B35` (dark) ou `#FFFFFF` (light), radius 12px, shadow-lg
- Opção hover: background teal-dim
- Opção selecionada: texto teal, check à direita

---

### Checkbox

**Propósito:** Seleção múltipla ou confirmação de termos.

**Estrutura:** `[✓] Aceito os termos de uso`

**Especificações:**
- Box: 18×18px, radius 4px
- `unchecked`: borda `1.5px solid rgba(255,255,255,0.30)`, background transparente
- `checked`: background teal `#00C8C3`, borda teal, check branco
- Label: 14px regular, white 80% (dark) ou navy (light)

---

### Switch / Toggle

**Propósito:** Ativar/desativar configuração.

**Especificações:**
- Track: 44×24px, radius pill
- `off`: background `rgba(255,255,255,0.15)`
- `on`: background teal `#00C8C3`
- Thumb: 18×18px branco, radius circle
- Transição: 200ms ease-out

---

## DATA DISPLAY

---

### Stat / Metric Badge

**Propósito:** Destacar dado numérico de impacto — o componente mais característico da Neometer.

**Estrutura:**
```
┌─────────────────────────────────┐
│  50%                            │
│  REDUÇÃO NAS CONTAS MENSAIS     │
│  mensal                         │
└─────────────────────────────────┘
```

**Especificações:**
- Background: `#00C8C3` (teal sólido) ou `#0A2A4A` (dark)
- Radius: 20px (lg)
- Padding: 24px 28px
- Número principal: 48–72px, bold 700, branco
- Unidade (se houver): 22px, regular, ao lado do número
- Descrição: 11px, uppercase, letter-spacing 0.12em, branco 80%
- Contexto (ex: "mensal"): 13px, branco 60%

**Variações:**
- **Teal sólido:** Destaque máximo — usar para o dado principal da seção
- **Dark navy:** Dado secundário ou em contexto light
- **Inline:** Menor, dentro de parágrafos ou listas

---

### Feature Card

**Propósito:** Apresentar um benefício, funcionalidade ou solução com ícone + título + descrição.

**Estrutura:**
```
┌──────────────────────────────────┐
│  [ícone teal 40px]               │
│                                  │
│  Detecção de Vazamentos          │
│                                  │
│  O sistema monitora 24h/dia e    │
│  identifica consumo anormal...   │
└──────────────────────────────────┘
```

**Especificações:**
- Background: `#0A2A4A` (dark) ou `#FFFFFF` (light)
- Radius: 16px (md-lg)
- Padding: 28px
- Borda: `1px solid rgba(0,200,195,0.15)` (dark) ou sem borda (light, usa shadow-sm)
- Ícone: 40×40px, teal, line-style
- Título: 20px, weight 600, branco (dark) ou navy (light)
- Corpo: 15px, regular, white 70% (dark) ou navy 70% (light)
- Gap entre elementos: 16px

**Estados:**
- `hover`: `transform: translateY(-4px)`, borda teal mais forte `rgba(0,200,195,0.35)`, shadow-md
- `hover dark`: borda luminosa teal

---

### Solution Card (Solução Expandida)

**Propósito:** Card maior para apresentar uma solução completa da Neometer com benefícios.

**Estrutura:**
```
┌────────────────────────────────────┐
│ [section-label] TELEMETRIA         │
│                                    │
│ Monitoramento em tempo real        │
│ de água, energia e gás             │
│                                    │
│ [imagem/3D render/mockup]          │
│                                    │
│ ✓ Leitura automática               │
│ ✓ Monitoramento hora a hora        │
│ ✓ Gráficos e histórico             │
│                                    │
│ [Saiba mais →]                     │
└────────────────────────────────────┘
```

**Especificações:**
- Fundo escuro (dark navy) ou alternado dark/light entre cards
- Imagem com overlay teal
- Lista de benefícios: ícone check teal + texto

---

### Benefit List Item

**Propósito:** Item de lista de benefícios/features — ✓ + texto.

**Estrutura:** `✓ Redução comprovada de custos`

**Especificações:**
- Ícone check: 18px, teal `#00C8C3`, bold
- Texto: 15–16px, regular, white 90% (dark) ou navy (light)
- Gap ícone-texto: 10px
- Espaçamento entre items: 12px
- Sem marcadores padrão de lista

---

### Badge — Categoria

**Propósito:** Indicar categoria, estado ou tipo de forma compacta.

**Variações:**
- **Teal:** `background: rgba(0,200,195,0.15)`, texto teal, borda teal-border
- **Navy:** `background: rgba(37,99,168,0.20)`, texto azul-mid
- **White:** `background: rgba(255,255,255,0.12)`, texto branco, borda white-20
- **Success:** teal sólido, texto branco

**Especificações:**
- Padding: 4px vertical × 10px horizontal
- Radius: pill
- Tamanho texto: 12px, peso 600, uppercase, letter-spacing 0.08em

---

### Avatar

**Propósito:** Foto de pessoa (síndico, morador) em depoimentos ou seções de equipe.

**Especificações:**
- Circular, radius 50%
- Tamanhos: 40px (sm), 56px (md), 80px (lg)
- Borda: `2px solid #00C8C3` (teal)
- Background fallback: gradient teal → navy
- Iniciais fallback: teal bg, branco texto

---

### Progress / Meter

**Propósito:** Indicar nível de consumo ou % de eficiência.

**Especificações:**
- Track: `rgba(255,255,255,0.10)` (dark) ou `rgba(13,27,53,0.10)` (light), altura 6px, radius pill
- Fill: gradiente `#00C8C3 → #36B5A8` (teal → teal-blue)
- Label: valor em % acima do fill, alinhado à direita

---

### IoT Network Diagram

**Propósito:** Representação visual do ecossistema conectado Neometer — nós + linhas.

**Estrutura:**
```
  [Sensor] ─── [Gateway] ─── [Plataforma]
     │                            │
  [Sensor]                  [App / Dashboard]
```

**Especificações:**
- Nós: círculos com ícone temático (água, energia, gás), fundo teal dim, borda teal
- Linhas de conexão: stroke 1px, teal 40%, dashed ou pontilhado
- Nó central (gateway): maior, teal sólido
- Efeito: linhas pulsam suavemente (opacity 0.4 → 0.8, loop infinito)

---

## FEEDBACK

---

### Alert / Banner Inline

**Propósito:** Mensagem de feedback contextual dentro da página.

**Estrutura:**
```
[ ⚠ ] Vazamento detectado na unidade 203 — [Ver detalhes →]
```

**Especificações:**
- Largura total do container, radius 8px
- Padding: 14px 20px
- Ícone: 20px, alinhado ao centro vertical
- Texto: 14–15px
- Variações de cor por tipo:
  - `info`: teal dim bg, teal ícone
  - `warning`: `rgba(245,158,11,0.15)` bg, âmbar ícone
  - `error`: `rgba(239,68,68,0.15)` bg, vermelho ícone
  - `success`: teal dim bg, check teal

---

### Toast / Notificação

**Propósito:** Feedback temporário de ação — canto da tela, auto-dismiss.

**Estrutura:**
```
┌─────────────────────────────────────┐
│ ✓ Alerta configurado com sucesso    │  [×]
└─────────────────────────────────────┘
```

**Especificações:**
- Posição: canto inferior direito
- Background: `#0D1B35`, borda esquerda `4px solid #00C8C3`
- Padding: 16px 20px
- Radius: 12px
- Shadow: shadow-lg
- Animação entrada: slide-up + fade-in, 300ms
- Auto-dismiss: 4000ms
- Saída: slide-down + fade-out, 200ms

---

### Loader

**Propósito:** Indicar carregamento de dados ou ação em progresso.

**Variações:**
- **Spinner:** Anel circular teal 24px, rotação 800ms linear infinito
- **Skeleton:** Blocos cinza escuro `rgba(255,255,255,0.10)` pulsando, simulando o layout
- **Progress bar:** Barra horizontal na parte superior da página (loading global), teal

---

### Empty State

**Propósito:** Tela ou seção sem dados — guia o usuário ao próximo passo.

**Estrutura:**
```
     [Ícone grande teal 64px]

     Sem dados de consumo ainda

     Conecte seus medidores para
     começar a monitorar.

     [Saiba como instalar →]
```

**Especificações:**
- Ícone ilustrativo grande (64px), teal
- Título: 18px, weight 500
- Corpo: 14–15px, texto secundário
- CTA ghost opcional

---

## OVERLAYS

---

### Modal

**Propósito:** Conteúdo focado que requer atenção — formulário, confirmação, detalhe.

**Estrutura:**
```
┌──────────────────────────────────────┐
│ Título do Modal                  [×] │
├──────────────────────────────────────┤
│                                      │
│         [Conteúdo]                   │
│                                      │
├──────────────────────────────────────┤
│ [Cancelar]          [Confirmar →]    │
└──────────────────────────────────────┘
```

**Especificações:**
- Largura: 480–640px (responsivo até 90vw)
- Background: `#0D1B35`, radius 20px
- Borda: `1px solid rgba(0,200,195,0.20)`
- Shadow: shadow-navy-deep
- Backdrop: `rgba(7,18,36,0.80)` com blur(4px)
- Header: padding 28px, borda inferior `rgba(0,200,195,0.15)`
- Footer: padding 24px, borda superior sutil
- Animação: scale(0.95)→1 + opacity 0→1, 300ms ease-out

---

### Drawer

**Propósito:** Painel lateral para filtros, detalhes ou configurações.

**Especificações:**
- Largura: 360–480px
- Altura: 100vh
- Position: right (preferencial)
- Background: `#0D1B35`
- Borda esquerda: `1px solid rgba(0,200,195,0.20)`
- Animação: translateX(100%)→0, 300ms ease-out

---

### Tooltip

**Propósito:** Contexto adicional ao hover de um elemento.

**Especificações:**
- Background: `#0A2A4A`, borda `1px solid rgba(0,200,195,0.25)`
- Texto: 13px, branco, radius 8px, padding 8px 12px
- Shadow: shadow-md
- Seta indicativa opcional
- Aparece após 400ms de hover, desaparece imediatamente ao sair
- Sempre aparece acima ou ao lado — nunca cortar borda da viewport

---

### Popover

**Propósito:** Conteúdo rico ao clicar em um elemento — mais espaço que tooltip.

**Especificações:**
- Similar ao modal mas ancorado ao elemento trigger
- Background: `#0D1B35`, radius 16px, shadow-lg
- Largura: 240–320px
- Fecha ao clicar fora (click-away)

---

## MARKETING COMPONENTS

---

### Hero Block

**Propósito:** Seção de impacto máximo — primeira impressão da marca.

**Estrutura:**
```
[Navbar]
─────────────────────────────────────────────────────
[Background: dark navy + arcos concêntricos]

[Section Label chip] TELEMETRIA INTELIGENTE

Fique em paz com
a água, energia e gás.          [Imagem profissional
                                  com overlay teal]
Com a Neometer, seu condomínio
monitora em tempo real...

[Para o condomínio →] [Para o morador]
─────────────────────────────────────────────────────
```

**Regras:**
- Título: Raleway ExtraLight Italic, muito grande (64–88px desktop)
- Nunca colocar mais de 2 CTAs no hero
- Arcos sempre no canto (superior direito geralmente)
- Fundo sempre dark navy

---

### Stats Row

**Propósito:** Linha de métricas de prova social — impacto numérico da solução.

**Estrutura:**
```
[   50%          ] | [   15 anos     ] | [  R$ 15/mês   ]
[REDUÇÃO NAS     ] | [EXPERIÊNCIA    ] | [POR UNIDADE   ]
[CONTAS MENSAIS  ] | [ENERGÉTICA     ] |                ]
```

**Especificações:**
- 3–4 items em linha (desktop), 2 colunas (mobile)
- Separador vertical fino: `1px solid rgba(0,200,195,0.25)` entre items
- Fundo: seção clara (light) ou dark (adaptável)
- Número: type-numeric-lg + type-numeric-unit
- Label: type-label-caps, teal (dark bg) ou navy (light bg)

---

### Testimonial / Social Proof

**Propósito:** Depoimento de síndico ou morador — prova social.

**Estrutura:**
```
┌──────────────────────────────────────┐
│  "Reduzimos 40% no consumo de        │
│   água no primeiro mês."             │
│                                      │
│  [Avatar]  João Silva                │
│            Síndico — Cond. Parque    │
└──────────────────────────────────────┘
```

**Especificações:**
- Card com fundo dark `#0A2A4A`, radius 16px
- Aspas decorativas grandes: teal 20% opacidade, 80–100px
- Texto da citação: 18px, weight 300, italic, branco
- Avatar: 48px circular com borda teal
- Nome: 15px bold, branco
- Cargo/condomínio: 13px, teal 70%

---

### CTA Banner

**Propósito:** Seção final de conversão — chamada para ação com #ECONOMIZAÍ.

**Estrutura:**
```
─────────────────────────────────────────────────────
[Background: dark navy com arcos]

    ECONOMIZAÍ

    Pronto para reduzir os custos
    do seu condomínio?

    [Quero conhecer a solução →]
─────────────────────────────────────────────────────
```

**Especificações:**
- "ECONOMIZAÍ": tipografia bold uppercase gigante (80–120px), teal, com quebra visual intencional
- Subtítulo: body-lg, branco 80%
- Centralizado horizontalmente
- CTA único, primary, grande (height-lg)

---

### Feature Grid

**Propósito:** Grid de features/benefícios — 2, 3 ou 4 colunas.

**Estrutura:**
```
[Feature Card] [Feature Card] [Feature Card]
[Feature Card] [Feature Card] [Feature Card]
```

**Especificações:**
- Mobile: 1 coluna
- Tablet: 2 colunas
- Desktop: 3 colunas (padrão) ou 4 (features simples)
- Gap: 24px (tablet/desktop), 16px (mobile)
- Todos os cards com mesma altura (align-items: stretch)

---

### Ecosystem Diagram

**Propósito:** Apresentar o ecossistema integrado de soluções da Neometer.

**Estrutura visual:**
```
     [Telemetria]
          |
[Reservatório] ── [Neometer Hub] ── [Eficiência]
          |
    [App/Dashboard]
```

**Especificações:**
- Ilustração central: logo/ícone Neometer maior
- Nós ao redor: feature icons teal em círculos
- Conexões: linhas pontilhadas teal, com animação de pulso
- Labels dos nós: 12px uppercase

---

### FAQ Accordion

**Propósito:** Perguntas frequentes em formato expansível.

**Estrutura:**
```
[Pergunta 1                        ▾]
─────────────────────────────────────
[Pergunta 2                        ▾]
│  Resposta expandida aqui...      │
[Pergunta 3                        ▾]
```

**Especificações:**
- Linha separadora: `1px solid rgba(0,200,195,0.20)`
- Pergunta: 17px, weight 500, branco (dark) ou navy (light)
- Ícone: chevron-down rotacionando 180° ao abrir, teal
- Resposta: 15px, regular, white 70% / navy 70%, com padding 20px abaixo
- Animação: height 0→auto + opacity 0→1, 250ms ease-out

---

*Todos os componentes seguem os tokens definidos em `design-tokens.json`. Adaptações para modo dark/light devem manter coerência com a paleta e tipografia definidas em `design-foundations.md`.*
