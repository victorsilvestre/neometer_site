# Page Patterns
## Neometer Web Interface Design System

> Modelos estruturais de páginas para o site da Neometer. Cada padrão define estrutura de seções, hierarquia de conteúdo e fluxo de leitura.

---

## HOMEPAGE

A homepage é o destino principal de conversão — apresenta a Neometer, os problemas que resolve, as soluções, a proposta de valor e converte o visitante em lead.

### Fluxo Narrativo

```
Impacto → Problema → Solução → Prova → Benefício → Conversão
```

---

### Seção 1: Navbar
**Modo:** Dark
**Componente:** Navbar (sticky)

```
[Logo] ─────────────────── [Soluções] [Sobre] [FAQ] ─── [Para o morador] [Para o condomínio]
```

---

### Seção 2: Hero
**Modo:** Dark (navy + arcos)
**Objetivo:** Impacto imediato + CTA principal

```
┌───────────────────────────────────────────────────────────────────────┐
│  [Arcos concêntricos — canto superior direito]                        │
│                                                         ┌───────────┐ │
│  [ TELEMETRIA INTELIGENTE ]                             │           │ │
│                                                         │  Imagem:  │ │
│  Fique em paz com                                       │  profis-  │ │
│  a água, energia                                        │  sional   │ │
│  e gás.                    ← Raleway ExtraLight italic  │  overlay  │ │
│                                                         │  teal     │ │
│  Com a Neometer, seu condomínio monitora                │           │ │
│  em tempo real, reduz desperdícios e                    └───────────┘ │
│  transforma dados em economia real.                                   │
│                                                                       │
│  ✓ Monitoramento inteligente  ✓ Redução de custos                    │
│  ✓ Gestão para síndicos       ✓ Transparência para moradores          │
│                                                                       │
│  [Quero conhecer a solução →]   [Saiba mais]                         │
│                                                                       │
│  [Arcos — canto inferior esquerdo, menor]                            │
└───────────────────────────────────────────────────────────────────────┘
```

**Hierarquia de conteúdo:**
1. Section label (tag chip teal) — contexto de produto
2. Headline principal (72px, Raleway ExtraLight italic)
3. Subtítulo descritivo (18px, regular, white 80%)
4. Checklist de benefícios rápidos (2 colunas)
5. CTAs (primary + ghost/secondary)
6. Imagem/visual à direita

---

### Seção 3: Stats Row — Prova de Impacto
**Modo:** Light (teal pálido)
**Objetivo:** Credibilidade imediata com números

```
┌───────────────────────────────────────────────────────────────────────┐
│  [Fundo: gradient branco → teal pálido]                               │
│                                                                       │
│      50%           │      15 anos         │      R$ 15/mês            │
│  REDUÇÃO NAS       │  EXPERIÊNCIA EM      │  POR UNIDADE              │
│  CONTAS MENSAIS    │  CONSULTORIA         │  POR MÊS                  │
│                    │  ENERGÉTICA          │                            │
└───────────────────────────────────────────────────────────────────────┘
```

**Hierarquia:** Números em destaque → Unidade → Label descritivo

---

### Seção 4: O Problema
**Modo:** Dark
**Objetivo:** Criar empatia com a dor do síndico

```
┌───────────────────────────────────────────────────────────────────────┐
│  [Fundo: dark navy, arcos sutis]                                      │
│                                                                       │
│     [ SEM NEOMETER ]                                                  │
│                                                                       │
│     Sem tecnologia, o síndico                                         │
│     administra no escuro.                                             │
│                                                                       │
│  ✗ Contas altas sem explicação     ✗ Rateios injustos                │
│  ✗ Vazamentos ocultos meses        ✗ Falta de dados                  │
│  ✗ Falta de visibilidade           ✗ Decisões sem base               │
│                                                                       │
│  Com a Neometer, o condomínio passa a operar com dados em tempo real. │
│                                                                       │
└───────────────────────────────────────────────────────────────────────┘
```

**Hierarquia:** Tag de contexto → Declaração de problema → Lista de dores (com ícones X) → Transição para solução

---

### Seção 5: Sobre a Neometer
**Modo:** Dark ou Statement (gradient azul-teal)
**Objetivo:** Construir confiança na expertise

```
┌───────────────────────────────────────────────────────────────────────┐
│  [Fundo: gradient statement 2D6FA0 → 36B5A8]                         │
│                                                                       │
│  [ SOBRE A NEOMETER ]                                                 │
│                                                                       │
│  Mais de 15 anos de                  [Imagem: prédio                 │
│  experiência em                       residencial moderno            │
│  consultoria energética.              com grading azul]              │
│                                                                       │
│  Nosso propósito é dar ao síndico                                     │
│  controle total sobre os recursos                                     │
│  do prédio.                                                           │
│                                                                       │
│  [Saiba mais sobre nós →]                                            │
└───────────────────────────────────────────────────────────────────────┘
```

