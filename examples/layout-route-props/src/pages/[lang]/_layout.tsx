import type { ReactNode } from "react";
import { Link } from "waku";

type LangLayoutProps = { children: ReactNode; path: string };

export default async function LangLayout({ children, path }: LangLayoutProps) {
  const langFromPath = path.split("/")[1];

  return (
    <div className="p-6">
      <div>Current lang = {langFromPath}</div>
      <div>
        Langs:
        <ul>
          <li>
            <Link className="underline" to="/en/about">
              English
            </Link>
          </li>
          <li>
            <Link className="underline" to="/es/about">
              Español
            </Link>
          </li>
          <li>
            <Link className="underline" to="/fr/about">
              Français
            </Link>
          </li>
        </ul>
      </div>
      <main className="m-6 flex items-center *:min-h-64 *:min-w-64 lg:m-0 lg:min-h-svh lg:justify-center">
        {children}
      </main>
      <div>Server render time: {new Date().toISOString()}</div>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
    staticPaths: ["en", "es", "fr"],
  } as const;
};
