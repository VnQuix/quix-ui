import { SaveTokenMarket } from "contexts/Save/types";
import usdtLogo from "assets/Token/usdt-logo.png";
import daiLogo from "assets/Token/dai-logo.svg";
import usdcLogo from "assets/Token/usdc-logo.svg";
import batLogo from "assets/Token/bat-logo.png";
import yearnLogo from "assets/Token/yearn-logo.svg";

export const USDT: SaveTokenMarket = {
  id: 1,
  assetName: "USDT Coin",
  symbol: "USDT",
  marketSize: "117,749.08Y",
  APY: 0,
  address: "",
  image: usdtLogo,
};

export const USDC: SaveTokenMarket = {
  id: 2,
  assetName: "USD Coin",
  symbol: "USDC",
  marketSize: "9.69Z",
  APY: 0.02,
  address: "",
  image: usdcLogo,
};

export const DAI: SaveTokenMarket = {
  id: 3,
  assetName: "Dai",
  symbol: "DAI",
  marketSize: "100.1E",
  APY: 0.0,
  address: "",
  image: daiLogo,
};

export const BAT: SaveTokenMarket = {
  id: 4,
  assetName: "Basic Attention Token",
  symbol: "BAT",
  marketSize: "294.24M",
  APY: 56.71,
  address: "",
  image: batLogo,
};

export const YFI: SaveTokenMarket = {
  id: 5,
  assetName: "yearn.finance",
  symbol: "YFI",
  marketSize: "1.72K",
  APY: 32.36,
  address: "",
  image: yearnLogo,
};

const SaveTokenList = [USDT, USDC, DAI, BAT, YFI];

export default SaveTokenList;
