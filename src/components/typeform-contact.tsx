"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";

/* ─── Types ─────────────────────────────────────────────────────────────── */

type Choice = { key: string; label: string; value: string; emoji?: string };
type Step =
  | { id: string; type: "choice"; question: string; sub?: string; choices: Choice[] }
  | { id: string; type: "text" | "email" | "textarea"; question: string; sub?: string; placeholder: string; field: string };

type FormData = Record<string, string>;
type Status = "idle" | "submitting" | "success" | "error";

/* ─── Steps definition ──────────────────────────────────────────────────── */

const STEPS: Step[] = [
  {
    id: "service",
    type: "choice",
    question: "¿En qué necesitás ayuda?",
    sub: "Elegí la opción que mejor describe tu proyecto.",
    choices: [
      { key: "A", label: "Tienda online / Ecommerce", value: "ecommerce", emoji: "🛍️" },
      { key: "B", label: "Sistema o plataforma a medida", value: "sistema", emoji: "⚙️" },
      { key: "C", label: "Integraciones y automatizaciones", value: "integraciones", emoji: "🔗" },
      { key: "D", label: "Algo con IA", value: "ia", emoji: "✦" },
    ],
  },
  {
    id: "budget",
    type: "choice",
    question: "¿Cuál es tu presupuesto estimado?",
    sub: "Sin compromisos — solo para entender el alcance.",
    choices: [
      { key: "A", label: "Hasta USD 1.000", value: "hasta-1k" },
      { key: "B", label: "USD 1.000 — 3.000", value: "1k-3k" },
      { key: "C", label: "USD 3.000 — 10.000", value: "3k-10k" },
      { key: "D", label: "Más de USD 10.000", value: "mas-10k" },
    ],
  },
  {
    id: "timeline",
    type: "choice",
    question: "¿Para cuándo lo necesitás?",
    choices: [
      { key: "A", label: "Urgente — lo antes posible", value: "urgente" },
      { key: "B", label: "En 1 a 2 meses", value: "1-2m" },
      { key: "C", label: "En 3 a 6 meses", value: "3-6m" },
      { key: "D", label: "Todavía estoy explorando", value: "explorando" },
    ],
  },
  {
    id: "name",
    type: "text",
    question: "¿Cómo te llamás?",
    placeholder: "Tu nombre...",
    field: "name",
  },
  {
    id: "email",
    type: "email",
    question: "¿Y tu email?",
    sub: "Te respondemos en menos de 24 horas.",
    placeholder: "tu@email.com",
    field: "email",
  },
  {
    id: "message",
    type: "textarea",
    question: "Contanos sobre tu proyecto.",
    sub: "Cualquier detalle que quieras compartir.",
    placeholder: "Describí brevemente qué necesitás, qué tenés hoy y cuál es el objetivo...",
    field: "message",
  },
];

/* ─── Animation variants ─────────────────────────────────────────────────── */

