import Card from "./Card";



export default function Services() {

    return (
        <section id="services" className="flex flex-col w-full justify-center items-center gap-10 max-sm:px-5 sm:px-7 lg:px-10 py-20">
            <h1 className="text-4xl font-bold">Nossos <span className="text-gradient-accent">Serviços</span></h1>

            <div className="w-full max-w-6xl mx-auto">
                <div className="grid w-full gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
                    <Card>
                        <h1 className="text-xl font-semibold text-primary leading-10">Desenvolvimento Web</h1>
                        <p className="text-base text-secondary">Criação de websites responsivos e otimizados para SEO, utilizando React, e backends de alto desempenho.</p>
                    </Card>
                    <Card>
                        <h1 className="text-xl font-semibold text-primary leading-10">UI/UX Design</h1>
                        <p className="text-base text-secondary">Design de interfaces intuitivas e atraentes, focadas na experiência do usuário e na usabilidade.</p>
                    </Card>
                    <Card>
                        <h1 className="text-xl font-semibold text-primary leading-10">API/Backend</h1>
                        <p className="text-base text-secondary">Desenvolvimento de APIs RESTful e microserviços escaláveis, integrando com bancos de dados e sistemas externos.</p>
                    </Card>
                </div>
            </div>
        </section>
    )
}