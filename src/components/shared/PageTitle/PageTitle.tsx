const PageTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string | null;
}) => {
  return <h2 className={`h3 m-0 text-capitalize ${className}`}>{title}</h2>;
};

export default PageTitle;
