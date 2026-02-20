import { getUserWithRole, roleRoutes } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { role } = await getUserWithRole();

  // Redirige según rol
  const destination = roleRoutes[role];

  redirect(destination);
}
