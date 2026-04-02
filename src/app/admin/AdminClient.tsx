"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { updateStatusAction, deleteContactAction, logoutAction } from "./actions";
import { LogOut, Mail, Trash2, Check, Clock, MessageSquare, ChevronDown } from "lucide-react";

type Contact = {
  id: number;
  name: string;
  email: string;
  service: string;
  budget: string | null;
  timeline: string | null;
  message: string;
  status: string;
  createdAt: Date;
};

const STATUS_LABELS: Record<string, { label: string; color: string; bg: string }> = {
  new: { label: "Nuevo", color: "text-[#d8f0a0]", bg: "bg-[#d8f0a0]/10 border-[#d8f0a0]/20" },
  read: { label: "Leído", color: "text-[#83988E]", bg: "bg-[#83988E]/10 border-[#83988E]/20" },
  replied: { label: "Respondido", color: "text-blue-400", bg: "bg-blue-400/10 border-blue-400/20" },
};

const SERVICE_LABELS: Record<string, string> = {
  ecommerce: "Ecommerce",
  sistema: "Sistema a medida",
  integraciones: "Integraciones",
  ia: "IA / Automatización",
};

const BUDGET_LABELS: Record<string, string> = {
  "hasta-1k": "Hasta USD 1.000",
  "1k-3k": "USD 1.000 – 3.000",
  "3k-10k": "USD 3.000 – 10.000",
  "mas-10k": "Más de USD 10.000",
};

