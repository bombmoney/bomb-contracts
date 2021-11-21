/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {Signer, utils, Contract, ContractFactory, Overrides} from 'ethers';
import {Provider, TransactionRequest} from '@ethersproject/providers';
import type {BombTaxOracle, BombTaxOracleInterface} from '../BombTaxOracle';

const _abi = [
    {
        inputs: [
            {
                internalType: 'address',
                name: '_bomb',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_weth',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_pair',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_token',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: '_amountIn',
                type: 'uint256',
            },
        ],
        name: 'consult',
        outputs: [
            {
                internalType: 'uint144',
                name: 'amountOut',
                type: 'uint144',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'pair',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_pair',
                type: 'address',
            },
        ],
        name: 'setPair',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_bomb',
                type: 'address',
            },
        ],
        name: 'setBomb',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_weth',
                type: 'address',
            },
        ],
        name: 'setWeth',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'bomb',
        outputs: [
            {
                internalType: 'contract IERC20',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'weth',
        outputs: [
            {
                internalType: 'contract IERC20',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
];

const _bytecode =
    '0x608060405234801561001057600080fd5b50604051610ab5380380610ab58339818101604052606081101561003357600080fd5b5080516020820151604090920151909190600061004e6101eb565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506001600160a01b0383166100f3576040805162461bcd60e51b815260206004820152601860248201527f746f6d6220616464726573732063616e6e6f7420626520300000000000000000604482015290519081900360640190fd5b6001600160a01b03821661014e576040805162461bcd60e51b815260206004820152601860248201527f7766746d20616464726573732063616e6e6f7420626520300000000000000000604482015290519081900360640190fd5b6001600160a01b0381166101a9576040805162461bcd60e51b815260206004820152601860248201527f7061697220616464726573732063616e6e6f7420626520300000000000000000604482015290519081900360640190fd5b600180546001600160a01b039485166001600160a01b0319918216179091556002805493851693821693909317909255600380549190931691161790556101ef565b3390565b6108b7806101fe6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063a8aa1b3111610066578063a8aa1b3114610170578063c040f23a14610178578063c74b60d014610180578063f2fde38b146101a6578063f4f45b46146101cc5761009e565b80633ddac953146100a3578063545e8857146100f6578063715018a61461011e5780638187f516146101265780638da5cb5b1461014c575b600080fd5b6100cf600480360360408110156100b957600080fd5b506001600160a01b0381351690602001356101d4565b6040805171ffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61011c6004803603602081101561010c57600080fd5b50356001600160a01b0316610349565b005b61011c610428565b61011c6004803603602081101561013c57600080fd5b50356001600160a01b03166104d4565b6101546105b3565b604080516001600160a01b039092168252519081900360200190f35b6101546105c2565b6101546105d1565b61011c6004803603602081101561019657600080fd5b50356001600160a01b03166105e0565b61011c600480360360208110156101bc57600080fd5b50356001600160a01b03166106bf565b6101546107c1565b6001546000906001600160a01b03848116911614610232576040805162461bcd60e51b81526020600482015260166024820152753a37b5b2b7103732b2b239903a37903132903a37b6b160511b604482015290519081900360640190fd5b600154600354604080516370a0823160e01b81526001600160a01b039283166004820152905160009392909216916370a0823191602480820192602092909190829003018186803b15801561028657600080fd5b505afa15801561029a573d6000803e3d6000fd5b505050506040513d60208110156102b057600080fd5b5051600254600354604080516370a0823160e01b81526001600160a01b039283166004820152905193945060009391909216916370a08231916024808301926020929190829003018186803b15801561030857600080fd5b505afa15801561031c573d6000803e3d6000fd5b505050506040513d602081101561033257600080fd5b5051905061034082826107d0565b95945050505050565b610351610837565b6001600160a01b03166103626105b3565b6001600160a01b0316146103ab576040805162461bcd60e51b81526020600482018190526024820152600080516020610862833981519152604482015290519081900360640190fd5b6001600160a01b038116610406576040805162461bcd60e51b815260206004820152601860248201527f7766746d20616464726573732063616e6e6f7420626520300000000000000000604482015290519081900360640190fd5b600280546001600160a01b0319166001600160a01b0392909216919091179055565b610430610837565b6001600160a01b03166104416105b3565b6001600160a01b03161461048a576040805162461bcd60e51b81526020600482018190526024820152600080516020610862833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6104dc610837565b6001600160a01b03166104ed6105b3565b6001600160a01b031614610536576040805162461bcd60e51b81526020600482018190526024820152600080516020610862833981519152604482015290519081900360640190fd5b6001600160a01b038116610591576040805162461bcd60e51b815260206004820152601860248201527f7061697220616464726573732063616e6e6f7420626520300000000000000000604482015290519081900360640190fd5b600380546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031690565b6003546001600160a01b031681565b6001546001600160a01b031681565b6105e8610837565b6001600160a01b03166105f96105b3565b6001600160a01b031614610642576040805162461bcd60e51b81526020600482018190526024820152600080516020610862833981519152604482015290519081900360640190fd5b6001600160a01b03811661069d576040805162461bcd60e51b815260206004820152601860248201527f746f6d6220616464726573732063616e6e6f7420626520300000000000000000604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6106c7610837565b6001600160a01b03166106d86105b3565b6001600160a01b031614610721576040805162461bcd60e51b81526020600482018190526024820152600080516020610862833981519152604482015290519081900360640190fd5b6001600160a01b0381166107665760405162461bcd60e51b815260040180806020018281038252602681526020018061083c6026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6002546001600160a01b031681565b6000808211610826576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b81838161082f57fe5b049392505050565b339056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a2646970667358221220c6789cde340e40a806d2dad81706e551d4facc908ac58b2adb4849c9015da6e264736f6c634300060c0033';

type BombTaxOracleConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: BombTaxOracleConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BombTaxOracle__factory extends ContractFactory {
    constructor(...args: BombTaxOracleConstructorParams) {
        if (isSuperArgs(args)) {
            super(...args);
        } else {
            super(_abi, _bytecode, args[0]);
        }
    }

    deploy(_bomb: string, _weth: string, _pair: string, overrides?: Overrides & {from?: string | Promise<string>}): Promise<BombTaxOracle> {
        return super.deploy(_bomb, _weth, _pair, overrides || {}) as Promise<BombTaxOracle>;
    }
    getDeployTransaction(_bomb: string, _weth: string, _pair: string, overrides?: Overrides & {from?: string | Promise<string>}): TransactionRequest {
        return super.getDeployTransaction(_bomb, _weth, _pair, overrides || {});
    }
    attach(address: string): BombTaxOracle {
        return super.attach(address) as BombTaxOracle;
    }
    connect(signer: Signer): BombTaxOracle__factory {
        return super.connect(signer) as BombTaxOracle__factory;
    }
    static readonly bytecode = _bytecode;
    static readonly abi = _abi;
    static createInterface(): BombTaxOracleInterface {
        return new utils.Interface(_abi) as BombTaxOracleInterface;
    }
    static connect(address: string, signerOrProvider: Signer | Provider): BombTaxOracle {
        return new Contract(address, _abi, signerOrProvider) as BombTaxOracle;
    }
}
