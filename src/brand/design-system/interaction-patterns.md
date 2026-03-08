# Interaction Patterns
## Neometer Web Interface Design System

> Define padrões de comportamento UX, estados, feedback visual e animações para a interface Neometer.

---

## 1. Padrões de Navegação

### 1.1 Navbar — Comportamento ao Scroll

**Estado inicial (topo da página):**
- Background: `rgba(#0D1B35, 0.80)` — semi-transparente
- Sem borda inferior
- Logo e links completamente opacos

**Ao scrollar (> 80px da viewport):**
- Background transita para `rgba(#0D1B35, 0.95)` — quase sólido
- Borda inferior aparece: `1px solid rgba(0,200,195,0.15)`
- Transição: 250ms ease-out em `background-color` e `border-color`
- Sombra suave: `0 4px 20px rgba(7,18,36,0.30)`

**Observação:** Animar apenas `opacity` da borda via `box-shadow` quando possível, evitar animar `border-color`.

---

### 1.2 Mobile Menu — Abertura

**Trigger:** Toque no ícone hamburger

**Sequência:**
1. Backdrop overlay aparece: `opacity: 0 → 1`, 200ms fade
2. Menu drawer desce: `transform: translateY(-100%) → translateY(0)`, 300ms ease-out
3. Links aparecem escalonados: cada link com `opacity: 0 → 1` + `translateY(10px) → 0`, delay de 50ms entre cada um

**Fechamento:**
1. Links desaparecem: fade-out 100ms
2. Drawer sobe: `translateY(0) → translateY(-20px)` + `opacity: 1 → 0`, 200ms ease-in
3. Backdrop desaparece: 150ms fade

**Acessibilidade:** Focus trap ativo enquanto menu estiver aberto. Fechar com ESC ou clique no backdrop.

---

### 1.3 Links de Navegação

**Hover:**
- Cor: branco 80% → teal `#00C8C3`
- Transição: 150ms ease-out em `color`
- Underline opcional: `border-bottom: 1px solid #00C8C3`, crescendo de width 0 → 100%, 200ms ease-out

**Active/Current Page:**
- Texto em teal permanente
- Underline sempre visível

**Focus-visible:**
- Outline: `2px solid #00C8C3`, `outline-offset: 4px`
- Nunca remover outline com `outline: none` sem substituto

---

### 1.4 Smooth Scroll

**Comportamento:** Ao clicar em links âncora (ex: "#solucoes"), a página rola suavemente.
- `scroll-behavior: smooth` (CSS) ou JS com `scrollIntoView({ behavior: 'smooth' })`
- Offset para compensar navbar sticky: `80px` do topo

---

## 2. Padrões de Interação com Botões

### 2.1 Estados Sequenciais

```
default → hover → active → (disabled)
```

**Primary Button (teal sólido):**
- `default`: teal sólido, shadow-md
- `hover` (150ms): `scale(1.02)`, `shadow-teal-glow`, teal levemente mais claro (brightness 1.05)
- `active` (80ms): `scale(0.98)`, teal mais escuro (brightness 0.90), shadow menor
- `disabled`: `opacity: 0.40`, cursor `not-allowed`, sem hover effect

**Secondary Button (outline):**
- `hover`: background `rgba(255,255,255,0.10)`, borda mais opaca
- `active`: `scale(0.98)`, background `rgba(255,255,255,0.15)`

**Regra de Performance:** Usar `transform` e `opacity` — NUNCA animar `width`, `height`, `padding`, `background-color` diretamente.

---

### 2.2 Feedback Visual de Clique

**Ripple effect (opcional, sutil):**
- Círculo que expande do ponto de clique
- Cor: `rgba(255,255,255,0.20)`
- Duração: 400ms, `transform: scale(0) → scale(4)` + `opacity: 0.5 → 0`
- Usar apenas em botões primary, não em ghost/text

---

### 2.3 Loading State de Botão

Quando uma ação está em progresso após clique (ex: envio de formulário):

```
[Enviando...  ◌]  ← ícone spinner animado à direita
```

- Texto muda para "Enviando..." ou equivalente
- Spinner: anel 16px, rotação 700ms linear infinito
- Botão permanece desabilitado durante o loading
- Width do botão não muda (usar `min-width` fixo para evitar jump)

---

## 3. Padrões de Formulário

### 3.1 Validação de Campo

**Estratégia:** Validação ao `blur` (quando usuário sai do campo), não ao `input` — evita mensagens prematuras.

**Validação ao submit:** Todos os campos inválidos são marcados simultaneamente, com foco no primeiro erro.

**Estado de erro:**
- Borda: `1.5px solid #EF4444`
- Mensagem de erro abaixo do campo: `12px`, vermelho, com ícone `⚠` à esquerda
- Animação de entrada: `opacity: 0 → 1` + `translateY(-4px) → 0`, 200ms

