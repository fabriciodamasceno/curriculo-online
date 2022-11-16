import {
  DiDotnet,
  DiMsqlServer,
  DiReact
} from 'react-icons/di'

import { SiLaravel, SiVuedotjs } from 'react-icons/si'

import { GrDocker } from 'react-icons/gr'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id: "dotnet", name: "DotNet", description: "", icon: <DiDotnet /> },
  { id: "laravel", name: "Laravel", description: "", icon: <SiLaravel /> },
  { id: "sql", name: "SQL", description: "", icon: <DiMsqlServer /> },
  { id: "vuejs", name: "VueJS", description: "", icon: <SiVuedotjs /> },
  { id: "react", name: "React", description: "", icon: <DiReact /> },
  { id: "docker", name: "Docker", description: "", icon: <GrDocker /> }
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer
