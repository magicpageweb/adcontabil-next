/**
 * AD Contábil — Web App para registrar leads no Google Sheets
 *
 * COMO CONFIGURAR
 * 1. Crie uma planilha Google Sheets.
 * 2. Renomeie a primeira aba para: Leads
 * 3. Na linha 1, coloque exatamente estes cabeçalhos (nessa ordem):
 *    Data/Hora | Nome | WhatsApp | Perfil | Interesse | Momento | Score |
 *    Classificação | Página de origem | UTM Source | UTM Medium | UTM Campaign |
 *    Referrer | Status
 * 4. Extensões → Apps Script. Cole este arquivo inteiro.
 * 5. Em Script properties (Configurações do projeto → Propriedades do script),
 *    adicione: WEBHOOK_SECRET = (mesmo valor de GOOGLE_SHEETS_WEBHOOK_SECRET na Vercel)
 * 6. Implantar → Nova implantação → Tipo: App da Web
 *    - Executar como: Eu
 *    - Quem tem acesso: Qualquer pessoa
 * 7. Copie a URL da implantação para GOOGLE_SHEETS_WEBHOOK_URL na Vercel
 *    (Development, Preview e Production).
 *
 * O Next.js (/api/leads) é quem chama este endpoint. O navegador NÃO chama o Apps Script.
 */

function doPost(e) {
  try {
    var expected = PropertiesService.getScriptProperties().getProperty("WEBHOOK_SECRET");
    if (!expected) {
      return json_({ ok: false, error: "secret_not_configured" });
    }

    if (!e || !e.postData || !e.postData.contents) {
      return json_({ ok: false, error: "empty_body" });
    }

    var body = JSON.parse(e.postData.contents);
    if (!body || body.secret !== expected) {
      return json_({ ok: false, error: "unauthorized" });
    }

    var d = body.data || {};
    var name = String(d.name || "").trim();
    var whatsapp = String(d.whatsapp || "").trim();
    var profile = String(d.profile || "").trim();
    var interest = String(d.interest || "").trim();
    var moment = String(d.moment || "").trim();

    if (!name || !whatsapp || !profile || !interest || !moment) {
      return json_({ ok: false, error: "missing_fields" });
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Leads");
    if (!sheet) {
      return json_({ ok: false, error: "sheet_not_found" });
    }

    var now = Utilities.formatDate(new Date(), "America/Sao_Paulo", "dd/MM/yyyy HH:mm:ss");

    sheet.appendRow([
      now,
      sanitize_(name),
      sanitize_(whatsapp),
      sanitize_(profile),
      sanitize_(interest),
      sanitize_(moment),
      d.score != null ? d.score : "",
      sanitize_(String(d.classification || "")),
      sanitize_(String(d.pageUrl || "")),
      sanitize_(String(d.utmSource || "")),
      sanitize_(String(d.utmMedium || "")),
      sanitize_(String(d.utmCampaign || "")),
      sanitize_(String(d.referrer || "")),
      sanitize_(String(d.status || "Novo")),
    ]);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: "exception" });
  }
}

function doGet() {
  return json_({ ok: true, service: "ad-contabil-leads" });
}

function sanitize_(value) {
  var s = String(value == null ? "" : value);
  if (/^[=+\-@]/.test(s)) {
    return "'" + s;
  }
  return s;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
