import Link from "next/link";

const ProjectLink = ({ href, children }) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="project-link">
    {children}
    </Link>
  )
}

export default ProjectLink;
