"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";

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
  await prisma.contact.update({ where: { id }, data: { status } });
}

export async function deleteContactAction(id: number) {
  await prisma.contact.delete({ where: { id } });
}
