import { TokenData } from "contexts/TokenData/TokenData";

import daiLogo from "assets/Token/dai-logo.svg";
import usdtLogo from "assets/Token/usdt-logo.png";
import usdcLogo from "assets/Token/usdc-logo.svg";

export interface UniLiquidityPool {
  id: string;
  token0: TokenData;
  token1: TokenData;
  address: string;
  tvl: string;
  APR: string;
}

export const UNI_DAI: TokenData = {
  address: "0x2Ec4c6fCdBF5F9beECeB1b51848fc2DB1f3a26af",
  chainId: "4",
  id: "0",
  image: daiLogo,
  name: "Dai",
  coinGeckoID: "dai",
  symbol: "DAI",
  priceUsd: "0",
  dailyPercentChange: "0",
  balance: "",
};

export const UNI_USDC: TokenData = {
  address: "0x5B8B635c2665791cf62fe429cB149EaB42A3cEd8",
  chainId: "4",
  id: "1",
  image: usdcLogo,
  name: "USDC Coin",
  coinGeckoID: "usdc",
  symbol: "USDC",
  priceUsd: "0",
  dailyPercentChange: "0",
  balance: "",
};

export const UNI_USDT: TokenData = {
  address: "0xa0704bfa9E17cF4a1d74A60db7bcdA1B5D00D3E6",
  chainId: "4",
  id: "2",
  image: usdtLogo,
  name: "Tether",
  coinGeckoID: "tether",
  symbol: "USDT",
  priceUsd: "0",
  dailyPercentChange: "0",
  balance: "",
};

export const DAI_USDC: UniLiquidityPool = {
  id: "0",
  token0: UNI_DAI,
  token1: UNI_USDC,
  address: "",
  tvl: "$368.79m",
  APR: "0.01",
};

export const DAI_USDT: UniLiquidityPool = {
  id: "1",
  token0: UNI_DAI,
  token1: UNI_USDT,
  address: "",
  tvl: "$14.23m",
  APR: "0.05",
};

export const USDT_USDC: UniLiquidityPool = {
  id: "2",
  token0: UNI_USDT,
  token1: UNI_USDC,
  address: "",
  tvl: "$225.25m",
  APR: "0.01",
};

const UniTokenPool = [DAI_USDC, DAI_USDT, USDT_USDC];

export default UniTokenPool;
