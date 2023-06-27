import LeadsterButton from "../LeadsterButton";

interface IProps {
  pages: number;
  handle(page: number): void;
  current: number;
}

export default function index({ pages, current, handle }: IProps) {
  return (
    <div className="flex flex-1 items-center justify-center text-lg text-leadster-0">
      <p className="font-bold">Página</p>
      {pages &&
        [...Array(pages)].map((item, i) => (
          <LeadsterButton
            click={() => {
              handle(i + 1);
            }}
            active={i + 1 == current ? true : false}
            variation="paginator"
            key={i + 1}
          >
            {i + 1 + ""}
          </LeadsterButton>
        ))}
    </div>
  );
}
