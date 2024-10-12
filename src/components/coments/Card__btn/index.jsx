export default function Card__btn() {
  return (
    <div className="flex gap-2 justify-self-end">
      <button className="h-[36px] w-[152px] rounded-[8px] bg-btn-primary text-[18px] md:w-[105px] dark:bg-btn-secondary dark:text-white-two">
        Confirmar
      </button>
      <button className="border-btn-secondary dark:border-btn-primary h-[36px] w-[152px] rounded-[8px] border-[1px] text-[18px] md:w-[105px] dark:text-white-two">
        Limpar
      </button>
    </div>
  );
}
