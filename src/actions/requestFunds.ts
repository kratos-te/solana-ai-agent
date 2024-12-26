import { Action } from "../types/action";
import { SolanaAgentKit } from "../agent";
import { z } from "zod";

const requestFundsAction: Action = {
  name: "solana_request_funds",
  similes: [
    "request sol",
    "get test sol",
    "use faucet",
    "request test tokens",
    "get devnet sol"
  ],
  description: "Request SOL from Solana faucet (devnet/testnet only)",
  examples: [
    [
      {
        input: {},
        output: {
          status: "success",
          message: "Successfully requested faucet funds",
          network: "devnet.solana.com"
        },
        explanation: "Request SOL from the devnet faucet"
      }
    ]
  ],
  schema: z.object({}), // No input parameters required
  handler: async (agent: SolanaAgentKit, _input: Record<string, any>) => {
    await agent.requestFaucetFunds();

    return {
      status: "success",
      message: "Successfully requested faucet funds",
      network: agent.connection.rpcEndpoint.split("/")[2]
    };
  }
};

export default requestFundsAction; 