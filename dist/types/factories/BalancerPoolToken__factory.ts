/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BalancerPoolToken,
  BalancerPoolTokenInterface,
} from "../BalancerPoolToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "tokenSymbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "decreaseApproval",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "increaseApproval",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101006040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960e0908152503480156200003957600080fd5b506040516200162238038062001622833981810160405260408110156200005f57600080fd5b81019080805160405193929190846401000000008211156200008057600080fd5b838201915060208201858111156200009757600080fd5b8251866001820283011164010000000082111715620000b557600080fd5b8083526020830192505050908051906020019080838360005b83811015620000eb578082015181840152602081019050620000ce565b50505050905090810190601f168015620001195780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200013d57600080fd5b838201915060208201858111156200015457600080fd5b82518660018202830111640100000000821117156200017257600080fd5b8083526020830192505050908051906020019080838360005b83811015620001a85780820151818401526020810190506200018b565b50505050905090810190601f168015620001d65780820380516001836020036101000a031916815260200191505b50604052505050816040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250818051906020012060808181525050808051906020012060a081815250507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60c08181525050505081600390805190602001906200027492919062000296565b5080600490805190602001906200028d92919062000296565b5050506200033c565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002d957805160ff19168380011785556200030a565b828001600101855582156200030a579182015b8281111562000309578251825591602001919060010190620002ec565b5b5090506200031991906200031d565b5090565b5b80821115620003385760008160009055506001016200031e565b5090565b60805160a05160c05160e0516112b06200037260003980610ab25250806110935250806110d55250806110b452506112b06000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063a9059cbb11610066578063a9059cbb1461044e578063d505accf146104b2578063d73dd6231461054b578063dd62ed3e146105af576100ea565b806370a082311461031b5780637ecebe001461037357806395d89b41146103cb576100ea565b806323b872dd116100c857806323b872dd146101f4578063313ce567146102785780633644e5151461029957806366188463146102b7576100ea565b806306fdde03146100ef578063095ea7b31461017257806318160ddd146101d6575b600080fd5b6100f7610627565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561013757808201518184015260208101905061011c565b50505050905090810190601f1680156101645780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101be6004803603604081101561018857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106c9565b60405180821515815260200191505060405180910390f35b6101de6106e0565b6040518082815260200191505060405180910390f35b6102606004803603606081101561020a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106ea565b60405180821515815260200191505060405180910390f35b610280610837565b604051808260ff16815260200191505060405180910390f35b6102a1610840565b6040518082815260200191505060405180910390f35b610303600480360360408110156102cd57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061084f565b60405180821515815260200191505060405180910390f35b61035d6004803603602081101561033157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610912565b6040518082815260200191505060405180910390f35b6103b56004803603602081101561038957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061095a565b6040518082815260200191505060405180910390f35b6103d36109a3565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104135780820151818401526020810190506103f8565b50505050905090810190601f1680156104405780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61049a6004803603604081101561046457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a45565b60405180821515815260200191505060405180910390f35b610549600480360360e08110156104c857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803560ff1690602001909291908035906020019092919080359060200190929190505050610a5c565b005b6105976004803603604081101561056157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c94565b60405180821515815260200191505060405180910390f35b610611600480360360408110156105c557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d39565b6040518082815260200191505060405180910390f35b606060038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106bf5780601f10610694576101008083540402835291602001916106bf565b820191906000526020600020905b8154815290600101906020018083116106a257829003601f168201915b5050505050905090565b60006106d6338484610dc0565b6001905092915050565b6000600254905090565b600080600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506107b18573ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806107a95750838210155b610197610eab565b6107bc858585610ebe565b8473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415801561081857507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114155b1561082b5761082a8533858403610dc0565b5b60019150509392505050565b60006012905090565b600061084a61108f565b905090565b600080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508083106108e9576108e433856000610dc0565b610907565b6109063385610901868561115a90919063ffffffff16565b610dc0565b5b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a3b5780601f10610a1057610100808354040283529160200191610a3b565b820191906000526020600020905b815481529060010190602001808311610a1e57829003601f168201915b5050505050905090565b6000610a52338484610ebe565b6001905092915050565b610a6a8442111560d1610eab565b6000600560008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060007f0000000000000000000000000000000000000000000000000000000000000000898989858a604051602001808781526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182815260200196505050505050506040516020818303038152906040528051906020012090506000610b588261117b565b9050600060018288888860405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610bb6573d6000803e3d6000fd5b505050602060405103519050610c35600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614158015610c2d57508b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b6101f8610eab565b60018401600560008d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610c878b8b8b610dc0565b5050505050505050505050565b6000610d2f3384610d2a85600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546111e290919063ffffffff16565b610dc0565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b81610eba57610eb981611202565b5b5050565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050610f1082821015610196610eab565b610f4c600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610199610eab565b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610fe2826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546111e290919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a350505050565b60007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006110fc611272565b30604051602001808681526020018581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019550505050505060405160208183030381529060405280519060200120905090565b600061116a838311156001610eab565b600082840390508091505092915050565b600061118561108f565b8260405160200180807f190100000000000000000000000000000000000000000000000000000000000081525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b60008082840190506111f8848210156000610eab565b8091505092915050565b6030600a820601600a820491506030600a830601600a830492506030600a8406018060101b8260081b8401016642414c230000000160c81b7f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260076024528060445260646000fd5b60004690509056fea2646970667358221220c7b6133d292adcd93f12684a4bf06941553829659ab072277cb917e0a5a9d92b64736f6c63430007010033";

export class BalancerPoolToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    tokenName: string,
    tokenSymbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BalancerPoolToken> {
    return super.deploy(
      tokenName,
      tokenSymbol,
      overrides || {}
    ) as Promise<BalancerPoolToken>;
  }
  getDeployTransaction(
    tokenName: string,
    tokenSymbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(tokenName, tokenSymbol, overrides || {});
  }
  attach(address: string): BalancerPoolToken {
    return super.attach(address) as BalancerPoolToken;
  }
  connect(signer: Signer): BalancerPoolToken__factory {
    return super.connect(signer) as BalancerPoolToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BalancerPoolTokenInterface {
    return new utils.Interface(_abi) as BalancerPoolTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BalancerPoolToken {
    return new Contract(address, _abi, signerOrProvider) as BalancerPoolToken;
  }
}
