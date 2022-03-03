import { createContext } from "react";
interface SaveContextProps {
  balance: string;
  debt: string;
  deposit: (token: string, amount: number) => void;
  withdraw: (token: string, amount: number) => void;
}

const SaveContext = createContext<SaveContextProps>({
  balance: "0",
  debt: "0",
  deposit: () => {},
  withdraw: () => {},
});

export default SaveContext;
