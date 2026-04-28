import projects from "../../data/projects";
import CardItem from "./CardItem";

// CardList component
// Maps through project data and renders each project card
function CardList() {
  return (
    <>
      {projects.map((project) => (
        <CardItem key={project.id} project={project} />
      ))}
    </>
  );
}

export default CardList;