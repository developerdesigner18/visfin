import { Link } from "react-router-dom";

import { TILES } from "../AppConfig";

const Tiles = () => {
  return (
    <div className="visfin-cards">
      {TILES.map(({ name, slug }, index) => (
        <Link key={index} to={`/${slug}`} className="td-none">
          <div className="visfin-card">
            <h5>{`${index + 1}. ${name}`}</h5>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Tiles;
