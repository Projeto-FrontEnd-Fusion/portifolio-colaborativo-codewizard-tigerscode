import { useState } from "react";

export function useParticipateForm() {
  const [isOpenAreaOfActivity, setIsOpenAreaOfActivity] = useState(false);
  const [isOpenSeniority, setIsOpenSeniority] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleKeypress = (event) => {
    if (event.target.id === "areaOfActivity" && event.key === "Enter") {
      setIsOpenAreaOfActivity(!isOpenAreaOfActivity);
    }
    if (event.target.id === "seniority" && event.key === "Enter") {
      setIsOpenSeniority(!isOpenSeniority);
    }
  };

  const handleCheckboxChange = () => setChecked((prev) => !prev);

  const handleMarkButton = (e) => {
    if (e.type === "click" || e.key === "Enter" || e.key === " ") {
      handleCheckboxChange();
      e.preventDefault();
    }
  };

  const optionsAreaOfActivity = [
    { value: "Front End" },
    { value: "Back end" },
    { value: "Full stack" },
    { value: "UX/UI" },
  ];

  const optionsSeniority = [
    { value: "Junior" },
    { value: "Pleno" },
    { value: "Senior" },
  ];

  return {
    state: {
      checked,
      optionsAreaOfActivity,
      optionsSeniority,
    },
    handlers: {
      handleKeypress,
      handleCheckboxChange,
      handleMarkButton,
    },
  };
}
