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
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "CoreVoting",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CoreVoting__factory>;
    getContractFactory(
      name: "OptimisticGrants",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OptimisticGrants__factory>;
    getContractFactory(
      name: "Spender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Spender__factory>;
    getContractFactory(
      name: "Timelock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Timelock__factory>;
    getContractFactory(
      name: "Treasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Treasury__factory>;
    getContractFactory(
      name: "ICoreVoting",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICoreVoting__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "ILockingVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILockingVault__factory>;
    getContractFactory(
      name: "IVotingVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVotingVault__factory>;
    getContractFactory(
      name: "Authorizable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Authorizable__factory>;
    getContractFactory(
      name: "ERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Permit__factory>;
    getContractFactory(
      name: "ERC20PermitWithMint",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20PermitWithMint__factory>;
    getContractFactory(
      name: "MerkleRewards",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MerkleRewards__factory>;
    getContractFactory(
      name: "Storage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Storage__factory>;
    getContractFactory(
      name: "MockCoreVoting",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockCoreVoting__factory>;
    getContractFactory(
      name: "MockDoubleSpender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockDoubleSpender__factory>;
    getContractFactory(
      name: "MockERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockERC20__factory>;
    getContractFactory(
      name: "MockHistoryTracker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockHistoryTracker__factory>;
    getContractFactory(
      name: "MockLockingVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockLockingVault__factory>;
    getContractFactory(
      name: "MockTokenLogic",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockTokenLogic__factory>;
    getContractFactory(
      name: "MockVotingVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockVotingVault__factory>;
    getContractFactory(
      name: "Reverter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Reverter__factory>;
    getContractFactory(
      name: "ReadAndWriteAnyStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReadAndWriteAnyStorage__factory>;
    getContractFactory(
      name: "TestCoreVoting",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestCoreVoting__factory>;
    getContractFactory(
      name: "TestTreasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestTreasury__factory>;
    getContractFactory(
      name: "TestVestingVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestVestingVault__factory>;
    getContractFactory(
      name: "SimpleProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SimpleProxy__factory>;
    getContractFactory(
      name: "GSCVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GSCVault__factory>;
    getContractFactory(
      name: "LockingVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LockingVault__factory>;
    getContractFactory(
      name: "OptimisticRewards",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OptimisticRewards__factory>;
    getContractFactory(
      name: "VestingVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VestingVault__factory>;
    getContractFactory(
      name: "Airdrop",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Airdrop__factory>;
    getContractFactory(
      name: "ILockingVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILockingVault__factory>;
    getContractFactory(
      name: "IPlonkVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPlonkVerifier__factory>;
    getContractFactory(
      name: "PrivateAirdrop",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PrivateAirdrop__factory>;

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
  }
}
