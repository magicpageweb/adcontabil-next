# Captação de leads — Google Sheets + Apps Script

## Variáveis na Vercel

| Variável | Value |
|----------|--------|
| `GOOGLE_SHEETS_WEBHOOK_URL` | URL do Web App que termina em `/exec` |
| `GOOGLE_SHEETS_WEBHOOK_SECRET` | Mesmo valor de `WEBHOOK_SECRET` no Apps Script |

Ambiente: Production. Depois de salvar → Redeploy.

## Planilha

1. Aba com nome exato: `Leads`
2. Linha 1 (cabeçalhos):  
   `Data/Hora | Nome | WhatsApp | Perfil | Interesse | Momento | Score | Classificação | Página de origem | UTM Source | UTM Medium | UTM Campaign | Referrer | Status`

## Apps Script — propriedades (obrigatórias)

Na engrenagem → **Propriedades do script**, cadastre **duas**:

| Propriedade | Valor |
|-------------|--------|
| `WEBHOOK_SECRET` | igual ao da Vercel |
| `SPREADSHEET_ID` | o ID da URL da planilha |

Exemplo de URL da planilha:

`https://docs.google.com/spreadsheets/d/1AbC...xyz/edit`

O `SPREADSHEET_ID` é só a parte `1AbC...xyz` (entre `/d/` e `/edit`).

Sem o `SPREADSHEET_ID`, o Web App costuma falhar com “não foi possível registrar”.

## Atualizar o script (se já implantou)

1. Abra o projeto no Apps Script
2. Substitua o código por [`google-apps-script-leads.js`](./google-apps-script-leads.js)
3. Salve
4. **Implantar → Gerenciar implantações → lápis (editar) → Versão: Nova versão → Implantar**
5. A URL `/exec` em geral **não muda** — não precisa alterar a Vercel

## Teste

1. Site → `/contato` → enviar formulário
2. Sucesso = abre WhatsApp **e** nova linha na aba Leads
3. Se falhar de novo: Apps Script → **Execuções** (ícone de lista) e veja o erro
