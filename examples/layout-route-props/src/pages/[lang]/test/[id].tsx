import { Link } from "waku";
import { langs } from "../../../lib/lang";
import type { PageProps } from "waku/router";

export default async function AboutPage({
  id,
  lang,
}: PageProps<"/[lang]/test/[id]">) {
  return (
    <div>
      <p>ID = {id}</p>
      <Link to={`/${lang}`} className="mt-4 inline-block underline">
        Return home
      </Link>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
    staticPaths: langs.flatMap((lang: string) => [
      [lang, "1"],
      [lang, "2"],
      [lang, "3"],
    ]),
  } as const;
};
