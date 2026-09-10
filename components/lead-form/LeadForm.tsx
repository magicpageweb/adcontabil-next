"use client";

import Link from "next/link";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { Loader2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GA_EVENTS, isGaEnabled, type GaEventName } from "@/lib/analytics";
import { captureLeadOrigin } from "@/lib/leads/origin";
import {
  LEAD_INTERESTS,
  LEAD_MOMENTS,
  LEAD_PROFILES,
  type LeadApiResponse,
  type LeadFormFields,
  type LeadInterest,
  type LeadMoment,
  type LeadProfile,
} from "@/lib/leads/types";
import {
  type LeadFieldErrors,
  validateLeadClient,
} from "@/lib/leads/validation";
import { buildLeadWhatsAppUrl } from "@/lib/leads/whatsapp";
import { cn } from "@/lib/utils";

type LeadFormProps = {
  variant?: "modal" | "page";
  analyticsLocation?: string;
  onSuccessClose?: () => void;
  className?: string;
};

const emptyFields: LeadFormFields = {
  name: "",
  whatsapp: "",
  profile: "",
  interest: "",
  moment: "",
  consent: false,
};

function track(event: GaEventName, params?: Record<string, string>) {
  if (!isGaEnabled()) return;
  try {
    sendGAEvent("event", event, params ?? {});
  } catch {
    // ignore
  }
}

