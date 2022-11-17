import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import { isProduction } from "../environment";
import { vars } from "../environment/vars";

export const targetChain = isProduction() ? chain.mainnet : chain.goerli;

const { chains, provider } = configureChains(
  [targetChain],
  [
    infuraProvider({ apiKey: vars.NEXT_PUBLIC_INFURA_ID as string }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "The Doge NFT",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export { chains, wagmiClient };
