import SideNav from "@/app/ui/dashboard/sidenav"
//seguimos en la ruta /dashboard

//Colocamos el sidebar en el layout para que no desaparezca cuando naveguemos a otras rutas (invoices, customers...)

//Los layout afectan del nivel en el que estás, hacia abajo

export default function Layout (
    { children } : { children: React.ReactNode 
    }) 
    {


    // Navbar lateral
    return (
        <div className="flex h-screen flex-sol md:flex-row
        md:overflow-hidden">
           <div className="w-full flex-none md:w-64">
            <SideNav />
           </div>
           <div className="flex-grow p-6 md:overflow-y-auto
           md:p-12">
            {children}
           </div>
            
        </div>
    )
}