/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  OptimisticRewards,
  OptimisticRewardsInterface,
} from "../OptimisticRewards";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_governance",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_startingRoot",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_proposer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_revoker",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "contract ILockingVault",
        name: "_lockingVault",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    name: "challengePeriod",
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
    name: "challengeRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalGrant",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "merkleProof",
        type: "bytes32[]",
      },
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "totalGrant",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "merkleProof",
        type: "bytes32[]",
      },
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
    ],
    name: "claimAndDelegate",
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
    name: "claimed",
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
    name: "lockingVault",
    outputs: [
      {
        internalType: "contract ILockingVault",
        name: "",
        type: "address",
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
    inputs: [],
    name: "pendingRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proposalTime",
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
        internalType: "bytes32",
        name: "newRoot",
        type: "bytes32",
      },
    ],
    name: "proposeRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposer",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes",
      },
    ],
    name: "queryVotePower",
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
    name: "rewardsRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_challengePeriod",
        type: "uint256",
      },
    ],
    name: "setChallengePeriod",
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
        internalType: "address",
        name: "_proposer",
        type: "address",
      },
    ],
    name: "setProposer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405262093a806008553480156200001857600080fd5b5060405162001421380380620014218339810160408190526200003b91620001d8565b6000859055606082901b6001600160601b031916608052600280546001600160a01b0319166001600160a01b0383811691821790925560405163095ea7b360e01b81526004810191909152600019602482015286918491849183169063095ea7b390604401602060405180830381600087803b158015620000bb57600080fd5b505af1158015620000d0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000f691906200025f565b505060038054336001600160a01b031991821617909155600780549091166001600160a01b038816179055506200014d9050836001600160a01b03166000908152600460205260409020805460ff19166001179055565b620001588662000164565b505050505050620002a1565b6003546001600160a01b03163314620001b65760405162461bcd60e51b815260206004820152601060248201526f29b2b73232b9103737ba1037bbb732b960811b604482015260640160405180910390fd5b600380546001600160a01b0319166001600160a01b0392909216919091179055565b60008060008060008060c08789031215620001f1578182fd5b8651620001fe8162000288565b602088015160408901519197509550620002188162000288565b60608801519094506200022b8162000288565b60808801519093506200023e8162000288565b60a0880151909250620002518162000288565b809150509295509295509295565b60006020828403121562000271578081fd5b8151801515811462000281578182fd5b9392505050565b6001600160a01b03811681146200029e57600080fd5b50565b60805160601c61115a620002c7600039600081816103450152610404015261115a6000f3fe608060405234801561001057600080fd5b50600436106101775760003560e01c80638f54532a116100d8578063c884ef831161008c578063f3f480d911610066578063f3f480d914610337578063fc0c546a14610340578063fe9fbb801461036757610177565b8063c884ef83146102e4578063d2a0434514610304578063e91f32351461032457610177565b8063b6a5d7de116100bd578063b6a5d7de14610296578063b9181611146102a9578063c635f1ee146102dc57610177565b80638f54532a14610263578063a8e4fb901461027657610177565b8063217863b71161012f5780635d475fdd116101145780635d475fdd14610202578063750588cf146102155780638da5cb5b1461021e57610177565b8063217863b7146101e657806327c97fa5146101ef57610177565b806313af40351161016057806313af4035146101a4578063184a0ae9146101b75780631fb4a228146101d357610177565b806309ed28f11461017c5780630a33e8c214610191575b600080fd5b61018f61018a366004610ff8565b61037a565b005b61018f61019f366004610e99565b610488565b61018f6101b2366004610dbe565b6105ca565b6101c060065481565b6040519081526020015b60405180910390f35b61018f6101e1366004610dbe565b610678565b6101c060005481565b61018f6101fd366004610dbe565b610726565b61018f610210366004610e81565b6107d9565b6101c060055481565b60035461023e9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101ca565b61018f610271366004610e81565b610845565b60075461023e9073ffffffffffffffffffffffffffffffffffffffff1681565b61018f6102a4366004610dbe565b6108ed565b6102cc6102b7366004610dbe565b60046020526000908152604090205460ff1681565b60405190151581526020016101ca565b61018f6109aa565b6101c06102f2366004610dbe565b60016020526000908152604090205481565b60025461023e9073ffffffffffffffffffffffffffffffffffffffff1681565b6101c0610332366004610ddf565b610a0b565b6101c060085481565b61023e7f000000000000000000000000000000000000000000000000000000000000000081565b6102cc610375366004610dbe565b610b0a565b6103b88585858580806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250610b3992505050565b6040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8281166004830152602482018790527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90604401602060405180830381600087803b15801561044857600080fd5b505af115801561045c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104809190610e61565b505050505050565b73ffffffffffffffffffffffffffffffffffffffff85166104f05760405162461bcd60e51b815260206004820152601460248201527f5a65726f20616464722064656c65676174696f6e00000000000000000000000060448201526064015b60405180910390fd5b61052e8685858580806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250610b3992505050565b6002546040517ff45346dc00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820189905287811660448301529091169063f45346dc90606401600060405180830381600087803b1580156105aa57600080fd5b505af11580156105be573d6000803e3d6000fd5b50505050505050505050565b60035473ffffffffffffffffffffffffffffffffffffffff1633146106315760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016104e7565b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60035473ffffffffffffffffffffffffffffffffffffffff1633146106df5760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016104e7565b600780547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60035473ffffffffffffffffffffffffffffffffffffffff16331461078d5760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016104e7565b73ffffffffffffffffffffffffffffffffffffffff16600090815260046020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60035473ffffffffffffffffffffffffffffffffffffffff1633146108405760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016104e7565b600855565b60075473ffffffffffffffffffffffffffffffffffffffff1633146108ac5760405162461bcd60e51b815260206004820152600c60248201527f4e6f742070726f706f736572000000000000000000000000000000000000000060448201526064016104e7565b600554158015906108be575060065415155b80156108d857506008546006546108d5919061105e565b42115b156108e4576005546000555b60055542600655565b60035473ffffffffffffffffffffffffffffffffffffffff1633146109545760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016104e7565b6109a78173ffffffffffffffffffffffffffffffffffffffff16600090815260046020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b50565b6109b333610b0a565b6109ff5760405162461bcd60e51b815260206004820152601560248201527f53656e646572206e6f7420417574686f72697a6564000000000000000000000060448201526064016104e7565b60006005819055600655565b60008080610a1b84860186610f0e565b6040517fffffffffffffffffffffffffffffffffffffffff00000000000000000000000060608b901b166020820152603481018390529193509150600090605401604051602081830303815290604052805190602001209050610a818260005483610c7a565b610acd5760405162461bcd60e51b815260206004820152600d60248201527f496e76616c69642050726f6f660000000000000000000000000000000000000060448201526064016104e7565b73ffffffffffffffffffffffffffffffffffffffff8816600090815260016020526040812054610afd9085611076565b9998505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff811660009081526004602052604090205460ff165b919050565b6040517fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003360601b16602082015260348101839052600090605401604051602081830303815290604052805190602001209050610b998260005483610c7a565b610be55760405162461bcd60e51b815260206004820152600d60248201527f496e76616c69642050726f6f660000000000000000000000000000000000000060448201526064016104e7565b336000908152600160205260409020548390610c0290869061105e565b1115610c505760405162461bcd60e51b815260206004820152601060248201527f436c61696d656420746f6f206d7563680000000000000000000000000000000060448201526064016104e7565b3360009081526001602052604081208054869290610c6f90849061105e565b909155505050505050565b600081815b8551811015610d45576000868281518110610cc3577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101519050808311610d05576040805160208101859052908101829052606001604051602081830303815290604052805190602001209250610d32565b60408051602081018390529081018490526060016040516020818303038152906040528051906020012092505b5080610d3d8161108d565b915050610c7f565b509092149392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610b3457600080fd5b60008083601f840112610d85578081fd5b50813567ffffffffffffffff811115610d9c578182fd5b6020830191508360208260051b8501011115610db757600080fd5b9250929050565b600060208284031215610dcf578081fd5b610dd882610d50565b9392505050565b60008060008060608587031215610df4578283fd5b610dfd85610d50565b935060208501359250604085013567ffffffffffffffff80821115610e20578384fd5b818701915087601f830112610e33578384fd5b813581811115610e41578485fd5b886020828501011115610e52578485fd5b95989497505060200194505050565b600060208284031215610e72578081fd5b81518015158114610dd8578182fd5b600060208284031215610e92578081fd5b5035919050565b60008060008060008060a08789031215610eb1578182fd5b86359550610ec160208801610d50565b945060408701359350606087013567ffffffffffffffff811115610ee3578283fd5b610eef89828a01610d74565b9094509250610f02905060808801610d50565b90509295509295509295565b60008060408385031215610f20578182fd5b8235915060208084013567ffffffffffffffff80821115610f3f578384fd5b818601915086601f830112610f52578384fd5b813581811115610f6457610f646110f5565b8060051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f83011681018181108582111715610fa757610fa76110f5565b604052828152858101935084860182860187018b1015610fc5578788fd5b8795505b83861015610fe7578035855260019590950194938601938601610fc9565b508096505050505050509250929050565b60008060008060006080868803121561100f578081fd5b8535945060208601359350604086013567ffffffffffffffff811115611033578182fd5b61103f88828901610d74565b9094509250611052905060608701610d50565b90509295509295909350565b60008219821115611071576110716110c6565b500190565b600082821015611088576110886110c6565b500390565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156110bf576110bf6110c6565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea26469706673582212202d15acf988f8ce6a0a3bf1ce8a2726c59aa1537fb592e214c8dcef78a875319f64736f6c63430008030033";

export class OptimisticRewards__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _governance: string,
    _startingRoot: BytesLike,
    _proposer: string,
    _revoker: string,
    _token: string,
    _lockingVault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OptimisticRewards> {
    return super.deploy(
      _governance,
      _startingRoot,
      _proposer,
      _revoker,
      _token,
      _lockingVault,
      overrides || {}
    ) as Promise<OptimisticRewards>;
  }
  getDeployTransaction(
    _governance: string,
    _startingRoot: BytesLike,
    _proposer: string,
    _revoker: string,
    _token: string,
    _lockingVault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _governance,
      _startingRoot,
      _proposer,
      _revoker,
      _token,
      _lockingVault,
      overrides || {}
    );
  }
  attach(address: string): OptimisticRewards {
    return super.attach(address) as OptimisticRewards;
  }
  connect(signer: Signer): OptimisticRewards__factory {
    return super.connect(signer) as OptimisticRewards__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OptimisticRewardsInterface {
    return new utils.Interface(_abi) as OptimisticRewardsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OptimisticRewards {
    return new Contract(address, _abi, signerOrProvider) as OptimisticRewards;
  }
}
