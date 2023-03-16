import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

import { api } from "~/utils/api";

export const macroBuildStyle = "macro";
export const timingBuildStyle = "timing attack";
export const allInBuildStyle = "all in";
export const cheeseBuildStyle = "cheese";

export const buildStyles = [
  macroBuildStyle,
  timingBuildStyle,
  allInBuildStyle,
  cheeseBuildStyle,
];

const SubmitBuildPage: NextPage = () => {
  const createBuildMutation = api.builds.createBuild.useMutation();

  const [build, setBuildOrder] = useState("");
  const [matchUp, setMatchUp] = useState("zvt");
  const [style, setStyle] = useState("macro");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmitBuildOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    await createBuildMutation.mutateAsync({
      matchUp,
      build,
      style,
      author,
      title,
      description,
    });
    void router.push("/");
  };
  return (
    <>
      <Head>
        <title>Submit a Build</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 py-12 ">
        <h1>Submit a Build Order</h1>
        <form
          onSubmit={handleSubmitBuildOrder}
          className="flex w-full flex-col items-center gap-5"
        >
          <div className="grid w-3/4 grid-cols-2 gap-6">
            <fieldset>
              <label
                htmlFor="match-up-select"
                className="mb-2 block text-sm font-medium text-gray-900  dark:text-white"
              >
                Match Up
              </label>
              <select
                required
                value={matchUp}
                onChange={(e) => setMatchUp(e.target.value)}
                name="match-up-select"
                id="match-up-select"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              >
                <option value="zvt">ZvT</option>
                <option value="zvp">ZvP</option>
                <option value="zvz">ZvZ</option>
                <option value="pvt">PvT</option>
                <option value="pvp">PvP</option>
                <option value="pvz">PvZ</option>
                <option value="tvt">TvT</option>
                <option value="tvz">TvZ</option>
                <option value="tvp">TvP</option>
              </select>
            </fieldset>
            <fieldset>
              <label
                htmlFor="style"
                className="mb-2 block text-sm font-medium text-gray-900  dark:text-white"
              >
                Style
              </label>
              <select
                required
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                name="style"
                id="style"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              >
                {buildStyles.map((style, index) => (
                  <option key={index} value={style}>
                    {style}
                  </option>
                ))}
              </select>
            </fieldset>
          </div>
          <div className="grid w-3/4 grid-cols-2 gap-6">
            <fieldset>
              <label
                htmlFor="author"
                className="mb-2 block text-sm font-medium text-gray-900  dark:text-white"
              >
                Author
              </label>
              <input
                type="text"
                id="author"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-medium text-gray-900  dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                required
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </fieldset>
          </div>

          <fieldset className="w-3/4">
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-medium text-gray-900  dark:text-white"
            >
              Description
            </label>
            <textarea
              id="description"
              className="block h-40 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </fieldset>
          <fieldset className="w-3/4">
            <label
              htmlFor="build"
              className="mb-2 block text-sm font-medium text-gray-900  dark:text-white"
            >
              Build Order
            </label>
            <textarea
              id="build"
              required
              className="block h-96 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={build}
              onChange={(e) => setBuildOrder(e.target.value)}
            />
          </fieldset>

          <button
            type="submit"
            className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </main>
    </>
  );
};

export default SubmitBuildPage;