function openWhatsApp(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

export function LeadForm({
  variant = "modal",
  analyticsLocation = "form",
  onSuccessClose,
  className,
}: LeadFormProps) {
  const baseId = useId();
  const openedAtRef = useRef(0);
  const [fields, setFields] = useState<LeadFormFields>(emptyFields);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<LeadFieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fallbackUrl, setFallbackUrl] = useState<string | null>(null);

  useLayoutEffect(() => {
    openedAtRef.current = Date.now();
  }, [analyticsLocation]);

  useEffect(() => {
    track(GA_EVENTS.leadFormOpen, { location: analyticsLocation });
  }, [analyticsLocation]);

  function update<K extends keyof LeadFormFields>(key: K, value: LeadFormFields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
    setFormError(null);
    setFallbackUrl(null);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;

    const clientErrors = validateLeadClient(fields);
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      return;
    }

    setSubmitting(true);
    setFormError(null);
    setFallbackUrl(null);

    const origin = captureLeadOrigin();
    const localWa = buildLeadWhatsAppUrl({
      name: fields.name.trim(),
      profile: fields.profile as LeadProfile,
      interest: fields.interest as LeadInterest,
    });

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.name.trim(),
          whatsapp: fields.whatsapp.trim(),
          profile: fields.profile,
          interest: fields.interest,
          moment: fields.moment,
          consent: fields.consent,
          website: honeypot,
          formOpenedAt: openedAtRef.current,
          ...origin,
        }),
      });

      const data = (await res.json()) as LeadApiResponse;

      if (data.ok) {
        track(GA_EVENTS.leadFormSubmit, {
          location: analyticsLocation,
          recorded: "true",
        });
        track(GA_EVENTS.leadWhatsappClick, { location: analyticsLocation });
        openWhatsApp(data.whatsappUrl);
        onSuccessClose?.();
        setFields(emptyFields);
        openedAtRef.current = Date.now();
        return;
      }

      if (data.fieldErrors) {
        setErrors(data.fieldErrors);
      }

      const wa = data.whatsappUrl || localWa;
      setFormError(
        data.error ||
          "Não foi possível registrar seus dados neste momento. Você pode continuar diretamente pelo WhatsApp.",
      );
      setFallbackUrl(wa);
      track(GA_EVENTS.leadFormSubmit, {
        location: analyticsLocation,
        recorded: "false",
      });
    } catch {
      setFormError(
        "Não foi possível registrar seus dados neste momento. Você pode continuar diretamente pelo WhatsApp.",
      );
      setFallbackUrl(localWa);
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

  return (
    <form
      onSubmit={onSubmit}
      className={cn("space-y-4", className)}
      noValidate
      aria-describedby={formError ? `${baseId}-form-error` : undefined}
    >
      {variant === "page" && (
        <div className="mb-2">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Vamos entender o seu momento
          </h2>
          <p className="mt-2 text-muted-foreground text-pretty">
            Conte rapidamente o que você precisa. Assim podemos direcionar melhor o seu
            atendimento.
          </p>
        </div>
      )}

      {/* Honeypot */}
      <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor={`${baseId}-website`}>Website</label>
        <input
          id={`${baseId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor={`${baseId}-name`} className="text-sm font-medium text-foreground">
          Seu nome
        </label>
        <input
          id={`${baseId}-name`}
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={120}
          value={fields.name}
          onChange={(e) => update("name", e.target.value)}
          className={inputClass}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${baseId}-name-error` : undefined}
        />
        {errors.name ? (
          <p id={`${baseId}-name-error`} className="mt-1 text-sm text-destructive" role="alert">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor={`${baseId}-whatsapp`} className="text-sm font-medium text-foreground">
          Seu WhatsApp
        </label>
        <input
          id={`${baseId}-whatsapp`}
          name="whatsapp"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          maxLength={40}
          placeholder="(51) 99999-9999"
          value={fields.whatsapp}
          onChange={(e) => update("whatsapp", e.target.value)}
          className={inputClass}
          aria-invalid={Boolean(errors.whatsapp)}
          aria-describedby={errors.whatsapp ? `${baseId}-whatsapp-error` : undefined}
        />
        {errors.whatsapp ? (
          <p
            id={`${baseId}-whatsapp-error`}
            className="mt-1 text-sm text-destructive"
            role="alert"
          >
            {errors.whatsapp}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor={`${baseId}-profile`} className="text-sm font-medium text-foreground">
          Qual é o seu perfil?
        </label>
        <select
          id={`${baseId}-profile`}
          name="profile"
          required
          value={fields.profile}
          onChange={(e) => update("profile", e.target.value as LeadProfile | "")}
          className={inputClass}
          aria-invalid={Boolean(errors.profile)}
          aria-describedby={errors.profile ? `${baseId}-profile-error` : undefined}
        >
          <option value="">Selecione</option>
          {LEAD_PROFILES.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        {errors.profile ? (
          <p
            id={`${baseId}-profile-error`}
            className="mt-1 text-sm text-destructive"
            role="alert"
          >
            {errors.profile}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor={`${baseId}-interest`} className="text-sm font-medium text-foreground">
          O que você procura?
        </label>
        <select
          id={`${baseId}-interest`}
          name="interest"
          required
          value={fields.interest}
          onChange={(e) => update("interest", e.target.value as LeadInterest | "")}
          className={inputClass}
          aria-invalid={Boolean(errors.interest)}
          aria-describedby={errors.interest ? `${baseId}-interest-error` : undefined}
        >
          <option value="">Selecione</option>
          {LEAD_INTERESTS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        {errors.interest ? (
          <p
            id={`${baseId}-interest-error`}
            className="mt-1 text-sm text-destructive"
            role="alert"
          >
            {errors.interest}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor={`${baseId}-moment`} className="text-sm font-medium text-foreground">
          Em que momento você está?
        </label>
        <select
          id={`${baseId}-moment`}
          name="moment"
          required
          value={fields.moment}
          onChange={(e) => update("moment", e.target.value as LeadMoment | "")}
          className={inputClass}
          aria-invalid={Boolean(errors.moment)}
          aria-describedby={errors.moment ? `${baseId}-moment-error` : undefined}
        >
          <option value="">Selecione</option>
          {LEAD_MOMENTS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        {errors.moment ? (
          <p id={`${baseId}-moment-error`} className="mt-1 text-sm text-destructive" role="alert">
            {errors.moment}
          </p>
        ) : null}
      </div>

      <div className="pt-1">
        <label className="flex gap-2.5 items-start text-sm text-muted-foreground cursor-pointer">
          <input
            type="checkbox"
            checked={fields.consent}
            onChange={(e) => update("consent", e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-input accent-primary"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? `${baseId}-consent-error` : undefined}
          />
          <span>
            Ao enviar, você concorda com o uso dos dados para contato e atendimento.{" "}
            <Link
              href="/politica-de-privacidade"
              className="font-medium text-primary underline-offset-2 hover:underline"
              target="_blank"
            >
              Privacidade
            </Link>
            .
          </span>
        </label>
        {errors.consent ? (
          <p
            id={`${baseId}-consent-error`}
            className="mt-1 text-sm text-destructive"
            role="alert"
          >
            {errors.consent}
          </p>
        ) : null}
      </div>

      {formError ? (
        <div
          id={`${baseId}-form-error`}
          className="rounded-lg border border-border bg-surface px-3 py-3 text-sm text-foreground"
          role="alert"
        >
          <p>{formError}</p>
          {fallbackUrl ? (
            <Button
              type="button"
              size="lg"
              className="mt-3 w-full bg-whatsapp text-white hover:opacity-90"
              onClick={() => {
                track(GA_EVENTS.leadWhatsappClick, {
                  location: analyticsLocation,
                  fallback: "true",
                });
                openWhatsApp(fallbackUrl);
                onSuccessClose?.();
              }}
            >
              <MessageCircle className="mr-2 h-5 w-5" /> Continuar no WhatsApp
            </Button>
          ) : null}
        </div>
      ) : null}

      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className="w-full h-12 bg-cta text-cta-foreground hover:opacity-90"
      >
        {submitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Enviando…
          </>
        ) : (
          <>
            <MessageCircle className="mr-2 h-5 w-5" /> Enviar e falar no WhatsApp
          </>
        )}
      </Button>
    </form>
  );
}
