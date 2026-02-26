import { projects } from "@/data/projects";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface ProjectsProps {
    isDark: boolean;
    setIsDark: (dark: boolean) => void;
}

const Projects = ({ isDark, setIsDark }: ProjectsProps) => {
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToContact = (e: React.MouseEvent) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/#contact');
            setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <Link
                            to="/"
                            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-8"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Home
                        </Link>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 mt-12 md:mt-0">
                            Available Work
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl font-light">
                            A comprehensive list of my work, including client projects, personal tools, and AI solutions.
                        </p>
                    </div>
                </div>

                <div className="mb-16 bg-muted/30 border border-border rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                    <div className="max-w-3xl">
                        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-foreground">
                            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                            The Performance Guarantee
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                            Every project you see below wasn't just built to look good. They are engineered for <strong>maximum conversion</strong>, <strong>technical SEO dominance</strong>, and <strong>blazing fast load times</strong>. I don't just write code; I build complete business systems.
                        </p>
                    </div>
                    <a
                        href="/#contact"
                        onClick={scrollToContact}
                        className="whitespace-nowrap inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-md transition-colors cursor-pointer"
                    >
                        Start Your Project
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group border border-border rounded-md bg-card p-6 flex flex-col justify-between transition-colors duration-300 hover:border-muted-foreground/50 hover:bg-muted/10"
                        >
                            <div>
                                <div className="flex items-start justify-between mb-4">
                                    <h2 className="text-xl font-semibold tracking-tight capitalize text-foreground">
                                        {project.name.replace(/-/g, ' ')}
                                    </h2>
                                    <div className="bg-muted px-2 py-1 rounded text-xs font-medium text-muted-foreground border border-border/50">
                                        {project.category}
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.stack.slice(0, 4).map((tech, i) => (
                                        <span key={i} className="text-xs font-mono bg-muted/50 border border-border/50 px-2 py-0.5 rounded text-muted-foreground">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.stack.length > 4 && (
                                        <span className="text-xs font-mono bg-transparent px-1 py-0.5 text-muted-foreground opacity-50">
                                            +{project.stack.length - 4}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mt-auto pt-4">
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors group-hover:translate-x-1 decoration-border hover:underline"
                                    >
                                        View Live <ArrowUpRight className="h-3.5 w-3.5" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
