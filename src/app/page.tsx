import { redirect } from "next/navigation";

export default function HomePage() {

  //Esta pagina, la page.tsx principal basicamente es eso, la pagina principa, pero con esto podemos redirigir primero a este sitio, para eso el redirect, el cual hay que exportar
  redirect('dashboard/main')

  //Este codigo se pone mas oscuro, y es porque este codigo ya no retorna nada mas, o sea, esto nunca se va a usar xd, lo voy a comentar para que sirva de ejemplo
  // return (
  //   <>
  //     <h1>Hola Mundo</h1>
  //   </>
  // );
}
