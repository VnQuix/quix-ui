import { useContext } from "react";

import { TokenDataContext } from "contexts/TokenData";

function useTokenData() {
  return { ...useContext(TokenDataContext) };
}

export default useTokenData;