**Estado de sucesso (pós-validação):**
- Borda: `1.5px solid #00C8C3`
- Ícone check à direita do campo (16px, teal)

---

### 3.2 Focus Management

- Ao abrir modal/drawer: foco vai para o primeiro elemento interativo
- Ao fechar modal: foco volta ao elemento trigger original
- Tab trap em modais e drawers
- Focus ring: `outline: 2px solid #00C8C3`, `outline-offset: 3px` — sempre visível para keyboard users

---

### 3.3 Envio de Formulário

**Fluxo de sucesso:**
1. Botão entra em loading state
2. Request enviada
3. Formulário some com `opacity: 1 → 0` (300ms)
4. Mensagem de sucesso aparece:
```
         [✓ teal grande]

    Mensagem enviada com sucesso!

    Nossa equipe entrará em contato
    em breve.
```
- `opacity: 0 → 1` + `scale(0.95) → 1`, 400ms ease-out

**Fluxo de erro:**
1. Toast de erro aparece no canto
2. Botão volta ao estado default
3. Formulário permanece preenchido

---

## 4. Padrões de Cards e Listas

### 4.1 Card Hover

**Feature Card:**
- `hover`: `transform: translateY(-4px)`, `shadow-md → shadow-lg`, borda teal mais forte
- `transition`: 200ms ease-out em `transform` e `box-shadow`
- Cursor: `pointer` apenas se o card for clicável (tem link)

**Regra:** Cards puramente informativos (sem link/ação) não devem ter hover effect de "levitação" — isso cria expectativa de interatividade.

---

### 4.2 Lista com Entrada Escalonada (Scroll Reveal)

Para listas de benefícios, grids de cards e feature items:

**Comportamento:**
- Itens começam: `opacity: 0`, `transform: translateY(20px)`
- Ao entrar na viewport (Intersection Observer, threshold 0.15):
  - `opacity: 0 → 1`
  - `transform: translateY(20px) → translateY(0)`
  - Duração: 500ms ease-out
  - Stagger: delay de 80ms entre cada filho
- Uma vez animado, mantém estado final (não re-anima)

**Seções com scroll reveal:** Feature grid, stats row, benefit lists, solution cards.
**Seções SEM scroll reveal:** Hero (já visível), navbar, footer.

---

### 4.3 Tag Buttons / Feature Tags — Seleção

Quando usados como filtros ou categorias clicáveis:

**Comportamento:**
- Clique seleciona a tag e filtra conteúdo abaixo
- Apenas uma ativa por vez (comportamento de radio group)
- Tag selecionada: `background: rgba(0,200,195,0.20)`, `border: 1px solid #00C8C3`, texto teal
- Conteúdo filtrado: cross-fade suave entre estados (300ms)

---

## 5. Padrões de Feedback e Alertas

### 5.1 Toast Notifications

**Posicionamento:** Canto inferior direito, 24px de margem
**Empilhamento:** Múltiplos toasts empilham verticalmente, mais novo em cima
**Limite:** Máximo 3 toasts simultâneos — o mais antigo fecha ao aparecer o 4o

**Animação de entrada:**
- `transform: translateX(100%) → translateX(0)` + `opacity: 0 → 1`
- 300ms ease-out

**Auto-dismiss:**
- Duração: 4000ms (success/info) ou 6000ms (warning/error)
- Barra de progresso opcional na base do toast, esgotando durante o tempo
- Pausar ao hover

**Dismiss manual:** Ícone × no canto do toast
**Animação de saída:** `opacity: 1 → 0` + `transform: translateX(20px)`, 200ms

---

### 5.2 Estados de Loading

**Full-page loading (navegação inicial):**
- Logo Neometer centrado, pulsando suavemente (opacity 0.4 ↔ 1.0, 1200ms ease-in-out infinito)
- Background dark navy

**Skeleton loading (dados assíncronos):**
- Blocos cinza-escuro `rgba(255,255,255,0.08)` com animação shimmer:
  - Gradiente linear `rgba(255,255,255,0) → rgba(255,255,255,0.05) → rgba(255,255,255,0)` se movendo da esquerda para direita
  - Duração: 1500ms linear infinito
- Esqueleto reflete exatamente a estrutura do conteúdo real

**Section loading (atualização parcial):**
- Overlay semi-transparente `rgba(13,27,53,0.70)` sobre a seção
- Spinner teal 32px centrado

---

### 5.3 Estados Vazios (Empty States)

**Quando exibir:** Nenhum dado disponível ainda, filtro sem resultado, seção aguardando configuração.

**Tom de voz:** Construtivo — nunca "Nada encontrado", sempre indicar o próximo passo.

**Exemplo — sem dados de consumo:**
```
[Ícone de medidor, 64px, teal]

Ainda sem dados de consumo

Conecte os sensores para começar a
monitorar em tempo real.

[Como instalar →]
```

---

## 6. Padrões de Modal e Overlays

