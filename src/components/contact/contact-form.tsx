"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type FormState = "idle" | "loading" | "success" | "error";

const subjects = [
  "Full-time Opportunity",
  "Freelance Project",
  "General Inquiry",
  "Other",
];

const budgets = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
  "Let's discuss",
];

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [apiError, setApiError] = useState<string>("");

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {};
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;
    if (!name || name.trim().length < 2) errs.name = "Name is required.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "A valid email is required.";
    if (!message || message.trim().length < 10)
      errs.message = "Message must be at least 10 characters.";
    return errs;
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setApiError("");
    setFormState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          budget: data.get("budget"),
          message: data.get("message"),
        }),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Failed to send.");
      setFormState("success");
    } catch (err) {
      setApiError(err instanceof Error ? err.message : "Something went wrong.");
      setFormState("error");
    }
  }

  if (formState === "error") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <AlertCircle className="w-12 h-12 text-destructive mb-4" />
        <h3 className="font-heading text-xl font-semibold mb-2">Something went wrong</h3>
        {apiError && (
          <p className="text-sm text-destructive mb-2 font-mono">{apiError}</p>
        )}
        <p className="text-muted-foreground max-w-sm mb-6">
          Please email me directly at{" "}
          <a href="mailto:carlosjohnharold@outlook.com" className="text-primary hover:underline">
            carlosjohnharold@outlook.com
          </a>
        </p>
        <button
          onClick={() => setFormState("idle")}
          className="text-sm text-primary hover:underline cursor-pointer"
        >
          Try again
        </button>
      </div>
    );
  }

  if (formState === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle2 className="w-12 h-12 text-green-500 mb-4" />
        <h3 className="font-heading text-xl font-semibold mb-2">
          Message Sent!
        </h3>
        <p className="text-muted-foreground max-w-sm">
          Thanks for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setFormState("idle")}
          className="mt-6 text-sm text-primary hover:underline cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-1.5"
          >
            Name <span className="text-destructive">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="John Smith"
            className={cn(
              "w-full px-3.5 py-2.5 rounded-lg border bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow",
              errors.name ? "border-destructive" : "border-input"
            )}
          />
          {errors.name && (
            <p className="text-xs text-destructive mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-1.5"
          >
            Email <span className="text-destructive">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="john@example.com"
            className={cn(
              "w-full px-3.5 py-2.5 rounded-lg border bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow",
              errors.email ? "border-destructive" : "border-input"
            )}
          />
          {errors.email && (
            <p className="text-xs text-destructive mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1.5">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow appearance-none cursor-pointer"
        >
          <option value="">Select a subject…</option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Budget */}
      <div>
        <label
          htmlFor="budget"
          className="block text-sm font-medium mb-1.5"
        >
          Budget Range
        </label>
        <select
          id="budget"
          name="budget"
          className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow appearance-none cursor-pointer"
        >
          <option value="">Select a budget…</option>
          {budgets.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-1.5"
        >
          Message <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell me about your project — what you're building, your timeline, and any specific requirements…"
          className={cn(
            "w-full px-3.5 py-2.5 rounded-lg border bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none",
            errors.message ? "border-destructive" : "border-input"
          )}
        />
        {errors.message && (
          <p className="text-xs text-destructive mt-1">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === "loading"}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 disabled:opacity-60 transition-opacity cursor-pointer"
      >
        {formState === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>

      <p className="text-xs text-center text-muted-foreground">
        No spam. Your info is only used to respond to your inquiry.
      </p>
    </form>
  );
}
