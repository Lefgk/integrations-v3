/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface IPriceOracleV2ExtInterface extends utils.Interface {
  functions: {
    "addPriceFeed(address,address)": FunctionFragment;
    "convert(uint256,address,address)": FunctionFragment;
    "convertFromUSD(uint256,address)": FunctionFragment;
    "convertToUSD(uint256,address)": FunctionFragment;
    "fastCheck(uint256,address,uint256,address)": FunctionFragment;
    "getPrice(address)": FunctionFragment;
    "priceFeeds(address)": FunctionFragment;
    "priceFeedsWithFlags(address)": FunctionFragment;
    "version()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addPriceFeed"
      | "convert"
      | "convertFromUSD"
      | "convertToUSD"
      | "fastCheck"
      | "getPrice"
      | "priceFeeds"
      | "priceFeedsWithFlags"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addPriceFeed",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "convert",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "convertFromUSD",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "convertToUSD",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "fastCheck",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getPrice",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "priceFeeds",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "priceFeedsWithFlags",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "addPriceFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "convert", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "convertFromUSD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "convertToUSD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fastCheck", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceFeeds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceFeedsWithFlags",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "NewPriceFeed(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewPriceFeed"): EventFragment;
}

export interface NewPriceFeedEventObject {
  token: string;
  priceFeed: string;
}
export type NewPriceFeedEvent = TypedEvent<
  [string, string],
  NewPriceFeedEventObject
>;

export type NewPriceFeedEventFilter = TypedEventFilter<NewPriceFeedEvent>;

export interface IPriceOracleV2Ext extends BaseContract {
  contractName: "IPriceOracleV2Ext";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IPriceOracleV2ExtInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addPriceFeed(
      token: PromiseOrValue<string>,
      priceFeed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    convert(
      amount: PromiseOrValue<BigNumberish>,
      tokenFrom: PromiseOrValue<string>,
      tokenTo: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    convertFromUSD(
      amount: PromiseOrValue<BigNumberish>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    convertToUSD(
      amount: PromiseOrValue<BigNumberish>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    fastCheck(
      amountFrom: PromiseOrValue<BigNumberish>,
      tokenFrom: PromiseOrValue<string>,
      amountTo: PromiseOrValue<BigNumberish>,
      tokenTo: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        collateralFrom: BigNumber;
        collateralTo: BigNumber;
      }
    >;

    getPrice(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    priceFeeds(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string] & { priceFeed: string }>;

    priceFeedsWithFlags(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, boolean, BigNumber] & {
        priceFeed: string;
        skipCheck: boolean;
        decimals: BigNumber;
      }
    >;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  addPriceFeed(
    token: PromiseOrValue<string>,
    priceFeed: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  convert(
    amount: PromiseOrValue<BigNumberish>,
    tokenFrom: PromiseOrValue<string>,
    tokenTo: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  convertFromUSD(
    amount: PromiseOrValue<BigNumberish>,
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  convertToUSD(
    amount: PromiseOrValue<BigNumberish>,
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  fastCheck(
    amountFrom: PromiseOrValue<BigNumberish>,
    tokenFrom: PromiseOrValue<string>,
    amountTo: PromiseOrValue<BigNumberish>,
    tokenTo: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      collateralFrom: BigNumber;
      collateralTo: BigNumber;
    }
  >;

  getPrice(
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  priceFeeds(
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  priceFeedsWithFlags(
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [string, boolean, BigNumber] & {
      priceFeed: string;
      skipCheck: boolean;
      decimals: BigNumber;
    }
  >;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    addPriceFeed(
      token: PromiseOrValue<string>,
      priceFeed: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    convert(
      amount: PromiseOrValue<BigNumberish>,
      tokenFrom: PromiseOrValue<string>,
      tokenTo: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    convertFromUSD(
      amount: PromiseOrValue<BigNumberish>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    convertToUSD(
      amount: PromiseOrValue<BigNumberish>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fastCheck(
      amountFrom: PromiseOrValue<BigNumberish>,
      tokenFrom: PromiseOrValue<string>,
      amountTo: PromiseOrValue<BigNumberish>,
      tokenTo: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        collateralFrom: BigNumber;
        collateralTo: BigNumber;
      }
    >;

    getPrice(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    priceFeeds(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    priceFeedsWithFlags(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, boolean, BigNumber] & {
        priceFeed: string;
        skipCheck: boolean;
        decimals: BigNumber;
      }
    >;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "NewPriceFeed(address,address)"(
      token?: PromiseOrValue<string> | null,
      priceFeed?: PromiseOrValue<string> | null
    ): NewPriceFeedEventFilter;
    NewPriceFeed(
      token?: PromiseOrValue<string> | null,
      priceFeed?: PromiseOrValue<string> | null
    ): NewPriceFeedEventFilter;
  };

  estimateGas: {
    addPriceFeed(
      token: PromiseOrValue<string>,
      priceFeed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    convert(
      amount: PromiseOrValue<BigNumberish>,
      tokenFrom: PromiseOrValue<string>,
      tokenTo: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    convertFromUSD(
      amount: PromiseOrValue<BigNumberish>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    convertToUSD(
      amount: PromiseOrValue<BigNumberish>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fastCheck(
      amountFrom: PromiseOrValue<BigNumberish>,
      tokenFrom: PromiseOrValue<string>,
      amountTo: PromiseOrValue<BigNumberish>,
      tokenTo: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrice(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    priceFeeds(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    priceFeedsWithFlags(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addPriceFeed(
      token: PromiseOrValue<string>,
      priceFeed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    convert(
      amount: PromiseOrValue<BigNumberish>,
      tokenFrom: PromiseOrValue<string>,
      tokenTo: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    convertFromUSD(
      amount: PromiseOrValue<BigNumberish>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    convertToUSD(
      amount: PromiseOrValue<BigNumberish>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fastCheck(
      amountFrom: PromiseOrValue<BigNumberish>,
      tokenFrom: PromiseOrValue<string>,
      amountTo: PromiseOrValue<BigNumberish>,
      tokenTo: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrice(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    priceFeeds(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    priceFeedsWithFlags(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
