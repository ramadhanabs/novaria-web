import "./App.css";
import "@rainbow-me/rainbowkit/styles.css";
import { config } from "./lib/config";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Profile } from "./components/Profile";
import { ConnectButton, RainbowKitProvider } from "@rainbow-me/rainbowkit";

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Profile />
          <ConnectButton />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
