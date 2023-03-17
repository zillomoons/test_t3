import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import BuildCard from "~/components/BuildCard";
import BuildStyleSelect from "~/components/BuildStyleSelect";
import Input from "~/components/Input";
import Label from "~/components/Label";
import { buildStyles } from "~/pages/submit-build";
import { api } from "~/utils/api";

const FindBuildsPage: NextPage = () => {
  const [buildStyle, setBuildStyle] = useState(buildStyles[0]);
  const [search, setSearch] = useState("");

  const { query } = useRouter();
  const { opponentRace = "", raceName = "" } = query as {
    opponentRace: string;
    raceName: string;
  };
  const builds = api.builds.getBuildsByMatchUp.useQuery(
    {
      matchUp: `${raceName.toLowerCase().charAt(0)}v${opponentRace
        .toLowerCase()
        .charAt(0)}`,
    },
    {
      initialData: [],
    }
  );

  const lowerCaseSearch = search.toLowerCase();

  const filteredBuilds = builds.data
    .filter((build) =>
      buildStyle === "all" ? build : build.style === buildStyle
    )
    .filter((build) =>
      search !== ""
        ? ["author", "title", "description"].some((key) =>
            ((build as Record<string, string>)[key] ?? "")
              .toLowerCase()
              .includes(lowerCaseSearch)
          )
        : build
    );

  return (
    <>
      <Head>
        <title>Match Up</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-12 ">
        <h1 className="text-4xl">
          {raceName} vs {opponentRace}
        </h1>
        <section className="flex w-full gap-12">
          <form className="flex w-1/4 min-w-[286px] flex-col gap-8">
            <fieldset>
              <Label htmlFor="searchInput">
                Filter (by name, author or description)
              </Label>
              <Input
                id="searchInput"
                value={search}
                className="w-1/3"
                onChange={(e) => setSearch(e.target.value)}
              />
            </fieldset>
            <BuildStyleSelect setBuildStyle={setBuildStyle} />
          </form>
          <section className="flex flex-col gap-4">
            <h2 className="self-start text-xl font-bold">Builds:</h2>
            <div className="flex flex-wrap gap-4">
              {filteredBuilds.map((build) => (
                <BuildCard key={build.id} build={build} />
              ))}
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default FindBuildsPage;
