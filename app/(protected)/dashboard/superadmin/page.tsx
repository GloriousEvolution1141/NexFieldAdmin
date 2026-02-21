import { getUserWithRole } from "@/lib/auth";
import { ContentMain } from "@/components/dashboardComponent/contentMain";
import { FooterMain } from "@/components/dashboardComponent/footerMain";
import { NavbarMain } from "@/components/dashboardComponent/navbarMain";
export default async function ClientePage() {
  // Solo cliente puede entrar
  await getUserWithRole("superadmin");

  return (
    <main className="bg-gray-200">
      {/* Panel SuperAdmin */}
      <div className="flex flex-col min-h-screen">
        <NavbarMain />
        <ContentMain />
        <FooterMain />
      </div>
    </main>
  );
}
