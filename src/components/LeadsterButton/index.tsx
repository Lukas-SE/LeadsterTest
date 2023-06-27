interface IProps {
  variation?: "select" | "paginator";
  children: string;
  active?: boolean;
  click?(): void;
}

export default function LeadsterText({
  variation,
  children,
  click,
  active,
}: IProps) {
  return (
    <button
      onClick={click}
      className={
        variation == "select"
          ? active == true
            ? "leadster-select-active"
            : "leadster-select"
          : variation == "paginator"
          ? active == true ? "leadster-paginator" : "font-medium text-leadster-0 hover:text-leadster-400 transition-all duration-300 aspect-square w-10 text-xl"
          : "leadster-btn"
      }
    >
      {children}
    </button>
  );
}
