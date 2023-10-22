import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { WagmiConfig, createConfig } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";
import { configureChains } from "wagmi";
import { sepolia, polygonMumbai } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const modeConfig = {
  id: 919,
  name: "Mode Testnet",
  network: "Mode",
  nativeCurrency: {
    decimals: 18,
    name: "Mode Testnet",
    symbol: "ETH",
  },
  rpcUrls: {
    public: { http: ["https://sepolia.mode.network/"] },
    default: { http: ["https://sepolia.mode.network/"] },
  },
};

const { chains } = configureChains(
  [sepolia, polygonMumbai],
  [
    alchemyProvider({ apiKey: "Rwja692xoss6YsaqbUDRNVwpjZrO4ltM" }),
    publicProvider(),
  ]
);

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: "ALbcNieoFrIRYYNDrcr4dAASXUCZbm-i", // or infuraId
    walletConnectProjectId: "0c1af47867ddda44a884a72a581f8fc1",

    // Required
    appName: "HyperCompute",

    // Optional
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png",
    chains, // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <WagmiConfig config={config}>
    <ConnectKitProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ConnectKitProvider>
  </WagmiConfig>
);
