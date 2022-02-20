import { TokenData } from "contexts/TokenData/TokenData";

import usdtLogo from "assets/Token/usdt-logo.png";
import ethLogo from "assets/Token/eth-logo.png";
import maticLogo from "assets/Token/matic-logo.png";

export const USDT: TokenData = {
  address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  polygonAddress: "",
  id: "1",
  image: usdtLogo,
  name: "Tether USD",
  coinGeckoID: "tether",
  symbol: "USDT",
  priceUsd: "0",
  dailyPercentChange: "0",
  balance: "0",
};

export const ETH: TokenData = {
  address: "0x0000000000000000000000000000000000001010",
  polygonAddress: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
  id: "2",
  image: ethLogo,
  name: "Wrapped Ether",
  coinGeckoID: "ethereum",
  symbol: "WETH",
  priceUsd: "0",
  dailyPercentChange: "0",
  balance: "0",
};

export const MATIC: TokenData = {
  address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
  polygonAddress: "0x0000000000000000000000000000000000001010",
  id: "3",
  image: maticLogo,
  name: "Matic",
  coinGeckoID: "matic-network",
  symbol: "MATIC",
  priceUsd: "0",
  dailyPercentChange: "0",
  balance: "0",
};

const WalletTokenList = [USDT, ETH, MATIC];

export default WalletTokenList;
