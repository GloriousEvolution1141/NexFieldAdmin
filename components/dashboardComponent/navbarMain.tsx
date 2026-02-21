import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { SearchNav } from "../MyComponent/SearchNav";

export function NavbarMain() {
  return (
    <div className="h-16 mx-6 grid grid-cols-3 items-center bg-green-200 px-4">
      {/* Zona izquierda */}
      <div className=" h-12 flex items-center justify-center bg-violet-200 gap-4">
        <Button className="h-8 w-6"></Button>
        <div className="">
          <p className="font-semibold">NexField ADMIN</p>
          <p className="text-xs text-gray-500">Plataforma de Control</p>
        </div>
      </div>

      {/* Zona centro */}
      <div className=" h-12 flex justify-center items-center bg-white">
        <SearchNav />
      </div>

      {/* Zona derecha */}
      <div className=" h-12 flex justify-center items-center bg-violet-200">
        <div className=" h-12 flex items-center justify-center bg-violet-200 gap-4">
          <Badge variant={"secondary"} className="h-9 pointer-events-none">
            22 / 02 / 2026
          </Badge>
          <Button>Descargar</Button>
          <Badge variant={"secondary"} className="h-9 pointer-events-none">
            Administrador
          </Badge>
          <Button>Salir</Button>
        </div>
      </div>
    </div>
  );
}
