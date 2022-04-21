import { Link } from "react-router-dom";
// Bootstrap
import { Button, Container } from "react-bootstrap";
// Components
import Divider from "../components/Divider";
// Data
import { existingProjects } from "../data/existingProjectsData";

const Projects = () => {
  return (
    <Container>
      <div className="projects">
        {/* ---------------------------------------Hero Section--------------------------------------- */}
        <div className="hero">
          <div className="hero__content">
            <h1 className="hero__title font-bold">
              Create <br /> a new Project
            </h1>
            <p className="hero__subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              deserunt porro est, rem quos dolorum nostrum velit eos ex
              architecto vel laboriosam rerum dignissimos nam distinctio natus.
            </p>
            <Link to="project-summary">
              <Button size="sm">Create Project</Button>
            </Link>
          </div>

          <div className="hero__img">
            <img src="/images/calculator.svg" alt="Calculator vector" />
          </div>
        </div>

        {/* ---------------------------------------Projects Section--------------------------------------- */}
        <div className="existingProjects py-4">
          <h2>Explore Projects</h2>
          <Divider />
          <div className="visfin-cards">
            {existingProjects.map(
              ({ id, name, location, user, description, slug }) => (
                <Link
                  key={id}
                  to={`project-detail/${slug}`}
                  className="td-none"
                >
                  <div className="visfin-card">
                    <p>{description}</p>
                    <h5>{name}</h5>
                    <span className="existingProjects__arrow">&rarr;</span>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
