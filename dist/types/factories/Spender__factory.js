"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spender__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "_spender",
                type: "address",
            },
            {
                internalType: "contract IERC20",
                name: "_token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_smallSpendLimit",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_mediumSpendLimit",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_highSpendLimit",
                type: "uint256",
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
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "blockExpenditure",
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
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "destination",
                type: "address",
            },
        ],
        name: "highSpend",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "highSpendLimit",
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
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "destination",
                type: "address",
            },
        ],
        name: "mediumSpend",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "mediumSpendLimit",
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
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "destination",
                type: "address",
            },
        ],
        name: "removeToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "limits",
                type: "uint256[]",
            },
        ],
        name: "setLimits",
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
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "destination",
                type: "address",
            },
        ],
        name: "smallSpend",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "smallSpendLimit",
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
var _bytecode = "0x60a060405234801561001057600080fd5b50604051610ed3380380610ed383398101604081905261002f9161010f565b600080546001600160a01b0319163317905561006c856001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b6100758661009c565b60609390931b6001600160601b0319166080526003919091556004556005555061018f9050565b6000546001600160a01b031633146100ed5760405162461bcd60e51b815260206004820152601060248201526f29b2b73232b9103737ba1037bbb732b960811b604482015260640160405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60008060008060008060c08789031215610127578182fd5b865161013281610177565b602088015190965061014381610177565b604088015190955061015481610177565b80945050606087015192506080870151915060a087015190509295509295509295565b6001600160a01b038116811461018c57600080fd5b50565b60805160601c610d116101c26000396000818161026a0152818161058a015281816106680152610a4e0152610d116000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80639c19fa8111610097578063d6343f1411610066578063d6343f141461023c578063ec36ca8c14610245578063fc0c546a14610265578063fe9fbb801461028c57610100565b80639c19fa81146101da578063b6a5d7de146101e3578063b9181611146101f6578063ce0891d51461022957610100565b806327c97fa5116100d357806327c97fa51461015c57806333fe56761461016f5780635919ffb2146101825780638da5cb5b1461019557610100565b806303e41d20146101055780630d9460a01461011a57806313af40351461012d578063157e664a14610140575b600080fd5b610118610113366004610c44565b61029f565b005b610118610128366004610c44565b61030a565b61011861013b366004610af5565b61036c565b61014960035481565b6040519081526020015b60405180910390f35b61011861016a366004610af5565b61041a565b61011861017d366004610c44565b6104cd565b610118610190366004610b16565b6106e9565b6000546101b59073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610153565b61014960045481565b6101186101f1366004610af5565b61082b565b610219610204366004610af5565b60016020526000908152604090205460ff1681565b6040519015158152602001610153565b610118610237366004610c44565b6108eb565b61014960055481565b610149610253366004610c14565b60026020526000908152604090205481565b6101b57f000000000000000000000000000000000000000000000000000000000000000081565b61021961029a366004610af5565b61094d565b6102a83361094d565b6102f95760405162461bcd60e51b815260206004820152601560248201527f53656e646572206e6f7420417574686f72697a6564000000000000000000000060448201526064015b60405180910390fd5b610306828260045461097c565b5050565b6103133361094d565b61035f5760405162461bcd60e51b815260206004820152601560248201527f53656e646572206e6f7420417574686f72697a6564000000000000000000000060448201526064016102f0565b610306828260035461097c565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103d35760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016102f0565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104815760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016102f0565b73ffffffffffffffffffffffffffffffffffffffff16600090815260016020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105345760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016102f0565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561061c576040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a082319060240160206040518083038186803b1580156105e157600080fd5b505afa1580156105f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106199190610c2c565b91505b6040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8281166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90604401602060405180830381600087803b1580156106ac57600080fd5b505af11580156106c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e49190610bf4565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107505760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016102f0565b8060008151811061078a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151600381905550806001815181106107d2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516004819055508060028151811061081a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160058190555050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146108925760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016102f0565b6108e88173ffffffffffffffffffffffffffffffffffffffff16600090815260016020819052604090912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169091179055565b50565b6108f43361094d565b6109405760405162461bcd60e51b815260206004820152601560248201527f53656e646572206e6f7420417574686f72697a6564000000000000000000000060448201526064016102f0565b610306828260055461097c565b73ffffffffffffffffffffffffffffffffffffffff811660009081526001602052604090205460ff165b919050565b43600090815260026020526040902054816109978286610c6f565b11156109e55760405162461bcd60e51b815260206004820152601460248201527f5370656e64204c696d697420457863656564656400000000000000000000000060448201526064016102f0565b6109ef8185610c6f565b436000908152600260205260409081902091909155517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152602482018690527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90604401602060405180830381600087803b158015610a9257600080fd5b505af1158015610aa6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aca9190610bf4565b5050505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461097757600080fd5b600060208284031215610b06578081fd5b610b0f82610ad1565b9392505050565b60006020808385031215610b28578182fd5b823567ffffffffffffffff80821115610b3f578384fd5b818501915085601f830112610b52578384fd5b813581811115610b6457610b64610cac565b8060051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f83011681018181108582111715610ba757610ba7610cac565b604052828152858101935084860182860187018a1015610bc5578788fd5b8795505b83861015610be7578035855260019590950194938601938601610bc9565b5098975050505050505050565b600060208284031215610c05578081fd5b81518015158114610b0f578182fd5b600060208284031215610c25578081fd5b5035919050565b600060208284031215610c3d578081fd5b5051919050565b60008060408385031215610c56578081fd5b82359150610c6660208401610ad1565b90509250929050565b60008219821115610ca7577f4e487b710000000000000000000000000000000000000000000000000000000081526011600452602481fd5b500190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea2646970667358221220c91cfa557831699147c9ae60a88c87fb07cd981e8e6703e12851848a3fef94c164736f6c63430008030033";
var Spender__factory = /** @class */ (function (_super) {
    __extends(Spender__factory, _super);
    function Spender__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    Spender__factory.prototype.deploy = function (_owner, _spender, _token, _smallSpendLimit, _mediumSpendLimit, _highSpendLimit, overrides) {
        return _super.prototype.deploy.call(this, _owner, _spender, _token, _smallSpendLimit, _mediumSpendLimit, _highSpendLimit, overrides || {});
    };
    Spender__factory.prototype.getDeployTransaction = function (_owner, _spender, _token, _smallSpendLimit, _mediumSpendLimit, _highSpendLimit, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _owner, _spender, _token, _smallSpendLimit, _mediumSpendLimit, _highSpendLimit, overrides || {});
    };
    Spender__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Spender__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Spender__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Spender__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Spender__factory.bytecode = _bytecode;
    Spender__factory.abi = _abi;
    return Spender__factory;
}(ethers_1.ContractFactory));
exports.Spender__factory = Spender__factory;
