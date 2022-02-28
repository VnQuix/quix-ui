import { createContext } from "react";

interface SaveContextProps {
  getBalance?: () => void;
}

const SaveContext = createContext<SaveContextProps>({
  getBalance: () => {},
});

export default SaveContext;
