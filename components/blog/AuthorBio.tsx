import Image from "next/image";
import { CRC, PHOTOS, RESPONSIBLE } from "@/lib/site";

export function AuthorBio() {
  return (
    <aside className="soft-card p-6 md:p-7 flex flex-col sm:flex-row gap-5 items-start">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
        <Image
          src={PHOTOS.portrait}
          alt={`${RESPONSIBLE}, contadora responsável técnica`}
          width={160}
          height={160}
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.16em] text-primary font-semibold">Autor</p>
        <h3 className="mt-1 font-display text-xl font-semibold text-foreground">{RESPONSIBLE}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{CRC}</p>
        <p className="mt-3 text-sm text-muted-foreground text-pretty">
          Contadora responsável técnica da AD Contábil. Atuação consultiva para profissionais da
          saúde, com foco em enquadramento tributário, clareza operacional e atendimento próximo.
        </p>
      </div>
    </aside>
  );
}
