

export type Project = {
    image: string;
    title: string;
    description: string;
    technologies?: string[];
    link?: string;
}

type ProjectCardProps = {
    project: Project;
}


export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="
            bg-secondary 
            rounded-lg 
            p-5
            flex
            flex-col
            gap-4
            transition
            hover:-translate-y-1
            hover:shadow-color-glow
            ">
            <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-40 lg:h-55 object-cover rounded-md"
            />

            <h3 className=" text-lg font-semibold">
                {project.title}
            </h3>
            <p className="flex-1/2 text-sm opacity-80">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
                {
                    project.technologies?.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs bg-blue-500/20 px-2 py-1 rounded"
                        >
                            {tech}
                        </span>
                    ))
                }
            </div>
        </div>
    )
}