"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function loginAction(
  _prevState: { error: string },
  formData: FormData
): Promise<{ error: string }> {
  const password = formData.get("password") as string;

  if (password === process.env.ADMIN_PASSWORD) {
    const cookieStore = await cookies();
    cookieStore.set("rok-admin", password, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    redirect("/admin");
  }

  return { error: "Contraseña incorrecta." };
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("rok-admin");
  redirect("/admin/login");
}

export async function updateStatusAction(id: number, status: string) {
  await prisma.lead.update({ where: { id }, data: { status } });
}

export async function deleteContactAction(id: number) {
  await prisma.lead.delete({ where: { id } });
}
