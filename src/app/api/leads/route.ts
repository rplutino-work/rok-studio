import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Ensure a single instance across hot reloads in development
const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { projectType, platform, budget, timeline, contactInfo } = body;

    // Optional basic validation
    if (!contactInfo) {
      return NextResponse.json({ error: "Contact info is required" }, { status: 400 });
    }

    const lead = await prisma.lead.create({
      data: {
        projectType: projectType || "Not specified",
        platform: platform || "Not specified",
        budget: budget || "Not specified",
        timeline: timeline || "Not specified",
        contactInfo
      }
    });

    return NextResponse.json(lead, { status: 201 });
  } catch (error) {
    console.error("Error creating lead:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