const TIMELINE_LABELS: Record<string, string> = {
  urgente: "Urgente",
  "1-2m": "En 1–2 meses",
  "3-6m": "En 3–6 meses",
  explorando: "Explorando",
};

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("es-AR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

function ContactCard({ contact }: { contact: Contact }) {
  const [expanded, setExpanded] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const s = STATUS_LABELS[contact.status] ?? STATUS_LABELS.new;

  const handleStatus = (newStatus: string) => {
    startTransition(async () => {
      await updateStatusAction(contact.id, newStatus);
      router.refresh();
    });
  };

  const handleDelete = () => {
    if (!confirm("¿Eliminar esta consulta?")) return;
    startTransition(async () => {
      await deleteContactAction(contact.id);
      router.refresh();
    });
  };

  return (
    <div
      className={`bg-[#280d14] border rounded-2xl overflow-hidden transition-all duration-300 ${
        contact.status === "new" ? "border-[#d8f0a0]/20" : "border-[#5e2a33]"
      } ${isPending ? "opacity-50" : ""}`}
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1 flex-wrap">
              <h3 className="font-semibold text-[#f5f5f0] text-base truncate">{contact.name}</h3>
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[11px] font-mono uppercase tracking-wider ${s.bg} ${s.color}`}>
                {contact.status === "new" && <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />}
                {s.label}
              </span>
            </div>
            <a href={`mailto:${contact.email}`} className="text-[#83988E] text-sm hover:text-[#a8d48a] transition-colors">
              {contact.email}
            </a>
          </div>
          <span className="text-[#574951] text-xs font-mono whitespace-nowrap shrink-0">
            {formatDate(contact.createdAt)}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-1 rounded-lg bg-[#3A111C] text-[#83988E] border border-[#5e2a33]">
            {SERVICE_LABELS[contact.service] ?? contact.service}
          </span>
          {contact.budget && (
            <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-1 rounded-lg bg-[#3A111C] text-[#83988E] border border-[#5e2a33]">
              {BUDGET_LABELS[contact.budget] ?? contact.budget}
            </span>
          )}
          {contact.timeline && (
            <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-1 rounded-lg bg-[#3A111C] text-[#83988E] border border-[#5e2a33]">
              {TIMELINE_LABELS[contact.timeline] ?? contact.timeline}
            </span>
          )}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 mt-3 text-[#574951] hover:text-[#83988E] text-xs transition-colors"
        >
          <ChevronDown size={14} className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
          {expanded ? "Ocultar mensaje" : "Ver mensaje"}
        </button>

        {expanded && (
          <p className="mt-3 text-[#f5f5f0]/80 text-sm leading-relaxed bg-[#3A111C]/60 rounded-xl p-4 border border-[#5e2a33]">
            {contact.message}
          </p>
        )}
      </div>

      <div className="px-5 py-3 border-t border-[#5e2a33] flex items-center gap-2 flex-wrap">
        <a
          href={`mailto:${contact.email}?subject=ROK Studio — Re: ${SERVICE_LABELS[contact.service] ?? contact.service}`}
          onClick={() => handleStatus("replied")}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#3A111C] border border-[#5e2a33] text-[#83988E] hover:text-[#a8d48a] hover:border-[#a8d48a]/30 text-xs font-medium transition-all duration-200"
        >
          <Mail size={13} />
          Responder
        </a>
        {contact.status === "new" && (
          <button
            onClick={() => handleStatus("read")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#3A111C] border border-[#5e2a33] text-[#83988E] hover:text-[#83988E] hover:border-[#83988E]/30 text-xs font-medium transition-all duration-200"
          >
            <Check size={13} />
            Marcar leído
          </button>
        )}
        {contact.status === "read" && (
          <button
            onClick={() => handleStatus("replied")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#3A111C] border border-[#5e2a33] text-blue-400 hover:border-blue-400/30 text-xs font-medium transition-all duration-200"
          >
            <MessageSquare size={13} />
            Marcar respondido
          </button>
        )}
        <button
          onClick={handleDelete}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#3A111C] border border-[#5e2a33] text-[#574951] hover:text-red-400 hover:border-red-400/30 text-xs font-medium transition-all duration-200 ml-auto"
        >
          <Trash2 size={13} />
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default function AdminClient({
  contacts,
  countMap,
  currentFilter,
}: {
  contacts: Contact[];
  countMap: Record<string, number>;
  currentFilter: string;
}) {
  const router = useRouter();
  const total = Object.values(countMap).reduce((a, b) => a + b, 0);

  const filters = [
    { value: "all", label: "Todas", count: total },
    { value: "new", label: "Nuevas", count: countMap.new ?? 0 },
    { value: "read", label: "Leídas", count: countMap.read ?? 0 },
    { value: "replied", label: "Respondidas", count: countMap.replied ?? 0 },
  ];

  return (
    <div className="min-h-screen bg-[#1a0810]">
      {/* Header */}
      <header className="border-b border-[#5e2a33] px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#83988E] block">
              ROK Studio
            </span>
            <h1 className="text-lg font-bold text-[#f5f5f0]">Consultas</h1>
          </div>
          <form action={logoutAction}>
            <button
              type="submit"
              className="flex items-center gap-2 text-[#574951] hover:text-[#83988E] text-sm transition-colors"
            >
              <LogOut size={16} />
              Salir
            </button>
          </form>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-[#280d14] border border-[#5e2a33] rounded-2xl p-5">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#574951] block mb-1">Total</span>
            <span className="text-3xl font-bold text-[#f5f5f0]">{total}</span>
          </div>
          <div className="bg-[#280d14] border border-[#d8f0a0]/20 rounded-2xl p-5">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#574951] block mb-1">Nuevas</span>
            <span className="text-3xl font-bold text-[#d8f0a0]">{countMap.new ?? 0}</span>
          </div>
          <div className="bg-[#280d14] border border-[#5e2a33] rounded-2xl p-5">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#574951] block mb-1">Respondidas</span>
            <span className="text-3xl font-bold text-blue-400">{countMap.replied ?? 0}</span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => router.push(f.value === "all" ? "/admin" : `/admin?status=${f.value}`)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                currentFilter === f.value
                  ? "bg-[#a8d48a] text-[#3A111C]"
                  : "bg-[#280d14] border border-[#5e2a33] text-[#83988E] hover:border-[#83988E]/50"
              }`}
            >
              {f.label}
              <span className={`text-xs font-mono ${currentFilter === f.value ? "text-[#3A111C]/60" : "text-[#574951]"}`}>
                {f.count}
              </span>
            </button>
          ))}
        </div>

        {/* Contacts */}
        {contacts.length === 0 ? (
          <div className="text-center py-24">
            <Clock size={32} className="text-[#574951] mx-auto mb-4" />
            <p className="text-[#574951] text-lg">No hay consultas todavía.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {contacts.map((c) => (
              <ContactCard key={c.id} contact={c} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
