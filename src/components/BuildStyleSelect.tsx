import { type Dispatch, type SetStateAction } from "react";
import { buildStyles } from "~/pages/submit-build";

const BuildStyleSelect = ({
  setBuildStyle,
}: {
  setBuildStyle: Dispatch<SetStateAction<string | undefined>>;
}) => {
  return (
    <section className="w-full">
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
        Select Build Style
      </h3>
      <ul className="w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:flex">
        {buildStyles.map((style, index) => (
          <li
            key={index}
            className="w-full border-b border-gray-200 dark:border-gray-600 sm:border-b-0 sm:border-r"
          >
            <div className="flex items-center pl-3">
              <input
                id={`build-radio-${style}`}
                type="radio"
                value={style}
                name="build-radio"
                onChange={(e) => setBuildStyle(e.target.value)}
                className="h-4 w-4 border-gray-500 bg-gray-600 text-blue-600 "
              />
              <label
                htmlFor={`build-radio-${style}`}
                className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {style}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BuildStyleSelect;
