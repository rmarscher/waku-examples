// import { Link } from "waku";

import { RpcClientTest } from "../components/rpc-client-test";

export default async function HomePage() {
  return (
    <div>
      <title>Home</title>
      <h1 className="text-4xl font-bold tracking-tight">Welcome</h1>
      <RpcClientTest />
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
