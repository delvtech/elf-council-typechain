import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Timelock, TimelockInterface } from "../Timelock";
export declare class Timelock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_waitTime: BigNumberish, _governance: string, _gsc: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Timelock>;
    getDeployTransaction(_waitTime: BigNumberish, _governance: string, _gsc: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Timelock;
    connect(signer: Signer): Timelock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506040516110eb3803806110eb83398101604081905261002f91610111565b600080546001600160a01b0319163317905561006c816001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b600383905561007a82610082565b50505061014c565b6000546001600160a01b031633146100d35760405162461bcd60e51b815260206004820152601060248201526f29b2b73232b9103737ba1037bbb732b960811b604482015260640160405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b80516001600160a01b038116811461010c57600080fd5b919050565b600080600060608486031215610125578283fd5b83519250610135602085016100f5565b9150610143604085016100f5565b90509250925092565b610f908061015b6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063c8d18a451161008c578063d8e4677511610066578063d8e4677514610217578063df351aaf1461023a578063e4d532661461024d578063fe9fbb8014610260576100ea565b8063c8d18a45146101cd578063ccca123b146101e0578063d7bcb566146101f7576100ea565b806388b49b83116100c857806388b49b831461012a5780638da5cb5b1461013d578063b6a5d7de14610187578063b91816111461019a576100ea565b806313af4035146100ef57806327c97fa514610104578063821127d414610117575b600080fd5b6101026100fd366004610bc3565b610273565b005b610102610112366004610bc3565b610326565b610102610125366004610cea565b6103bb565b610102610138366004610cd2565b61052e565b60005461015d9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b610102610195366004610bc3565b610604565b6101bd6101a8366004610bc3565b60016020526000908152604090205460ff1681565b604051901515815260200161017e565b6101026101db366004610be4565b6106a6565b6101e960035481565b60405190815260200161017e565b6101e9610205366004610cd2565b60046020526000908152604090205481565b6101bd610225366004610cd2565b60056020526000908152604090205460ff1681565b610102610248366004610cd2565b6109eb565b61010261025b366004610cd2565b610a3f565b6101bd61026e366004610bc3565b610b26565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102df5760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064015b60405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60005473ffffffffffffffffffffffffffffffffffffffff16331461038d5760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016102d6565b73ffffffffffffffffffffffffffffffffffffffff166000908152600160205260409020805460ff19169055565b6103c433610b26565b6104105760405162461bcd60e51b815260206004820152601560248201527f53656e646572206e6f7420417574686f72697a6564000000000000000000000060448201526064016102d6565b60008181526005602052604090205460ff161561046f5760405162461bcd60e51b815260206004820152601e60248201527f76616c75652063616e206f6e6c79206265206368616e676564206f6e6365000060448201526064016102d6565b6000818152600460205260409020546104ef5760405162461bcd60e51b8152602060048201526024808201527f6d7573742068617665206265656e2070726576696f75736c792072656769737460448201527f657265640000000000000000000000000000000000000000000000000000000060648201526084016102d6565b6000818152600460205260408120805484929061050d908490610eab565b90915550506000908152600560205260409020805460ff1916600117905550565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105955760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016102d6565b600081815260046020526040902054156105f15760405162461bcd60e51b815260206004820152601260248201527f616c72656164792072656769737465726564000000000000000000000000000060448201526064016102d6565b6000908152600460205260409020429055565b60005473ffffffffffffffffffffffffffffffffffffffff16331461066b5760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016102d6565b6106a38173ffffffffffffffffffffffffffffffffffffffff166000908152600160208190526040909120805460ff19169091179055565b50565b60025460ff16156106f95760405162461bcd60e51b815260206004820152600a60248201527f5265656e7472616e63790000000000000000000000000000000000000000000060448201526064016102d6565b6002805460ff1916600117905560405160009061071e90859085908590602001610d45565b60408051601f198184030181529181528151602092830120600081815260049093529120549091506107925760405162461bcd60e51b815260206004820152601d60248201527f63616c6c20686173206e6f74206265656e20696e697469616c697a656400000060448201526064016102d6565b60035460008281526004602052604090205442916107af91610eab565b106107fc5760405162461bcd60e51b815260206004820152601a60248201527f6e6f7420656e6f7567682074696d65206861732070617373656400000000000060448201526064016102d6565b8351821461084c5760405162461bcd60e51b815260206004820152601260248201527f696e76616c696420666f726d617474696e67000000000000000000000000000060448201526064016102d6565b60005b84518110156109b6576000858281518110610893577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff168585848181106108ea577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020028101906108fc9190610e48565b60405161090a929190610d35565b6000604051808303816000865af19150503d8060008114610947576040519150601f19603f3d011682016040523d82523d6000602084013e61094c565b606091505b50909150506001811515146109a35760405162461bcd60e51b815260206004820152600d60248201527f63616c6c2072657665727465640000000000000000000000000000000000000060448201526064016102d6565b50806109ae81610ec3565b91505061084f565b50600090815260046020908152604080832083905560059091529020805460ff19908116909155600280549091169055505050565b333014610a3a5760405162461bcd60e51b815260206004820152601560248201527f636f6e7472616374206d7573742062652073656c66000000000000000000000060448201526064016102d6565b600355565b60005473ffffffffffffffffffffffffffffffffffffffff163314610aa65760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016102d6565b600081815260046020526040902054610b015760405162461bcd60e51b815260206004820152601560248201527f4e6f2063616c6c20746f2062652072656d6f766564000000000000000000000060448201526064016102d6565b600090815260046020908152604080832083905560059091529020805460ff19169055565b73ffffffffffffffffffffffffffffffffffffffff811660009081526001602052604090205460ff165b919050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610b5057600080fd5b60008083601f840112610b8a578081fd5b50813567ffffffffffffffff811115610ba1578182fd5b6020830191508360208260051b8501011115610bbc57600080fd5b9250929050565b600060208284031215610bd4578081fd5b610bdd82610b55565b9392505050565b600080600060408486031215610bf8578182fd5b833567ffffffffffffffff80821115610c0f578384fd5b818601915086601f830112610c22578384fd5b8135602082821115610c3657610c36610f2b565b8160051b604051601f19603f83011681018181108682111715610c5b57610c5b610f2b565b60405283815282810186840183880185018d1015610c7757898afd5b8997505b85881015610ca057610c8c81610b55565b825260019790970196908401908401610c7b565b50909850505087013592505080821115610cb8578384fd5b50610cc586828701610b79565b9497909650939450505050565b600060208284031215610ce3578081fd5b5035919050565b60008060408385031215610cfc578182fd5b50508035926020909101359150565b60008284528282602086013780602084860101526020601f19601f85011685010190509392505050565b6000828483379101908152919050565b604080825284519082018190526000906020906060840190828801845b82811015610d9457815173ffffffffffffffffffffffffffffffffffffffff1684529284019290840190600101610d62565b50505083810382850152848152818101600586901b8201830187855b88811015610e3957601f1985840301845281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18b3603018112610df2578788fd5b8a01803567ffffffffffffffff811115610e0a578889fd5b8036038c1315610e18578889fd5b610e2585828a8501610d0b565b958801959450505090850190600101610db0565b50909998505050505050505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112610e7c578283fd5b83018035915067ffffffffffffffff821115610e96578283fd5b602001915036819003821315610bbc57600080fd5b60008219821115610ebe57610ebe610efc565b500190565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610ef557610ef5610efc565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea26469706673582212201646861ed155ba24740cd4aa07c9e81f03b3c29ba6aae3b46cab652ca752a39d64736f6c63430008030033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): TimelockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Timelock;
}
