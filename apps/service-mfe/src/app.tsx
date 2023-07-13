import { useEffect, useState, type FC } from "react";

export type AppProps = {
  message: string;
};

export const App: FC<AppProps> = ({ message }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.info("[service-mfe] app mounted");
    return () => {
      console.info("[service-mfe] app unmounted");
    };
  }, []);

  return (
    <div className="service-rounded service-border service-border-stone-400 service-p-8 service-text-stone-600">
      <h2 className="service-mb-4 service-font-extrabold service-text-pink-600">
        Service Microfrontend
      </h2>
      <p className="service-mb-8">Message from host: {message}</p>
      <div className="service-flex">
        <button
          type="button"
          className="service-rounded-s service-border service-border-stone-400 service-px-2 service-py-1 hover:service-border-stone-600 focus-visible:service-border-stone-600 active:service-bg-stone-100"
          onClick={() => setCount((prevCount) => Math.max(0, prevCount - 1))}
        >
          Less
        </button>
        <div className="service-grid service-min-w-[4rem] service-place-content-center service-border-b service-border-t service-border-stone-400 service-px-4 service-font-extrabold">
          {count}
        </div>
        <button
          type="button"
          className="service-rounded-e service-border service-border-stone-400 service-px-2 service-py-1 hover:service-border-stone-600 focus-visible:service-border-stone-600 active:service-bg-stone-100"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          More
        </button>
      </div>
    </div>
  );
};