---

### Seção 6: Nossas Soluções
**Modo:** Alternado (cada solução em card dark ou split dark/light)
**Objetivo:** Apresentar os produtos em detalhe

**Estrutura: 3 soluções, cada uma com seu card/bloco**

**Solução A — Telemetria Inteligente:**
```
┌──────────────────────────────┬────────────────────────────────────────┐
│ [LIGHT]                      │ [Visual: mockup smartphone dashboard]  │
│ [ SOLUÇÃO 01 ]               │                                        │
│                              │                                        │
│ Telemetria Inteligente       │  [Mockup com overlay teal]             │
│                              │                                        │
│ Monitoramento em tempo real  │                                        │
│ de água, energia e gás.      │                                        │
│                              │                                        │
│ ✓ Leitura automática         │                                        │
│ ✓ Monitoramento hora a hora  │                                        │
│ ✓ Gráficos e histórico       │                                        │
│ ✓ Sem erros humanos          │                                        │
│                              │                                        │
│ [Saiba mais →]               │                                        │
└──────────────────────────────┴────────────────────────────────────────┘
```

**Solução B — Eficiência Energética:**
Mesmo layout, lados invertidos (visual à esquerda, texto à direita), modo dark.

**Solução C — Monitoramento de Reservatórios:**
Mesma estrutura Solução A, modo light.

---

### Seção 7: O Ecossistema Neometer
**Modo:** Dark
**Objetivo:** Mostrar como as soluções se integram

```
┌───────────────────────────────────────────────────────────────────────┐
│  [ ECOSSISTEMA NEOMETER ]                                             │
│                                                                       │
│  Gestão completa de recursos                                          │
│                                                                       │
│         [Diagrama de rede IoT com nós e conexões]                    │
│                                                                       │
│    [Telemetria]──[Hub Neometer]──[Eficiência]                        │
│                       │                                               │
│                 [Reservatório]                                        │
│                       │                                               │
│               [App/Dashboard]                                         │
│                                                                       │
│  ✓ Mais controle  ✓ Mais segurança  ✓ Menos desperdício              │
└───────────────────────────────────────────────────────────────────────┘
```

---

### Seção 8: Para o Síndico / Para o Morador
**Modo:** Split (Light | Dark)
**Objetivo:** Segmentar a proposta de valor por audiência

```
┌───────────────────────────────┬───────────────────────────────────────┐
│ [LIGHT]  PARA O SÍNDICO       │ [DARK]  PARA O MORADOR               │
│                               │                                       │
│ [Imagem: profissional         │ [Imagem: família em casa             │
│  confiante, blob teal]        │  sorrindo, blob teal]                │
│                               │                                       │
│ Gestão baseada em dados       │ Transparência total sobre             │
│                               │ o consumo                            │
│ ✓ Visibilidade total          │ ✓ Consumo atual                      │
│ ✓ Dashboards em tempo real    │ ✓ Histórico de uso                   │
│ ✓ Apoio à decisão             │ ✓ Alertas de anomalias               │
│ ✓ Redução de conflitos        │ ✓ Rateio justo                       │
│                               │                                       │
│ Investimento inicial zero.    │ Pague pelo que usa.                  │
│                               │                                       │
│ [Para o condomínio →]         │ [Para o morador →]                   │
└───────────────────────────────┴───────────────────────────────────────┘
```

---

### Seção 9: FAQ
**Modo:** Light
**Objetivo:** Reduzir fricção de dúvidas comuns

```
┌───────────────────────────────────────────────────────────────────────┐
│  [ PERGUNTAS FREQUENTES ]                                             │
│                                                                       │
│  Precisa fazer obra para instalar?                              [▾]  │
│  ─────────────────────────────────────────────────────────────────── │
│  O condomínio precisa comprar equipamentos?                     [▾]  │
│  ─────────────────────────────────────────────────────────────────── │
│  O sistema detecta vazamentos?                                  [▾]  │
│  ─────────────────────────────────────────────────────────────────── │
│  Os dados são confiáveis para rateio?                           [▾]  │
│  ─────────────────────────────────────────────────────────────────── │
│  O sistema funciona com aquecimento solar?                      [▾]  │
└───────────────────────────────────────────────────────────────────────┘
```

---

### Seção 10: CTA Final / #ECONOMIZAÍ
**Modo:** Dark (com arcos proeminentes)
**Objetivo:** Conversão final

