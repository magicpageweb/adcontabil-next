/**
 * AD Contábil — Web App para registrar leads no Google Sheets
 *
 * PROPRIEDADES DO SCRIPT (engrenagem → Propriedades do script):
 *   WEBHOOK_SECRET  = mesmo valor de GOOGLE_SHEETS_WEBHOOK_SECRET na Vercel
 *   SPREADSHEET_ID  = ID da planilha (na URL: docs.google.com/spreadsheets/d/ESTE_ID/edit)
 *
 * Aba obrigatória: Leads
 *
 * Após colar/alterar o código: Implantar → Gerenciar implantações → lápis → Nova versão → Implantar
 */

function doPost(e) {
  try {
    var props = PropertiesService.getScriptProperties();
    var expected = props.getProperty("WEBHOOK_SECRET");
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

    var ss = openSpreadsheet_(props);
    if (!ss) {
      return json_({ ok: false, error: "spreadsheet_not_found" });
    }

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
    return json_({
      ok: false,
      error: "exception",
      message: String(err && err.message ? err.message : err),
    });
  }
}

function doGet() {
  return json_({ ok: true, service: "ad-contabil-leads" });
}

/** Abre a planilha pelo ID (obrigatório em Web App). Fallback: planilha vinculada. */
function openSpreadsheet_(props) {
  var id = props.getProperty("SPREADSHEET_ID");
  if (id) {
    return SpreadsheetApp.openById(String(id).trim());
  }
  return SpreadsheetApp.getActiveSpreadsheet();
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
