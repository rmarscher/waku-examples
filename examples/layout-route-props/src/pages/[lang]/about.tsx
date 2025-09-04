import { Link } from "waku";
import { langs } from "../../lib/lang";
import type { PageProps } from "waku/router";

export default async function AboutPage({ lang }: PageProps<"/[lang]/about">) {
  const data = await getData({ lang });

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <Link to={`/${lang}`} className="mt-4 inline-block underline">
        Return home
      </Link>
    </div>
  );
}

const getData = async ({ lang }: { lang: string }) => {
  switch (lang) {
    case "es":
      return {
        title: "Acerca de",
        headline: "Acerca de Waku",
        body: "El marco de trabajo mínimo para React",
      };
    case "fr":
      return {
        title: "À propos",
        headline: "À propos de Waku",
        body: "Le cadre minimaliste pour React",
      };
  }
  return {
    title: "About",
    headline: "About Waku",
    body: "The minimal React framework",
  };
};

export const getConfig = async () => {
  return {
    render: "static",
    staticPaths: langs,
  } as const;
};