### 6.1 Modal — Abertura e Fechamento

**Abertura:**
1. Backdrop: `opacity: 0 → 1` com `background: rgba(7,18,36,0.80)` + `blur(4px)`, 250ms
2. Modal: `opacity: 0 → 1` + `transform: scale(0.95) → scale(1)`, 300ms ease-out
3. Focus vai para título ou primeiro input

**Fechamento (qualquer trigger):**
1. Modal: `opacity: 1 → 0` + `transform: scale(0.95)`, 200ms ease-in
2. Backdrop: `opacity: 1 → 0`, 200ms

**Triggers de fechamento:**
- Botão fechar (×)
- Clique no backdrop
- Tecla ESC
- **Não fechar** ao clicar dentro do modal

---

### 6.2 Drawer — Abertura

**Direção:** Slide da direita
- `transform: translateX(100%) → translateX(0)`, 300ms ease-out
- Backdrop ao fundo: `opacity: 0 → 1`, 250ms

**Fechamento:**
- `transform: translateX(0) → translateX(100%)`, 250ms ease-in
- Triggers: botão fechar, backdrop, ESC

---

### 6.3 Popover / Tooltip — Trigger

**Tooltip:**
- Trigger: hover (desktop) ou long-press (mobile)
- Delay de abertura: 400ms (evita flicker em movimentos rápidos)
- Fechamento: imediato ao sair do hover
- Animação: `opacity: 0 → 1` + `scale(0.95) → 1`, 150ms

**Popover:**
- Trigger: clique
- Fechamento: clique fora (click-away), ESC, ou clique novamente no trigger
- Animação: `opacity: 0 → 1` + `translateY(-4px) → 0`, 200ms

---

## 7. Padrões de Scroll e Parallax

### 7.1 Parallax Sutil em Elementos Decorativos

Os arcos concêntricos de fundo podem ter parallax leve para criar profundidade:
- Velocidade: 0.3× em relação ao scroll da página
- Implementar com `transform: translateY()` via JavaScript (não usar `background-attachment: fixed` — performance ruim em mobile)
- Desabilitado automaticamente em `prefers-reduced-motion: reduce`

### 7.2 Scroll Indicator (Hero)

No hero, um indicador visual sutil de "role para baixo":
```
     ↓
  scroll
```
- Ícone de chevron-down ou seta vertical
- Animação: `translateY(0) → translateY(8px)` + volta, 1200ms ease-in-out infinito
- Desaparece ao scrollar > 100px (fade-out)

---

## 8. Acessibilidade e Redução de Motion

### 8.1 `prefers-reduced-motion`

Para usuários com configuração de sistema "reduzir movimento":
- Desabilitar todas as animações de entrada (scroll reveal, hover transforms)
- Manter apenas transições de opacity (ainda aceitáveis)
- Desabilitar parallax
- Desabilitar rotação dos arcos
- Manter feedback de estado (hover color, focus ring)

### 8.2 Contraste Mínimo

- Texto sobre fundo: mínimo 4.5:1 (WCAG AA)
- Texto grande (> 18px bold ou > 24px): mínimo 3:1
- A paleta Neometer é naturalmente de altíssimo contraste — teal `#00C8C3` sobre navy `#0D1B35` tem contraste de 5.8:1 ✓
- Branco `#FFFFFF` sobre navy `#0D1B35` tem contraste de 13.5:1 ✓

### 8.3 Focus Visible

- NUNCA `outline: none` sem substituição visual
- Focus ring padrão: `2px solid #00C8C3`, `offset: 3px`
- Visível tanto em modo dark quanto light

---

## 9. Padrões de IoT / Dados em Tempo Real

### 9.1 Indicador de Dados ao Vivo

Para componentes que exibem dados em tempo real (dashboard, monitors):

```
● AO VIVO
```
- Ponto verde/teal pulsando: `scale(1) → scale(1.3) → scale(1)`, 1500ms ease-in-out infinito
- Cor: teal `#00C8C3`
- Texto: 11px uppercase, letter-spacing 0.12em

### 9.2 Atualização de Valor

Quando um valor numérico muda (atualização de consumo):
- Antigo valor: `opacity: 1 → 0` + `translateY(-10px)`, 200ms
- Novo valor: `opacity: 0 → 1` + `translateY(10px) → 0`, 200ms (com delay de 200ms)
- Efeito de "flip" numérico

### 9.3 Linha de Gráfico Animada

Para gráficos de histórico de consumo:
- Linha SVG com `stroke-dasharray` + `stroke-dashoffset` animando de comprimento total → 0
- Duração: 1200ms ease-out ao entrar na viewport
- Cor: gradiente teal → teal-blue

---

*Padrões de interação alinhados com a identidade tech-premium da Neometer. Todos os timings, easings e valores de animação correspondem aos tokens definidos em `design-tokens.json` (seção `motion`).*
