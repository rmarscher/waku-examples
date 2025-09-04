import { Link } from "waku";
import { langs } from "../../lib/lang";
import type { PageProps } from "waku/router";

export default async function HomePage({ lang }: PageProps<"/[lang]">) {
  const data = await getData({ lang });

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <ul className="flex gap-4">
        <li>
          <Link className="underline" to={`/${lang}/test/1`}>
            1
          </Link>
        </li>
        <li>
          <Link className="underline" to={`/${lang}/test/2`}>
            2
          </Link>
        </li>
        <li>
          <Link className="underline" to={`/${lang}/test/3`}>
            3
          </Link>
        </li>
      </ul>
      <Link to={`/${lang}/about`} className="mt-4 inline-block underline">
        {data.aboutLink}
      </Link>
    </div>
  );
}

// Example async data fetching
const getData = async ({ lang }: { lang: string }) => {
  switch (lang) {
    case "es":
      return {
        title: "Inicio",
        headline: "Waku",
        body: "¡Hola mundo!",
        aboutLink: "Página de acerca de",
      };
    case "fr":
      return {
        title: "Accueil",
        headline: "Waku",
        body: "Bonjour le monde!",
        aboutLink: "Page à propos",
      };
  }
  return {
    title: "Waku",
    headline: "Waku",
    body: "Hello world!",
    aboutLink: "About page",
  };
};

// Enable dynamic server rendering.
// Static rendering is possible if you want to render at build time.
// The Hono context will not be available.
export const getConfig = async () => {
  return {
    render: "static",
    staticPaths: langs,
  } as const;
};
