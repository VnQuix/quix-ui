import { createContext } from "react";
import { UniLiquidityPool } from "constants/UniTokens";

interface UniswapContextProps {
  pool: UniLiquidityPool[];
  isShowingPoolModal: boolean;
  onOpenPoolModal: (...args: any[]) => any;
  onClosePoolModal: (...args: any[]) => any;
}

const UniswapInteractorContext = createContext<UniswapContextProps>({
  pool: [],
  isShowingPoolModal: false,
  onOpenPoolModal: () => {},
  onClosePoolModal: () => {},
});

export default UniswapInteractorContext;
