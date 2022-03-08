import { createContext } from "react";
interface SaveContextProps {
  balance: string;
  debt: string;
  supply: () => void;
  withdraw: () => void;
}

const SaveContext = createContext<SaveContextProps>({
  balance: "0",
  debt: "0",
  supply: () => {},
  withdraw: () => {},
});

export default SaveContext;
