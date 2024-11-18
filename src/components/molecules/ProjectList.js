import ProjectLink from "../atoms/ProjectLink";

const ProjectList = ({projects}) => {
  return (
    <ul className="project-list">
    {projects.map((project, index) => (
      <li key={index} className="project-item">
        <ProjectLink href={project.link}>{project.title}</ProjectLink>
      </li>
    ))}
  </ul>
  )
}

export default ProjectList;

