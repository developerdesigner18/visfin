import { OverlayTrigger, Tooltip } from "react-bootstrap";

const ShowInfo = ({ placement, children, info }) => {
  return (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={<Tooltip id={`tooltip-${placement}`}>{info}</Tooltip>}
    >
      {children}
    </OverlayTrigger>
  );
};

ShowInfo.defaultProps = {
  placement: "top",
};

export default ShowInfo;
