import { createConfig, http } from "wagmi";
import { arbitrum, arbitrumSepolia } from "wagmi/chains";

export const config = createConfig({
  chains: [arbitrumSepolia, arbitrum],
  transports: {
    [arbitrumSepolia.id]: http(),
    [arbitrum.id]: http(),
  },
})