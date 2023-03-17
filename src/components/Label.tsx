const Label = ({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor: string;
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-sm font-medium text-white"
    >
      {children}
    </label>
  );
};

export default Label;
