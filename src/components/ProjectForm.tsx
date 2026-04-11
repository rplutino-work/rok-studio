"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

const STEP_VALUES = [
  ["starting", "growing", "custom"],
  ["Shopify", "VTEX", "Tiendanube", "Other"],
  ["under-1k", "1k-5k", "5k-10k", "10k+"],
  ["asap", "1-2m", "3-6m", "no-rush"],
];

type FormData = {
  projectType: string;
  platform: string;
  budget: string;
  timeline: string;
  contactInfo: string;
};

export default function ProjectForm() {
  const { t } = useLocale();
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState<FormData>({ projectType: "", platform: "", budget: "", timeline: "", contactInfo: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const stepKeys = ["projectType", "platform", "budget", "timeline"] as const;
  const totalSteps = t.projectForm.steps.length + 1;
  const isContactStep = step === t.projectForm.steps.length;
  const currentStepData = t.projectForm.steps[step];

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
            <h3 className="text-3xl font-bold text-text-main mb-3">{t.projectForm.success.title}</h3>
            <p className="text-text-muted text-lg">{t.projectForm.success.subtitle}</p>
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
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
            {t.projectForm.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-text-main mt-6 mb-3 tracking-tight" style={{ fontFamily: "'Barrio', cursive" }}>
            {t.projectForm.title}
          </h2>
          <p className="text-text-muted text-lg">
            {t.projectForm.subtitle}
          </p>
        </motion.div>

        {/* Step indicators */}
        <div className="flex items-center justify-center gap-0 mb-8">
          {Array.from({ length: totalSteps }).map((_, idx) => (
            <div key={idx} className="flex items-center">
              <div className={`relative w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-400 ${
                idx < step ? "bg-primary text-white" :
                idx === step ? "bg-primary text-white shadow-[0_0_0_4px_rgba(77,142,248,0.2)]" :
                "bg-surface border border-border-light text-text-muted"
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
                      {currentStepData.title}
                    </h3>
                    <p className="text-text-muted">{currentStepData.subtitle}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                    {currentStepData.options.map((opt, optIdx) => {
                      const value = STEP_VALUES[step][optIdx];
                      const field = stepKeys[step];
                      const selected = formData[field] === value;
                      return (
                        <button
                          key={optIdx}
                          onClick={() => selectAndAdvance(field, value)}
                          className={`group text-left p-5 rounded-2xl border transition-all duration-200 ${
                            selected
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border-light hover:border-primary/30 hover:bg-surface-hover"
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
                      {t.projectForm.contactStep.label}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-text-main mt-2 mb-1">
                      {t.projectForm.contactStep.title}
                    </h3>
                    <p className="text-text-muted">{t.projectForm.contactStep.subtitle}</p>
                  </div>

                  <div className="mt-auto space-y-4">
                    <input
                      type="text"
                      required
                      placeholder={t.projectForm.contactStep.placeholder}
                      value={formData.contactInfo}
                      onChange={(e) => setFormData((p) => ({ ...p, contactInfo: e.target.value }))}
                      className="w-full px-5 py-4 rounded-2xl border border-border-light bg-surface-hover focus:border-primary outline-none transition-colors text-text-main text-base placeholder:text-text-muted"
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.contactInfo}
                      className="w-full flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-2xl font-semibold text-base hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-[0_4px_12px_rgba(16,82,202,0.3)] hover:-translate-y-0.5"
                    >
                      {isSubmitting
                        ? <><Loader2 size={18} className="animate-spin" /> {t.projectForm.contactStep.submitting}</>
                        : <>{t.projectForm.contactStep.submit} <ArrowRight size={18} /></>
                      }
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
