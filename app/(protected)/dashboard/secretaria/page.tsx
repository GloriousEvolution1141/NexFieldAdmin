import { getUserWithRole } from "@/lib/auth";

export default async function TecnicoPage() {
  // Solo tecnico puede entrar
  await getUserWithRole("secretaria");

  return <div>Panel Secretaria</div>;
}
