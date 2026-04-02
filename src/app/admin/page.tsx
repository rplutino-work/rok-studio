import { prisma } from "@/lib/db";
import AdminClient from "./AdminClient";

export const dynamic = "force-dynamic";

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const filter = status && status !== "all" ? status : undefined;

  const contacts = await prisma.contact.findMany({
    where: filter ? { status: filter } : undefined,
    orderBy: { createdAt: "desc" },
  });

  const counts = await prisma.contact.groupBy({
    by: ["status"],
    _count: { status: true },
  });

  const countMap: Record<string, number> = {};
  counts.forEach((c) => {
    countMap[c.status] = c._count.status;
  });

  return <AdminClient contacts={contacts} countMap={countMap} currentFilter={status ?? "all"} />;
}
