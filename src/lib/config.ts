import { createConfig, http } from "wagmi";
import { type Chain } from "viem";

export const rise = {
  id: 11155931,
  name: "Rise Sepolia",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ["https://testnet.riselabs.xyz"] },
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://testnet-explorer.riselabs.xyz",
    },
  },
} as const satisfies Chain;

export const config = createConfig({
  chains: [rise],
  transports: {
    [rise.id]: http(),
  },
});
