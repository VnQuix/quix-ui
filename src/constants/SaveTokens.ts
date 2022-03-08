import { SaveTokenMarket } from "contexts/Save/types";
import usdtLogo from "assets/Token/usdt-logo.png";
import daiLogo from "assets/Token/dai-logo.svg";
import usdcLogo from "assets/Token/usdc-logo.svg";

export const USDT: SaveTokenMarket = {
  id: 1,
  assetName: "USDT Coin",
  symbol: "USDT",
  marketSize: "117,749.08Y",
  APY: 0,
  address: "0xa0704bfa9E17cF4a1d74A60db7bcdA1B5D00D3E6",
  image: usdtLogo,
};

export const USDC: SaveTokenMarket = {
  id: 2,
  assetName: "USD Coin",
  symbol: "USDC",
  marketSize: "9.69Z",
  APY: 0.02,
  address: "0x5B8B635c2665791cf62fe429cB149EaB42A3cEd8",
  image: usdcLogo,
};

export const DAI: SaveTokenMarket = {
  id: 3,
  assetName: "Dai",
  symbol: "DAI",
  marketSize: "100.1E",
  APY: 0.0,
  address: "0x2Ec4c6fCdBF5F9beECeB1b51848fc2DB1f3a26af",
  image: daiLogo,
};

const SaveTokenList = [USDT, USDC, DAI];

export default SaveTokenList;
