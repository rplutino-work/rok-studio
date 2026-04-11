"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";

const steps = [
  {
    id: "projectType",
    title: "What do you need?",
    subtitle: "Pick the option closest to your situation.",
    options: [
      { value: "starting", label: "Starting from scratch", desc: "First online store" },
      { value: "growing", label: "Growing my brand", desc: "More sales, bigger reach" },
      { value: "custom", label: "Something custom", desc: "Complex or unique needs" },
    ],
  },
  {
    id: "platform",
    title: "Which platform?",
    subtitle: "Or which one you're considering.",
    options: [
      { value: "Shopify", label: "Shopify", desc: "Most popular globally" },
      { value: "VTEX", label: "VTEX", desc: "Enterprise-grade" },
      { value: "Tiendanube", label: "Tiendanube", desc: "Best for LATAM" },
      { value: "Other", label: "Other / Not sure", desc: "We'll recommend one" },
    ],
  },
  {
    id: "budget",
    title: "What's your budget?",
    subtitle: "No commitment — helps us scope the right solution.",
    options: [
      { value: "under-1k", label: "Under $1,000", desc: "Starter scope" },
      { value: "1k-5k", label: "$1k – $5k", desc: "Mid-range project" },
      { value: "5k-10k", label: "$5k – $10k", desc: "Full-featured store" },
      { value: "10k+", label: "$10k +", desc: "Enterprise / complex" },
    ],
  },
  {
    id: "timeline",
    title: "When do you need it?",
    subtitle: "We'll work backwards from your deadline.",
    options: [
      { value: "asap", label: "ASAP", desc: "Let's move fast" },
      { value: "1-2m", label: "1 – 2 months", desc: "Some breathing room" },
      { value: "3-6m", label: "3 – 6 months", desc: "Relaxed timeline" },
      { value: "no-rush", label: "No rush", desc: "Just exploring" },
    ],
  },
];

type FormData = {
  projectType: string;
  platform: string;
  budget: string;
  timeline: string;
  contactInfo: string;
};

export default function ProjectForm() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState<FormData>({ projectType: "", platform: "", budget: "", timeline: "", contactInfo: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const totalSteps = steps.length + 1; // +1 for contact
  const isContactStep = step === steps.length;
  const currentStep = steps[step];

  const selectAndAdvance = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setTimeout(() => {
      setDirection(1);
      setStep((s) => s + 1);
    }, 280);
  };

  const goBack = () => {
    setDirection(-1);
    setStep((s) => s - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setIsSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 80 : -80, opacity: 0 }),
  };

  if (isSuccess) {
    return (
      <section id="project-builder" className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-surface rounded-[2rem] p-12 text-center border border-border-light shadow-card relative overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent-purple to-accent-pink" />
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.1 }}>
              <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-5" />
            </motion.div>
            <h3 className="text-3xl font-bold text-text-main mb-3">You&apos;re in!</h3>
            <p className="text-text-muted text-lg">We&apos;ll be in touch within 24 hours to discuss your project.</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="project-builder" className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-2xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-secondary px-4 py-1.5 rounded-full">
            Get started
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-text-main mt-5 mb-3 tracking-tight" style={{ fontFamily: "'Barrio', cursive" }}>
            Project Builder
          </h2>
          <p className="text-text-muted text-lg">
            Guides you through old success metrics.
          </p>
        </motion.div>

        {/* Step indicators */}
        <div className="flex items-center justify-center gap-0 mb-8">
          {Array.from({ length: totalSteps }).map((_, idx) => (
            <div key={idx} className="flex items-center">
              <div className={`relative w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-400 ${
                idx < step ? "bg-primary text-white" :
                idx === step ? "bg-primary text-white shadow-[0_0_0_4px_rgba(16,82,202,0.15)]" :
                "bg-surface border-2 border-border-light text-text-muted"
              }`}>
                {idx < step ? (
                  <svg viewBox="0 0 12 10" className="w-3.5 h-3.5 fill-none stroke-current stroke-2">
                    <polyline points="1,5 4.5,8.5 11,1" />
                  </svg>
                ) : (
                  <span>{idx + 1}</span>
                )}
              </div>
              {idx < totalSteps - 1 && (
                <div className={`h-0.5 w-8 transition-all duration-400 ${idx < step ? "bg-primary" : "bg-border-light"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Card */}
        <div className="bg-surface rounded-[2rem] border border-border-light shadow-card overflow-hidden relative">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent-purple to-accent-pink" />

          <div className="p-8 md:p-10 min-h-[400px] flex flex-col">
            <AnimatePresence mode="wait" custom={direction}>
              {!isContactStep ? (
                <motion.div
                  key={step}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1 flex flex-col"
                >
                  <div className="mb-7">
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                      Step {step + 1} of {totalSteps}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-text-main mt-2 mb-1">
                      {currentStep.title}
                    </h3>
                    <p className="text-text-muted">{currentStep.subtitle}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                    {currentStep.options.map((opt) => {
                      const selected = formData[currentStep.id as keyof FormData] === opt.value;
                      return (
                        <button
                          key={opt.value}
                          onClick={() => selectAndAdvance(currentStep.id, opt.value)}
                          className={`group text-left p-5 rounded-2xl border-2 transition-all duration-200 ${
                            selected
                              ? "border-primary bg-secondary text-primary"
                              : "border-border-light hover:border-primary/40 hover:bg-surface-hover"
                          }`}
                        >
                          <div className="font-semibold text-sm">{opt.label}</div>
                          <div className="text-xs text-text-muted mt-0.5">{opt.desc}</div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="contact"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  onSubmit={handleSubmit}
                  className="flex-1 flex flex-col"
                >
                  <div className="mb-7">
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                      Final step
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-text-main mt-2 mb-1">
                      How can we reach you?
                    </h3>
                    <p className="text-text-muted">Email or phone — whatever works for you.</p>
                  </div>

                  <div className="mt-auto space-y-4">
                    <input
                      type="text"
                      required
                      placeholder="your@email.com or +1 555 000 0000"
                      value={formData.contactInfo}
                      onChange={(e) => setFormData((p) => ({ ...p, contactInfo: e.target.value }))}
                      className="w-full px-5 py-4 rounded-2xl border-2 border-border-light focus:border-primary outline-none transition-colors text-text-main text-base"
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.contactInfo}
                      className="w-full flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-2xl font-semibold text-base hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-[0_4px_12px_rgba(16,82,202,0.3)] hover:-translate-y-0.5"
                    >
                      {isSubmitting ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : <>Submit Project <ArrowRight size={18} /></>}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>

            {/* Back nav */}
            {step > 0 && (
              <div className="mt-6 pt-5 border-t border-border-light">
                <button onClick={goBack} className="flex items-center gap-1.5 text-text-muted hover:text-text-main text-sm transition-colors">
                  <ArrowLeft size={15} /> Back
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
