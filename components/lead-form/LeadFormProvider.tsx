"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { LeadModal } from "@/components/lead-form/LeadModal";

type LeadFormContextValue = {
  open: boolean;
  openLeadForm: (location?: string) => void;
  closeLeadForm: () => void;
  location: string;
};

const LeadFormContext = createContext<LeadFormContextValue | null>(null);

export function LeadFormProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("unknown");

  const openLeadForm = useCallback((loc = "unknown") => {
    setLocation(loc);
    setOpen(true);
  }, []);

  const closeLeadForm = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ open, openLeadForm, closeLeadForm, location }),
    [open, openLeadForm, closeLeadForm, location],
  );

  return (
    <LeadFormContext.Provider value={value}>
      {children}
      <LeadModal open={open} onClose={closeLeadForm} analyticsLocation={location} />
    </LeadFormContext.Provider>
  );
}

export function useLeadForm() {
  const ctx = useContext(LeadFormContext);
  if (!ctx) {
    throw new Error("useLeadForm must be used within LeadFormProvider");
  }
  return ctx;
}
