import type { FC } from "react";

export const Importmap: FC = () => (
  <script
    type="importmap"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        imports: {
          react: "/js/react@18.2.0.mjs",
          "react-dom": "/js/react-dom@18.2.0.mjs",
        },
      }),
    }}
  ></script>
);
