import Button from "./Button";



export default function  Hero() {

    return (
        <section id="hero" className="relative sm:h-full lg:h-screen w-full overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 -z-10">
                <div className="hero-bg"></div>
                <div className="hero-grid"></div>
            </div>

            <div
                className="
                relative
                z-10
                top-10
                max-sm:top-0
                sm:max-w-lg
                sm:top-0
                md:max-w-xl
                lg:max-w-2xl
                px-6
                py-24
                flex
                flex-col
                lg:grid-cols-2
                gap-16
                items-center
                justify-center
                "
            >
                {/* Texto */}
                <div className="space-y-6">
                    <h1 className="max-sm:text-4xl sm:text-7xl lg:text-8xl font-extrabold text-center leading-tight">
                        Design. Code. <span className="text-gradient-accent">Inovate.</span>
                    </h1>

                    <p className="max-sm:text-base sm:text-lg text-secondary text-center max-w-xl">
                        A SolidDev Solutions transforma suas ideias ambiciosas em realidades digitais escaláveis e de alto desempenho. Não criamos apenas websites; projetamos experiências.
                    </p>

                    <div className="flex justify-center max-sm:flex-col max-sm:gap-4 sm:gap-4 lg:gap-10 sm:pt-3 lg:pt-6">
                        <Button 
                            variant="button"
                            className="text-xl font-semibold"
                        >
                        Fale conosco
                        </Button>

                        <Button 
                            variant="ghost"
                            className="text-xl font-semibold"
                        >
                        Ver serviços
                        </Button>
                    </div>

                    <div className="mt-8 lg:mt-15 flex justify-center max-w-2xl gap-8 text-secondary font-extrabold text-base sm:text-2xl flex-wrap items-center">
                        <h1>REACT</h1>
                        <h1>TYPESCRIPT</h1>
                        <h1>NODE.JS</h1>
                        <h1>TAILWIND</h1>
                    </div>
                </div>
            </div>

        </section>
    )
}