import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-page">
        <SectionHeading
          label="03 — Arbeit"
          title="Meine Projekte"
          text="Eine Auswahl an Dingen, die ich gebaut habe oder gerade baue."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              key={project.name}
              delay={i * 80}
              className={project.featured ? 'md:col-span-2' : ''}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
