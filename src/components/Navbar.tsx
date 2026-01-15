import Button from "./Button";
import Assets from "../assets/assets";
import React from "react";



export default function NavBar() {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    React.useEffect(() => {
        document.body.style.overflow = sidebarOpen ? 'hidden' : 'auto'
    }, [sidebarOpen]);
    
    return (
        <nav className="flex justify-between items-center px-4 sm:px-5 lg:px-16 xl:px-24 py-4 max-sm:w-[calc(100vw-2rem)] sm:w-[calc(100vw-3rem)] md:w-[calc(100vw-11rem)] lg:w-[calc(100vw-20rem)] xl:w-[calc(100vw-30rem)] fixed top-6 z-20 backdrop-blur-xl font-medium bg-glass border border-glass rounded-2xl gap-6">
            <div className="flex">
                <a href="#hero">
                    <h1 className="font-family-secondary font-bold text-lg tracking-tight text-blue-500">SolidDev <span className="text-primary">Solutions</span></h1>
                </a>
            </div>


            <div className="">

                {!sidebarOpen ? (
                    <Assets.Icons.Menu className="w-9 absolute right-4 top-3.5 sm:hidden" onClick={() => setSidebarOpen(true)} />
                    ) : (
                        <Assets.Icons.Close className="w-9 absolute right-4 top-3.5 sm:hidden" onClick={() => setSidebarOpen(false)} />
                    )
                }
                
                <div className={`flex flex-row ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:px-10'} max-sm:fixed top-[61px] bottom-0 right-0 max-sm:h-[calc(100vh-60px)] max-sm:flex-col max-sm:bg-primary max-sm:pt-20 sm:items-center sm:overflow-visible gap-4 transition-all`}>
                    <div className="flex flex-row max-sm:flex-col sm:items-center gap-3 transition-all">
                        <Button variant="link" onClick={() => {
                            document
                                .getElementById("hero")
                                ?.scrollIntoView({behavior: "smooth"})
                            setSidebarOpen(false);
                        }}>Home</Button>
                        <Button variant="link" onClick={() => {
                            document
                                .getElementById("services")
                                ?.scrollIntoView({ behavior: "smooth"})
                            setSidebarOpen(false);
                        }}>Serviços</Button>
                        <Button variant="link" onClick={() => {
                            document
                                .getElementById("portifolio")
                                ?.scrollIntoView({ behavior: "smooth" })
                            setSidebarOpen(false);
                        }}>Portifólio</Button>
                    </div>

                    <Button variant="button" onClick={() => {
                        document.getElementById("contato")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }}>Contato</Button>
                </div>
            </div>
        </nav>
    )
}