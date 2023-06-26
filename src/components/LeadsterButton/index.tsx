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
          ? "leadster-paginator"
          : "leadster-btn"
      }
    >
      {children}
    </button>
  );
}
