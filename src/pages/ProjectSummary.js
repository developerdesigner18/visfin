// Bootstrap
import { Container } from "react-bootstrap";
// Components
import Divider from "../components/Divider";
import Tiles from "../components/Tiles";

const ProjectSummary = () => {
  return (
    <Container>
      <div className="projectSummary py-4">
        <h2>Project Summary</h2>
        <Divider />
        <Tiles />
      </div>
    </Container>
  );
};

export default ProjectSummary;
