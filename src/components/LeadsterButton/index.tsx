interface IProps {
    variation?: "small" | "paginator",
    children: string,
}

export default function LeadsterText( {variation, children}: IProps ) {
    return (
      <button className={variation == "small" ? "leadster-btn-sm" : variation == "paginator" ? "leadster-paginator" : "leadster-btn"}>
        {children}
      </button>
    )
}
