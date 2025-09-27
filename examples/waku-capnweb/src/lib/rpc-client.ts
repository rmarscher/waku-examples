import { newHttpBatchRpcSession } from "capnweb";
import { PublicRpcApi } from "./rpc-types";

export const getRpcClient = () => {
  if (typeof window === "undefined") {
    return undefined;
  }
  return newHttpBatchRpcSession<PublicRpcApi>("/rpc");
};
