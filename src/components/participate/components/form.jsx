
import { useValidation } from "../../../hooks/useForm";
import schemaParticipateInscription from "../../../model/schema/participateSchema";
import { useParticipateForm } from "../Logic/formsLogic";
import { FaCheck } from "react-icons/fa6";

export function ParticipateForm() {
  const { errors, handleSubmit, register, setValue } = useValidation({
    schema: schemaParticipateInscription,
  });

  const {
    state: {
      checked,
      optionsAreaOfActivity,
      optionsSeniority,
    },
    handlers: { handleCheckboxChange, handleMarkButton },
  } = useParticipateForm();

  const onSubmit = (data) => {
    setValue("experience", checked);
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-fit w-[95%] flex-col gap-4 self-center rounded-lg bg-[#ffffffab] p-6 shadow-2xl dark:bg-[#221C3E]"
    >
      <fieldset className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-1 flex-col gap-4">
          <input
            {...register("name")}
            type="text"
            placeholder="Nome"
            className="rounded border border-blue-500 bg-transparent p-2 font-subtitle font-medium text-black outline-blue-700"
          />
          <span className="ml-1 animate-pulse text-sm text-red-700">
            {errors.name?.message}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="rounded border border-blue-500 bg-transparent p-2 font-subtitle font-medium text-black outline-blue-700"
          />
          <span className="ml-1 animate-pulse text-sm text-red-700">
            {errors.email?.message}
          </span>
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-1 flex-col gap-4">
          <select
            {...register("areaOfActivity")}
            className={`appearance-none rounded border border-blue-500 bg-[url('https://cdn-icons-png.freepik.com/512/3549/3549510.png')] bg-[length:16px] bg-[position:97%_center] bg-no-repeat p-2 pr-4 font-subtitle font-medium outline-blue-700 transition-all duration-100 dark:bg-[#221c3e] dark:bg-[url('https://img.icons8.com/ios7/512w/22C3E6/chevron-down.png')]`}
          >
            <option value="" disabled selected>
              Área de atuação
            </option>
            {optionsAreaOfActivity.map((data, index) => (
              <option
                className="font-subtitle font-medium"
                key={index}
                value={data.value}
              >
                {data.value}
              </option>
            ))}
          </select>
          <span className="ml-1 animate-pulse text-sm text-red-700">
            {errors.areaOfActivity?.message}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <select
            {...register("seniority")}
            className={`appearance-none rounded border border-blue-500 bg-[url('https://cdn-icons-png.freepik.com/512/3549/3549510.png')] bg-[length:16px] bg-[position:97%_center] bg-no-repeat p-2 pr-4 font-subtitle font-medium outline-blue-700 transition-all duration-100 dark:bg-[#221c3e] dark:bg-[url('https://img.icons8.com/ios7/512w/22C3E6/chevron-down.png')]`}
          >
            <option value="" disabled selected>
              Senioridade
            </option>
            {optionsSeniority.map((data, index) => (
              <option
                className="font-subtitle font-medium"
                key={index}
                value={data.value}
              >
                {data.value}
              </option>
            ))}
          </select>
          <span className="ml-1 animate-pulse text-sm text-red-700">
            {errors.seniority?.message}
          </span>
        </div>
        <div className="mt-[10px] flex flex-col">
          <label className="flex w-fit cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              {...register("experience")}
              checked={checked}
              onChange={handleCheckboxChange}
              className="hidden"
            />
            <button
              type="button"
              onClick={handleMarkButton}
              onKeyDown={handleMarkButton}
              className="flex h-6 w-6 cursor-pointer items-center justify-center rounded border-2 border-blue-500 outline-blue-700"
            >
              {checked && <FaCheck className="text-blue-500" />}
            </button>
            <span className="select-none">Possuo experiência</span>
          </label>
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-2">
        <textarea
          {...register("description")}
          className="flex h-40 w-full resize-none appearance-none rounded border border-blue-500 p-2 font-medium outline-blue-600 lg:h-60 dark:bg-primary-muted"
          placeholder="Breve apresentação..."
        />
        <span className="ml-1 animate-pulse text-sm text-red-700">
          {errors.description?.message}
        </span>
      </fieldset>

      <fieldset>
        <button
          type="submit"
          className="w-full rounded bg-green-600 px-14 py-2 font-subtitle text-xl font-medium text-[#000000b4] dark:text-[#919191]"
        >
          Participar
        </button>
      </fieldset>
    </form>
  );
}
