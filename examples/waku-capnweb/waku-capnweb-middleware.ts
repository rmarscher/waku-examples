import { newWorkersRpcResponse } from "capnweb";
import type { Middleware } from "waku/config";
import { RpcServer } from "./src/lib/rpc-server";

const middleware: Middleware = () => {
  return async (ctx, next) => {
    const url = new URL(ctx.req.url);

    // Serve Cap'n Web API
    // Waku has it's own HTTP API at `/api`, so we're using `/rpc`
    if (url.pathname === "/rpc") {
      try {
        const response = await newWorkersRpcResponse(ctx.req, new RpcServer());
        ctx.res = response;
      } catch (error) {
        console.error("Error handling capnweb request:", error);
        ctx.res = new Response("Internal Server Error", {
          headers: { "content-type": "text/plain" },
          status: 500,
        });
      }
      return;
    }

    await next();
  };
};

export default middleware;