```
┌───────────────────────────────────────────────────────────────────────┐
│  [Arcos muito proeminentes — ambos os cantos]                        │
│                                                                       │
│                   ECONOMIZAÍ                                          │
│            ← Tipografia gigante bold teal                            │
│                                                                       │
│         Pronto para reduzir os custos do seu condomínio?             │
│                                                                       │
│         Mais controle. Mais transparência. Mais eficiência.          │
│                                                                       │
│              [Quero conhecer a solução →]                            │
│                                                                       │
│         andre@neometer.com.br  |  (61) 99999-9999                   │
└───────────────────────────────────────────────────────────────────────┘
```

---

### Seção 11: Footer
**Modo:** Dark Deep (`#071224`)
**Componente:** Footer

---

## LANDING PAGE — SÍNDICO

Página dedicada para o segmento síndico, otimizada para conversão de leads qualificados.

### Estrutura de Seções

```
1. [DARK]    Navbar (simplificada — logo + 1 CTA)
2. [DARK]    Hero focado no síndico — "Pare de administrar no escuro"
3. [LIGHT]   Stats — números de economia e eficiência
4. [DARK]    3 principais problemas do síndico (cards de dor)
5. [LIGHT]   Solução Neometer — overview das 3 soluções
6. [DARK]    Modelo de investimento zero (locação)
7. [LIGHT]   Social proof — depoimento de síndico (testimonial)
8. [DARK]    FAQ (4 perguntas mais comuns para síndicos)
9. [DARK]    CTA Final — formulário de contato simples
10. [DARK]   Footer mínimo
```

### Hero — Síndico

```
┌───────────────────────────────────────────────────────────────────────┐
│  Pare de administrar                                                  │
│  o condomínio no escuro.          [Síndico profissional               │
│                                    com overlay teal]                  │
│  Telemetria inteligente para                                          │
│  síndicos que querem dados,                                           │
│  não suposições.                                                      │
│                                                                       │
│  [Quero uma demonstração →]                                          │
└───────────────────────────────────────────────────────────────────────┘
```

---

## LANDING PAGE — MORADOR

Página dedicada para o morador — foco em transparência e justiça no consumo.

### Estrutura de Seções

```
1. [DARK]    Navbar (simplificada)
2. [DARK]    Hero — "Saiba exatamente o que você consome"
3. [LIGHT]   3 benefícios principais (cards)
4. [DARK]    Como funciona (3 steps lineares)
5. [LIGHT]   Mockup do app — visual do dashboard
6. [DARK]    CTA — "Peça ao seu síndico"
7. [DARK]    Footer mínimo
```

---

## PÁGINA DE CONTATO

Página dedicada para geração de leads e contato direto.

### Estrutura

```
1. [DARK]    Navbar
2. [DARK]    Hero compacto — "Fale com a Neometer"
3. [LIGHT]   Layout split:
             Coluna esquerda: informações de contato + endereço + social
             Coluna direita: formulário de contato
             - Nome
             - E-mail
             - Telefone
             - Tipo de condomínio (select)
             - Mensagem
             - [Enviar mensagem →]
4. [DARK]    Footer
```

---

## PADRÕES COMPARTILHADOS

### Padrão de Transição Entre Seções

- Seção dark → Seção light: sem separador visual hard (deixar a mudança de cor ser o separador)
- Seção dark → Seção dark: adicionar `border-top: 1px solid rgba(255,255,255,0.05)` sutil
- Seção light → Seção dark: sem separador (contraste já é o separador)
- Nunca usar `<hr>` horizontal proeminente como separador

### Padrão de Cabeçalho de Seção

```
1. [Section label chip — sempre primeiro]
2. Título da seção (heading-xl ou heading-lg)
3. Subtítulo opcional (body-lg, 60% opacidade)
4. [Gap de 48px antes do conteúdo]
```

### Posição dos CTAs

- Sempre alinhados à esquerda em seções split (segue o texto)
- Centralizados em seções de conteúdo centrado (hero, CTA final, stats)
- Primary CTA sempre antes do secondary
- Máximo 2 CTAs por seção

### Hierarquia Visual de Seção

```
Prioridade 1: Dado numérico ou visual impactante (imagem, 3D, mockup)
Prioridade 2: Título principal
Prioridade 3: Subtítulo e corpo
Prioridade 4: Lista de benefícios
Prioridade 5: CTA
Prioridade 6: Elementos decorativos (arcos, separadores)
```

---

*Padrões de página definidos com base no conteúdo de `neometer_conteudo_site.txt` e nos padrões visuais da apresentação comercial.*
