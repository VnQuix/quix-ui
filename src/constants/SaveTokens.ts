import { SaveTokenMarket } from "contexts/Save/types";
import daiLogo from "assets/Token/dai-logo.svg";
import aaveLogo from "assets/protocol/aave-logo.svg";

export const AAVE: SaveTokenMarket = {
  id: 0,
  assetName: "Aave",
  symbol: "AAVE",
  marketSize: "117,749.08Y",
  APY: 0,
  address: "0x953af320e2bD3041c4e56BB3a30E7f613a1f3C1A",
  image: aaveLogo,
  balance: "0",
};

export const DAI: SaveTokenMarket = {
  id: 1,
  assetName: "Dai",
  symbol: "DAI",
  marketSize: "100.1E",
  APY: 0.0,
  address: "0x2Ec4c6fCdBF5F9beECeB1b51848fc2DB1f3a26af",
  image: daiLogo,
  balance: "0",
};

const SaveTokenList = [AAVE, DAI];

export default SaveTokenList;
