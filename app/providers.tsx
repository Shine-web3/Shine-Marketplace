"use client";

import { WagmiProvider, cookieToInitialState } from "wagmi";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { http, createStorage, cookieStorage } from 'wagmi';
import { avalanche, avalancheFuji } from 'wagmi/chains';
import { Chain, getDefaultConfig } from '@rainbow-me/rainbowkit';

const projectId = "d3eba2be2a6a4162509fdfd153b40a64";

const avashineChain: Chain = {
  id: 474618402,
  name: 'Avashine',
  network: 'Avashine',
  nativeCurrency: {
    decimals: 18,
    name: 'Shine',
    symbol: 'SHN',
  },
  // You need to add these required properties:
  rpcUrls: {
    default: { http: ['https://rpc.avashine.com'] }, // Replace with the actual RPC URL
    public: { http: ['https://rpc.avashine.com'] }, // Replace with the actual public RPC URL
  },
  blockExplorers: {
    default: { name: 'AvashineExplorer', url: 'https://explorer.avashine.com' }, // Replace with the actual explorer URL
  },
  // Add any other required properties for the Chain type
};

const supportedChains: Chain[] = [avalanche, avalancheFuji, avashineChain];

export const config = getDefaultConfig({
   appName: "Shine",
   projectId,
   chains: supportedChains as any,
   ssr: true,
   storage: createStorage({
    storage: cookieStorage,
   }),
  transports: supportedChains.reduce((obj, chain) => ({ ...obj, [chain.id]: http() }), {})
 });

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
  cookie?: string | null;
};

export default function Providers({ children, cookie }: Props) {
  const initialState = cookieToInitialState(config, cookie);

  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}