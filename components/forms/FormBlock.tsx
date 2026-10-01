"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { Button } from "@/components/ui/Button";

export interface FormFieldDef {
  label: string;
  name: string;
  type?:
    | "text"
    | "email"
    | "tel"
    | "textarea"
    | "select"
    | "file"
    | "checkbox"
    | "checkbox-group"
    | "radio-group";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  hint?: string;
  fullWidth?: boolean;
  accept?: string;
  autocomplete?: string;
}

interface FormBlockProps {
  formName: string;
  fields: FormFieldDef[];
  submitLabel: string;
  successTitle: string;
  successText: string;
  successExtra?: React.ReactNode;
  className?: string;
}

export function FormBlock({
  formName,
  fields,
  submitLabel,
  successTitle,
  successText,
  successExtra,
  className = "",
}: FormBlockProps) {
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // 1. Honeypot check
    const honeypot = formData.get("company_website");
    if (honeypot) {
      setIsSent(true);
      return;
    }

    // 2. Checkbox group required validation
    for (const field of fields) {
      if (field.type === "checkbox-group" && field.required) {
        const checkedValues = formData.getAll(`${field.name}[]`);
        if (checkedValues.length === 0) {
          setError(`Please select at least one option under “${field.label}”.`);
          return;
        }
      }
    }

    // 3. Native validity check
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsSubmitting(true);

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

    if (!endpoint) {
      console.info(
        `[Servicechai] Demo mode: Form "${formName}" submitted successfully.`
      );
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSent(true);
      }, 500);
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Form submission failed. Please try again later.");
      }

      setIsSent(true);
    } catch (err: unknown) {
      console.error(err);
      setError("There was a problem sending your enquiry. Please try again or email us directly at info@servicechai.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSent) {
    return (
      <div
        className={`form-card ${className}`.trim()}
        role="status"
        aria-live="polite"
        tabIndex={-1}
      >
        <div className="form-success" style={{ display: "flex" }}>
          <div className="tick">
            <Icon name="check" size={28} strokeWidth={2.4} />
          </div>
          <h2>{successTitle}</h2>
          <p>{successText}</p>
          {successExtra && <div className="pt-2">{successExtra}</div>}
          <div className="pt-4 border-t border-line w-full flex items-center justify-between mt-4">
            <Link
              href="/"
              className="link-arrow"
            >
              ← Return to homepage
            </Link>
            <button
              type="button"
              onClick={() => setIsSent(false)}
              className="text-[14px] text-muted hover:text-white transition-colors cursor-pointer"
            >
              Send another response
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`form-card ${className}`.trim()}>
      <form onSubmit={handleSubmit} noValidate>
        <input type="hidden" name="form_name" value={formName} />

        {/* Spam Honeypot */}
        <p className="hp" aria-hidden="true">
          <label>
            Leave this empty
            <input
              type="text"
              name="company_website"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </p>

        <p className="hint mb-4" style={{ fontSize: "14px", color: "var(--faint)" }}>
          Fields marked <span className="req">*</span> are required.
        </p>

        <div className="form-grid">
          {fields.map((field) => {
            const fieldId = `field-${formName}-${field.name}`;
            const isFull =
              field.fullWidth ||
              field.type === "textarea" ||
              field.type === "checkbox" ||
              field.type === "checkbox-group" ||
              field.type === "radio-group";

            if (field.type === "checkbox") {
              return (
                <div key={field.name} className={`field ${isFull ? "full" : ""}`}>
                  <label className="option" style={{ alignSelf: "flex-start" }}>
                    <input
                      type="checkbox"
                      id={fieldId}
                      name={field.name}
                      value="yes"
                      required={field.required}
                    />
                    <span>{field.label}</span>
                  </label>
                  {field.hint && <span className="hint">{field.hint}</span>}
                </div>
              );
            }

            return (
              <div
                key={field.name}
                className={`field ${isFull ? "full" : ""}`}
              >
                <label htmlFor={fieldId}>
                  {field.label}
                  {field.required && <span className="req">*</span>}
                </label>

                {field.type === "textarea" ? (
                  <textarea
                    id={fieldId}
                    name={field.name}
                    rows={4}
                    required={field.required}
                    placeholder={field.placeholder}
                    autoComplete={field.autocomplete}
                  />
                ) : field.type === "select" ? (
                  <select
                    id={fieldId}
                    name={field.name}
                    required={field.required}
                  >
                    <option value="">Please choose</option>
                    {field.options?.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : field.type === "file" ? (
                  <input
                    id={fieldId}
                    name={field.name}
                    type="file"
                    accept={field.accept}
                    required={field.required}
                  />
                ) : field.type === "checkbox-group" ? (
                  <div className="options">
                    {field.options?.map((opt) => (
                      <label key={opt} className="option">
                        <input
                          type="checkbox"
                          name={`${field.name}[]`}
                          value={opt}
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                ) : field.type === "radio-group" ? (
                  <div className="options">
                    {field.options?.map((opt) => (
                      <label key={opt} className="option">
                        <input
                          type="radio"
                          name={field.name}
                          value={opt}
                          required={field.required}
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                ) : (
                  <input
                    id={fieldId}
                    name={field.name}
                    type={field.type || "text"}
                    required={field.required}
                    placeholder={field.placeholder}
                    autoComplete={field.autocomplete}
                  />
                )}

                {field.hint && (
                  <span className="hint">{field.hint}</span>
                )}
              </div>
            );
          })}

          {/* Privacy Consent Checkbox */}
          <div className="field full consent">
            <input
              type="checkbox"
              id={`consent-${formName}`}
              name="consent"
              value="yes"
              required
            />
            <label htmlFor={`consent-${formName}`} style={{ fontWeight: 400, color: "var(--muted)", cursor: "pointer" }}>
              I agree to Servicechai contacting me about this request, as described in the{" "}
              <Link href="/privacy-policy" style={{ color: "var(--mint)", textDecoration: "underline" }} target="_blank">
                privacy policy
              </Link>
              . <span className="req">*</span>
            </label>
          </div>
        </div>

        {error && (
          <div className="form-error mt-4" role="alert">
            {error}
          </div>
        )}

        <div className="form-actions">
          <Button
            type="submit"
            variant="mint"
            arrow
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : submitLabel}
          </Button>
        </div>
      </form>
    </div>
  );
}
