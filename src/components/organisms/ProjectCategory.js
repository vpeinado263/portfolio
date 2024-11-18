import ProjectList from "../molecules/ProjectList";


const ProjectCategory = ({category, description, projects}) => {
  return (
    <div className="proyect-category">
     <h3 className="category-title">{category}</h3>
     <p className="category-description">{description}</p>
     <ProjectList projects={projects} />
    </div>
  )
}

export default ProjectCategory;
