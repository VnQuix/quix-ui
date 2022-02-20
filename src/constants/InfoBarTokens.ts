import { TokenData } from "contexts/TokenData/TokenData";
import btcLogo from "assets/Token/btc-logo.svg";
import ethLogo from "assets/Token/eth-logo.png";
import adaLogo from "assets/Token/ada-logo.svg";
import solLogo from "assets/Token/sol-logo.png";
import avaxLogo from "assets/Token/avax-logo.png";

export const BTC: TokenData = {
  address: "",
  polygonAddress: "",
  id: "1",
  image: btcLogo,
  name: "Bitcoin",
  coinGeckoID: "bitcoin",
  symbol: "BTC",
  priceUsd: "0",
  dailyPercentChange: "0",
};

export const ETH: TokenData = {
  address: "",
  polygonAddress: "",
  id: "2",
  image: ethLogo,
  name: "Ethereum",
  coinGeckoID: "ethereum",
  symbol: "ETH",
  priceUsd: "0",
  dailyPercentChange: "0",
};

export const ADA: TokenData = {
  address: "",
  polygonAddress: "",
  id: "3",
  image: adaLogo,
  name: "Cardano",
  coinGeckoID: "cardano",
  symbol: "ADA",
  priceUsd: "0",
  dailyPercentChange: "0",
};

export const SOL: TokenData = {
  address: "",
  polygonAddress: "",
  id: "4",
  image: solLogo,
  name: "Solana",
  coinGeckoID: "solana",
  symbol: "SOL",
  priceUsd: "0",
  dailyPercentChange: "0",
};

export const AVAX: TokenData = {
  address: "",
  polygonAddress: "",
  id: "5",
  image: avaxLogo,
  name: "Avalanche",
  coinGeckoID: "avalanche-2",
  symbol: "AVAX",
  priceUsd: "0",
  dailyPercentChange: "0",
};

const InfoBarTokenList = [BTC, ETH, ADA, SOL, AVAX];

export default InfoBarTokenList;
