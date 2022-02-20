import { provider } from "web3-core";
import Web3 from "web3";
import BigNumber from "./bignumber";

export const getEthBalance = async (
  provider: provider,
  userAddress: string
): Promise<string> => {
  const web3 = new Web3(provider);
  try {
    const balance: string = await web3.eth.getBalance(userAddress);
    return balance;
  } catch (e) {
    return "0";
  }
};

export const getBigNumber = (number: BigNumber | undefined) => {
  return number ? number : new BigNumber(0);
};

export const fromWei = (number: BigNumber | undefined, power: number = 18) => {
  return getBigNumber(number).dividedBy(new BigNumber(10).pow(power));
};

export const displayFromWei = (
  number: BigNumber | undefined,
  decimals: number = 5
) => {
  return fromWei(number).toFormat(decimals);
};
