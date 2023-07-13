import type { FC } from "react";

const HomePage: FC = () => {
  return (
    <main className="px-4 py-16 text-center">
      <h1 className="text-5xl font-extrabold">Shell for Your Microfrontends</h1>
      <p className="mx-auto mt-8 max-w-xl text-2xl leading-normal text-stone-600">
        This is the host for multiple smaller apps which are loaded on-demand as
        you navigate to their pages.
      </p>
    </main>
  );
};

export default HomePage;
