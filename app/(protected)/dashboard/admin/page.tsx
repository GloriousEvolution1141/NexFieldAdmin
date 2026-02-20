import { getUserWithRole } from "@/lib/auth";

export default async function AdminPage() {
  // Solo admin puede entrar
  await getUserWithRole("admin");

  return <div>Panel Admin</div>;
}
