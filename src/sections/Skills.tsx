import { skillGroups } from '../data/skills';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-page">
        <SectionHeading
          label="02 — Stack"
          title="Skills"
          text="Technologien, mit denen ich regelmäßig arbeite — ohne Prozentbalken, dafür ehrlich sortiert."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.group} delay={i * 80}>
              <div className="card h-full p-5 sm:p-6">
                <h3 className="mono-label">{group.group}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="badge">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
