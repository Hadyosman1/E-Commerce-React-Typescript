const PageTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string | null;
}) => {
  return <h2 className={`h3 m-0 text-capitalize ${className}`}>{children}</h2>;
};

export default PageTitle;
