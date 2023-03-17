import type { InputHTMLAttributes } from "react";
import classNames from "classnames";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  className?: string;
}

const Input = ({ id, value, onChange, className }: Props) => {
  return (
    <input
      type="text"
      id={id}
      className={classNames(
        "block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:outline-none focus:ring-blue-500",
        className
      )}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
