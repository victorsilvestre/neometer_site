---
name: brand-anatomy
description: Brand Anatomy é uma skill especializada em extrair, analisar e documentar a identidade completa de uma marca a partir de múltiplos materiais de referência. Funciona como um raio-x profundo da marca, identificando padrões visuais, verbais e estruturais. Acione esta skill ao precisar analisar a identidade de uma marca, entender o estilo visual/verbal, extrair padrões de design, construir um brand book a partir de materiais ou documentar a identidade de uma marca.
---

# Brand Anatomy

Brand Anatomy é uma skill especializada em extrair, analisar e documentar a identidade completa de uma marca a partir de múltiplos materiais de referência.

Ela funciona como um raio-x profundo da marca, identificando padrões visuais, verbais e estruturais presentes nos materiais analisados.

## 📥 Accepted Inputs

A skill pode analisar qualquer combinação de:
- artes da marca
- capturas de site / prints de websites
- PDFs institucionais
- apresentações
- posts de redes sociais
- logos
- textos institucionais
- materiais comerciais
- screenshots de produtos ou apps
- campanhas e peças publicitárias
- e-mails de marketing
- landing pages
- páginas de produto
- documentos de guideline

**Regra Crítica:** Se existirem múltiplos arquivos, *todos devem ser analisados em conjunto* para identificar padrões recorrentes.

## 🛑 When NOT To Use This Skill

Não use essa skill quando:
- o objetivo for criar uma nova identidade de marca do zero
- não houver materiais suficientes para análise
- a tarefa for apenas identificar cores ou fontes isoladas
- a análise necessária não envolver identidade de marca

## ⚙️ Core Analysis Rules

A skill deve seguir estas regras obrigatórias:

1. **Identificar padrões recorrentes**: A análise deve priorizar padrões que aparecem repetidamente nos materiais.
2. **Evitar conclusões baseadas em ocorrência única**: Nenhuma regra deve ser definida com base em apenas um exemplo isolado.
3. **Diferenciar observação de inferência**: Sempre separar observações diretas de inferências prováveis.
4. **Indicar nível de confiança**: Sempre indicar o nível de confiança das conclusões (Alto, Médio, Baixo).
5. **Identificar inconsistências**: Se os materiais apresentarem divergências, isso deve ser documentado.
6. **Documentar lacunas de identidade**: Caso faltem definições claras da marca, isso deve ser registrado.
7. **Priorizar fontes mais confiáveis**: Os materiais devem ter pesos diferentes:
   - **Alta confiança**: brand books, guideline oficiais, site institucional
   - **Média confiança**: apresentações, campanhas, social media
   - **Baixa confiança**: peças isoladas, variações pontuais

## 📄 Output Files

A skill gera os seguintes arquivos estruturados.

### 1️⃣ Primary Document (`brand-radiography.md`)
Documento principal contendo o raio-x completo da marca. O documento deve seguir rigidamente esta estrutura:

# Brand Radiography

## 1. Analysis Overview
- Marca analisada
- Tipo de materiais recebidos
- Quantidade de materiais
- Observações iniciais
- Grau geral de confiança da análise

---

## 2. Brand Essence
- Propósito percebido
- Proposta de valor
- Posicionamento
- Público aparente
- Diferenciais
- Personalidade da marca
- Arquétipos percebidos

---

## 3. Verbal Identity
- Tom de voz
- Grau de formalidade
- Vocabulário recorrente
- Estrutura de headlines
- Estilo de CTA
- Temas recorrentes
- Padrões de narrativa

---

## 4. Visual Identity
- Paleta principal
- Paleta secundária
- Cores de apoio
- Hierarquia cromática
- Sensação visual predominante

---

## 5. Typography
- Fontes identificadas
- Fontes aproximadas
- Uso tipográfico
- Hierarquia tipográfica

---

## 6. Layout System
- Estrutura de layout
- Grid percebido
- Uso de respiro
- Hierarquia visual
- Organização de conteúdo

---

## 7. Graphic Language
- Ícones
- Shapes
- Ilustrações
- Bordas
- Sombras
- Gradientes
- Texturas
- Elementos gráficos recorrentes

---

## 8. Image Direction
- Tipo de imagem
- Fotografia vs ilustração
- Estilo visual
- Tratamento de imagem
- Presença humana
- Enquadramento

---

## 9. Channel Behavior
- Website
- Social media
- Materiais institucionais
- Apresentações
- Campanhas

---

## 10. Implicit Brand Rules
- Padrões recorrentes
- Elementos obrigatórios
- Elementos raros
- Limites percebidos da identidade

---

## 11. Inconsistencies
- Conflitos entre materiais
- Oscilações de linguagem
- Oscilações visuais
- Quebras de padrão

---

## 12. Identity Gaps
- Elementos não definidos
- Áreas sem padronização
- Aspectos que exigem definição futura

---

## 13. Practical Guidelines
- Como recriar a marca
- Como manter consistência
- Cuidados na criação de novos materiais

---

## 14. Evidence Notes
- Observações por material analisado
- Origem das conclusões

### 2️⃣ Executive Summary (`brand-summary.md`)
Resumo estratégico da análise (curto e executivo) contendo:
- essência da marca
- posicionamento
- personalidade
- principais elementos visuais
- principais características de comunicação
- principais conclusões da análise

### 3️⃣ Brand Tokens (`brand-tokens.json`)
Estrutura de dados contendo os elementos objetivos da marca, usada para automatização, design systems e prompts estruturados:
- cores identificadas (paleta primária e secundária)
- tipografia (principal e secundária)
- estilos de layout
- estilos visuais recorrentes
- atributos de personalidade
- tom de voz
- categorias de imagem
- elementos gráficos recorrentes

### 4️⃣ Prompt Kit (`brand-prompt-kit.md`)
Conjunto de prompts derivados da análise da marca para:
- criação de peças visuais
- geração de imagens no estilo da marca
- criação de posts sociais
- criação de landing pages
- criação de campanhas
- geração de textos no tom da marca
- revisão de aderência à marca

### 5️⃣ Brand Consistency Checklist (`brand-checklist.md`)
Checklist prático para verificar se novos materiais respeitam a identidade da marca, incluindo verificações como:
- aderência à paleta
- consistência tipográfica
- tom de voz correto
- estilo de imagem adequado
- layout coerente com o padrão da marca
- hierarquia visual correta

## ✅ Expected Behavior

Brand Anatomy deve sempre produzir:
- uma análise profunda
- uma documentação estruturada
- outputs reutilizáveis
- conclusões baseadas em evidência

A skill **NÃO** deve:
- simplificar excessivamente a análise
- produzir apenas uma lista superficial de cores e fontes
- ignorar inconsistências entre materiais
- assumir padrões inexistentes
