import { createContext } from "react";
interface SaveContextProps {
  balance: string;
  debt: string;
  supply: (amount: string, address: string) => void;
  withdraw: (amount: string, address: string) => void;
  isShowingSaveModal: boolean;
  onOpenSaveModal: (...args: any[]) => any;
  onCloseSaveModal: (...args: any[]) => any;
}

const SaveContext = createContext<SaveContextProps>({
  balance: "0",
  debt: "0",
  supply: () => {},
  withdraw: () => {},
  isShowingSaveModal: false,
  onOpenSaveModal: () => {},
  onCloseSaveModal: () => {},
});

export default SaveContext;
