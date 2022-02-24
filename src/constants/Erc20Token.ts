import { TokenData } from "contexts/TokenData/TokenData";

import ethLogo from "assets/Token/eth-logo.png";
import maticLogo from "assets/Token/matic-logo.png";
import daiLogo from "assets/Token/dai-logo.svg";
import uniLogo from "assets/Token/uni-logo.png";
import usdtLogo from "assets/Token/usdt-logo.png";

//mainnet
export const ETH: TokenData = {
  address: "0x0000000000000000000000000000000000001010",
  chainId: "1",
  id: "0",
  image: ethLogo,
  name: "Ether",
  coinGeckoID: "ethereum",
  symbol: "WETH",
  priceUsd: "0",
  dailyPercentChange: "0",
  balance: "0",
};

export const MATIC: TokenData = {
  address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
  chainId: "1",
  id: "1",
  image: maticLogo,
  name: "Matic",
  coinGeckoID: "matic-network",
  symbol: "MATIC",
  priceUsd: "0",
  dailyPercentChange: "0",
  balance: "0",
};

export const DAI: TokenData = {
  address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  chainId: "1",
  id: "2",
  image: daiLogo,
  name: "Dai",
  coinGeckoID: "dai",
  symbol: "DAI",
  priceUsd: "0",
  dailyPercentChange: "0",
  balance: "0",
};

//polygon
export const POL_WETH: TokenData = {
  address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
  chainId: "137",
  id: "3",
  image: ethLogo,
  name: "Wrapped Ether",
  coinGeckoID: "ethereum",
  symbol: "WETH",
  priceUsd: "0",
  dailyPercentChange: "0",
  balance: "0",
};

export const POL_MATIC: TokenData = {
  address: "0x0000000000000000000000000000000000001010",
  chainId: "137",
  id: "4",
  image: maticLogo,
  name: "Matic",
  coinGeckoID: "matic-network",
  symbol: "MATIC",
  priceUsd: "0",
  dailyPercentChange: "0",
  balance: "0",
};

export const POL_DAI: TokenData = {
  address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
  chainId: "137",
  id: "5",
  image: daiLogo,
  name: "Dai",
  coinGeckoID: "dai",
  symbol: "DAI",
  priceUsd: "0",
  dailyPercentChange: "0",
  balance: "0",
};

//aave kovan
export const KOV_DAI: TokenData = {
  address: "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD",
  chainId: "42",
  id: "6",
  image: daiLogo,
  name: "Dai",
  coinGeckoID: "dai",
  symbol: "DAI",
  priceUsd: "0",
  dailyPercentChange: "0",
  balance: "0",
};

export const KOV_UNI: TokenData = {
  address: "0x075A36BA8846C6B6F53644fDd3bf17E5151789DC",
  chainId: "42",
  id: "7",
  image: uniLogo,
  name: "Uniswap",
  coinGeckoID: "uniswap",
  symbol: "UNI",
  priceUsd: "0",
  dailyPercentChange: "0",
  balance: "0",
};

export const KOV_USDT: TokenData = {
  address: "0x13512979ADE267AB5100878E2e0f485B568328a4",
  chainId: "42",
  id: "8",
  image: usdtLogo,
  name: "Tether",
  coinGeckoID: "tether",
  symbol: "USDT",
  priceUsd: "0",
  dailyPercentChange: "0",
  balance: "0",
};

export const EthWalletTokenList = [ETH, MATIC, DAI, KOV_DAI, KOV_UNI, KOV_USDT];
export const PolWalletTokenList = [POL_DAI, POL_MATIC, POL_WETH];

const WalletTokenList = [EthWalletTokenList, PolWalletTokenList];

export default WalletTokenList;
