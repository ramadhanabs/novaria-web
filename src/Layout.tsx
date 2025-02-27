import "@rainbow-me/rainbowkit/styles.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { WagmiProvider } from "wagmi"
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit"
import { config } from "@/lib/config"
import { Navbar } from "@/components/ui/Navbar"

export const CustomRainbowContext = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <RainbowKitProvider
      theme={darkTheme({
        accentColor: "var(--color-main)",
        accentColorForeground: "var(--color-black)",
        fontStack: "system",
      })}>
      {children}
    </RainbowKitProvider>
  )
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <CustomRainbowContext>
          <Navbar />
          <main className="bg-gradient-to-t from-zinc-950 from-60% to-teal-950 relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            <div className="relative  text-blue-100">{children}</div>
            <div className="absolute w-[300px] bottom-0 h-[200px] rounded-full bg-main blur-[200px]"></div>
            <div className="absolute w-1/3 left-0 top-0 h-1/3 transform translate-x-0.5 translate-y-0.5 rounded-full bg-teal-950 blur-[200px]"></div>
          </main>
        </CustomRainbowContext>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
