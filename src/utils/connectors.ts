import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

export type ChainData = {
  name: string;
  chainId: number;
  rpcUrl: string;
  icon: string;
  coingeckoId: string;
};

export const MAINNET_CHAIN_DATA: ChainData = {
  name: "Ethereum",
  chainId: 1,
  rpcUrl: "https://api.mycryptoapi.com/eth",
  icon: "https://raw.githubusercontent.com/sushiswap/icons/master/network/mainnet.jpg",
  coingeckoId: "ethereum",
};

export const POLYGON_CHAIN_DATA: ChainData = {
  name: "Polygon",
  chainId: 137,
  rpcUrl: "https://rpc-mainnet.matic.network",
  icon: "https://raw.githubusercontent.com/sushiswap/icons/master/network/polygon.jpg",
  coingeckoId: "polygon-pos",
};

export const KOVAN_CHAIN_DATA: ChainData = {
  name: "Kovan",
  chainId: 42,
  rpcUrl: "https://kovan.poa.network",
  icon: "https://raw.githubusercontent.com/sushiswap/icons/master/network/mainnet.jpg",
  coingeckoId: "ethereum",
};

export const RINKEBY_CHAIN_DATA: ChainData = {
  name: "Rinkeby",
  chainId: 4,
  rpcUrl: "https://rinkeby.infura.io/v3/",
  icon: "https://raw.githubusercontent.com/sushiswap/icons/master/network/mainnet.jpg",
  coingeckoId: "ethereum",
};

export const MUMBAI_CHAIN_DATA: ChainData = {
  name: "Mumbai",
  chainId: 80001,
  rpcUrl: "https://rpc-mumbai.maticvigil.com/",
  icon: "https://raw.githubusercontent.com/sushiswap/icons/master/network/polygon.jpg",
  coingeckoId: "polygon-pos",
};

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 137],
});

export const walletconnect = new WalletConnectConnector({
  rpc: {
    [MAINNET_CHAIN_DATA.chainId]: MAINNET_CHAIN_DATA.rpcUrl,
  },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  supportedChainIds: [1],
});

export const walletlink = new WalletLinkConnector({
  url: MAINNET_CHAIN_DATA.rpcUrl,
  appName: "Index",
  appLogoUrl: "https://index-dao.s3.amazonaws.com/index_owl.png",
  supportedChainIds: [1, 137],
});
