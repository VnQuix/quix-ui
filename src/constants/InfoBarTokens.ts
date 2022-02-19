import { TokenData } from "contexts/TokenData/TokenData";
import btcLogo from "assets/Token/btc-logo.svg";
import ethLogo from "assets/Token/eth-logo.png";
import adaLogo from "assets/Token/ada-logo.svg";
import solLogo from "assets/Token/sol-logo.png";
import avaxLogo from "assets/Token/avax-logo.png";

export const BTC: TokenData = {
  address: "",
  id: "1",
  image: btcLogo,
  name: "Bitcoin",
  symbol: "BTC",
  priceUsd: "0",
  dailyPercentChange: "0",
};

export const ETH: TokenData = {
  address: "",
  id: "2",
  image: ethLogo,
  name: "Ethereum",
  symbol: "ETH",
  priceUsd: "0",
  dailyPercentChange: "0",
};

export const ADA: TokenData = {
  address: "",
  id: "3",
  image: adaLogo,
  name: "Cardano",
  symbol: "ADA",
  priceUsd: "0",
  dailyPercentChange: "0",
};

export const SOL: TokenData = {
  address: "",
  id: "4",
  image: solLogo,
  name: "Solana",
  symbol: "SOL",
  priceUsd: "0",
  dailyPercentChange: "0",
};

export const AVAX: TokenData = {
  address: "",
  id: "5",
  image: avaxLogo,
  name: "Avalanche",
  symbol: "AVAX",
  priceUsd: "0",
  dailyPercentChange: "0",
};

const InfoBarTokenList = [BTC, ETH, ADA, SOL, AVAX];

export default InfoBarTokenList;
