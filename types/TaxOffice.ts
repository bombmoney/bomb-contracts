/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface TaxOfficeInterface extends utils.Interface {
  functions: {
    "bomb()": FunctionFragment;
    "disableAutoCalculateTax()": FunctionFragment;
    "enableAutoCalculateTax()": FunctionFragment;
    "excludeAddressFromTax(address)": FunctionFragment;
    "includeAddressInTax(address)": FunctionFragment;
    "isOperator()": FunctionFragment;
    "operator()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setBurnThreshold(uint256)": FunctionFragment;
    "setTaxCollectorAddress(address)": FunctionFragment;
    "setTaxRate(uint256)": FunctionFragment;
    "setTaxTiersRate(uint8,uint256)": FunctionFragment;
    "setTaxTiersTwap(uint8,uint256)": FunctionFragment;
    "setTaxableBombOracle(address)": FunctionFragment;
    "transferOperator(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "transferTaxOffice(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "bomb", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "disableAutoCalculateTax",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "enableAutoCalculateTax",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "excludeAddressFromTax",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "includeAddressInTax",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isOperator",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "operator", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBurnThreshold",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTaxCollectorAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTaxRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTaxTiersRate",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTaxTiersTwap",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTaxableBombOracle",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOperator",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferTaxOffice",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "bomb", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "disableAutoCalculateTax",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableAutoCalculateTax",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "excludeAddressFromTax",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "includeAddressInTax",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isOperator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "operator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBurnThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTaxCollectorAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setTaxRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTaxTiersRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTaxTiersTwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTaxableBombOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferTaxOffice",
    data: BytesLike
  ): Result;

  events: {
    "OperatorTransferred(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OperatorTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OperatorTransferredEvent = TypedEvent<
  [string, string],
  { previousOperator: string; newOperator: string }
>;

export type OperatorTransferredEventFilter =
  TypedEventFilter<OperatorTransferredEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface TaxOffice extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TaxOfficeInterface;

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
    bomb(overrides?: CallOverrides): Promise<[string]>;

    disableAutoCalculateTax(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    enableAutoCalculateTax(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    excludeAddressFromTax(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    includeAddressInTax(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isOperator(overrides?: CallOverrides): Promise<[boolean]>;

    operator(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBurnThreshold(
      _burnThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTaxCollectorAddress(
      _taxCollectorAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTaxRate(
      _taxRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTaxTiersRate(
      _index: BigNumberish,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTaxTiersTwap(
      _index: BigNumberish,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTaxableBombOracle(
      _bombOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOperator(
      newOperator_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferTaxOffice(
      _newTaxOffice: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  bomb(overrides?: CallOverrides): Promise<string>;

  disableAutoCalculateTax(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  enableAutoCalculateTax(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  excludeAddressFromTax(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  includeAddressInTax(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isOperator(overrides?: CallOverrides): Promise<boolean>;

  operator(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBurnThreshold(
    _burnThreshold: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTaxCollectorAddress(
    _taxCollectorAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTaxRate(
    _taxRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTaxTiersRate(
    _index: BigNumberish,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTaxTiersTwap(
    _index: BigNumberish,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTaxableBombOracle(
    _bombOracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOperator(
    newOperator_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferTaxOffice(
    _newTaxOffice: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bomb(overrides?: CallOverrides): Promise<string>;

    disableAutoCalculateTax(overrides?: CallOverrides): Promise<void>;

    enableAutoCalculateTax(overrides?: CallOverrides): Promise<void>;

    excludeAddressFromTax(
      _address: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    includeAddressInTax(
      _address: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isOperator(overrides?: CallOverrides): Promise<boolean>;

    operator(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setBurnThreshold(
      _burnThreshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTaxCollectorAddress(
      _taxCollectorAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTaxRate(
      _taxRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTaxTiersRate(
      _index: BigNumberish,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setTaxTiersTwap(
      _index: BigNumberish,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setTaxableBombOracle(
      _bombOracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOperator(
      newOperator_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferTaxOffice(
      _newTaxOffice: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OperatorTransferred(address,address)"(
      previousOperator?: string | null,
      newOperator?: string | null
    ): OperatorTransferredEventFilter;
    OperatorTransferred(
      previousOperator?: string | null,
      newOperator?: string | null
    ): OperatorTransferredEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    bomb(overrides?: CallOverrides): Promise<BigNumber>;

    disableAutoCalculateTax(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    enableAutoCalculateTax(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    excludeAddressFromTax(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    includeAddressInTax(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isOperator(overrides?: CallOverrides): Promise<BigNumber>;

    operator(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBurnThreshold(
      _burnThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTaxCollectorAddress(
      _taxCollectorAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTaxRate(
      _taxRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTaxTiersRate(
      _index: BigNumberish,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTaxTiersTwap(
      _index: BigNumberish,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTaxableBombOracle(
      _bombOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOperator(
      newOperator_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferTaxOffice(
      _newTaxOffice: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bomb(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    disableAutoCalculateTax(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    enableAutoCalculateTax(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    excludeAddressFromTax(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    includeAddressInTax(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isOperator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    operator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBurnThreshold(
      _burnThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTaxCollectorAddress(
      _taxCollectorAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTaxRate(
      _taxRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTaxTiersRate(
      _index: BigNumberish,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTaxTiersTwap(
      _index: BigNumberish,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTaxableBombOracle(
      _bombOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOperator(
      newOperator_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferTaxOffice(
      _newTaxOffice: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
