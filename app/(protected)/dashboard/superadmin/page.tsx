import { getUserWithRole } from "@/lib/auth";

export default async function ClientePage() {
  // Solo cliente puede entrar
  await getUserWithRole("superadmin");

  return <div>Panel SuperAdmin</div>;
}
