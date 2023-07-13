import type { Metadata } from "next";
import type { FC } from "react";

import { MicroFrontend } from "~/components/micro-frontend";

export const metadata: Metadata = {
  title: "Service",
};

const ServicePage: FC = () => {
  const serviceProps = { message: "Hello from Host!" };
  return (
    <main className="px-4">
      <h1 className="mb-4 text-2xl font-extrabold">Service Page</h1>
      <MicroFrontend
        module={process.env.SERVICE_MFE_MODULE_URL ?? ""}
        props={serviceProps}
        loadingContent={
          <div
            aria-live="polite"
            className="rounded bg-stone-100 px-4 py-2 text-transparent"
          >
            Loading service app
          </div>
        }
        errorContent={
          <div
            role="alert"
            className="rounded border border-l-4 border-red-600 px-4 py-2 text-red-600"
          >
            Error: Service app could not be loaded!
          </div>
        }
      />
    </main>
  );
};

export default ServicePage;
