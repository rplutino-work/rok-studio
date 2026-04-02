import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, service, budget, timeline, message } = body;

    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: "Faltan campos requeridos." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido." }, { status: 400 });
    }

    const contact = await prisma.contact.create({
      data: { name, email, service, budget, timeline, message },
    });

    return NextResponse.json({ ok: true, id: contact.id });
  } catch (err) {
    console.error("[contact API]", err);
    return NextResponse.json({ error: "Error interno del servidor." }, { status: 500 });
  }
}
