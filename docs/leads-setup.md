# Captação de leads — Google Sheets + Apps Script

## Variáveis na Vercel

Configure em **Settings → Environment Variables** para Development, Preview e Production:

| Variável | Escopo | Descrição |
|----------|--------|-----------|
| `GOOGLE_SHEETS_WEBHOOK_URL` | Server only | URL da implantação do Apps Script (Web App) |
| `GOOGLE_SHEETS_WEBHOOK_SECRET` | Server only | Mesmo valor de `WEBHOOK_SECRET` nas Script properties |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Public | Já existente (GA4) |

**Não** use prefixo `NEXT_PUBLIC_` nos segredos do Sheets.

Após alterar variáveis, faça um novo deploy.

## Planilha

1. Aba: `Leads`
2. Cabeçalho (linha 1), nesta ordem:
   `Data/Hora | Nome | WhatsApp | Perfil | Interesse | Momento | Score | Classificação | Página de origem | UTM Source | UTM Medium | UTM Campaign | Referrer | Status`
3. Status inicial gravado pelo sistema: `Novo`
4. Status manuais sugeridos (editados pela equipe): Novo, Em contato, Em negociação, Cliente, Sem interesse

## Apps Script

Use o arquivo [`google-apps-script-leads.js`](./google-apps-script-leads.js).

Passos resumidos:

1. Extensões → Apps Script na planilha
2. Colar o script
3. Propriedades do script: `WEBHOOK_SECRET`
4. Implantar como App da Web (executar como você; acesso: qualquer pessoa)
5. Copiar URL → `GOOGLE_SHEETS_WEBHOOK_URL`

O navegador **nunca** chama o Apps Script. Apenas `POST /api/leads` no Next.js.

## Antes de produção

Alinhar com a proprietária o texto da Política de Privacidade e o uso do Google Sheets como armazenamento; preferível revisão jurídica.
