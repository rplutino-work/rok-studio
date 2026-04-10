import { PrismaClient } from "@prisma/client";

// Ensure a single instance across hot reloads in development
const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="min-h-screen bg-bg-base py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-text-main">Lead Management</h1>
          <span className="bg-primary text-white py-1 px-3 rounded-full text-sm font-medium">
            {leads.length} total
          </span>
        </div>

        <div className="bg-white shadow-sm border border-border-light rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border-light">
              <thead className="bg-secondary/30">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">Date</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">Contact Info</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">Needs</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">Platform</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">Budget</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">Timeline</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-border-light">
                {leads.map((lead) => (
                   <tr key={lead.id} className="hover:bg-secondary/10 transition-colors">
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-text-main">
                        {new Date(lead.createdAt).toLocaleDateString()}
                     </td>
                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                        {lead.contactInfo}
                     </td>
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-text-muted">
                        {lead.projectType}
                     </td>
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-text-muted">
                        {lead.platform}
                     </td>
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-text-muted">
                        {lead.budget}
                     </td>
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-text-muted">
                        {lead.timeline}
                     </td>
                     <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          {lead.status}
                        </span>
                     </td>
                   </tr>
                ))}
                {leads.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-6 py-10 text-center text-text-muted">
                      No leads received yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
