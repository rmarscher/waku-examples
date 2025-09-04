import { Link } from "waku";

export default async function HomePage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <div>
        Langs:
        <ul>
          <li>
            <Link className="underline" to="/en">
              English
            </Link>
          </li>
          <li>
            <Link className="underline" to="/es">
              Español
            </Link>
          </li>
          <li>
            <Link className="underline" to="/fr">
              Français
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

// Example async data fetching
const getData = async () => {
  const data = {
    title: "Waku",
    headline: "Waku",
    body: "Hello world!",
  };

  return data;
};

// Enable dynamic server rendering.
// Static rendering is possible if you want to render at build time.
// The Hono context will not be available.
export const getConfig = async () => {
  return {
    render: "static",
    noSsr: true,
  } as const;
};
