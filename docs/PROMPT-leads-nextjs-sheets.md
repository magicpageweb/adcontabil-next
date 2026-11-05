# PROMPT — Captação e qualificação de leads (Next.js + Google Sheets + WhatsApp)

Use este documento como prompt completo para replicar a mesma funcionalidade em **outro website Next.js**.

Origem de referência: implementação em produção do site AD Contábil (`ad-contabil-next`).

---

## Contexto

Implemente no site Next.js (App Router, TypeScript, Tailwind) uma camada de **captação e qualificação de leads**, já validada em produção em outro projeto.

Arquitetura obrigatória:

```text
Visitante
  → CTA / botão flutuante
  → formulário curto OU WhatsApp direto
  → POST /api/leads (server-side)
  → Google Apps Script Web App (secret)
  → Google Sheets (aba Leads)
  → após sucesso: abrir wa.me com mensagem contextual
  → atendimento humano no WhatsApp (sem API, bot ou automação)
```

## NÃO implementar

- n8n, Evolution, WhatsApp Business API, chatbot
- PostgreSQL, Supabase, CRM, VPS, painel admin
- leitura/envio automático de mensagens no WhatsApp
- Service Account Google (nesta versão)
- dependências novas (sem RHF, zod, modal lib, etc.), salvo se o projeto já tiver e for reutilizar

## Regras de produto

1. O visitante **nunca é obrigado** a preencher o formulário.
2. Botão flutuante abre painel com 2 opções:
   - iniciar atendimento rápido (abre formulário/modal existente)
   - falar direto pelo WhatsApp (sem gravar na planilha)
3. CTAs principais de conversão → formulário.
4. Header / float (atalho) / alguns links → WhatsApp direto permitido.
5. Classificação FRIO/MORNO/QUENTE é **interna** (só na planilha; nunca exibir ao visitante).
6. Copy deve evitar a palavra “formulário” nos CTAs (preferir benefício: “Iniciar atendimento rápido”, “Solicitar análise…”, etc.).
7. Se Sheets falhar: NÃO fingir sucesso; mensagem transparente + opção de continuar no WhatsApp.

## Fluxo técnico

```text
Next.js (client)
  → POST /api/leads
  → valida + normaliza telefone BR + score
  → fetch server-side ao Apps Script
  → appendRow Sheets
  → retorna whatsappUrl
  → client abre WhatsApp
```

Segredos só no servidor:

- `GOOGLE_SHEETS_WEBHOOK_URL`
- `GOOGLE_SHEETS_WEBHOOK_SECRET`

Nunca chamar Apps Script do browser (CORS + exposição).

## Campos do formulário (curto)

Adaptar labels/opções ao nicho do site, mas manter estrutura:

- Nome (obrigatório)
- WhatsApp (obrigatório; aceitar máscara BR; normalizar para `55` + DDD + número)
- Perfil (select)
- Interesse (select)
- Momento (select)
- Consentimento LGPD curto + link para política de privacidade (criar página se não existir)
- Honeypot oculto
- `formOpenedAt` (rejeitar envio &lt; ~3s)

Não coletar CPF/CNPJ, endereço, faturamento, dados sensíveis/clínicos.

## Scoring (config centralizada em `lib`)

Exemplo (ajustável):

- Perfil / Interesse / Momento somam pontos
- 0–29 FRIO | 30–59 MORNO | 60+ QUENTE

## Origem (no submit, sem sessionStorage obrigatório)

- `pageUrl`, `referrer`, `utm_source`, `utm_medium`, `utm_campaign` da URL atual

## Anti-spam

- honeypot
- tempo mínimo
- whitelist de campos
- limite de tamanho
- anti double-submit no client
- rate limit in-memory apenas best-effort

## Google Sheets

Aba: `Leads`

Cabeçalho (linha 1), nesta ordem:

`Data/Hora | Nome | WhatsApp | Perfil | Interesse | Momento | Score | Classificação | Página de origem | UTM Source | UTM Medium | UTM Campaign | Referrer | Status`

Status inicial: `Novo`

Sanitizar formula injection (`=`, `+`, `-`, `@`).

## Google Apps Script

Fornecer script completo Web App:

- `doPost` valida secret
- valida campos mínimos
- abre planilha por `SPREADSHEET_ID` (Script Property) — NÃO depender só de `getActiveSpreadsheet()`
- `appendRow`
- retorna JSON `{ ok: true }` / `{ ok: false, error }`

