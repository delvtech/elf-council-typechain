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
exports.MockVotingVault__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_user",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
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
        inputs: [
            {
                internalType: "address",
                name: "_user",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "setVotingPower",
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
        name: "votingPower",
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
];
var _bytecode = "0x608060405234801561001057600080fd5b50610215806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063274b91a914610046578063c07473f61461007f578063e91f3235146100b1575b600080fd5b61007d610054366004610134565b73ffffffffffffffffffffffffffffffffffffffff909116600090815260208190526040902055565b005b61009f61008d366004610113565b60006020819052908152604090205481565b60405190815260200160405180910390f35b61009f6100bf36600461015d565b50505073ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b803573ffffffffffffffffffffffffffffffffffffffff8116811461010e57600080fd5b919050565b600060208284031215610124578081fd5b61012d826100ea565b9392505050565b60008060408385031215610146578081fd5b61014f836100ea565b946020939093013593505050565b60008060008060608587031215610172578182fd5b61017b856100ea565b935060208501359250604085013567ffffffffffffffff8082111561019e578384fd5b818701915087601f8301126101b1578384fd5b8135818111156101bf578485fd5b8860208285010111156101d0578485fd5b9598949750506020019450505056fea26469706673582212207d1ce9b7f1cf982e370e1b30fdfdd4792714cbe59a03ec7d8225c3a40c66103864736f6c63430008030033";
var MockVotingVault__factory = /** @class */ (function (_super) {
    __extends(MockVotingVault__factory, _super);
    function MockVotingVault__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    MockVotingVault__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    MockVotingVault__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    MockVotingVault__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    MockVotingVault__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    MockVotingVault__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    MockVotingVault__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    MockVotingVault__factory.bytecode = _bytecode;
    MockVotingVault__factory.abi = _abi;
    return MockVotingVault__factory;
}(ethers_1.ContractFactory));
exports.MockVotingVault__factory = MockVotingVault__factory;
