import { createContext } from "react";

import { TokenData } from "./TokenData";

interface TokenDataProps {
  infoBarTokens?: TokenData[];
}

const TokenDataContext = createContext<TokenDataProps>({});

export default TokenDataContext;
