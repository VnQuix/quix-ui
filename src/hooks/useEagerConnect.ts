import { useEffect, useState } from "react";

import { useWeb3React } from "@web3-react/core";

export default function useEagerConnect(
  connect: (walletType: string) => Promise<void>
) {
  const { active } = useWeb3React();
  const [tried, setTried] = useState(false);

  useEffect(() => {
    if (!active && !tried && (window as any).ethereum?.isONTO) {
      connect("injected").catch(() => {
        setTried(true);
      });
    }
  }, [connect, active, tried]);

  useEffect(() => {
    if (active) {
      setTried(true);
    }
  }, [active]);

  return tried;
}
