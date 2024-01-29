import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <Link to="/">To home</Link>
      <Link to="favourites">To favourites</Link>
    </div>
  );
};
