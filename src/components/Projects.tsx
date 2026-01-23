import Assets from "../assets/assets"
import ProjectCard from "./ui/ProjectCard"


export default function Projects() {


    return (
        <section id="projects" className="flex flex-col w-full justify-center items-center gap-10 max-sm:px-5 sm:px-7 lg:px-10 py-20">
            <h1 className="text-4xl font-bold">Nossos <span className="text-gradient-accent">Projetos</span></h1>
            <p className="text-center max-w-3xl text-lg text-glass/80">
                Confira alguns dos nossos projetos recentes que demonstram nossa expertise em desenvolvimento web e soluções personalizadas para nossos clientes.
            </p>
            {/* Project Cards would go here */}
            <div className="
                grid 
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-6
                w-full
                max-w-7xl
            ">
                {
                    Assets.projectsData.map((project) => (
                        <ProjectCard 
                            key={project.title}
                            project={project}
                        />
                    ))
                }
            </div>
        </section>
    )
}