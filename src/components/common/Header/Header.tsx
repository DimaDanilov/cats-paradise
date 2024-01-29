import { NavLink } from "react-router-dom";

type HeaderLinkProps = {
  to: string;
  text: string;
};

const baseNavLinkStyle =
  "text-white h-full px-6 py-4 hover:bg-bgThirdary transition-all";

const HeaderLink = ({ to, text }: HeaderLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return `${baseNavLinkStyle} ${isActive ? `bg-bgSecondary` : ""}`;
      }}
    >
      {text}
    </NavLink>
  );
};

export const Header = () => {
  return (
    <div className="w-full fixed flex flex-row bg-bgPrimary px-16">
      <HeaderLink to="/" text="Все котики" />
      <HeaderLink to="/favourites" text="Любимые котики" />
    </div>
  );
};
