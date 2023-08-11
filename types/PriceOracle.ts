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
} from "./common";

export type PriceFeedConfigStruct = {
  token: PromiseOrValue<string>;
  priceFeed: PromiseOrValue<string>;
};

export type PriceFeedConfigStructOutput = [string, string] & {
  token: string;
  priceFeed: string;
};

export interface PriceOracleInterface extends utils.Interface {
  functions: {
    "_acl()": FunctionFragment;
    "addPriceFeed(address,address)": FunctionFragment;
    "convert(uint256,address,address)": FunctionFragment;
    "convertFromUSD(uint256,address)": FunctionFragment;
    "convertToUSD(uint256,address)": FunctionFragment;
    "fastCheck(uint256,address,uint256,address)": FunctionFragment;
    "getPrice(address)": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "priceFeeds(address)": FunctionFragment;
    "priceFeedsWithFlags(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "version()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_acl"
      | "addPriceFeed"
      | "convert"
      | "convertFromUSD"
      | "convertToUSD"
      | "fastCheck"
      | "getPrice"
      | "pause"
      | "paused"
      | "priceFeeds"
      | "priceFeedsWithFlags"
      | "unpause"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "_acl", values?: undefined): string;
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
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "priceFeeds",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "priceFeedsWithFlags",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "_acl", data: BytesLike): Result;
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
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceFeeds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceFeedsWithFlags",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "NewPriceFeed(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewPriceFeed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
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

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface PriceOracle extends BaseContract {
  contractName: "PriceOracle";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PriceOracleInterface;

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
    _acl(overrides?: CallOverrides): Promise<[string]>;

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
    ): Promise<[BigNumber] & { price: BigNumber }>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

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

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  _acl(overrides?: CallOverrides): Promise<string>;

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

  pause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

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

  unpause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    _acl(overrides?: CallOverrides): Promise<string>;

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

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

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

    unpause(overrides?: CallOverrides): Promise<void>;

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

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;
  };

  estimateGas: {
    _acl(overrides?: CallOverrides): Promise<BigNumber>;

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

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    priceFeeds(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    priceFeedsWithFlags(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _acl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceFeeds(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    priceFeedsWithFlags(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
