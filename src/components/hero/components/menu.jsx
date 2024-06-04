import PropTypes from "prop-types";

const Menu = ({ primary }) => {
  return (
    <nav>
      <ul className={`space-y-4 font-subtitle text-lg lg:flex lg:items-center lg:gap-8 lg:space-y-0 ${primary ? "text-primary dark:text-white-one" : "text-white-one dark:text-white-one"}`}>
        <li>
          <a
            className="block h-full w-full px-4 py-2 hover:underline"
            href="#about"
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            className="block h-full w-full px-4 py-2 hover:underline"
            href="#team"
          >
            Equipe
          </a>
        </li>
        <li>
          <a
            className="block h-full w-full px-4 py-2 hover:underline"
            href="#benefits"
          >
            Vantagens
          </a>
        </li>
        <li>
          <a
            className="block h-full w-full px-4 py-2 hover:underline"
            href="#participants"
          >
            Participantes
          </a>
        </li>
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  primary: PropTypes.bool,
};

Menu.defaultProps = {
  primary: false,
};

export default Menu;
