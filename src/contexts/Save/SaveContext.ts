import { createContext } from "react";
import { provider } from "web3-core";
import { SaveTokenMarket } from "./types";
import SaveTokenList from "constants/SaveTokens";
interface SaveContextProps {
  balance: string;
  debt: string;
  supply: (amount: string, address: string) => void;
  withdraw: (amount: string, address: string) => void;
  isShowingSaveModal: boolean;
  onOpenSaveModal: (...args: any[]) => any;
  onCloseSaveModal: (...args: any[]) => any;
  token: SaveTokenMarket[];
}

const SaveContext = createContext<SaveContextProps>({
  balance: "0",
  debt: "0",
  supply: () => {},
  withdraw: () => {},
  isShowingSaveModal: false,
  onOpenSaveModal: () => {},
  onCloseSaveModal: () => {},
  token: SaveTokenList,
});

export default SaveContext;
