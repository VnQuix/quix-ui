import { useContext } from "react";

import { UniswapInteractorContext } from "contexts/UniswapInteractor";

const useUniswapInteractor = () => {
  return { ...useContext(UniswapInteractorContext) };
};

export default useUniswapInteractor;
