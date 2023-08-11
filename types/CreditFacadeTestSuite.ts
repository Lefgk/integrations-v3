/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export interface CreditFacadeTestSuiteInterface extends utils.Interface {
  functions: {
    "IS_TEST()": FunctionFragment;
    "acl()": FunctionFragment;
    "addressProvider()": FunctionFragment;
    "af()": FunctionFragment;
    "blacklistHelper()": FunctionFragment;
    "cr()": FunctionFragment;
    "creditAccountAmount()": FunctionFragment;
    "creditConfigurator()": FunctionFragment;
    "creditFacade()": FunctionFragment;
    "creditManager()": FunctionFragment;
    "degenNFT()": FunctionFragment;
    "failed()": FunctionFragment;
    "gp()": FunctionFragment;
    "maxBorrowedAmount()": FunctionFragment;
    "minBorrowedAmount()": FunctionFragment;
    "poolMock()": FunctionFragment;
    "priceOracle()": FunctionFragment;
    "testFacadeWithBlacklistHelper()": FunctionFragment;
    "testFacadeWithDegenNFT()": FunctionFragment;
    "testFacadeWithExpiration()": FunctionFragment;
    "tokenTestSuite()": FunctionFragment;
    "underlying()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "IS_TEST"
      | "acl"
      | "addressProvider"
      | "af"
      | "blacklistHelper"
      | "cr"
      | "creditAccountAmount"
      | "creditConfigurator"
      | "creditFacade"
      | "creditManager"
      | "degenNFT"
      | "failed"
      | "gp"
      | "maxBorrowedAmount"
      | "minBorrowedAmount"
      | "poolMock"
      | "priceOracle"
      | "testFacadeWithBlacklistHelper"
      | "testFacadeWithDegenNFT"
      | "testFacadeWithExpiration"
      | "tokenTestSuite"
      | "underlying"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "IS_TEST", values?: undefined): string;
  encodeFunctionData(functionFragment: "acl", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addressProvider",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "af", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "blacklistHelper",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "cr", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "creditAccountAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "creditConfigurator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "creditFacade",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "creditManager",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "degenNFT", values?: undefined): string;
  encodeFunctionData(functionFragment: "failed", values?: undefined): string;
  encodeFunctionData(functionFragment: "gp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "maxBorrowedAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minBorrowedAmount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "poolMock", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "priceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testFacadeWithBlacklistHelper",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testFacadeWithDegenNFT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testFacadeWithExpiration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenTestSuite",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "underlying",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "IS_TEST", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "acl", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addressProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "af", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "blacklistHelper",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cr", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "creditAccountAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditConfigurator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditFacade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "degenNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "failed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxBorrowedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minBorrowedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poolMock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testFacadeWithBlacklistHelper",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testFacadeWithDegenNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testFacadeWithExpiration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenTestSuite",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;

  events: {
    "log(string)": EventFragment;
    "log_address(address)": EventFragment;
    "log_bytes(bytes)": EventFragment;
    "log_bytes32(bytes32)": EventFragment;
    "log_int(int256)": EventFragment;
    "log_named_address(string,address)": EventFragment;
    "log_named_bytes(string,bytes)": EventFragment;
    "log_named_bytes32(string,bytes32)": EventFragment;
    "log_named_decimal_int(string,int256,uint256)": EventFragment;
    "log_named_decimal_uint(string,uint256,uint256)": EventFragment;
    "log_named_int(string,int256)": EventFragment;
    "log_named_string(string,string)": EventFragment;
    "log_named_uint(string,uint256)": EventFragment;
    "log_string(string)": EventFragment;
    "log_uint(uint256)": EventFragment;
    "logs(bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "log"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_address"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_bytes"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_bytes32"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_int"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_address"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_bytes"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_bytes32"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_decimal_int"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_decimal_uint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_int"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_string"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_uint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_string"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_uint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "logs"): EventFragment;
}

export interface logEventObject {
  arg0: string;
}
export type logEvent = TypedEvent<[string], logEventObject>;

export type logEventFilter = TypedEventFilter<logEvent>;

export interface log_addressEventObject {
  arg0: string;
}
export type log_addressEvent = TypedEvent<[string], log_addressEventObject>;

export type log_addressEventFilter = TypedEventFilter<log_addressEvent>;

export interface log_bytesEventObject {
  arg0: string;
}
export type log_bytesEvent = TypedEvent<[string], log_bytesEventObject>;

export type log_bytesEventFilter = TypedEventFilter<log_bytesEvent>;

export interface log_bytes32EventObject {
  arg0: string;
}
export type log_bytes32Event = TypedEvent<[string], log_bytes32EventObject>;

export type log_bytes32EventFilter = TypedEventFilter<log_bytes32Event>;

export interface log_intEventObject {
  arg0: BigNumber;
}
export type log_intEvent = TypedEvent<[BigNumber], log_intEventObject>;

export type log_intEventFilter = TypedEventFilter<log_intEvent>;

export interface log_named_addressEventObject {
  key: string;
  val: string;
}
export type log_named_addressEvent = TypedEvent<
  [string, string],
  log_named_addressEventObject
>;

export type log_named_addressEventFilter =
  TypedEventFilter<log_named_addressEvent>;

export interface log_named_bytesEventObject {
  key: string;
  val: string;
}
export type log_named_bytesEvent = TypedEvent<
  [string, string],
  log_named_bytesEventObject
>;

export type log_named_bytesEventFilter = TypedEventFilter<log_named_bytesEvent>;

export interface log_named_bytes32EventObject {
  key: string;
  val: string;
}
export type log_named_bytes32Event = TypedEvent<
  [string, string],
  log_named_bytes32EventObject
>;

export type log_named_bytes32EventFilter =
  TypedEventFilter<log_named_bytes32Event>;

export interface log_named_decimal_intEventObject {
  key: string;
  val: BigNumber;
  decimals: BigNumber;
}
export type log_named_decimal_intEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  log_named_decimal_intEventObject
>;

export type log_named_decimal_intEventFilter =
  TypedEventFilter<log_named_decimal_intEvent>;

export interface log_named_decimal_uintEventObject {
  key: string;
  val: BigNumber;
  decimals: BigNumber;
}
export type log_named_decimal_uintEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  log_named_decimal_uintEventObject
>;

export type log_named_decimal_uintEventFilter =
  TypedEventFilter<log_named_decimal_uintEvent>;

export interface log_named_intEventObject {
  key: string;
  val: BigNumber;
}
export type log_named_intEvent = TypedEvent<
  [string, BigNumber],
  log_named_intEventObject
>;

export type log_named_intEventFilter = TypedEventFilter<log_named_intEvent>;

export interface log_named_stringEventObject {
  key: string;
  val: string;
}
export type log_named_stringEvent = TypedEvent<
  [string, string],
  log_named_stringEventObject
>;

export type log_named_stringEventFilter =
  TypedEventFilter<log_named_stringEvent>;

export interface log_named_uintEventObject {
  key: string;
  val: BigNumber;
}
export type log_named_uintEvent = TypedEvent<
  [string, BigNumber],
  log_named_uintEventObject
>;

export type log_named_uintEventFilter = TypedEventFilter<log_named_uintEvent>;

export interface log_stringEventObject {
  arg0: string;
}
export type log_stringEvent = TypedEvent<[string], log_stringEventObject>;

export type log_stringEventFilter = TypedEventFilter<log_stringEvent>;

export interface log_uintEventObject {
  arg0: BigNumber;
}
export type log_uintEvent = TypedEvent<[BigNumber], log_uintEventObject>;

export type log_uintEventFilter = TypedEventFilter<log_uintEvent>;

export interface logsEventObject {
  arg0: string;
}
export type logsEvent = TypedEvent<[string], logsEventObject>;

export type logsEventFilter = TypedEventFilter<logsEvent>;

export interface CreditFacadeTestSuite extends BaseContract {
  contractName: "CreditFacadeTestSuite";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CreditFacadeTestSuiteInterface;

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
    IS_TEST(overrides?: CallOverrides): Promise<[boolean]>;

    acl(overrides?: CallOverrides): Promise<[string]>;

    addressProvider(overrides?: CallOverrides): Promise<[string]>;

    af(overrides?: CallOverrides): Promise<[string]>;

    blacklistHelper(overrides?: CallOverrides): Promise<[string]>;

    cr(overrides?: CallOverrides): Promise<[string]>;

    creditAccountAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    creditConfigurator(overrides?: CallOverrides): Promise<[string]>;

    creditFacade(overrides?: CallOverrides): Promise<[string]>;

    creditManager(overrides?: CallOverrides): Promise<[string]>;

    degenNFT(overrides?: CallOverrides): Promise<[string]>;

    failed(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    gp(overrides?: CallOverrides): Promise<[string]>;

    maxBorrowedAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    minBorrowedAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    poolMock(overrides?: CallOverrides): Promise<[string]>;

    priceOracle(overrides?: CallOverrides): Promise<[string]>;

    testFacadeWithBlacklistHelper(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testFacadeWithDegenNFT(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testFacadeWithExpiration(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tokenTestSuite(overrides?: CallOverrides): Promise<[string]>;

    underlying(overrides?: CallOverrides): Promise<[string]>;
  };

  IS_TEST(overrides?: CallOverrides): Promise<boolean>;

  acl(overrides?: CallOverrides): Promise<string>;

  addressProvider(overrides?: CallOverrides): Promise<string>;

  af(overrides?: CallOverrides): Promise<string>;

  blacklistHelper(overrides?: CallOverrides): Promise<string>;

  cr(overrides?: CallOverrides): Promise<string>;

  creditAccountAmount(overrides?: CallOverrides): Promise<BigNumber>;

  creditConfigurator(overrides?: CallOverrides): Promise<string>;

  creditFacade(overrides?: CallOverrides): Promise<string>;

  creditManager(overrides?: CallOverrides): Promise<string>;

  degenNFT(overrides?: CallOverrides): Promise<string>;

  failed(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  gp(overrides?: CallOverrides): Promise<string>;

  maxBorrowedAmount(overrides?: CallOverrides): Promise<BigNumber>;

  minBorrowedAmount(overrides?: CallOverrides): Promise<BigNumber>;

  poolMock(overrides?: CallOverrides): Promise<string>;

  priceOracle(overrides?: CallOverrides): Promise<string>;

  testFacadeWithBlacklistHelper(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testFacadeWithDegenNFT(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testFacadeWithExpiration(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tokenTestSuite(overrides?: CallOverrides): Promise<string>;

  underlying(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    IS_TEST(overrides?: CallOverrides): Promise<boolean>;

    acl(overrides?: CallOverrides): Promise<string>;

    addressProvider(overrides?: CallOverrides): Promise<string>;

    af(overrides?: CallOverrides): Promise<string>;

    blacklistHelper(overrides?: CallOverrides): Promise<string>;

    cr(overrides?: CallOverrides): Promise<string>;

    creditAccountAmount(overrides?: CallOverrides): Promise<BigNumber>;

    creditConfigurator(overrides?: CallOverrides): Promise<string>;

    creditFacade(overrides?: CallOverrides): Promise<string>;

    creditManager(overrides?: CallOverrides): Promise<string>;

    degenNFT(overrides?: CallOverrides): Promise<string>;

    failed(overrides?: CallOverrides): Promise<boolean>;

    gp(overrides?: CallOverrides): Promise<string>;

    maxBorrowedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    minBorrowedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    poolMock(overrides?: CallOverrides): Promise<string>;

    priceOracle(overrides?: CallOverrides): Promise<string>;

    testFacadeWithBlacklistHelper(overrides?: CallOverrides): Promise<void>;

    testFacadeWithDegenNFT(overrides?: CallOverrides): Promise<void>;

    testFacadeWithExpiration(overrides?: CallOverrides): Promise<void>;

    tokenTestSuite(overrides?: CallOverrides): Promise<string>;

    underlying(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "log(string)"(arg0?: null): logEventFilter;
    log(arg0?: null): logEventFilter;

    "log_address(address)"(arg0?: null): log_addressEventFilter;
    log_address(arg0?: null): log_addressEventFilter;

    "log_bytes(bytes)"(arg0?: null): log_bytesEventFilter;
    log_bytes(arg0?: null): log_bytesEventFilter;

    "log_bytes32(bytes32)"(arg0?: null): log_bytes32EventFilter;
    log_bytes32(arg0?: null): log_bytes32EventFilter;

    "log_int(int256)"(arg0?: null): log_intEventFilter;
    log_int(arg0?: null): log_intEventFilter;

    "log_named_address(string,address)"(
      key?: null,
      val?: null
    ): log_named_addressEventFilter;
    log_named_address(key?: null, val?: null): log_named_addressEventFilter;

    "log_named_bytes(string,bytes)"(
      key?: null,
      val?: null
    ): log_named_bytesEventFilter;
    log_named_bytes(key?: null, val?: null): log_named_bytesEventFilter;

    "log_named_bytes32(string,bytes32)"(
      key?: null,
      val?: null
    ): log_named_bytes32EventFilter;
    log_named_bytes32(key?: null, val?: null): log_named_bytes32EventFilter;

    "log_named_decimal_int(string,int256,uint256)"(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_intEventFilter;
    log_named_decimal_int(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_intEventFilter;

    "log_named_decimal_uint(string,uint256,uint256)"(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_uintEventFilter;
    log_named_decimal_uint(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_uintEventFilter;

    "log_named_int(string,int256)"(
      key?: null,
      val?: null
    ): log_named_intEventFilter;
    log_named_int(key?: null, val?: null): log_named_intEventFilter;

    "log_named_string(string,string)"(
      key?: null,
      val?: null
    ): log_named_stringEventFilter;
    log_named_string(key?: null, val?: null): log_named_stringEventFilter;

    "log_named_uint(string,uint256)"(
      key?: null,
      val?: null
    ): log_named_uintEventFilter;
    log_named_uint(key?: null, val?: null): log_named_uintEventFilter;

    "log_string(string)"(arg0?: null): log_stringEventFilter;
    log_string(arg0?: null): log_stringEventFilter;

    "log_uint(uint256)"(arg0?: null): log_uintEventFilter;
    log_uint(arg0?: null): log_uintEventFilter;

    "logs(bytes)"(arg0?: null): logsEventFilter;
    logs(arg0?: null): logsEventFilter;
  };

  estimateGas: {
    IS_TEST(overrides?: CallOverrides): Promise<BigNumber>;

    acl(overrides?: CallOverrides): Promise<BigNumber>;

    addressProvider(overrides?: CallOverrides): Promise<BigNumber>;

    af(overrides?: CallOverrides): Promise<BigNumber>;

    blacklistHelper(overrides?: CallOverrides): Promise<BigNumber>;

    cr(overrides?: CallOverrides): Promise<BigNumber>;

    creditAccountAmount(overrides?: CallOverrides): Promise<BigNumber>;

    creditConfigurator(overrides?: CallOverrides): Promise<BigNumber>;

    creditFacade(overrides?: CallOverrides): Promise<BigNumber>;

    creditManager(overrides?: CallOverrides): Promise<BigNumber>;

    degenNFT(overrides?: CallOverrides): Promise<BigNumber>;

    failed(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    gp(overrides?: CallOverrides): Promise<BigNumber>;

    maxBorrowedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    minBorrowedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    poolMock(overrides?: CallOverrides): Promise<BigNumber>;

    priceOracle(overrides?: CallOverrides): Promise<BigNumber>;

    testFacadeWithBlacklistHelper(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testFacadeWithDegenNFT(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testFacadeWithExpiration(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tokenTestSuite(overrides?: CallOverrides): Promise<BigNumber>;

    underlying(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    IS_TEST(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addressProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    af(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    blacklistHelper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    creditAccountAmount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    creditConfigurator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    creditFacade(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    creditManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    degenNFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    failed(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    gp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxBorrowedAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minBorrowedAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolMock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    testFacadeWithBlacklistHelper(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testFacadeWithDegenNFT(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testFacadeWithExpiration(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tokenTestSuite(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
