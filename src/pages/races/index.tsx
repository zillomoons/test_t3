import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

export const RaceCard = ({
  raceImageSrc,
  raceName,
  href,
  isOpponent = false,
}: {
  raceImageSrc: string;
  raceName: string;
  href: string;
  isOpponent?: boolean;
}) => {
  const buttonStyle = isOpponent
    ? `bg-red-700 hover:bg-red-800`
    : `bg-blue-700 hover:bg-blue-800`;
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <img className="rounded-t-lg" src={raceImageSrc} alt={raceName} />
      <div className="p-5">
        <Link
          href={href}
          className={
            `inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:right-4 focus:outline-none focus:ring-blue-300 ` +
            buttonStyle
          }
        >
          {raceName}
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

const FindBuildsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Races</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 text-black dark:bg-gray-800 dark:text-white">
        <h1>Select your Race</h1>
        <ul className="grid grid-cols-3 gap-5">
          <li>
            <RaceCard
              href="/races/zerg/match-ups"
              raceImageSrc="/images/zerg.jpg"
              raceName="Zerg"
            />
          </li>
          <li>
            <RaceCard
              href="/races/protoss/match-ups"
              raceImageSrc="/images/protoss.jpg"
              raceName="Protoss"
            />
          </li>
          <li>
            <RaceCard
              href="/races/terran/match-ups"
              raceImageSrc="/images/terran.jpg"
              raceName="Terran"
            />
          </li>
        </ul>
      </main>
    </>
  );
};

export default FindBuildsPage;
