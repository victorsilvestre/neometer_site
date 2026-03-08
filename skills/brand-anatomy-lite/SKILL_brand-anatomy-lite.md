---
name: brand-anatomy-lite
description: Extrai rapidamente a personalidade, estilo visual e verbal de uma marca a partir de referências para capturar o snapshot da marca. Use esta skill para gerar contexto para peças rápidas, preparar prompts de IA de imagem e conteúdo ou revisar materiais diversos. Não use para diagnósticos profundos ou brand books - nesses casos use a skill brand-anatomy.
---

# Brand Anatomy Lite

Brand Anatomy Lite é uma skill especializada em capturar rapidamente o estilo de uma marca a partir de materiais de referência. Funciona como um snapshot do estilo da marca, identificando os padrões mais fortes presentes nos materiais analisados.

Essa skill prioriza velocidade e utilidade prática, não uma análise profunda de branding.

## 📥 Accepted Inputs

A skill pode analisar qualquer combinação de:
- prints de sites / websites
- artes da marca / peças visuais
- logos
- posts de redes sociais
- PDFs corporativos / institucionais
- apresentações
- peças de campanha
- landing pages / páginas de produto
- materiais comerciais

Se múltiplos arquivos forem fornecidos, a skill deve identificar os padrões visuais e verbais mais recorrentes.

## 🛑 When NOT To Use This Skill

Não use essa skill quando:
- for necessário um diagnóstico profundo de branding
- o objetivo for documentar completamente a identidade da marca
- for necessário analisar inconsistências complexas da marca
- for necessário construir um brand book completo

Nesses casos, utilize a skill `brand-anatomy`.

## ⚙️ Core Analysis Rules

A skill deve seguir estas regras obrigatórias:
1. **Priorizar padrões recorrentes**: A análise deve focar nos elementos que aparecem repetidamente.
2. **Evitar conclusões frágeis**: Não definir padrões baseados em ocorrências isoladas.
3. **Priorizar clareza e objetividade**: A saída deve ser curta e prática.
4. **Evitar excesso de análise**: A skill deve focar apenas nos principais elementos da marca.
5. **Pensar em utilidade prática**: Os outputs devem ser úteis para criação de conteúdo e design rapidamente.

## ✅ Expected Behavior

Brand Anatomy Lite deve:
- capturar rapidamente o estilo da marca
- gerar outputs curtos e úteis
- produzir informações reutilizáveis
- priorizar clareza e velocidade

A skill **NÃO** deve:
- gerar análises extensas
- produzir documentação complexa
- criar diagnósticos estratégicos completos

## 📄 Output Files

A skill gera três arquivos finais baseados na sua análise.

### 1️⃣ Brand Style Snapshot (`brand-style.md`)
Documento curto que resume o estilo da marca de forma clara e rápida.
Esse documento deve ter no máximo 1 a 2 páginas de conteúdo.

Estrutura EXATA do arquivo gerado:

# Brand Style Snapshot

## Overview
Resumo geral da sensação transmitida pela marca.

## Brand Personality
Principais atributos percebidos da marca.
Exemplos:
- moderna
- confiável
- ousada
- premium
- acessível
- tecnológica

## Visual Style
Características visuais predominantes.
- nível de contraste
- densidade visual
- minimalista ou carregado
- moderno ou clássico
- clean ou vibrante

## Color Palette
Principais cores identificadas.
- cores primárias
- cores secundárias
- neutros predominantes

## Typography
Estilo tipográfico predominante.
- estilo das fontes
- uso em títulos
- uso em texto

## Graphic Elements
Elementos visuais recorrentes.
Exemplos:
- shapes
- ícones
- linhas
- gradientes
- texturas
- ilustrações

## Image Style
Estilo das imagens utilizadas.
- fotografia ou ilustração
- presença de pessoas
- estilo de enquadramento
- tratamento de cor

## Communication Style
Estilo de comunicação.
- tom de voz
- formalidade
- estilo de headline
- estilo de CTA

## Quick Style Summary
Resumo em 3–5 frases descrevendo o estilo geral da marca.


### 2️⃣ Brand Style Tokens (`brand-style-tokens.json`)
Estrutura de dados contendo os elementos principais da identidade da marca (usada para prompt estruturado e automação).

Estrutura EXATA do arquivo:
```json
{
  "brand_personality": [],
  "visual_style": {
    "style": "",
    "density": "",
    "contrast": ""
  },
  "colors": {
    "primary": [],
    "secondary": [],
    "neutral": []
  },
  "typography": {
    "headline_style": "",
    "body_style": ""
  },
  "graphic_elements": [],
  "image_style": {
    "type": "",
    "tone": "",
    "composition": ""
  },
  "voice": {
    "tone": "",
    "formality": ""
  }
}
```

### 3️⃣ Brand Style Prompt Kit (`brand-style-prompts.md`)
Arquivo contendo prompts prontos para utilizar o estilo da marca em ferramentas de IA. A skill deve preencher os prompts abaixo com as características concretas identificadas na análise (substituindo textos descritivos pelas conclusões).

Estrutura EXATA do arquivo:

# Brand Style Prompts

## Prompt for Visual Design

Create a visual design inspired by the analyzed brand style.

Key characteristics:
- [preencha com a descrição do visual style]
- [preencha com a descrição da typography]
- [preencha com a descrição da color palette]
- [preencha com a descrição da image style]
- [preencha com a descrição dos graphic elements]

---

## Prompt for Image Generation

Generate an image in the style of the analyzed brand.

Style characteristics:
- [preencha com o visual tone]
- [preencha com a color palette]
- [preencha com o composition style]
- [preencha com o image treatment]

---

## Prompt for Social Media Content

Create a social media post in the style of the analyzed brand.

Tone of voice:
- [preencha com a descrição do tom]

Visual style:
- [preencha com a descrição das características e do layout]

---

## Prompt for Landing Page

Create a landing page concept following this brand style.

Include:
- [preencha com o hero section style]
- [preencha com a typography style]
- [preencha com a color palette]
- [preencha com as layout characteristics]
