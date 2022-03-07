import { Link } from "react-router-dom";
// Bootstrap
import { Button } from "react-bootstrap";
// Components
import Divider from "../components/Divider";
// Data
import { existingProjects } from "../data/existingProjectsData";

const Home = () => {
  return (
    <div className="home">
      {/* ---------------------------------------Hero Section--------------------------------------- */}
      <div className="hero">
        <div className="hero__content">
          <h1 className="hero__title font-bold">
            Create <br /> a new Project
          </h1>
          {/* <Divider /> */}
          <p className="hero__subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            deserunt porro est, rem quos dolorum nostrum velit eos ex architecto
            vel laboriosam rerum dignissimos nam distinctio natus.
          </p>
          <Button size="sm">Create Project</Button>
        </div>

        <div>
          <div className="hero__img">
            <img src="/images/calculator.svg" alt="Calculator vector" />
          </div>
        </div>
      </div>

      {/* ---------------------------------------Existing Projects--------------------------------------- */}
      <div className="existingProjects">
        <h2>Explore Existing Projects</h2>
        <Divider />
        <div className="existingProjects__cards">
          {existingProjects.map(({ id, name, location, user, description }) => (
            <div key={id} className="existingProjects__card ">
              <h5>{name}</h5>
              <p>{description}</p>
              <Link to="project-detail">
                <Button variant="outline-primary" size="sm">
                  View Project
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
