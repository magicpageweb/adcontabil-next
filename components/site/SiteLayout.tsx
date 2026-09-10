import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { CookieNotice } from "@/components/site/CookieNotice";
import { LeadFormProvider } from "@/components/lead-form/LeadFormProvider";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <LeadFormProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
        <CookieNotice />
      </div>
    </LeadFormProvider>
  );
}
