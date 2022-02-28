import { provider } from "web3-core";
import Web3 from "web3";
import BigNumber from "./bignumber";
import { AbiItem } from "web3-utils";
import ERC20ABI from "abi/ERC20.json";

const getBigNumber = (number: BigNumber | undefined) => {
  return number ? number : new BigNumber(0);
};

export const displayFromWei = (
  number: BigNumber | undefined,
  decimals: number = 5
) => {
  return fromWei(number).toFormat(decimals);
};

export const getERC20Contract = (provider: provider, address: string) => {
  const web3 = new Web3(provider);
  const contract = new web3.eth.Contract(
    ERC20ABI.abi as unknown as AbiItem,
    address
  );
  return contract;
};

export const getBalance = async (
  provider: provider,
  tokenAddress: string,
  userAddress: string
): Promise<string> => {
  const tokenContract = getERC20Contract(provider, tokenAddress);
  try {
    const balance: string = await tokenContract.methods
      .balanceOf(userAddress)
      .call();
    return balance;
  } catch (e) {
    return "0";
  }
};

export const fromWei = (number: BigNumber | undefined, power: number = 18) => {
  return getBigNumber(number).dividedBy(new BigNumber(10).pow(power));
};
