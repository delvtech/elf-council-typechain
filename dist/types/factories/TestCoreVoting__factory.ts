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
];

const _bytecode =
  "0x6080604052620000136119606003620002e0565b600455620000256119606005620002e0565b6005553480156200003557600080fd5b5060405162002c9738038062002c978339810160408190526200005891620001d0565b600080546001600160a01b0319163317815560038590556006849055859085908590859085905b8151811015620000f757600160096000848481518110620000b057634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191691151591909117905580620000ee8162000302565b9150506200007f565b5062000103856200013f565b6200012f826001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b505050505050505050506200034c565b6000546001600160a01b03163314620001915760405162461bcd60e51b815260206004820152601060248201526f29b2b73232b9103737ba1037bbb732b960811b604482015260640160405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b80516001600160a01b0381168114620001cb57600080fd5b919050565b600080600080600060a08688031215620001e8578081fd5b620001f386620001b3565b94506020808701519450604087015193506200021260608801620001b3565b60808801519093506001600160401b03808211156200022f578384fd5b818901915089601f83011262000243578384fd5b81518181111562000258576200025862000336565b8060051b604051601f19603f8301168101818110858211171562000280576200028062000336565b604052828152858101935084860182860187018e10156200029f578788fd5b8795505b83861015620002cc57620002b781620001b3565b855260019590950194938601938601620002a3565b508096505050505050509295509295909350565b6000816000190483118215151615620002fd57620002fd62000320565b500290565b600060001982141562000319576200031962000320565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b61293b806200035c6000396000f3fe608060405234801561001057600080fd5b50600436106101ce5760003560e01c8063771a532311610104578063b9181611116100a2578063d4b8756711610071578063d4b87567146104ac578063da35c664146104b5578063f131e5eb146104be578063fe9fbb80146104c7576101ce565b8063b918161114610450578063bd9c75a514610473578063ca5f9d0614610486578063d1b6762714610499576101ce565b8063a4c95077116100de578063a4c95077146103fe578063aa35fb5114610407578063af7a060c1461041a578063b6a5d7de1461043d576101ce565b8063771a5323146103935780637d5709eb146103a65780638da5cb5b146103b9576101ce565b806327c97fa5116101715780634392b99c1161014b5780634392b99c146103405780634eb665af146103535780636e7685301461036657806370469c261461038a576101ce565b806327c97fa51461030757806333968c661461031a578063341a7b421461032d576101ce565b806313af4035116101ad57806313af4035146102b557806315126a3d146102c8578063180d97c1146102db5780631c39c96c146102fe576101ce565b806214d11d146101d3578063013cf08b146101e8578063045544431461029e575b600080fd5b6101e66101e1366004612344565b610500565b005b6102526101f6366004612344565b600a60205260009081526040902080546001820154600283015460059093015491926fffffffffffffffffffffffffffffffff808316937001000000000000000000000000000000009384900482169383831693048216911686565b604080519687526fffffffffffffffffffffffffffffffff9586166020880152938516938601939093529083166060850152821660808401521660a082015260c0015b60405180910390f35b6102a760045481565b604051908152602001610295565b6101e66102c3366004612130565b610571565b6101e66102d6366004612374565b61061f565b6102ee6102e9366004612130565b610bc9565b6040519015158152602001610295565b6102a760035481565b6101e6610315366004612130565b610bf8565b6102a7610328366004612184565b610c8d565b6101e661033b36600461214a565b610ca2565b6101e661034e3660046121b6565b610d41565b6101e6610361366004612344565b610dfe565b610379610374366004612344565b610e6a565b60405161029595949392919061265f565b6102a7600c5481565b6102a76103a1366004612184565b610f4f565b6101e66103b4366004612344565b610fb8565b6000546103d99073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610295565b6102a760055481565b6102a76104153660046122c9565b611024565b6102ee610428366004612130565b60096020526000908152604090205460ff1681565b6101e661044b366004612130565b611732565b6102ee61045e366004612130565b60016020526000908152604090205460ff1681565b6101e66104813660046121f1565b6117d4565b6101e6610494366004612344565b600c55565b6101e66104a7366004612344565b611dbe565b6102a760065481565b6102a760075481565b6102a761196081565b6102ee6104d5366004612130565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b60005473ffffffffffffffffffffffffffffffffffffffff16331461056c5760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064015b60405180910390fd5b600555565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105d85760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610563565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60025460ff16156106725760405162461bcd60e51b815260206004820152600a60248201527f5265656e7472616e6379000000000000000000000000000000000000000000006044820152606401610563565b6002805460ff191660019081179091556000848152600a6020526040902001546fffffffffffffffffffffffffffffffff700100000000000000000000000000000000909104164310156107085760405162461bcd60e51b815260206004820152600c60248201527f6e6f7420756e6c6f636b656400000000000000000000000000000000000000006044820152606401610563565b6000838152600a602052604090206001015470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff1661078c5760405162461bcd60e51b815260206004820152601360248201527f50726576696f75736c79206578656375746564000000000000000000000000006044820152606401610563565b6000838152600a60205260409020600501546fffffffffffffffffffffffffffffffff1643106107fe5760405162461bcd60e51b815260206004820152601860248201527f70617374206c6173742063616c6c2074696d657374616d7000000000000000006044820152606401610563565b6000838152600a60209081526040918290205491516108219185918591016125b0565b60405160208183030381529060405280519060200120146108845760405162461bcd60e51b815260206004820152600d60248201527f68617368206d69736d61746368000000000000000000000000000000000000006044820152606401610563565b6000838152600a60205260408082208151606081019283905291600391820191908285855b82829054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020019060100190602082600f010492830192600103820291508084116108a9575050506000888152600a60209081526040808320600201549087015191870151875197985092967001000000000000000000000000000000009091046fffffffffffffffffffffffffffffffff16955090935061095892506127cf565b61096291906127cf565b6fffffffffffffffffffffffffffffffff1610159050600082600160200201516fffffffffffffffffffffffffffffffff1683600060200201516fffffffffffffffffffffffffffffffff161190508180156109bb5750805b610a075760405162461bcd60e51b815260206004820152600e60248201527f43616e6e6f7420657865637574650000000000000000000000000000000000006044820152606401610563565b60005b8551811015610b2e576000868281518110610a3557634e487b7160e01b600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16868381518110610a7357634e487b7160e01b600052603260045260246000fd5b6020026020010151604051610a889190612434565b6000604051808303816000865af19150503d8060008114610ac5576040519150601f19603f3d011682016040523d82523d6000602084013e610aca565b606091505b5050905080610b1b5760405162461bcd60e51b815260206004820152600b60248201527f43616c6c206661696c65640000000000000000000000000000000000000000006044820152606401610563565b5080610b26816128a0565b915050610a0a565b506040518681527f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f9060200160405180910390a150505060009283525050600a6020526040812081815560018101829055600280820183905560038201839055600482019290925560050180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000169055805460ff19169055565b73ffffffffffffffffffffffffffffffffffffffff811660009081526009602052604090205460ff165b919050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610c5f5760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610563565b73ffffffffffffffffffffffffffffffffffffffff166000908152600160205260409020805460ff19169055565b6000610c998383610f4f565b90505b92915050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610d095760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610563565b73ffffffffffffffffffffffffffffffffffffffff919091166000908152600960205260409020805460ff1916911515919091179055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610da85760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610563565b73ffffffffffffffffffffffffffffffffffffffff90921660009081526008602090815260408083207fffffffff0000000000000000000000000000000000000000000000000000000090941683529290522055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610e655760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610563565b600455565b600080600080610e78611e53565b6000868152600a60205260408082208054600182015460028301548451606081019586905292956fffffffffffffffffffffffffffffffff8084169670010000000000000000000000000000000094859004821696949093041693600393840193909284928390855b82829054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020019060100190602082600f01049283019260010382029150808411610ee1579050505050505090509450945094509450945091939590929450565b73ffffffffffffffffffffffffffffffffffffffff821660009081526008602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000008516845290915281205480610fb1575050600354610c9c565b9050610c9c565b60005473ffffffffffffffffffffffffffffffffffffffff16331461101f5760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610563565b600355565b6000828152600a60205260408120600101546fffffffffffffffffffffffffffffffff166110945760405162461bcd60e51b815260206004820152601760248201527f70726f706f73616c20646f6573206e6f742065786973740000000000000000006044820152606401610563565b6000838152600a60205260409020600201546fffffffffffffffffffffffffffffffff164311156111075760405162461bcd60e51b815260206004820152600760248201527f45787069726564000000000000000000000000000000000000000000000000006044820152606401610563565b6000805b86518110156113db576000611121826001612803565b90505b87518110156112095787818151811061114d57634e487b7160e01b600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1688838151811061118b57634e487b7160e01b600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614156111f75760405162461bcd60e51b815260206004820152600f60248201527f6475706c6963617465207661756c7400000000000000000000000000000000006044820152606401610563565b80611201816128a0565b915050611124565b506009600088838151811061122e57634e487b7160e01b600052603260045260246000fd5b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff1682528101919091526040016000205460ff166112ae5760405162461bcd60e51b815260206004820152601060248201527f756e7665726966696564207661756c74000000000000000000000000000000006044820152606401610563565b8681815181106112ce57634e487b7160e01b600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1663e91f323533600a600089815260200190815260200160002060010160009054906101000a90046fffffffffffffffffffffffffffffffff1689858151811061134557634e487b7160e01b600052603260045260246000fd5b60200260200101516040518463ffffffff1660e01b815260040161136b93929190612450565b602060405180830381600087803b15801561138557600080fd5b505af1158015611399573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113bd919061235c565b6113c790836127cf565b9150806113d3816128a0565b91505061110b565b50336000908152600b602090815260408083208784529091529020546fffffffffffffffffffffffffffffffff161561150e57336000908152600b6020908152604080832087845280835281842054600a845291909320929091526fffffffffffffffffffffffffffffffff81169160030190700100000000000000000000000000000000900460ff16600281111561148457634e487b7160e01b600052602160045260246000fd5b600381106114a257634e487b7160e01b600052603260045260246000fd5b600291828204019190066010028282829054906101000a90046fffffffffffffffffffffffffffffffff166114d7919061281b565b92506101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055505b6040518060400160405280826fffffffffffffffffffffffffffffffff16815260200184600281111561155157634e487b7160e01b600052602160045260246000fd5b9052336000908152600b602090815260408083208884528252909120825181546fffffffffffffffffffffffffffffffff9091167fffffffffffffffffffffffffffffffff0000000000000000000000000000000082168117835592840151919283917fffffffffffffffffffffffffffffff0000000000000000000000000000000000161770010000000000000000000000000000000083600281111561160957634e487b7160e01b600052602160045260246000fd5b021790555050506000848152600a60205260409020819060030184600281111561164357634e487b7160e01b600052602160045260246000fd5b6003811061166157634e487b7160e01b600052603260045260246000fd5b600291828204019190066010028282829054906101000a90046fffffffffffffffffffffffffffffffff1661169691906127cf565b82546fffffffffffffffffffffffffffffffff9182166101009390930a928302919092021990911617905550336000818152600b602090815260408083208884529091529081902090518692917f79597d31752b5a254be8f219c055ebfefe925e085d99c7b04b0883298b3569519161170f91906126ca565b60405180910390a36fffffffffffffffffffffffffffffffff1695945050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146117995760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610563565b6117d18173ffffffffffffffffffffffffffffffffffffffff166000908152600160208190526040909120805460ff19169091179055565b50565b8483146118235760405162461bcd60e51b815260206004820152601560248201527f6172726179206c656e677468206d69736d6174636800000000000000000000006044820152606401610563565b846118705760405162461bcd60e51b815260206004820152600e60248201527f656d7074792070726f706f73616c0000000000000000000000000000000000006044820152606401610563565b60008686868660405160200161188994939291906124a0565b60408051601f19818403018152919052805160209091012090506000805b878110156119e85760006119208888848181106118d457634e487b7160e01b600052603260045260246000fd5b90506020028101906118e69190612717565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611e2a92505050565b90506000600860008c8c8681811061194857634e487b7160e01b600052603260045260246000fd5b905060200201602081019061195d9190612130565b73ffffffffffffffffffffffffffffffffffffffff168152602080820192909252604090810160009081207fffffffff0000000000000000000000000000000000000000000000000000000086168252909252902054905080156119c157806119c5565b6003545b9050838111156119d3578093505b505080806119e0906128a0565b9150506118a7565b506005546004546119f99043612803565b611a039190612803565b8411611a515760405162461bcd60e51b815260206004820152601a60248201527f65787069726573206265666f726520766f74696e6720656e64730000000000006044820152606401610563565b6040518060e00160405280838152602001600143611a6f919061284c565b6fffffffffffffffffffffffffffffffff16815260200160045443611a949190612803565b6fffffffffffffffffffffffffffffffff16815260200160055460045443611abc9190612803565b611ac69190612803565b6fffffffffffffffffffffffffffffffff168152602001826fffffffffffffffffffffffffffffffff168152602001600a60006007548152602001908152602001600020600301600380602002604051908101604052809291908260038015611b88576020028201916000905b82829054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020019060100190602082600f01049283019260010382029150808411611b335790505b50505091835250506fffffffffffffffffffffffffffffffff8681166020928301526007546000908152600a835260409081902084518155928401519084015190821670010000000000000000000000000000000091831682021760018401556060840151608085015190831692160217600282015560a0820151611c139060038084019190611e71565b5060c08201518160050160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055509050506000611ca48d8d80806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250611c9b92508e91508f9050612863565b60075487611024565b90506000600654831115611cba57600654611cbc565b825b3360009081526001602052604090205490915060ff16611d265780821015611d265760405162461bcd60e51b815260206004820152601960248201527f696e73756666696369656e7420766f74696e6720706f776572000000000000006044820152606401610563565b7fafbd5d299242bf861d198949ad835672e2e35b2e1838cee606a0b5aec2b4fa426007544360045443611d599190612803565b600554600454611d699043612803565b611d739190612803565b60408051948552602085019390935291830152606082015260800160405180910390a1600160076000828254611da99190612803565b90915550505050505050505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611e255760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610563565b600655565b602001517ffffffffff00000000000000000000000000000000000000000000000000000001690565b60405180606001604052806003906020820280368337509192915050565b600283019183908215611f215791602002820160005b83821115611ee357835183826101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055509260200192601001602081600f01049283019260010302611e87565b8015611f1f5782816101000a8154906fffffffffffffffffffffffffffffffff0219169055601001602081600f01049283019260010302611ee3565b505b50611f2d929150611f31565b5090565b5b80821115611f2d5760008155600101611f32565b6000611f59611f54846127ab565b61277a565b83815290506020808201908360005b86811015611fe85781358601601f8981830112611f8457600080fd5b813567ffffffffffffffff811115611f9e57611f9e6128ef565b611faf86601f19848401160161277a565b91508082528a86828501011115611fc557600080fd5b808684018784013760009082018601528552509282019290820190600101611f68565b505050509392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610bf357600080fd5b60008083601f840112612028578182fd5b50813567ffffffffffffffff81111561203f578182fd5b6020830191508360208260051b850101111561205a57600080fd5b9250929050565b600082601f830112612071578081fd5b81356020612081611f54836127ab565b80838252828201915082860187848660051b89010111156120a0578586fd5b855b858110156120c5576120b382611ff3565b845292840192908401906001016120a2565b5090979650505050505050565b600082601f8301126120e2578081fd5b610c9983833560208501611f46565b80357fffffffff0000000000000000000000000000000000000000000000000000000081168114610bf357600080fd5b803560038110610bf357600080fd5b600060208284031215612141578081fd5b610c9982611ff3565b6000806040838503121561215c578081fd5b61216583611ff3565b915060208301358015158114612179578182fd5b809150509250929050565b60008060408385031215612196578182fd5b61219f83611ff3565b91506121ad602084016120f1565b90509250929050565b6000806000606084860312156121ca578081fd5b6121d384611ff3565b92506121e1602085016120f1565b9150604084013590509250925092565b60008060008060008060008060008060c08b8d03121561220f578586fd5b8a3567ffffffffffffffff80821115612226578788fd5b6122328e838f01612017565b909c509a5060208d013591508082111561224a578788fd5b6122568e838f01612017565b909a50985060408d013591508082111561226e578788fd5b61227a8e838f01612017565b909850965060608d0135915080821115612292578586fd5b5061229f8d828e01612017565b90955093505060808b013591506122b860a08c01612121565b90509295989b9194979a5092959850565b600080600080608085870312156122de578384fd5b843567ffffffffffffffff808211156122f5578586fd5b61230188838901612061565b95506020870135915080821115612316578485fd5b50612323878288016120d2565b9350506040850135915061233960608601612121565b905092959194509250565b600060208284031215612355578081fd5b5035919050565b60006020828403121561236d578081fd5b5051919050565b600080600060608486031215612388578081fd5b83359250602084013567ffffffffffffffff808211156123a6578283fd5b6123b287838801612061565b935060408601359150808211156123c7578283fd5b506123d4868287016120d2565b9150509250925092565b60008284528282602086013780602084860101526020601f19601f85011685010190509392505050565b60008151808452612420816020860160208601612870565b601f01601f19169290920160200192915050565b60008251612446818460208701612870565b9190910192915050565b600073ffffffffffffffffffffffffffffffffffffffff851682526fffffffffffffffffffffffffffffffff84166020830152606060408301526124976060830184612408565b95945050505050565b6040808252810184905260008560608301825b878110156124f7576124e6826124c885611ff3565b73ffffffffffffffffffffffffffffffffffffffff16815260200190565b6020939093019291506001016124b3565b506020915083810382850152808582528282019050828660051b83010187855b888110156125a057601f1985840301845281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18b3603018112612559578788fd5b8a01803567ffffffffffffffff811115612571578889fd5b8036038c131561257f578889fd5b61258c85828a85016123de565b958801959450505090850190600101612517565b50909a9950505050505050505050565b604080825283519082018190526000906020906060840190828701845b8281101561260157815173ffffffffffffffffffffffffffffffffffffffff168452602084019350908401906001016125cd565b50505083810382850152845180825282820190600581901b83018401878501865b8381101561265057601f1986840301855261263e838351612408565b94870194925090860190600101612622565b50909998505050505050505050565b600060e08201905086825260206fffffffffffffffffffffffffffffffff8088168285015280871660408501528086166060850152608084018560005b60038110156126bb57815184168352918401919084019060010161269c565b50505050509695505050505050565b81546fffffffffffffffffffffffffffffffff81168252604082019060801c60ff166003811061270a57634e487b7160e01b600052602160045260246000fd5b8060208401525092915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261274b578283fd5b83018035915067ffffffffffffffff821115612765578283fd5b60200191503681900382131561205a57600080fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156127a3576127a36128ef565b604052919050565b600067ffffffffffffffff8211156127c5576127c56128ef565b5060051b60200190565b60006fffffffffffffffffffffffffffffffff8083168185168083038211156127fa576127fa6128d9565b01949350505050565b60008219821115612816576128166128d9565b500190565b60006fffffffffffffffffffffffffffffffff83811690831681811015612844576128446128d9565b039392505050565b60008282101561285e5761285e6128d9565b500390565b6000610c99368484611f46565b60005b8381101561288b578181015183820152602001612873565b8381111561289a576000848401525b50505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156128d2576128d26128d9565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220ff0bbd447410ba9846d8cf39ecd4d4bd5742b62215f3b9aeb47f25ab7f2019c964736f6c63430008030033";

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
