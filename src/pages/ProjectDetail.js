import { useParams } from "react-router-dom";
// Components
import Divider from "../components/Divider";

const ProjectDetail = () => {
  const params = useParams();

  return (
    <div className="projectDetail">
      {/* // TODO: It's temporary. Please fetch it from db */}
      <h2>{params.name}</h2>
      <Divider />
      <div className="projectDetail__details">
        <h4>Location</h4>
        <p>location</p>
        <h4>User</h4>
        <p>user</p>
        <h4>Description</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
          earum fugit illum porro. Sunt provident alias numquam quo perferendis
          molestiae!
        </p>
      </div>
    </div>
  );
};

export default ProjectDetail;
