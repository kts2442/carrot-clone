import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2 p-5">
      <input
        type="file"
        className="file:mr-4 file:rounded-full file:border-0
        file:bg-violet-50 file:py-2
        file:px-4 file:text-sm
        file:font-semibold file:text-violet-700
        file:hover:bg-violet-100"
      />
    </div>
  );
};

export default Home;
