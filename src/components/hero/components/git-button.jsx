import { LuGithub } from "react-icons/lu";

const GitButton = ({ primary }) => {
  return (
    <button
      className={`github-button flex h-12 w-32 cursor-pointer items-center justify-center rounded-lg font-body-two text-[16px] font-bold transition-colors duration-300 ease-in-out hover:text-white ${primary ? "bg-btn-primary hover:bg-btn-secondary" : "bg-btn-secondary text-white hover:bg-btn-primary hover:text-primary"}`}
    >
      <a
        href="https://github.com/Projeto-FrontEnd-Fusion/portifolio-colaborativo-codewizard-tigerscode"
        target="_blank"
        rel="nofollow"
        className="flex items-center gap-[10px]"
        aria-label="Open GitHub Repository"
        title="Ir Para o Github"
      >
        <span>github</span>
        <LuGithub size={16} strokeWidth={3} />
      </a>
    </button>
  );
};

export default GitButton;
