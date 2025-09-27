import { RpcTarget } from "capnweb";
import { PublicRpcApi } from "./rpc-types";

// This is the server implementation.
export class RpcServer extends RpcTarget implements PublicRpcApi {
  hello(name: string) {
    return `Hello, ${name}!`;
  }
}
