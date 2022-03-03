import { createContext } from "react";
interface SaveContextProps {
  balance: string;
  debt: string;
  deposit: (token: string, amount: any) => void;
  withdraw: (token: string, amount: any) => void;
}

const SaveContext = createContext<SaveContextProps>({
  balance: "0",
  debt: "0",
  deposit: () => {},
  withdraw: () => {},
});

export default SaveContext;
