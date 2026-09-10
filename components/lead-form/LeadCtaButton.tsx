"use client";

import { MessageCircle } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { useLeadForm } from "@/components/lead-form/LeadFormProvider";
import { cn } from "@/lib/utils";

type LeadCtaButtonProps = {
  children: React.ReactNode;
  location: string;
  className?: string;
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];
  showIcon?: boolean;
};

export function LeadCtaButton({
  children,
  location,
  className,
  size = "lg",
  variant = "default",
  showIcon = true,
}: LeadCtaButtonProps) {
  const { openLeadForm } = useLeadForm();

  return (
    <Button
      type="button"
      size={size}
      variant={variant}
      className={cn(className)}
      onClick={() => openLeadForm(location)}
    >
      {showIcon ? <MessageCircle className="mr-2 h-5 w-5" /> : null}
      {children}
    </Button>
  );
}
