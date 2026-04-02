"use client";

import { useActionState } from "react";
import { loginAction } from "../actions";

export default function AdminLogin() {
  const [state, action, pending] = useActionState(loginAction, { error: "" });

  return (
    <div className="min-h-screen bg-[#1a0810] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="mb-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#83988E] block mb-3">
            ROK Studio
          </span>
          <h1 className="text-2xl font-bold text-[#f5f5f0]">Panel de administración</h1>
        </div>

        <form action={action} className="space-y-6">
          <div>
            <label className="block text-[11px] uppercase tracking-[0.2em] text-[#83988E] mb-3 font-semibold">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              required
              autoFocus
              className="w-full bg-transparent border-b-2 border-[#5e2a33] focus:border-[#a8d48a] px-0 py-3 text-[#f5f5f0] text-base focus:outline-none transition-colors duration-300"
              placeholder="••••••••"
            />
          </div>

          {state?.error && (
            <p className="text-red-400 text-sm">{state.error}</p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full bg-[#a8d48a] text-[#3A111C] py-3 rounded-full font-semibold text-base hover:bg-[#d8f0a0] transition-colors duration-300 disabled:opacity-60"
          >
            {pending ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
      </div>
    </div>
  );
}
