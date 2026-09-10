import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/site/SiteLayout";
import { BRAND, EMAIL, PHONE_DISPLAY, RESPONSIBLE, SITE_URL } from "@/lib/site";
import { breadcrumbSchema, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Política de Privacidade",
  description: `Como a ${BRAND} trata dados pessoais coletados no site, inclusive no formulário de contato.`,
  path: "/politica-de-privacidade",
});

const schemas = [
  breadcrumbSchema([
    { name: "Início", path: "/" },
    { name: "Política de Privacidade", path: "/politica-de-privacidade" },
  ]),
];

export default function PrivacyPolicyPage() {
  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <article className="mx-auto max-w-3xl px-4 md:px-6 py-14 md:py-20">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold">Legal</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-foreground">
          Política de Privacidade
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Última atualização: setembro de 2026 · {SITE_URL}
        </p>

        <div className="mt-10 space-y-8 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">1. Quem somos</h2>
            <p className="mt-3 text-muted-foreground">
              Esta política descreve como a {BRAND} ({RESPONSIBLE}), com atendimento em Santa Cruz
              do Sul/RS, trata dados pessoais coletados por meio do site {SITE_URL}. O texto é
              informativo e pode ser revisado para adequação jurídica.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              2. Quais dados coletamos
            </h2>
            <p className="mt-3 text-muted-foreground">
              No formulário de qualificação de contato, podemos coletar: nome, número de WhatsApp,
              perfil informado, interesse, momento comercial e, quando disponíveis, página de
              origem, referrer e parâmetros UTM. Também podemos registrar dados técnicos de
              navegação via ferramentas de mensuração (veja a{" "}
              <Link href="/politica-de-cookies" className="text-primary hover:underline">
                Política de Cookies
              </Link>
              ).
            </p>
            <p className="mt-3 text-muted-foreground">
              Não solicitamos CPF, CNPJ, endereço residencial completo, dados bancários, senhas,
              informações clínicas, dados de pacientes ou documentos sensíveis pelo formulário do
              site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">3. Finalidade</h2>
            <p className="mt-3 text-muted-foreground">
              Os dados do formulário são utilizados para contato, qualificação inicial do
              atendimento e organização comercial interna. Mensagens no WhatsApp continuam sendo
              tratadas manualmente pela equipe da {BRAND}.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              4. Onde os dados são armazenados
            </h2>
            <p className="mt-3 text-muted-foreground">
              Registros do formulário podem ser armazenados em planilha Google Sheets vinculada à
              conta operacional da {BRAND}, após processamento no servidor do site. Dados de
              analytics podem ser processados por provedores de mensuração (como Google Analytics),
              conforme a política de cookies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">5. Retenção</h2>
            <p className="mt-3 text-muted-foreground">
              Mantemos os dados pelo tempo necessário ao atendimento, à organização comercial e ao
              cumprimento de obrigações legais ou regulatórias eventualmente aplicáveis. Quando não
              houver necessidade de conservação, os registros podem ser excluídos ou anonimizados.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">6. Quem acessa</h2>
            <p className="mt-3 text-muted-foreground">
              O acesso é restrito à equipe da {BRAND} e a prestadores técnicos estritamente
              necessários à operação do site e do armazenamento (por exemplo, hospedagem e planilha),
              sob dever de confidencialidade compatível com a finalidade.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              7. Direitos do titular
            </h2>
            <p className="mt-3 text-muted-foreground">
              Você pode solicitar informações sobre o tratamento dos seus dados, correção ou
              exclusão, pelos canais: e-mail{" "}
              <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">
                {EMAIL}
              </a>{" "}
              ou WhatsApp {PHONE_DISPLAY}. Responderemos no prazo razoável, conforme a legislação
              aplicável.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">8. Segurança</h2>
            <p className="mt-3 text-muted-foreground">
              Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados. Nenhum
              meio eletrônico é isento de riscos; por isso evitamos coletar dados desnecessários no
              site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">9. Contato</h2>
            <p className="mt-3 text-muted-foreground">
              Dúvidas sobre esta política:{" "}
              <Link href="/contato" className="text-primary hover:underline">
                página de Contato
              </Link>
              , {EMAIL} ou WhatsApp {PHONE_DISPLAY}.
            </p>
          </section>
        </div>
      </article>
    </SiteLayout>
  );
}
