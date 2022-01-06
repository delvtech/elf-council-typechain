import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CoreVoting, CoreVotingInterface } from "../CoreVoting";
export declare class CoreVoting__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_timelock: string, _baseQuorum: BigNumberish, _minProposalPower: BigNumberish, _gsc: string, votingVaults: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CoreVoting>;
    getDeployTransaction(_timelock: string, _baseQuorum: BigNumberish, _minProposalPower: BigNumberish, _gsc: string, votingVaults: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CoreVoting;
    connect(signer: Signer): CoreVoting__factory;
    static readonly bytecode = "0x6080604052620000136119606003620002d1565b600455620000256119606005620002d1565b6005553480156200003557600080fd5b5060405162002c2538038062002c258339810160408190526200005891620001c1565b600080546001600160a01b03191633178155600385905560068490555b8151811015620000ed57600160096000848481518110620000a657634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191691151591909117905580620000e481620002f3565b91505062000075565b50620000f98562000130565b62000125826001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b50505050506200033d565b6000546001600160a01b03163314620001825760405162461bcd60e51b815260206004820152601060248201526f29b2b73232b9103737ba1037bbb732b960811b604482015260640160405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b80516001600160a01b0381168114620001bc57600080fd5b919050565b600080600080600060a08688031215620001d9578081fd5b620001e486620001a4565b94506020808701519450604087015193506200020360608801620001a4565b60808801519093506001600160401b038082111562000220578384fd5b818901915089601f83011262000234578384fd5b81518181111562000249576200024962000327565b8060051b604051601f19603f8301168101818110858211171562000271576200027162000327565b604052828152858101935084860182860187018e101562000290578788fd5b8795505b83861015620002bd57620002a881620001a4565b85526001959095019493860193860162000294565b508096505050505050509295509295909350565b6000816000190483118215151615620002ee57620002ee62000311565b500290565b60006000198214156200030a576200030a62000311565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6128d8806200034d6000396000f3fe608060405234801561001057600080fd5b50600436106101ad5760003560e01c80639f2524ee116100ee578063bd9c75a511610097578063d4b8756711610071578063d4b87567146104a9578063da35c664146104b2578063f131e5eb146104bb578063fe9fbb80146104c4576101ad565b8063bd9c75a514610463578063c52ea3db14610476578063d1b6762714610496576101ad565b8063af7a060c116100c8578063af7a060c146103fa578063b6a5d7de1461042d578063b918161114610440576101ad565b80639f2524ee1461037a578063a4c95077146103de578063aa35fb51146103e7576101ad565b806327c97fa51161015b5780634eb665af116101355780634eb665af146102fc578063771a53231461030f5780637d5709eb146103225780638da5cb5b14610335576101ad565b806327c97fa5146102c3578063341a7b42146102d65780634392b99c146102e9576101ad565b806313af40351161018c57806313af40351461029457806315126a3d146102a75780631c39c96c146102ba576101ad565b806214d11d146101b2578063013cf08b146101c7578063045544431461027d575b600080fd5b6101c56101c03660046122de565b6104fd565b005b6102316101d53660046122de565b600a60205260009081526040902080546001820154600283015460059093015491926fffffffffffffffffffffffffffffffff808316937001000000000000000000000000000000009384900482169383831693048216911686565b604080519687526fffffffffffffffffffffffffffffffff9586166020880152938516938601939093529083166060850152821660808401521660a082015260c0015b60405180910390f35b61028660045481565b604051908152602001610274565b6101c56102a23660046120a1565b61056e565b6101c56102b536600461230e565b61061c565b61028660035481565b6101c56102d13660046120a1565b610bc6565b6101c56102e43660046120bb565b610c5b565b6101c56102f7366004612127565b610cfa565b6101c561030a3660046122de565b610db7565b61028661031d3660046120f5565b610e23565b6101c56103303660046122de565b610e94565b6000546103559073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610274565b6103d0610388366004612162565b600b6020908152600092835260408084209091529082529020546fffffffffffffffffffffffffffffffff811690700100000000000000000000000000000000900460ff1682565b60405161027492919061268e565b61028660055481565b6102866103f5366004612263565b610f00565b61041d6104083660046120a1565b60096020526000908152604090205460ff1681565b6040519015158152602001610274565b6101c561043b3660046120a1565b61160e565b61041d61044e3660046120a1565b60016020526000908152604090205460ff1681565b6101c561047136600461218b565b6116b0565b6104896104843660046122de565b611c9a565b604051610274919061261b565b6101c56104a43660046122de565b611d28565b61028660065481565b61028660075481565b61028661196081565b61041d6104d23660046120a1565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105695760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064015b60405180910390fd5b600555565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105d55760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610560565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60025460ff161561066f5760405162461bcd60e51b815260206004820152600a60248201527f5265656e7472616e6379000000000000000000000000000000000000000000006044820152606401610560565b6002805460ff191660019081179091556000848152600a6020526040902001546fffffffffffffffffffffffffffffffff700100000000000000000000000000000000909104164310156107055760405162461bcd60e51b815260206004820152600c60248201527f6e6f7420756e6c6f636b656400000000000000000000000000000000000000006044820152606401610560565b6000838152600a602052604090206001015470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff166107895760405162461bcd60e51b815260206004820152601360248201527f50726576696f75736c79206578656375746564000000000000000000000000006044820152606401610560565b6000838152600a60205260409020600501546fffffffffffffffffffffffffffffffff1643106107fb5760405162461bcd60e51b815260206004820152601860248201527f70617374206c6173742063616c6c2074696d657374616d7000000000000000006044820152606401610560565b6000838152600a602090815260409182902054915161081e91859185910161256c565b60405160208183030381529060405280519060200120146108815760405162461bcd60e51b815260206004820152600d60248201527f68617368206d69736d61746368000000000000000000000000000000000000006044820152606401610560565b6000838152600a60205260408082208151606081019283905291600391820191908285855b82829054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020019060100190602082600f010492830192600103820291508084116108a6575050506000888152600a60209081526040808320600201549087015191870151875197985092967001000000000000000000000000000000009091046fffffffffffffffffffffffffffffffff169550909350610955925061276c565b61095f919061276c565b6fffffffffffffffffffffffffffffffff1610159050600082600160200201516fffffffffffffffffffffffffffffffff1683600060200201516fffffffffffffffffffffffffffffffff161190508180156109b85750805b610a045760405162461bcd60e51b815260206004820152600e60248201527f43616e6e6f7420657865637574650000000000000000000000000000000000006044820152606401610560565b60005b8551811015610b2b576000868281518110610a3257634e487b7160e01b600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16868381518110610a7057634e487b7160e01b600052603260045260246000fd5b6020026020010151604051610a8591906123f0565b6000604051808303816000865af19150503d8060008114610ac2576040519150601f19603f3d011682016040523d82523d6000602084013e610ac7565b606091505b5050905080610b185760405162461bcd60e51b815260206004820152600b60248201527f43616c6c206661696c65640000000000000000000000000000000000000000006044820152606401610560565b5080610b238161283d565b915050610a07565b506040518681527f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f9060200160405180910390a150505060009283525050600a6020526040812081815560018101829055600280820183905560038201839055600482019290925560050180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000169055805460ff19169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610c2d5760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610560565b73ffffffffffffffffffffffffffffffffffffffff166000908152600160205260409020805460ff19169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610cc25760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610560565b73ffffffffffffffffffffffffffffffffffffffff919091166000908152600960205260409020805460ff1916911515919091179055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610d615760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610560565b73ffffffffffffffffffffffffffffffffffffffff90921660009081526008602090815260408083207fffffffff0000000000000000000000000000000000000000000000000000000090941683529290522055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610e1e5760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610560565b600455565b73ffffffffffffffffffffffffffffffffffffffff821660009081526008602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000008516845290915281205480610e85575050600354610e8e565b9050610e8e565b505b92915050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610efb5760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610560565b600355565b6000828152600a60205260408120600101546fffffffffffffffffffffffffffffffff16610f705760405162461bcd60e51b815260206004820152601760248201527f70726f706f73616c20646f6573206e6f742065786973740000000000000000006044820152606401610560565b6000838152600a60205260409020600201546fffffffffffffffffffffffffffffffff16431115610fe35760405162461bcd60e51b815260206004820152600760248201527f45787069726564000000000000000000000000000000000000000000000000006044820152606401610560565b6000805b86518110156112b7576000610ffd8260016127a0565b90505b87518110156110e55787818151811061102957634e487b7160e01b600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1688838151811061106757634e487b7160e01b600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614156110d35760405162461bcd60e51b815260206004820152600f60248201527f6475706c6963617465207661756c7400000000000000000000000000000000006044820152606401610560565b806110dd8161283d565b915050611000565b506009600088838151811061110a57634e487b7160e01b600052603260045260246000fd5b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff1682528101919091526040016000205460ff1661118a5760405162461bcd60e51b815260206004820152601060248201527f756e7665726966696564207661756c74000000000000000000000000000000006044820152606401610560565b8681815181106111aa57634e487b7160e01b600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1663e91f323533600a600089815260200190815260200160002060010160009054906101000a90046fffffffffffffffffffffffffffffffff1689858151811061122157634e487b7160e01b600052603260045260246000fd5b60200260200101516040518463ffffffff1660e01b81526004016112479392919061240c565b602060405180830381600087803b15801561126157600080fd5b505af1158015611275573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061129991906122f6565b6112a3908361276c565b9150806112af8161283d565b915050610fe7565b50336000908152600b602090815260408083208784529091529020546fffffffffffffffffffffffffffffffff16156113ea57336000908152600b6020908152604080832087845280835281842054600a845291909320929091526fffffffffffffffffffffffffffffffff81169160030190700100000000000000000000000000000000900460ff16600281111561136057634e487b7160e01b600052602160045260246000fd5b6003811061137e57634e487b7160e01b600052603260045260246000fd5b600291828204019190066010028282829054906101000a90046fffffffffffffffffffffffffffffffff166113b391906127b8565b92506101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055505b6040518060400160405280826fffffffffffffffffffffffffffffffff16815260200184600281111561142d57634e487b7160e01b600052602160045260246000fd5b9052336000908152600b602090815260408083208884528252909120825181546fffffffffffffffffffffffffffffffff9091167fffffffffffffffffffffffffffffffff0000000000000000000000000000000082168117835592840151919283917fffffffffffffffffffffffffffffff000000000000000000000000000000000016177001000000000000000000000000000000008360028111156114e557634e487b7160e01b600052602160045260246000fd5b021790555050506000848152600a60205260409020819060030184600281111561151f57634e487b7160e01b600052602160045260246000fd5b6003811061153d57634e487b7160e01b600052603260045260246000fd5b600291828204019190066010028282829054906101000a90046fffffffffffffffffffffffffffffffff16611572919061276c565b82546fffffffffffffffffffffffffffffffff9182166101009390930a928302919092021990911617905550336000818152600b602090815260408083208884529091529081902090518692917f79597d31752b5a254be8f219c055ebfefe925e085d99c7b04b0883298b356951916115eb919061265e565b60405180910390a36fffffffffffffffffffffffffffffffff1695945050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146116755760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610560565b6116ad8173ffffffffffffffffffffffffffffffffffffffff166000908152600160208190526040909120805460ff19169091179055565b50565b8483146116ff5760405162461bcd60e51b815260206004820152601560248201527f6172726179206c656e677468206d69736d6174636800000000000000000000006044820152606401610560565b8461174c5760405162461bcd60e51b815260206004820152600e60248201527f656d7074792070726f706f73616c0000000000000000000000000000000000006044820152606401610560565b600086868686604051602001611765949392919061245c565b60408051601f19818403018152919052805160209091012090506000805b878110156118c45760006117fc8888848181106117b057634e487b7160e01b600052603260045260246000fd5b90506020028101906117c291906126b4565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611d9492505050565b90506000600860008c8c8681811061182457634e487b7160e01b600052603260045260246000fd5b905060200201602081019061183991906120a1565b73ffffffffffffffffffffffffffffffffffffffff168152602080820192909252604090810160009081207fffffffff00000000000000000000000000000000000000000000000000000000861682529092529020549050801561189d57806118a1565b6003545b9050838111156118af578093505b505080806118bc9061283d565b915050611783565b506005546004546118d590436127a0565b6118df91906127a0565b841161192d5760405162461bcd60e51b815260206004820152601a60248201527f65787069726573206265666f726520766f74696e6720656e64730000000000006044820152606401610560565b6040518060e0016040528083815260200160014361194b91906127e9565b6fffffffffffffffffffffffffffffffff1681526020016004544361197091906127a0565b6fffffffffffffffffffffffffffffffff1681526020016005546004544361199891906127a0565b6119a291906127a0565b6fffffffffffffffffffffffffffffffff168152602001826fffffffffffffffffffffffffffffffff168152602001600a60006007548152602001908152602001600020600301600380602002604051908101604052809291908260038015611a64576020028201916000905b82829054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020019060100190602082600f01049283019260010382029150808411611a0f5790505b50505091835250506fffffffffffffffffffffffffffffffff8681166020928301526007546000908152600a835260409081902084518155928401519084015190821670010000000000000000000000000000000091831682021760018401556060840151608085015190831692160217600282015560a0820151611aef9060038084019190611dbd565b5060c08201518160050160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055509050506000611b808d8d80806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250611b7792508e91508f9050612800565b60075487610f00565b90506000600654831115611b9657600654611b98565b825b3360009081526001602052604090205490915060ff16611c025780821015611c025760405162461bcd60e51b815260206004820152601960248201527f696e73756666696369656e7420766f74696e6720706f776572000000000000006044820152606401610560565b7fafbd5d299242bf861d198949ad835672e2e35b2e1838cee606a0b5aec2b4fa426007544360045443611c3591906127a0565b600554600454611c4590436127a0565b611c4f91906127a0565b60408051948552602085019390935291830152606082015260800160405180910390a1600160076000828254611c8591906127a0565b90915550505050505050505050505050505050565b611ca2611e7d565b6000828152600a60205260408082208151606081019283905292600391820192908390855b82829054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020019060100190602082600f01049283019260010382029150808411611cc7579050505050505090505b919050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611d8f5760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610560565b600655565b602001517ffffffffff00000000000000000000000000000000000000000000000000000001690565b600283019183908215611e6d5791602002820160005b83821115611e2f57835183826101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055509260200192601001602081600f01049283019260010302611dd3565b8015611e6b5782816101000a8154906fffffffffffffffffffffffffffffffff0219169055601001602081600f01049283019260010302611e2f565b505b50611e79929150611e9b565b5090565b60405180606001604052806003906020820280368337509192915050565b5b80821115611e795760008155600101611e9c565b6000611ec3611ebe84612748565b612717565b83815290506020808201908360005b86811015611f525781358601601f8981830112611eee57600080fd5b813567ffffffffffffffff811115611f0857611f0861288c565b611f1986601f198484011601612717565b91508082528a86828501011115611f2f57600080fd5b808684018784013760009082018601528552509282019290820190600101611ed2565b505050509392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611d2357600080fd5b60008083601f840112611f92578182fd5b50813567ffffffffffffffff811115611fa9578182fd5b6020830191508360208260051b8501011115611fc457600080fd5b9250929050565b600082601f830112611fdb578081fd5b81356020611feb611ebe83612748565b80838252828201915082860187848660051b890101111561200a578586fd5b855b8581101561202f5761201d82611f5d565b8452928401929084019060010161200c565b5090979650505050505050565b600082601f83011261204c578081fd5b61205b83833560208501611eb0565b9392505050565b80357fffffffff0000000000000000000000000000000000000000000000000000000081168114611d2357600080fd5b803560038110611d2357600080fd5b6000602082840312156120b2578081fd5b61205b82611f5d565b600080604083850312156120cd578081fd5b6120d683611f5d565b9150602083013580151581146120ea578182fd5b809150509250929050565b60008060408385031215612107578182fd5b61211083611f5d565b915061211e60208401612062565b90509250929050565b60008060006060848603121561213b578081fd5b61214484611f5d565b925061215260208501612062565b9150604084013590509250925092565b60008060408385031215612174578182fd5b61217d83611f5d565b946020939093013593505050565b60008060008060008060008060008060c08b8d0312156121a9578586fd5b8a3567ffffffffffffffff808211156121c0578788fd5b6121cc8e838f01611f81565b909c509a5060208d01359150808211156121e4578788fd5b6121f08e838f01611f81565b909a50985060408d0135915080821115612208578788fd5b6122148e838f01611f81565b909850965060608d013591508082111561222c578586fd5b506122398d828e01611f81565b90955093505060808b0135915061225260a08c01612092565b90509295989b9194979a5092959850565b60008060008060808587031215612278578384fd5b843567ffffffffffffffff8082111561228f578586fd5b61229b88838901611fcb565b955060208701359150808211156122b0578485fd5b506122bd8782880161203c565b935050604085013591506122d360608601612092565b905092959194509250565b6000602082840312156122ef578081fd5b5035919050565b600060208284031215612307578081fd5b5051919050565b600080600060608486031215612322578081fd5b83359250602084013567ffffffffffffffff80821115612340578283fd5b61234c87838801611fcb565b93506040860135915080821115612361578283fd5b5061236e8682870161203c565b9150509250925092565b60008284528282602086013780602084860101526020601f19601f85011685010190509392505050565b600081518084526123ba81602086016020860161280d565b601f01601f19169290920160200192915050565b600381106123ec57634e487b7160e01b600052602160045260246000fd5b9052565b6000825161240281846020870161280d565b9190910192915050565b600073ffffffffffffffffffffffffffffffffffffffff851682526fffffffffffffffffffffffffffffffff841660208301526060604083015261245360608301846123a2565b95945050505050565b6040808252810184905260008560608301825b878110156124b3576124a28261248485611f5d565b73ffffffffffffffffffffffffffffffffffffffff16815260200190565b60209390930192915060010161246f565b506020915083810382850152808582528282019050828660051b83010187855b8881101561255c57601f1985840301845281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18b3603018112612515578788fd5b8a01803567ffffffffffffffff81111561252d578889fd5b8036038c131561253b578889fd5b61254885828a8501612378565b9588019594505050908501906001016124d3565b50909a9950505050505050505050565b604080825283519082018190526000906020906060840190828701845b828110156125bd57815173ffffffffffffffffffffffffffffffffffffffff16845260208401935090840190600101612589565b50505083810382850152845180825282820190600581901b83018401878501865b8381101561260c57601f198684030185526125fa8383516123a2565b948701949250908601906001016125de565b50909998505050505050505050565b60608101818360005b60038110156126555781516fffffffffffffffffffffffffffffffff16835260209283019290910190600101612624565b50505092915050565b81546fffffffffffffffffffffffffffffffff811682526040820190610e8c60208401608083901c60ff166123ce565b6fffffffffffffffffffffffffffffffff831681526040810161205b60208301846123ce565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126126e8578283fd5b83018035915067ffffffffffffffff821115612702578283fd5b602001915036819003821315611fc457600080fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156127405761274061288c565b604052919050565b600067ffffffffffffffff8211156127625761276261288c565b5060051b60200190565b60006fffffffffffffffffffffffffffffffff80831681851680830382111561279757612797612876565b01949350505050565b600082198211156127b3576127b3612876565b500190565b60006fffffffffffffffffffffffffffffffff838116908316818110156127e1576127e1612876565b039392505050565b6000828210156127fb576127fb612876565b500390565b600061205b368484611eb0565b60005b83811015612828578181015183820152602001612810565b83811115612837576000848401525b50505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561286f5761286f612876565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220183f61696cf8da5f9dc0b6495bdada8e7593349706eaff06a17852e77b990e2964736f6c63430008030033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: ({
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        type: string;
        stateMutability?: undefined;
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
        anonymous?: undefined;
    })[];
    static createInterface(): CoreVotingInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CoreVoting;
}
