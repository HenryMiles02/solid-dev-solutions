import Assets from "../assets/assets";



export default function Footer() {

    return (
        <footer className="flex flex-col items-center gap-8 w-full border-t border-glass py-10">
            <div className="flex flex-col sm:flex-row justify-around items-center w-full gap-5">
                <h1 className="text-lg font-bold"><span className="text-gradient-accent">SolidDev</span>Solutions</h1>

                <div>
                    <ul className="flex gap-5">
                        <a href="" className="text-secondary">Politica de Privacidade</a>
                        <a href="" className="text-secondary">Termos de Serviço</a>
                    </ul>
                </div>

                <div className="flex flex-row gap-5">
                    <div className="p-2 h-10 w-10 bg-secondary/50 rounded-full flex items-center justify-center border-1 border-blue-500/30 hover:border-blue-400 group transition-all">
                        <Assets.Icons.Instagram className="w-5 h-5 text-blue-500 stroke-[2.5] group-hover:text-blue-400 transition-all" />
                    </div>

                    <div className="p-2 h-10 w-10 bg-secondary/50 rounded-full flex items-center justify-center border-1 border-blue-500/30 hover:border-blue-400 group transition-all">
                        <Assets.Icons.Linkedin className="w-5 h-5 text-blue-500 stroke-[2.5] group-hover:text-blue-400 transition-all" />
                    </div>
                </div>
            </div>

            <p className="text-muted text-sm text-center">© 2026 SolidDev Solutions. All rights reserved. Crafted with excellence.</p>
        </footer>
    )
}