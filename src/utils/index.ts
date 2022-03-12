import { provider, TransactionReceipt } from "web3-core";
import Web3 from "web3";
import BigNumber from "./bignumber";
import { AbiItem } from "web3-utils";
import ERC20ABI from "abi/ERC20.json";
import { ethers } from "ethers";

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

export const getAllowance = async (
  userAddress: string,
  spenderAddress: string,
  tokenAddress: string,
  provider: provider
): Promise<string> => {
  try {
    const tokenContract = getERC20Contract(provider, tokenAddress);
    const allowance: string = await tokenContract.methods
      .allowance(userAddress, spenderAddress)
      .call();
    return allowance;
  } catch (e) {
    return "0";
  }
};

export const approve = async (
  userAddress: string,
  spenderAddress: string,
  tokenAddress: string,
  provider: provider,
  onTxHash?: (txHash: string) => void
): Promise<boolean> => {
  try {
    const tokenContract = getERC20Contract(provider, tokenAddress);
    return tokenContract.methods
      .approve(spenderAddress, ethers.constants.MaxUint256)
      .send(
        { from: userAddress, gas: 80000 },
        async (error: any, txHash: string) => {
          if (error) {
            console.log("ERC20 could not be approved", error);
            onTxHash && onTxHash("");
            return false;
          }
          if (onTxHash) {
            onTxHash(txHash);
          }
          const status = await waitTransaction(provider, txHash);
          if (!status) {
            console.log("Approval transaction failed.");
            return false;
          }
          return true;
        }
      );
  } catch (e) {
    return false;
  }
};

export const waitTransaction = async (provider: provider, txHash: string) => {
  const web3 = new Web3(provider);
  let txReceipt: TransactionReceipt | null = null;
  while (txReceipt == null) {
    txReceipt = await web3.eth.getTransactionReceipt(txHash);
    await sleep(2000);
  }
  return txReceipt.status;
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const fromWei = (number: BigNumber | undefined, power: number = 18) => {
  return getBigNumber(number).dividedBy(new BigNumber(10).pow(power));
};
