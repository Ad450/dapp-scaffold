/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ECInterface extends ethers.utils.Interface {
  functions: {
    "getPartyVotes(string)": FunctionFragment;
    "getTotalVotes()": FunctionFragment;
    "parties(uint256)": FunctionFragment;
    "validateParty(string)": FunctionFragment;
    "voteForParty(string)": FunctionFragment;
    "votecast(string)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getPartyVotes",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalVotes",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "parties",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "validateParty",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "voteForParty",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "votecast", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "getPartyVotes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalVotes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "parties", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "validateParty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "voteForParty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "votecast", data: BytesLike): Result;

  events: {};
}

export class EC extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ECInterface;

  functions: {
    getPartyVotes(
      _party: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalVotes(overrides?: CallOverrides): Promise<[BigNumber]>;

    parties(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    validateParty(
      _party: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    voteForParty(
      _party: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    votecast(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  getPartyVotes(_party: string, overrides?: CallOverrides): Promise<BigNumber>;

  getTotalVotes(overrides?: CallOverrides): Promise<BigNumber>;

  parties(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  validateParty(_party: string, overrides?: CallOverrides): Promise<boolean>;

  voteForParty(
    _party: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  votecast(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    getPartyVotes(
      _party: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalVotes(overrides?: CallOverrides): Promise<BigNumber>;

    parties(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    validateParty(_party: string, overrides?: CallOverrides): Promise<boolean>;

    voteForParty(_party: string, overrides?: CallOverrides): Promise<void>;

    votecast(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getPartyVotes(
      _party: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalVotes(overrides?: CallOverrides): Promise<BigNumber>;

    parties(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    validateParty(
      _party: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    voteForParty(
      _party: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    votecast(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getPartyVotes(
      _party: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalVotes(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    parties(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateParty(
      _party: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    voteForParty(
      _party: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    votecast(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
