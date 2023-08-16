/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ChainlinkReadableAggregator,
  ChainlinkReadableAggregatorInterface,
} from "../../BoundedPriceFeed.sol/ChainlinkReadableAggregator";

const _abi = [
  {
    inputs: [],
    name: "aggregator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "idx",
        type: "uint16",
      },
    ],
    name: "phaseAggregators",
    outputs: [
      {
        internalType: "contract AggregatorV2V3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "phaseId",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class ChainlinkReadableAggregator__factory {
  static readonly abi = _abi;
  static createInterface(): ChainlinkReadableAggregatorInterface {
    return new utils.Interface(_abi) as ChainlinkReadableAggregatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainlinkReadableAggregator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ChainlinkReadableAggregator;
  }
}
