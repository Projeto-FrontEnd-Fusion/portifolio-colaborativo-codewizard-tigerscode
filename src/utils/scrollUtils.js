const scrollTo = (e) => {
  e.preventDefault();

  const searchEngine = e.target.href.split("#")[1];

  switch (searchEngine) {
    case "about":
      setElement(searchEngine);
      break;
    case "team":
      setElement(searchEngine);
      break;
    case "benefits":
      setElement(searchEngine);
      break;
    case "participants":
      document;
      setElement(searchEngine);
      break;
  }
};

const setElement = (element) => {
  document.querySelector(`#${element}`).scrollIntoView({ behavior: "smooth" });
};

export default scrollTo;
