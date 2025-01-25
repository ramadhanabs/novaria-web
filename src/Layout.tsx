import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { config } from "./lib/config";
import { Navbar } from "./components/ui/Navbar";

export const CustomRainbowContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <RainbowKitProvider
      theme={darkTheme({
        accentColor: "#17E3C2",
        accentColorForeground: "#000000",
        fontStack: "system",
      })}
    >
      {children}
    </RainbowKitProvider>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <CustomRainbowContext>
          <Navbar />
          <main className="bg-gradient-to-b from-black to-[#090E18] relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute w-[300px] bottom-0 h-[200px] rounded-full bg-[#17E3C2] blur-[333px]"></div>
            {children}
          </main>
        </CustomRainbowContext>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
