import { provider } from "web3-core";
import Web3 from "web3";
import { AbiItem } from "web3-utils";

export const getContract = (
  provider: provider,
  address: string,
  abi: AbiItem
) => {
  const web3 = new Web3(provider);
  const contract = new web3.eth.Contract(abi, address);

  return contract;
};
