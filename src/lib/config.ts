import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { arbitrum, mainnet, sepolia } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "398de4fb67cc292e38a129c1cfabf901",
  chains: [sepolia, arbitrum, mainnet],
});
