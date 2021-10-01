import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { EnumerableIERC20ToBytes32MapMock, EnumerableIERC20ToBytes32MapMockInterface } from "../EnumerableIERC20ToBytes32MapMock";
export declare class EnumerableIERC20ToBytes32MapMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<EnumerableIERC20ToBytes32MapMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): EnumerableIERC20ToBytes32MapMock;
    connect(signer: Signer): EnumerableIERC20ToBytes32MapMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610b56806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80635dbe47e8116100665780635dbe47e8146101e3578063adcd29d91461023d578063b464631b1461027f578063c65d2683146102e1578063e0886f90146103405761009e565b80630127190b146100a35780631f7b6d32146100fb57806329092d0e146101195780633e7b8e711461015d57806354996d5d146101ab575b600080fd5b6100e5600480360360208110156100b957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061039f565b6040518082815260200191505060405180910390f35b6101036103bc565b6040518082815260200191505060405180910390f35b61015b6004803603602081101561012f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506103cd565b005b6101a96004803603604081101561017357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610422565b005b6101e1600480360360408110156101c157600080fd5b81019080803590602001909291908035906020019092919050505061047a565b005b610225600480360360208110156101f957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610494565b60405180821515815260200191505060405180910390f35b6102696004803603602081101561025357600080fd5b81019080803590602001909291905050506104b1565b6040518082815260200191505060405180910390f35b6102cb6004803603604081101561029557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506104ce565b6040518082815260200191505060405180910390f35b61030d600480360360208110156102f757600080fd5b81019080803590602001909291905050506104ee565b604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390f35b61036c6004803603602081101561035657600080fd5b810190808035906020019092919050505061050e565b604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390f35b60006103b582600061052e90919063ffffffff16565b9050919050565b60006103c8600061057a565b905090565b60006103e382600061058890919063ffffffff16565b90507fed9840e0775590557ad736875d96c95cf1458b766335f74339951a32c82a9e338160405180821515815260200191505060405180910390a15050565b600061043a838360006107a99092919063ffffffff16565b90507fed9840e0775590557ad736875d96c95cf1458b766335f74339951a32c82a9e338160405180821515815260200191505060405180910390a1505050565b610490828260006109239092919063ffffffff16565b5050565b60006104aa82600061094590919063ffffffff16565b9050919050565b60006104c782600061099490919063ffffffff16565b9050919050565b60006104e6838360006109b79092919063ffffffff16565b905092915050565b600080610505836000610a2290919063ffffffff16565b91509150915091565b600080610525836000610a7490919063ffffffff16565b91509150915091565b60008260020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600081600001549050919050565b6000808360020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000811461079d57600060018203905060006001866000015403905060008660010160008381526020019081526020016000209050808760010160008581526020019081526020016000206000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018201548160010155905050600183018760020160008360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550866001016000838152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000905550508187600001819055508660020160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000905560019450505050506107a3565b60009150505b92915050565b6000808460020160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008114156108f65760008560000154905060405180604001604052808673ffffffffffffffffffffffffffffffffffffffff1681526020018581525086600101600083815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155905050600181018660000181905550600181018660020160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060019250505061091c565b828560010160006001840381526020019081526020016000206001018190555060009150505b9392505050565b8083600101600084815260200190815260200160002060010181905550505050565b6000808360020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415905092915050565b600082600101600083815260200190815260200160002060010154905092915050565b6000808460020160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050610a0b6000821184610a9d565b610a188560018303610994565b9150509392505050565b600080600084600101600085815260200190815260200160002090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16816001015492509250509250929050565b600080610a88838560000154116064610a9d565b610a928484610a22565b915091509250929050565b81610aac57610aab81610ab0565b5b5050565b6030600a820601600a820491506030600a830601600a830492506030600a8406018060101b8260081b8401016642414c230000000160c81b7f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260076024528060445260646000fdfea2646970667358221220bc7736497bbe44da64f2503b9f87acc972445202aa7ecb24003b1be0d351370564736f6c63430007010033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
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
        anonymous?: undefined;
    })[];
    static createInterface(): EnumerableIERC20ToBytes32MapMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): EnumerableIERC20ToBytes32MapMock;
}