const STEP_ENTER = { opacity: 0, y: 32 };
const STEP_CENTER = { opacity: 1, y: 0 };
const STEP_EXIT = { opacity: 0, y: -20 };
const STEP_TRANSITION_IN = { duration: 0.42, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] };
const STEP_TRANSITION_OUT = { duration: 0.22, ease: [0.5, 0, 1, 0.5] as [number, number, number, number] };

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function ChoiceCard({
  choice,
  selected,
  onClick,
}: {
  choice: Choice;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`group w-full flex items-center gap-4 px-5 py-4 rounded-2xl border text-left transition-all duration-200 ${
        selected
          ? "border-[#a8d48a]/60 bg-[#a8d48a]/8 shadow-[0_0_30px_rgba(168,212,138,0.06)]"
          : "border-[#5e2a33] bg-[#280d14]/60 hover:border-[#5e2a33] hover:bg-[#280d14]"
      }`}
    >
      {/* Key badge */}
      <span
        className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-all duration-200 ${
          selected
            ? "bg-[#a8d48a] text-[#3A111C]"
            : "bg-[#3A111C] border border-[#5e2a33] text-[#574951] group-hover:text-[#83988E]"
        }`}
      >
        {selected ? <Check size={14} /> : choice.key}
      </span>

      {/* Label */}
      <span
        className={`flex-1 text-base font-medium transition-colors duration-200 ${
          selected ? "text-[#f5f5f0]" : "text-[#f5f5f0]/70 group-hover:text-[#f5f5f0]/90"
        }`}
      >
        {choice.emoji && <span className="mr-2">{choice.emoji}</span>}
        {choice.label}
      </span>
    </motion.button>
  );
}

function SuccessScreen() {
  return (
    <motion.div
      key="success"
      initial={STEP_ENTER}
      animate={STEP_CENTER}
      transition={STEP_TRANSITION_IN}
      className="text-center max-w-md mx-auto"
    >
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
        className="w-16 h-16 rounded-full bg-[#a8d48a]/15 border border-[#a8d48a]/30 flex items-center justify-center mx-auto mb-8"
      >
        <Check size={28} className="text-[#a8d48a]" />
      </motion.div>
      <h2 className="text-3xl md:text-4xl font-bold text-[#f5f5f0] mb-4 tracking-[-0.02em]">
        ¡Recibimos tu consulta!
      </h2>
      <p className="text-[#83988E] text-lg leading-relaxed">
        Te respondemos en las próximas 24 horas.<br />
        ¡Gracias por confiar en ROK Studio!
      </p>
    </motion.div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */

export default function TypeformContact({ onClose }: { onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [formData, setFormData] = useState<FormData>({});
  const [status, setStatus] = useState<Status>("idle");
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  const step = STEPS[currentStep];
  const progress = ((currentStep) / STEPS.length) * 100;
  const isLastStep = currentStep === STEPS.length - 1;

  // Focus text inputs on step change
  useEffect(() => {
    if (step.type !== "choice") {
      setTimeout(() => inputRef.current?.focus(), 450);
    }
  }, [currentStep, step.type]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (status === "success") return;
      if (status === "submitting") return;

      if (e.key === "Escape") { onClose(); return; }

      const s = STEPS[currentStep];

      if (s.type === "choice") {
        const choice = s.choices.find((c) => c.key.toLowerCase() === e.key.toLowerCase());
        if (choice) {
          setFormData((prev) => ({ ...prev, [s.id]: choice.value }));
          setTimeout(goNext, 350);
          return;
        }
      }

      if (e.key === "Enter" && !e.shiftKey) {
        if (s.type !== "textarea") {
          e.preventDefault();
          goNext();
        }
      }
      if (e.key === "Backspace" && (e.metaKey || e.ctrlKey) && s.type === "choice") {
        goPrev();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep, formData, status]);

  const canAdvance = useCallback(() => {
    const s = STEPS[currentStep];
    if (s.type === "choice") return !!formData[s.id];
    const value = formData[(s as { field: string }).field] ?? "";
    if (s.type === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    return value.trim().length > 0;
  }, [currentStep, formData]);

  const goNext = useCallback(async () => {
    if (!canAdvance()) return;
    if (isLastStep) {
      await submitForm();
      return;
    }
    setDirection(1);
    setCurrentStep((s) => s + 1);
  }, [canAdvance, isLastStep]);

  const goPrev = useCallback(() => {
    if (currentStep === 0) return;
    setDirection(-1);
    setCurrentStep((s) => s - 1);
  }, [currentStep]);

  const submitForm = async () => {
    setStatus("submitting");
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        service: formData.service,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.message,
      };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("error");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const handleChoiceSelect = (stepId: string, value: string) => {
    setFormData((prev) => ({ ...prev, [stepId]: value }));
    setTimeout(goNext, 350);
  };

  const handleFieldChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.35 } }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      className="fixed inset-0 z-50 flex flex-col bg-[#160810]"
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#3A111C] z-10">
        <motion.div
          className="h-full bg-[#a8d48a]"
          initial={{ width: 0 }}
          animate={{ width: `${status === "success" ? 100 : progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Top bar */}
      <div className="flex items-center justify-between px-6 md:px-10 pt-7 pb-4 shrink-0">
        <div className="flex items-center gap-4">
          {currentStep > 0 && status !== "success" && (
            <button
              onClick={goPrev}
              className="flex items-center gap-1.5 text-[#574951] hover:text-[#83988E] transition-colors text-sm"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Atrás</span>
            </button>
          )}
        </div>

        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#574951]">
          {status === "success" ? "ROK Studio" : `${currentStep + 1} / ${STEPS.length}`}
        </span>

        <button
          onClick={onClose}
          className="text-[#574951] hover:text-[#83988E] transition-colors p-1"
          aria-label="Cerrar"
        >
          <X size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-10 overflow-y-auto py-8">
        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait" custom={direction}>
            {status === "success" ? (
              <SuccessScreen key="success" />
            ) : (
              <motion.div
                key={currentStep}
                initial={STEP_ENTER}
                animate={{ ...STEP_CENTER, transition: STEP_TRANSITION_IN }}
                exit={{ ...STEP_EXIT, transition: STEP_TRANSITION_OUT }}
              >
                {/* Question */}
                <div className="mb-8 md:mb-10">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f0] tracking-[-0.03em] leading-[1.1] mb-3">
                    {step.question}
                  </h2>
                  {step.sub && (
                    <p className="text-[#83988E] text-base md:text-lg">{step.sub}</p>
                  )}
                </div>

                {/* Input area */}
                {step.type === "choice" && (
                  <div className="space-y-3">
                    {step.choices.map((choice) => (
                      <ChoiceCard
                        key={choice.key}
                        choice={choice}
                        selected={formData[step.id] === choice.value}
                        onClick={() => handleChoiceSelect(step.id, choice.value)}
                      />
                    ))}
                  </div>
                )}

                {(step.type === "text" || step.type === "email") && (
                  <div>
                    <input
                      ref={inputRef as React.RefObject<HTMLInputElement>}
                      type={step.type}
                      value={formData[step.field] ?? ""}
                      onChange={(e) => handleFieldChange(step.field, e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") { e.preventDefault(); goNext(); }
                      }}
                      placeholder={step.placeholder}
                      className="w-full bg-transparent border-b-2 border-[#5e2a33] focus:border-[#a8d48a] text-[#f5f5f0] text-2xl md:text-3xl py-4 px-0 focus:outline-none transition-colors duration-300 placeholder:text-[#574951]"
                      autoComplete={step.type === "email" ? "email" : "given-name"}
                    />
                    {status === "error" && isLastStep && (
                      <p className="text-red-400 text-sm mt-3">
                        Hubo un error al enviar. Intentá de nuevo.
                      </p>
                    )}
                  </div>
                )}

                {step.type === "textarea" && (
                  <div>
                    <textarea
                      ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                      value={formData[step.field] ?? ""}
                      onChange={(e) => handleFieldChange(step.field, e.target.value)}
                      placeholder={step.placeholder}
                      rows={5}
                      className="w-full bg-transparent border-b-2 border-[#5e2a33] focus:border-[#a8d48a] text-[#f5f5f0] text-xl md:text-2xl py-4 px-0 focus:outline-none transition-colors duration-300 placeholder:text-[#574951] resize-none"
                    />
                    {status === "error" && (
                      <p className="text-red-400 text-sm mt-3">
                        Hubo un error al enviar. Intentá de nuevo.
                      </p>
                    )}
                  </div>
                )}

                {/* Bottom actions */}
                <div className="mt-10 flex items-center justify-between">
                  {/* Continue button */}
                  {step.type !== "choice" && (
                    <button
                      onClick={goNext}
                      disabled={!canAdvance() || status === "submitting"}
                      className={`flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-base transition-all duration-300 ${
                        canAdvance() && status !== "submitting"
                          ? "bg-[#a8d48a] text-[#3A111C] hover:bg-[#d8f0a0] shadow-[0_0_30px_rgba(168,212,138,0.15)]"
                          : "bg-[#280d14] text-[#574951] cursor-not-allowed border border-[#5e2a33]"
                      }`}
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Enviando...
                        </>
                      ) : isLastStep ? (
                        <>
                          Enviar consulta
                          <ArrowRight size={18} />
                        </>
                      ) : (
                        <>
                          Continuar
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  )}

                  {/* Keyboard hint */}
                  {step.type !== "choice" && (
                    <span className="hidden md:flex items-center gap-1.5 text-[#574951] text-xs font-mono">
                      <kbd className="px-1.5 py-0.5 rounded border border-[#5e2a33] text-[10px]">Enter</kbd>
                      para continuar
                    </span>
                  )}
                  {step.type === "choice" && (
                    <span className="flex items-center gap-1.5 text-[#574951] text-xs font-mono">
                      Presioná{" "}
                      <kbd className="px-1.5 py-0.5 rounded border border-[#5e2a33] text-[10px]">A</kbd>
                      <kbd className="px-1.5 py-0.5 rounded border border-[#5e2a33] text-[10px]">B</kbd>
                      <kbd className="px-1.5 py-0.5 rounded border border-[#5e2a33] text-[10px]">C</kbd>
                      <kbd className="px-1.5 py-0.5 rounded border border-[#5e2a33] text-[10px]">D</kbd>
                      para elegir
                    </span>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
