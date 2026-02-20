import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

// Map de roles → rutas
export const roleRoutes = {
  admin: "/dashboard/admin",
  superadmin: "/dashboard/superadmin",
  secretaria: "/dashboard/secretaria",
} as const;

export type Role = keyof typeof roleRoutes;

export async function getUserWithRole(requiredRole?: Role) {
  const supabase = await createClient();

  // 1️⃣ Obtener usuario
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  // 2️⃣ Obtener perfil con rol
  const { data: profile } = await supabase
    .from("users")
    .select("rol")
    .eq("id", user.id)
    .single();

  if (!profile) {
    redirect("/auth/login");
  }

  const role = profile.rol as Role;

  // 3️⃣ Validar rol si se requiere
  if (requiredRole && role !== requiredRole) {
    redirect("/dashboard");
  }

  return {
    user,
    role,
  };
}