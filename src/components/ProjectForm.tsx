"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, MoveLeft, CheckCircle2 } from "lucide-react";

export default function ProjectForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    projectType: "",
    platform: "",
    budget: "",
    timeline: "",
    contactInfo: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const updateFormInfo = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

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
      
      if (!res.ok) throw new Error("Failed to submit form");
      
      setIsSuccess(true);
    } catch (err) {
      setError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    {
      title: "What are your needs?",
      subtitle: "Select the option that best describes your situation.",
      field: "projectType",
      options: ["I'm just starting out", "I need to grow my brand", "I need something custom"]
    },
    {
      title: "Which platform are you using?",
      subtitle: "Or which one do you plan to use?",
      field: "platform",
      options: ["Shopify", "VTEX", "Tiendanube", "Custom / Other"]
    },
    {
      title: "What is your budget range?",
      subtitle: "This helps us tailor our proposal.",
      field: "budget",
      options: ["Under $1k", "$1k - $5k", "$5k - $10k", "$10k+"]
    },
    {
      title: "What is your timeline?",
      subtitle: "When do you need this completed by?",
      field: "timeline",
      options: ["Asap", "1-2 months", "3-6 months", "No rush"]
    }
  ];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-[2rem] p-12 text-center max-w-2xl mx-auto shadow-xl border border-border-light relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent-purple" />
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex justify-center mb-6">
          <CheckCircle2 className="w-20 h-20 text-primary" />
        </motion.div>
        <h3 className="text-3xl font-bold text-text-main mb-4">Request sent!</h3>
        <p className="text-text-muted text-lg">We will get back to you shortly to discuss your project.</p>
      </div>
    );
  }

  const isContactStep = step === steps.length;

  return (
    <section id="project-builder" className="py-24 bg-bg-base relative">
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        
        {/* Progress Bar */}
        <div className="mb-12 flex items-center justify-between gap-2 max-w-xl mx-auto">
          {Array.from({ length: steps.length + 1 }).map((_, idx) => (
            <div key={idx} className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: step >= idx ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-border-light min-h-[450px] flex flex-col">
          <AnimatePresence mode="wait" custom={1}>
            {!isContactStep ? (
              <motion.div
                key={step}
                custom={1}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex-grow flex flex-col"
              >
                <div className="mb-8">
                  <span className="text-primary font-mono text-sm mb-2 block">Step {step + 1} of {steps.length + 1}</span>
                  <h3 className="text-3xl font-bold text-text-main mb-2">{steps[step].title}</h3>
                  <p className="text-text-muted">{steps[step].subtitle}</p>
                </div>

                <div className="space-y-3 mt-auto">
                  {steps[step].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        updateFormInfo(steps[step].field, opt);
                        setTimeout(nextStep, 300);
                      }}
                      className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 ${
                        formData[steps[step].field as keyof typeof formData] === opt 
                          ? "border-primary bg-primary/5 text-primary font-medium" 
                          : "border-border-light hover:border-primary/50 text-text-main hover:bg-secondary/30"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
             <motion.form
                key="contact"
                onSubmit={handleSubmit}
                custom={1}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex-grow flex flex-col"
              >
                <div className="mb-8">
                  <span className="text-primary font-mono text-sm mb-2 block">Final Step</span>
                  <h3 className="text-3xl font-bold text-text-main mb-2">How can we reach you?</h3>
                  <p className="text-text-muted">Leave your email or phone number.</p>
                </div>

                <div className="mt-auto space-y-4">
                  <div>
                    <input 
                      type="text" 
                      required
                      placeholder="Email or Phone number"
                      value={formData.contactInfo}
                      onChange={(e) => updateFormInfo("contactInfo", e.target.value)}
                      className="w-full p-5 rounded-2xl border-2 border-border-light focus:border-primary focus:ring-0 transition-colors text-text-main text-lg outline-none"
                    />
                  </div>
                  {error && <p className="text-red-500 text-sm p-2">{error}</p>}
                  
                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.contactInfo}
                      className="flex-1 bg-primary text-white py-4 rounded-xl font-medium text-lg hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {isSubmitting ? "Sending..." : "Submit Project"}
                    </button>
                  </div>
                </div>
             </motion.form>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-8 pt-6 border-t border-border-light flex justify-between items-center text-text-muted">
            {step > 0 ? (
              <button onClick={prevStep} className="flex items-center gap-2 hover:text-text-main transition-colors text-sm font-medium">
                <MoveLeft className="w-4 h-4" /> Back
              </button>
            ) : <div />}
            <span className="text-sm">Press Enter ↵</span>
          </div>
        </div>
      </div>
    </section>
  );
}
