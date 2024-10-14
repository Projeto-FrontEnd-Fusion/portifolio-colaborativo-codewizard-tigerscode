import PropTypes from "prop-types";
import { FaBookBookmark, FaPeopleGroup, FaTrophy } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import scrollTo from "../../../utils/scrollUtils";

const Menu = ({ primary, hasIcons }) => {
  return (
    <nav>
      <ul
        className={`space-y-4 font-subtitle text-lg lg:flex lg:items-center lg:gap-8 lg:space-y-0 ${primary ? "text-primary dark:text-white-one" : "text-white-one dark:text-white-one"}`}
      >
        <li className="w-full">
          <button className="flex w-full items-center justify-start">
            <a
              className="flex h-full w-full items-center gap-4 rounded-lg px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-btn-primary"
              href="#about"
              onClick={scrollTo}
            >
              {hasIcons && <FaBookBookmark />}
              Sobre
            </a>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center justify-start">
            <a
              className="flex h-full w-full items-center gap-4 rounded-lg px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-btn-primary"
              href="#team"
              onClick={scrollTo}
            >
              {hasIcons && <HiUserGroup />}
              Equipe
            </a>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center justify-start">
            <a
              className="flex h-full w-full items-center gap-4 rounded-lg px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-btn-primary"
              href="#benefits"
              onClick={scrollTo}
            >
              {hasIcons && <FaTrophy />}
              Vantagens
            </a>
          </button>
        </li>
        <li>
          <button className="flex w-full items-center justify-start">
            <a
              className="flex h-full w-full items-center gap-4 rounded-lg px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-btn-primary"
              href="#participants"
              onClick={scrollTo}
            >
              {hasIcons && <FaPeopleGroup />}
              Participantes
            </a>
          </button>
        </li>
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  primary: PropTypes.bool,
  hasIcons: PropTypes.bool,
};

Menu.defaultProps = {
  primary: false,
  hasIcons: false,
};

export default Menu;
