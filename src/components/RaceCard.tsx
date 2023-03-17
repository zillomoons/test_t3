import classNames from "classnames";
import Image from "next/image";

export const RaceCard = ({
  raceImageSrc,
  raceName,
  tabIndex,
  isOpponent = false,
  selectRace,
}: {
  raceImageSrc: string;
  raceName: string;
  tabIndex: number;
  isOpponent?: boolean;
  selectRace: () => void;
}) => {
  const iconStyle = isOpponent
    ? `focus:border-red-500 focus:ring-red-500`
    : `focus:border-blue-500 focus:ring-blue-500`;
  return (
    <div
      tabIndex={tabIndex}
      className={classNames(
        "max-w-sm cursor-pointer rounded-lg border border-gray-700 bg-gray-800 shadow",
        iconStyle
      )}
      onClick={selectRace}
    >
      <Image
        src={raceImageSrc}
        className={"h-full w-full rounded-lg"}
        width={120}
        height={120}
        alt={raceName}
      />
    </div>
  );
};
