import { type Dispatch, type SetStateAction } from "react";
import { ALL_BUILD_TYPE } from "~/pages/races/[raceName]/match-ups/[opponentRace]";
import { buildStyles } from "~/pages/submit-build";

const BuildStyleSelect = ({
  setBuildStyle,
}: {
  setBuildStyle: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <section className="w-full">
      <h3 className="mb-2 text-sm font-medium text-white">
        Select Build Style
      </h3>
      <ul className="w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
        {[ALL_BUILD_TYPE, ...buildStyles].map((style, index) => (
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
                defaultChecked={style === ALL_BUILD_TYPE}
                onChange={(e) => setBuildStyle(e.target.value)}
                className="h-4 w-4 border-gray-500 bg-gray-600 text-blue-600 "
              />
              <label
                htmlFor={`build-radio-${style}`}
                className="ml-2 w-full cursor-pointer py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
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
