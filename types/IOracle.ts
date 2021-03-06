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
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IOracleInterface extends utils.Interface {
  functions: {
    "consult(address,uint256)": FunctionFragment;
    "twap(address,uint256)": FunctionFragment;
    "update()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "consult",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "twap",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "update", values?: undefined): string;

  decodeFunctionResult(functionFragment: "consult", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "twap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;

  events: {};
}

export interface IOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IOracleInterface;

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
    consult(
      _token: string,
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountOut: BigNumber }>;

    twap(
      _token: string,
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _amountOut: BigNumber }>;

    update(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  consult(
    _token: string,
    _amountIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  twap(
    _token: string,
    _amountIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  update(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    consult(
      _token: string,
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    twap(
      _token: string,
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    update(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    consult(
      _token: string,
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    twap(
      _token: string,
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    update(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    consult(
      _token: string,
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    twap(
      _token: string,
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    update(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
