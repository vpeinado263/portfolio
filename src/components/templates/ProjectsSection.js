import ProjectCategory from "../organisms/ProjectCategory";

const ProjectsSection = ({ data = [] }) => {
  return (
    <section className="projects-section">
    <h2 className="section-title">Proyectos</h2>
    <div className="projects-container">
      {data.map((categoryData, index) => (
        <ProjectCategory
          key={index}
          category={categoryData.category}
          description={categoryData.description}
          projects={categoryData.projects}
        />
      ))}
    </div>
  </section>
  )
}

export default ProjectsSection;
