/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "EC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EC__factory>;
    getContractFactory(
      name: "GeneralElection",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GeneralElection__factory>;

    getContractAt(
      name: "EC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EC>;
    getContractAt(
      name: "GeneralElection",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GeneralElection>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