Script Properties:

- `WEBHOOK_SECRET`
- `SPREADSHEET_ID` (ID da URL `/d/ID/edit`)

Deploy:

- App da Web
- Executar como: Eu
- Quem tem acesso: Qualquer pessoa
- Após mudar código: Gerenciar implantações → editar → Nova versão → Implantar
- Se gerar URL nova `/exec`, atualizar Vercel e Redeploy

Referência de script neste repositório: [`google-apps-script-leads.js`](./google-apps-script-leads.js)  
Checklist operacional: [`leads-setup.md`](./leads-setup.md)

## UX do float

Painel compacto (popover, não modal bloqueante):

- Título: Como podemos ajudar?
- Texto: Conte-nos brevemente o seu momento para direcionarmos o seu atendimento ao especialista certo.
- Botão principal: Iniciar atendimento rápido
- Alternativa: Ou, se preferir, fale diretamente com a [MARCA] pelo WhatsApp.
- Botão secundário: Falar direto pelo WhatsApp
- Fechar + Escape + clique fora
- Acessível (aria, foco, teclado, touch 44px)
- Mobile-friendly; conviver com BackToTop / z-index

## Componentes sugeridos (adaptar à estrutura do repo)

```text
components/lead-form/LeadForm.tsx
components/lead-form/LeadModal.tsx
components/lead-form/LeadFormProvider.tsx
components/lead-form/LeadCtaButton.tsx
components/lead-form/LeadContactPanel.tsx
app/api/leads/route.ts
lib/leads/{types,scoring,validation,whatsapp,origin}.ts
docs/google-apps-script-leads.js
docs/leads-setup.md
.env.example
```

## WhatsApp

Reutilizar número centralizado do projeto (`lib/site` ou env `NEXT_PUBLIC_` se já existir).

Mensagem curta contextual (nome + interesse). Sem score/classificação na mensagem.

Usar `wa.me` / `whatsappUrl` existente.

## Analytics (só se o projeto já tiver GA)

Eventos sem PII:

- `atendimento_float_open`
- `lead_form_open`
- `lead_form_submit`
- `lead_whatsapp_click`
- `whatsapp_direct_click`

## LGPD

Páginas discretas de privacidade/cookies/termos se não existirem.

Aceite curto no form + link.

Não poluir UI.

## Lições críticas de produção (obrigatório)

1. Código precisa estar commitado/pushado; envs na Vercel sem o código no ar não mudam nada.
2. Redeploy depois de criar/alterar env vars.
3. Secret na Vercel tipo Secret: ao editar, Value aparece vazio — não salvar em branco.
4. Código do script Apps Script ≠ URL `/exec`.
5. Sem `SPREADSHEET_ID`, Web App falha (`spreadsheet_not_found` / `sheet_not_found`).
6. Aba deve se chamar exatamente `Leads`.
7. Nova implantação pode gerar URL `/exec` diferente → atualizar Vercel.
8. Testar webhook direto: POST JSON com secret; sucesso = `{"ok":true}` e linha na planilha.
9. `502` em `/api/leads` com Sheets ok = URL/secret errados ou deploy antigo na Vercel.

## Critérios de sucesso

- Float abre painel com 2 caminhos
- Form valida, pontua, grava Sheets Status Novo, abre WhatsApp
- WhatsApp direto não grava planilha
- Sem secrets no client
- lint/build passam
- Design nativo do site (não parecer widget externo)

## Processo

1. Auditar o projeto alvo (router, CTAs, WhatsApp, modal, analytics, privacidade)
2. Implementar reutilizando padrões do repo
3. Entregar Apps Script + checklist Sheets/Vercel
4. Não hardcodar segredos
5. Relatório final: arquivos, envs, como testar, o que NÃO foi alterado

## Personalização deste site

Preencher antes de executar:

- Marca: `[NOME]`
- WhatsApp: `[NÚMERO E.164]`
- Nicho / opções de Perfil, Interesse, Momento: `[LISTAR]`
- CTAs que passam pelo form vs WhatsApp direto: `[LISTAR]`
- Domínio / projeto Vercel: `[LISTAR]`
- Criar planilha e Apps Script **novos** (não reutilizar planilha de outro cliente)
