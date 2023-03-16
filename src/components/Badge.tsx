import classNames from "classnames";

export enum Variant {
  Warning = "warning",
  Danger = "danger",
  Primary = "primary",
  Success = "success",
}

const Badge = ({ text, variant }: { text: string; variant: Variant }) => {
  const styles = {
    danger: "bg-red-200 text-red-800",
    success: "bg-green-200 text-green-800",
    primary: "bg-blue-200 text-blue-800",
    warning: "bg-yellow-200 text-yellow-800",
  };
  return (
    <span
      className={classNames(
        "mr-2 rounded px-2.5 py-0.5 text-xs font-medium",
        styles[variant]
      )}
    >
      {text}
    </span>
  );
};

export default Badge;
