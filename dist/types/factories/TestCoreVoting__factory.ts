/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestCoreVoting,
  TestCoreVotingInterface,
} from "../TestCoreVoting";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_timelock",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_baseQuorum",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minProposalPower",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_gsc",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "votingVaults",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "created",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "execution",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expiration",
        type: "uint256",
      },
    ],
    name: "ProposalCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "ProposalExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "votingPower",
            type: "uint128",
          },
          {
            internalType: "enum CoreVoting.Ballot",
            name: "castBallot",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct CoreVoting.Vote",
        name: "vote",
        type: "tuple",
      },
    ],
    name: "Voted",
    type: "event",
  },
  {
    inputs: [],
    name: "DAY_IN_BLOCKS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "approvedVaults",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "authorize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "authorized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseQuorum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_extraVoteTime",
        type: "uint256",
      },
    ],
    name: "changeExtraVotingTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "vault",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isValid",
        type: "bool",
      },
    ],
    name: "changeVaultStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "deauthorize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dummyValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "calldatas",
        type: "bytes[]",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "extraVoteTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "_selector",
        type: "bytes4",
      },
    ],
    name: "getCustomQuorum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_proposalID",
        type: "uint256",
      },
    ],
    name: "getProposalData",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
      {
        internalType: "uint128[3]",
        name: "",
        type: "uint128[3]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "getProposalVotingPower",
    outputs: [
      {
        internalType: "uint128[3]",
        name: "",
        type: "uint128[3]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
    ],
    name: "getVaultStatus",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "isAuthorized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lockDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minProposalPower",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        internalType: "address[]",
        name: "votingVaults",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "extraVaultData",
        type: "bytes[]",
      },
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "calldatas",
        type: "bytes[]",
      },
      {
        internalType: "uint256",
        name: "lastCall",
        type: "uint256",
      },
      {
        internalType: "enum CoreVoting.Ballot",
        name: "ballot",
        type: "uint8",
      },
    ],
    name: "proposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposalCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "bytes32",
        name: "proposalHash",
        type: "bytes32",
      },
      {
        internalType: "uint128",
        name: "created",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "unlock",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "expiration",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "quorum",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "lastCall",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "functionSelector",
        type: "bytes4",
      },
    ],
    name: "quorums",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
      {
        internalType: "uint256",
        name: "quorum",
        type: "uint256",
      },
    ],
    name: "setCustomQuorum",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "quorum",
        type: "uint256",
      },
    ],
    name: "setDefaultQuorum",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_lockDuration",
        type: "uint256",
      },
    ],
    name: "setLockDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minProposalPower",
        type: "uint256",
      },
    ],
    name: "setMinProposalPower",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newValue",
        type: "uint256",
      },
    ],
    name: "updateDummy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "votingVaults",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "extraVaultData",
        type: "bytes[]",
      },
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "enum CoreVoting.Ballot",
        name: "ballot",
        type: "uint8",
      },
    ],
    name: "vote",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "votes",
    outputs: [
      {
        internalType: "uint128",
        name: "votingPower",
        type: "uint128",
      },
      {
        internalType: "enum CoreVoting.Ballot",
        name: "castBallot",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052620000136119606003620002e0565b600455620000256119606005620002e0565b6005553480156200003557600080fd5b5060405162002e3f38038062002e3f8339810160408190526200005891620001d0565b600080546001600160a01b0319163317815560038590556006849055859085908590859085905b8151811015620000f757600160096000848481518110620000b057634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191691151591909117905580620000ee8162000302565b9150506200007f565b5062000103856200013f565b6200012f826001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b505050505050505050506200034c565b6000546001600160a01b03163314620001915760405162461bcd60e51b815260206004820152601060248201526f29b2b73232b9103737ba1037bbb732b960811b604482015260640160405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b80516001600160a01b0381168114620001cb57600080fd5b919050565b600080600080600060a08688031215620001e8578081fd5b620001f386620001b3565b94506020808701519450604087015193506200021260608801620001b3565b60808801519093506001600160401b03808211156200022f578384fd5b818901915089601f83011262000243578384fd5b81518181111562000258576200025862000336565b8060051b604051601f19603f8301168101818110858211171562000280576200028062000336565b604052828152858101935084860182860187018e10156200029f578788fd5b8795505b83861015620002cc57620002b781620001b3565b855260019590950194938601938601620002a3565b508096505050505050509295509295909350565b6000816000190483118215151615620002fd57620002fd62000320565b500290565b600060001982141562000319576200031962000320565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b612ae3806200035c6000396000f3fe608060405234801561001057600080fd5b50600436106101e45760003560e01c80637d5709eb1161010f578063bd9c75a5116100a2578063d4b8756711610071578063d4b8756714610546578063da35c6641461054f578063f131e5eb14610558578063fe9fbb8014610561576101e4565b8063bd9c75a5146104ed578063c52ea3db14610500578063ca5f9d0614610520578063d1b6762714610533576101e4565b8063aa35fb51116100de578063aa35fb5114610481578063af7a060c14610494578063b6a5d7de146104b7578063b9181611146104ca576101e4565b80637d5709eb146103bc5780638da5cb5b146103cf5780639f2524ee14610414578063a4c9507714610478576101e4565b806327c97fa5116101875780634eb665af116101565780634eb665af146103695780636e7685301461037c57806370469c26146103a0578063771a5323146103a9576101e4565b806327c97fa51461031d57806333968c6614610330578063341a7b42146103435780634392b99c14610356576101e4565b806313af4035116101c357806313af4035146102cb57806315126a3d146102de578063180d97c1146102f15780631c39c96c14610314576101e4565b806214d11d146101e9578063013cf08b146101fe57806304554443146102b4575b600080fd5b6101fc6101f736600461249a565b61059a565b005b61026861020c36600461249a565b600a60205260009081526040902080546001820154600283015460059093015491926fffffffffffffffffffffffffffffffff808316937001000000000000000000000000000000009384900482169383831693048216911686565b604080519687526fffffffffffffffffffffffffffffffff9586166020880152938516938601939093529083166060850152821660808401521660a082015260c0015b60405180910390f35b6102bd60045481565b6040519081526020016102ab565b6101fc6102d936600461225d565b61060b565b6101fc6102ec3660046124ca565b6106b9565b6103046102ff36600461225d565b610c63565b60405190151581526020016102ab565b6102bd60035481565b6101fc61032b36600461225d565b610c92565b6102bd61033e3660046122b1565b610d27565b6101fc610351366004612277565b610d3c565b6101fc6103643660046122e3565b610ddb565b6101fc61037736600461249a565b610e98565b61038f61038a36600461249a565b610f04565b6040516102ab959493929190612820565b6102bd600c5481565b6102bd6103b73660046122b1565b610fe9565b6101fc6103ca36600461249a565b611059565b6000546103ef9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016102ab565b61046a61042236600461231e565b600b6020908152600092835260408084209091529082529020546fffffffffffffffffffffffffffffffff811690700100000000000000000000000000000000900460ff1682565b6040516102ab929190612896565b6102bd60055481565b6102bd61048f36600461241f565b6110c5565b6103046104a236600461225d565b60096020526000908152604090205460ff1681565b6101fc6104c536600461225d565b6117d3565b6103046104d836600461225d565b60016020526000908152604090205460ff1681565b6101fc6104fb366004612347565b611875565b61051361050e36600461249a565b611e5f565b6040516102ab9190612812565b6101fc61052e36600461249a565b600c55565b6101fc61054136600461249a565b611eeb565b6102bd60065481565b6102bd60075481565b6102bd61196081565b61030461056f36600461225d565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b60005473ffffffffffffffffffffffffffffffffffffffff1633146106065760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064015b60405180910390fd5b600555565b60005473ffffffffffffffffffffffffffffffffffffffff1633146106725760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016105fd565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60025460ff161561070c5760405162461bcd60e51b815260206004820152600a60248201527f5265656e7472616e63790000000000000000000000000000000000000000000060448201526064016105fd565b6002805460ff191660019081179091556000848152600a6020526040902001546fffffffffffffffffffffffffffffffff700100000000000000000000000000000000909104164310156107a25760405162461bcd60e51b815260206004820152600c60248201527f6e6f7420756e6c6f636b6564000000000000000000000000000000000000000060448201526064016105fd565b6000838152600a602052604090206001015470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff166108265760405162461bcd60e51b815260206004820152601360248201527f50726576696f75736c792065786563757465640000000000000000000000000060448201526064016105fd565b6000838152600a60205260409020600501546fffffffffffffffffffffffffffffffff1643106108985760405162461bcd60e51b815260206004820152601860248201527f70617374206c6173742063616c6c2074696d657374616d70000000000000000060448201526064016105fd565b6000838152600a60209081526040918290205491516108bb918591859101612763565b604051602081830303815290604052805190602001201461091e5760405162461bcd60e51b815260206004820152600d60248201527f68617368206d69736d617463680000000000000000000000000000000000000060448201526064016105fd565b6000838152600a60205260408082208151606081019283905291600391820191908285855b82829054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020019060100190602082600f01049283019260010382029150808411610943575050506000888152600a60209081526040808320600201549087015191870151875197985092967001000000000000000000000000000000009091046fffffffffffffffffffffffffffffffff1695509093506109f2925061297b565b6109fc919061297b565b6fffffffffffffffffffffffffffffffff1610159050600082600160200201516fffffffffffffffffffffffffffffffff1683600060200201516fffffffffffffffffffffffffffffffff16119050818015610a555750805b610aa15760405162461bcd60e51b815260206004820152600e60248201527f43616e6e6f74206578656375746500000000000000000000000000000000000060448201526064016105fd565b60005b8551811015610bc8576000868281518110610acf57634e487b7160e01b600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16868381518110610b0d57634e487b7160e01b600052603260045260246000fd5b6020026020010151604051610b2291906125e7565b6000604051808303816000865af19150503d8060008114610b5f576040519150601f19603f3d011682016040523d82523d6000602084013e610b64565b606091505b5050905080610bb55760405162461bcd60e51b815260206004820152600b60248201527f43616c6c206661696c656400000000000000000000000000000000000000000060448201526064016105fd565b5080610bc081612a48565b915050610aa4565b506040518681527f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f9060200160405180910390a150505060009283525050600a6020526040812081815560018101829055600280820183905560038201839055600482019290925560050180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000169055805460ff19169055565b73ffffffffffffffffffffffffffffffffffffffff811660009081526009602052604090205460ff165b919050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610cf95760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016105fd565b73ffffffffffffffffffffffffffffffffffffffff166000908152600160205260409020805460ff19169055565b6000610d338383610fe9565b90505b92915050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610da35760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016105fd565b73ffffffffffffffffffffffffffffffffffffffff919091166000908152600960205260409020805460ff1916911515919091179055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610e425760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016105fd565b73ffffffffffffffffffffffffffffffffffffffff90921660009081526008602090815260408083207fffffffff0000000000000000000000000000000000000000000000000000000090941683529290522055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610eff5760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016105fd565b600455565b600080600080610f12611f80565b6000868152600a60205260408082208054600182015460028301548451606081019586905292956fffffffffffffffffffffffffffffffff8084169670010000000000000000000000000000000094859004821696949093041693600393840193909284928390855b82829054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020019060100190602082600f01049283019260010382029150808411610f7b579050505050505090509450945094509450945091939590929450565b73ffffffffffffffffffffffffffffffffffffffff821660009081526008602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000851684529091528120548061104b575050600354610d36565b9050610d36565b5092915050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146110c05760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016105fd565b600355565b6000828152600a60205260408120600101546fffffffffffffffffffffffffffffffff166111355760405162461bcd60e51b815260206004820152601760248201527f70726f706f73616c20646f6573206e6f7420657869737400000000000000000060448201526064016105fd565b6000838152600a60205260409020600201546fffffffffffffffffffffffffffffffff164311156111a85760405162461bcd60e51b815260206004820152600760248201527f457870697265640000000000000000000000000000000000000000000000000060448201526064016105fd565b6000805b865181101561147c5760006111c28260016129af565b90505b87518110156112aa578781815181106111ee57634e487b7160e01b600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1688838151811061122c57634e487b7160e01b600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614156112985760405162461bcd60e51b815260206004820152600f60248201527f6475706c6963617465207661756c74000000000000000000000000000000000060448201526064016105fd565b806112a281612a48565b9150506111c5565b50600960008883815181106112cf57634e487b7160e01b600052603260045260246000fd5b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff1682528101919091526040016000205460ff1661134f5760405162461bcd60e51b815260206004820152601060248201527f756e7665726966696564207661756c740000000000000000000000000000000060448201526064016105fd565b86818151811061136f57634e487b7160e01b600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1663e91f323533600a600089815260200190815260200160002060010160009054906101000a90046fffffffffffffffffffffffffffffffff168985815181106113e657634e487b7160e01b600052603260045260246000fd5b60200260200101516040518463ffffffff1660e01b815260040161140c93929190612603565b602060405180830381600087803b15801561142657600080fd5b505af115801561143a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061145e91906124b2565b611468908361297b565b91508061147481612a48565b9150506111ac565b50336000908152600b602090815260408083208784529091529020546fffffffffffffffffffffffffffffffff16156115af57336000908152600b6020908152604080832087845280835281842054600a845291909320929091526fffffffffffffffffffffffffffffffff81169160030190700100000000000000000000000000000000900460ff16600281111561152557634e487b7160e01b600052602160045260246000fd5b6003811061154357634e487b7160e01b600052603260045260246000fd5b600291828204019190066010028282829054906101000a90046fffffffffffffffffffffffffffffffff1661157891906129c7565b92506101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055505b6040518060400160405280826fffffffffffffffffffffffffffffffff1681526020018460028111156115f257634e487b7160e01b600052602160045260246000fd5b9052336000908152600b602090815260408083208884528252909120825181546fffffffffffffffffffffffffffffffff9091167fffffffffffffffffffffffffffffffff0000000000000000000000000000000082168117835592840151919283917fffffffffffffffffffffffffffffff000000000000000000000000000000000016177001000000000000000000000000000000008360028111156116aa57634e487b7160e01b600052602160045260246000fd5b021790555050506000848152600a6020526040902081906003018460028111156116e457634e487b7160e01b600052602160045260246000fd5b6003811061170257634e487b7160e01b600052603260045260246000fd5b600291828204019190066010028282829054906101000a90046fffffffffffffffffffffffffffffffff16611737919061297b565b82546fffffffffffffffffffffffffffffffff9182166101009390930a928302919092021990911617905550336000818152600b602090815260408083208884529091529081902090518692917f79597d31752b5a254be8f219c055ebfefe925e085d99c7b04b0883298b356951916117b09190612866565b60405180910390a36fffffffffffffffffffffffffffffffff1695945050505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461183a5760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016105fd565b6118728173ffffffffffffffffffffffffffffffffffffffff166000908152600160208190526040909120805460ff19169091179055565b50565b8483146118c45760405162461bcd60e51b815260206004820152601560248201527f6172726179206c656e677468206d69736d61746368000000000000000000000060448201526064016105fd565b846119115760405162461bcd60e51b815260206004820152600e60248201527f656d7074792070726f706f73616c00000000000000000000000000000000000060448201526064016105fd565b60008686868660405160200161192a9493929190612653565b60408051601f19818403018152919052805160209091012090506000805b87811015611a895760006119c188888481811061197557634e487b7160e01b600052603260045260246000fd5b905060200281019061198791906128c3565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611f5792505050565b90506000600860008c8c868181106119e957634e487b7160e01b600052603260045260246000fd5b90506020020160208101906119fe919061225d565b73ffffffffffffffffffffffffffffffffffffffff168152602080820192909252604090810160009081207fffffffff000000000000000000000000000000000000000000000000000000008616825290925290205490508015611a625780611a66565b6003545b905083811115611a74578093505b50508080611a8190612a48565b915050611948565b50600554600454611a9a90436129af565b611aa491906129af565b8411611af25760405162461bcd60e51b815260206004820152601a60248201527f65787069726573206265666f726520766f74696e6720656e647300000000000060448201526064016105fd565b6040518060e00160405280838152602001600143611b1091906129f8565b6fffffffffffffffffffffffffffffffff16815260200160045443611b3591906129af565b6fffffffffffffffffffffffffffffffff16815260200160055460045443611b5d91906129af565b611b6791906129af565b6fffffffffffffffffffffffffffffffff168152602001826fffffffffffffffffffffffffffffffff168152602001600a60006007548152602001908152602001600020600301600380602002604051908101604052809291908260038015611c29576020028201916000905b82829054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020019060100190602082600f01049283019260010382029150808411611bd45790505b50505091835250506fffffffffffffffffffffffffffffffff8681166020928301526007546000908152600a835260409081902084518155928401519084015190821670010000000000000000000000000000000091831682021760018401556060840151608085015190831692160217600282015560a0820151611cb49060038084019190611f9e565b5060c08201518160050160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055509050506000611d458d8d80806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250611d3c92508e91508f9050612a0f565b600754876110c5565b90506000600654831115611d5b57600654611d5d565b825b3360009081526001602052604090205490915060ff16611dc75780821015611dc75760405162461bcd60e51b815260206004820152601960248201527f696e73756666696369656e7420766f74696e6720706f7765720000000000000060448201526064016105fd565b7fafbd5d299242bf861d198949ad835672e2e35b2e1838cee606a0b5aec2b4fa426007544360045443611dfa91906129af565b600554600454611e0a90436129af565b611e1491906129af565b60408051948552602085019390935291830152606082015260800160405180910390a1600160076000828254611e4a91906129af565b90915550505050505050505050505050505050565b611e67611f80565b6000828152600a60205260408082208151606081019283905292600391820192908390855b82829054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020019060100190602082600f01049283019260010382029150808411611e8c575094979650505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611f525760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016105fd565b600655565b602001517ffffffffff00000000000000000000000000000000000000000000000000000001690565b60405180606001604052806003906020820280368337509192915050565b60028301918390821561204e5791602002820160005b8382111561201057835183826101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055509260200192601001602081600f01049283019260010302611fb4565b801561204c5782816101000a8154906fffffffffffffffffffffffffffffffff0219169055601001602081600f01049283019260010302612010565b505b5061205a92915061205e565b5090565b5b8082111561205a576000815560010161205f565b600061208661208184612957565b612926565b83815290506020808201908360005b868110156121155781358601601f89818301126120b157600080fd5b813567ffffffffffffffff8111156120cb576120cb612a97565b6120dc86601f198484011601612926565b91508082528a868285010111156120f257600080fd5b808684018784013760009082018601528552509282019290820190600101612095565b505050509392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610c8d57600080fd5b60008083601f840112612155578182fd5b50813567ffffffffffffffff81111561216c578182fd5b6020830191508360208260051b850101111561218757600080fd5b9250929050565b600082601f83011261219e578081fd5b813560206121ae61208183612957565b80838252828201915082860187848660051b89010111156121cd578586fd5b855b858110156121f2576121e082612120565b845292840192908401906001016121cf565b5090979650505050505050565b600082601f83011261220f578081fd5b610d3383833560208501612073565b80357fffffffff0000000000000000000000000000000000000000000000000000000081168114610c8d57600080fd5b803560038110610c8d57600080fd5b60006020828403121561226e578081fd5b610d3382612120565b60008060408385031215612289578081fd5b61229283612120565b9150602083013580151581146122a6578182fd5b809150509250929050565b600080604083850312156122c3578182fd5b6122cc83612120565b91506122da6020840161221e565b90509250929050565b6000806000606084860312156122f7578081fd5b61230084612120565b925061230e6020850161221e565b9150604084013590509250925092565b60008060408385031215612330578182fd5b61233983612120565b946020939093013593505050565b60008060008060008060008060008060c08b8d031215612365578586fd5b8a3567ffffffffffffffff8082111561237c578788fd5b6123888e838f01612144565b909c509a5060208d01359150808211156123a0578788fd5b6123ac8e838f01612144565b909a50985060408d01359150808211156123c4578788fd5b6123d08e838f01612144565b909850965060608d01359150808211156123e8578586fd5b506123f58d828e01612144565b90955093505060808b0135915061240e60a08c0161224e565b90509295989b9194979a5092959850565b60008060008060808587031215612434578384fd5b843567ffffffffffffffff8082111561244b578586fd5b6124578883890161218e565b9550602087013591508082111561246c578485fd5b50612479878288016121ff565b9350506040850135915061248f6060860161224e565b905092959194509250565b6000602082840312156124ab578081fd5b5035919050565b6000602082840312156124c3578081fd5b5051919050565b6000806000606084860312156124de578081fd5b83359250602084013567ffffffffffffffff808211156124fc578283fd5b6125088783880161218e565b9350604086013591508082111561251d578283fd5b5061252a868287016121ff565b9150509250925092565b8060005b60038110156125695781516fffffffffffffffffffffffffffffffff16845260209384019390910190600101612538565b50505050565b60008284528282602086013780602084860101526020601f19601f85011685010190509392505050565b600081518084526125b1816020860160208601612a1c565b601f01601f19169290920160200192915050565b600381106125e357634e487b7160e01b600052602160045260246000fd5b9052565b600082516125f9818460208701612a1c565b9190910192915050565b600073ffffffffffffffffffffffffffffffffffffffff851682526fffffffffffffffffffffffffffffffff841660208301526060604083015261264a6060830184612599565b95945050505050565b6040808252810184905260008560608301825b878110156126aa576126998261267b85612120565b73ffffffffffffffffffffffffffffffffffffffff16815260200190565b602093909301929150600101612666565b506020915083810382850152808582528282019050828660051b83010187855b8881101561275357601f1985840301845281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18b360301811261270c578788fd5b8a01803567ffffffffffffffff811115612724578889fd5b8036038c1315612732578889fd5b61273f85828a850161256f565b9588019594505050908501906001016126ca565b50909a9950505050505050505050565b604080825283519082018190526000906020906060840190828701845b828110156127b457815173ffffffffffffffffffffffffffffffffffffffff16845260208401935090840190600101612780565b50505083810382850152845180825282820190600581901b83018401878501865b8381101561280357601f198684030185526127f1838351612599565b948701949250908601906001016127d5565b50909998505050505050505050565b60608101610d368284612534565b8581526fffffffffffffffffffffffffffffffff858116602083015284811660408301528316606082015260e0810161285c6080830184612534565b9695505050505050565b81546fffffffffffffffffffffffffffffffff81168252604082019061105260208401608083901c60ff166125c5565b6fffffffffffffffffffffffffffffffff83168152604081016128bc60208301846125c5565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126128f7578283fd5b83018035915067ffffffffffffffff821115612911578283fd5b60200191503681900382131561218757600080fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561294f5761294f612a97565b604052919050565b600067ffffffffffffffff82111561297157612971612a97565b5060051b60200190565b60006fffffffffffffffffffffffffffffffff8083168185168083038211156129a6576129a6612a81565b01949350505050565b600082198211156129c2576129c2612a81565b500190565b60006fffffffffffffffffffffffffffffffff838116908316818110156129f0576129f0612a81565b039392505050565b600082821015612a0a57612a0a612a81565b500390565b6000610d33368484612073565b60005b83811015612a37578181015183820152602001612a1f565b838111156125695750506000910152565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612a7a57612a7a612a81565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220bc6d4453703e4ee25abe58fb6b9168464ee64d124b4f7673f3e5d76071a8241764736f6c63430008030033";

export class TestCoreVoting__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _timelock: string,
    _baseQuorum: BigNumberish,
    _minProposalPower: BigNumberish,
    _gsc: string,
    votingVaults: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestCoreVoting> {
    return super.deploy(
      _timelock,
      _baseQuorum,
      _minProposalPower,
      _gsc,
      votingVaults,
      overrides || {}
    ) as Promise<TestCoreVoting>;
  }
  getDeployTransaction(
    _timelock: string,
    _baseQuorum: BigNumberish,
    _minProposalPower: BigNumberish,
    _gsc: string,
    votingVaults: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _timelock,
      _baseQuorum,
      _minProposalPower,
      _gsc,
      votingVaults,
      overrides || {}
    );
  }
  attach(address: string): TestCoreVoting {
    return super.attach(address) as TestCoreVoting;
  }
  connect(signer: Signer): TestCoreVoting__factory {
    return super.connect(signer) as TestCoreVoting__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestCoreVotingInterface {
    return new utils.Interface(_abi) as TestCoreVotingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestCoreVoting {
    return new Contract(address, _abi, signerOrProvider) as TestCoreVoting;
  }
}
