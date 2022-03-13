import { createContext } from "react";
import { UniLiquidityPool } from "constants/UniTokens";

interface UniswapContextProps {
  pool?: UniLiquidityPool[];
}

const UniswapInteractorContext = createContext<UniswapContextProps>({});

export default UniswapInteractorContext;
