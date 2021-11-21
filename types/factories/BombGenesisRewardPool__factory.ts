/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BombGenesisRewardPool,
  BombGenesisRewardPoolInterface,
} from "../BombGenesisRewardPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_bomb",
        type: "address",
      },
      {
        internalType: "address",
        name: "_cake",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_poolStartTime",
        type: "uint256",
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
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EmergencyWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "TOTAL_REWARDS",
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
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_lastRewardTime",
        type: "uint256",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "bomb",
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
  {
    inputs: [],
    name: "bombPerSecond",
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
    name: "cake",
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
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fromTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_toTime",
        type: "uint256",
      },
    ],
    name: "getGeneratedReward",
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
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "governanceRecoverUnsupported",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "operator",
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
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingBOMB",
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
    name: "poolEndTime",
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
    name: "poolInfo",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accBombPerShare",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isStarted",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolStartTime",
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
    name: "runningTime",
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
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    name: "setOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAllocPoint",
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
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
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
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600060055567019b30eab24dc0006008556201518060095534801561002857600080fd5b506040516118ed3803806118ed8339818101604052606081101561004b57600080fd5b5080516020820151604090920151909190428111610099576040805162461bcd60e51b815260206004808301919091526024820152636c61746560e01b604482015290519081900360640190fd5b6001600160a01b038316156100c457600180546001600160a01b0319166001600160a01b0385161790555b6001600160a01b038216156100ef57600280546001600160a01b0319166001600160a01b0384161790555b6006819055600954016007555050600080546001600160a01b031916331790556117cf8061011e6000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c80635f96dc11116100b8578063943f013d1161007c578063943f013d1461034d57806396805e5414610355578063b1b0c49e1461038f578063b3ab15fb14610397578063dce17484146103bd578063e2bbb158146103c557610142565b80635f96dc11146102e857806362241369146102f0578063630b5ba1146102f85780636e271dd51461030057806393f1a40b1461030857610142565b8063441a3e701161010a578063441a3e70146102055780634d84ff8a1461022857806351eb05a6146102545780635312ea8e1461027157806354575af41461028e578063570ca735146102c457610142565b806309cf6091146101475780631526fe271461016157806317caf6f1146101b55780631ab06ee5146101bd578063231f0c6a146101e2575b600080fd5b61014f6103e8565b60408051918252519081900360200190f35b61017e6004803603602081101561017757600080fd5b50356103f6565b604080516001600160a01b039096168652602086019490945284840192909252606084015215156080830152519081900360a00190f35b61014f610441565b6101e0600480360360408110156101d357600080fd5b5080359060200135610447565b005b61014f600480360360408110156101f857600080fd5b50803590602001356104f5565b6101e06004803603604081101561021b57600080fd5b50803590602001356105ba565b61014f6004803603604081101561023e57600080fd5b50803590602001356001600160a01b0316610777565b6101e06004803603602081101561026a57600080fd5b50356108d8565b6101e06004803603602081101561028757600080fd5b5035610a36565b6101e0600480360360608110156102a457600080fd5b506001600160a01b03813581169160208101359160409091013516610ad2565b6102cc610c1a565b604080516001600160a01b039092168252519081900360200190f35b61014f610c29565b61014f610c2f565b6101e0610c35565b61014f610c58565b6103346004803603604081101561031e57600080fd5b50803590602001356001600160a01b0316610c5e565b6040805192835260208301919091528051918290030190f35b61014f610c82565b6101e06004803603608081101561036b57600080fd5b508035906001600160a01b0360208201351690604081013515159060600135610c88565b6102cc610e85565b6101e0600480360360208110156103ad57600080fd5b50356001600160a01b0316610e94565b6102cc610eff565b6101e0600480360360408110156103db57600080fd5b5080359060200135610f0e565b69021e19e0c9bab240000081565b6003818154811061040357fe5b6000918252602090912060059091020180546001820154600283015460038401546004909401546001600160a01b0390931694509092909160ff1685565b60055481565b6000546001600160a01b031633146104905760405162461bcd60e51b815260040180806020018281038252602b8152602001806116fe602b913960400191505060405180910390fd5b610498610c35565b6000600383815481106104a757fe5b60009182526020909120600590910201600481015490915060ff16156104ee576104ea826104e483600101546005546110ba90919063ffffffff16565b90611117565b6005555b6001015550565b6000818310610506575060006105b4565b600754821061056e576007548310610520575060006105b4565b60065483116105535761054c6008546105466006546007546110ba90919063ffffffff16565b90611178565b90506105b4565b61054c600854610546856007546110ba90919063ffffffff16565b600654821161057f575060006105b4565b60065483116105a35761054c600854610546600654856110ba90919063ffffffff16565b60085461054c9061054684866110ba565b92915050565b60003390506000600384815481106105ce57fe5b600091825260208083208784526004825260408085206001600160a01b0388168652909252922080546005909202909201925084111561064a576040805162461bcd60e51b81526020600482015260126024820152711dda5d1a191c985dce881b9bdd0819dbdbd960721b604482015290519081900360640190fd5b610653856108d8565b6000610690826001015461068a670de0b6b3a76400006106848760030154876000015461117890919063ffffffff16565b906111d1565b906110ba565b905080156106e2576106a28482611238565b6040805182815290516001600160a01b038616917fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486919081900360200190a25b841561070c5781546106f490866110ba565b8255825461070c906001600160a01b031685876112ee565b6003830154825461072a91670de0b6b3a76400009161068491611178565b600183015560408051868152905187916001600160a01b038716917ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5689181900360200190a3505050505050565b6000806003848154811061078757fe5b60009182526020808320878452600480835260408086206001600160a01b038a811688529085528187206005969096029093016003810154815483516370a0823160e01b81523095810195909552925191985095969491909316926370a08231926024808201939291829003018186803b15801561080457600080fd5b505afa158015610818573d6000803e3d6000fd5b505050506040513d602081101561082e57600080fd5b505160028501549091504211801561084557508015155b156108a257600061085a8560020154426104f5565b9050600061087b60055461068488600101548561117890919063ffffffff16565b905061089d6108968461068484670de0b6b3a7640000611178565b8590611117565b935050505b6108cd836001015461068a670de0b6b3a764000061068486886000015461117890919063ffffffff16565b979650505050505050565b6000600382815481106108e757fe5b90600052602060002090600502019050806002015442116109085750610a33565b8054604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561095257600080fd5b505afa158015610966573d6000803e3d6000fd5b505050506040513d602081101561097c57600080fd5b5051905080610992575042600290910155610a33565b600482015460ff166109c35760048201805460ff191660019081179091558201546005546109bf91611117565b6005555b60055415610a2a5760006109db8360020154426104f5565b905060006109fc60055461068486600101548561117890919063ffffffff16565b9050610a22610a178461068484670de0b6b3a7640000611178565b600386015490611117565b600385015550505b50426002909101555b50565b600060038281548110610a4557fe5b600091825260208083208584526004825260408085203380875293528420805485825560018201959095556005909302018054909450919291610a95916001600160a01b039190911690836112ee565b604080518281529051859133917fbb757047c2b5f3974fe26b7c10f732e7bce710b0952a71082702781e62ae05959181900360200190a350505050565b6000546001600160a01b03163314610b1b5760405162461bcd60e51b815260040180806020018281038252602b8152602001806116fe602b913960400191505060405180910390fd5b6007546276a70001421015610c01576001546001600160a01b0384811691161415610b76576040805162461bcd60e51b815260206004808301919091526024820152633137b6b160e11b604482015290519081900360640190fd5b60035460005b81811015610bfe57600060038281548110610b9357fe5b6000918252602090912060059091020180549091506001600160a01b0387811691161415610bf5576040805162461bcd60e51b815260206004820152600a6024820152693837b7b6173a37b5b2b760b11b604482015290519081900360640190fd5b50600101610b7c565b50505b610c156001600160a01b03841682846112ee565b505050565b6000546001600160a01b031681565b60065481565b60085481565b60035460005b81811015610c5457610c4c816108d8565b600101610c3b565b5050565b60075481565b60046020908152600092835260408084209091529082529020805460019091015482565b60095481565b6000546001600160a01b03163314610cd15760405162461bcd60e51b815260040180806020018281038252602b8152602001806116fe602b913960400191505060405180910390fd5b610cda83611340565b8115610ce857610ce8610c35565b600654421015610d145780610d005750600654610d0f565b600654811015610d0f57506006545b610d28565b801580610d2057504281105b15610d285750425b600060065482111580610d3b5750428211155b6040805160a0810182526001600160a01b03878116825260208201898152928201868152600060608401818152861580156080870190815260038054600181018255945295517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b600590940293840180546001600160a01b031916919096161790945594517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c82015590517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85d82015592517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85e84015590517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85f909201805460ff191692151592909217909155909150610e7e57600554610e7a9086611117565b6005555b5050505050565b6001546001600160a01b031681565b6000546001600160a01b03163314610edd5760405162461bcd60e51b815260040180806020018281038252602b8152602001806116fe602b913960400191505060405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6002546001600160a01b031681565b6000339050600060038481548110610f2257fe5b600091825260208083208784526004825260408085206001600160a01b0388168652909252922060059091029091019150610f5c856108d8565b805415610fe8576000610f94826001015461068a670de0b6b3a76400006106848760030154876000015461117890919063ffffffff16565b90508015610fe657610fa68482611238565b6040805182815290516001600160a01b038616917fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486919081900360200190a25b505b8315611050578154611005906001600160a01b03168430876113da565b60025482546001600160a01b03908116911614156110415761103a611032612710610684876126ac611178565b825490611117565b8155611050565b805461104d9085611117565b81555b6003820154815461106e91670de0b6b3a76400009161068491611178565b600182015560408051858152905186916001600160a01b038616917f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a159181900360200190a35050505050565b600082821115611111576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b600082820183811015611171576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b600082611187575060006105b4565b8282028284828161119457fe5b04146111715760405162461bcd60e51b815260040180806020018281038252602181526020018061174f6021913960400191505060405180910390fd5b6000808211611227576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b81838161123057fe5b049392505050565b600154604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561128357600080fd5b505afa158015611297573d6000803e3d6000fd5b505050506040513d60208110156112ad57600080fd5b505190508015610c1557808211156112db576001546112d6906001600160a01b031684836112ee565b610c15565b600154610c15906001600160a01b031684845b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610c1590849061143a565b60035460005b81811015610c1557826001600160a01b03166003828154811061136557fe5b60009182526020909120600590910201546001600160a01b031614156113d2576040805162461bcd60e51b815260206004820152601f60248201527f426f6d6247656e65736973506f6f6c3a206578697374696e6720706f6f6c3f00604482015290519081900360640190fd5b600101611346565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261143490859061143a565b50505050565b606061148f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166114eb9092919063ffffffff16565b805190915015610c15578080602001905160208110156114ae57600080fd5b5051610c155760405162461bcd60e51b815260040180806020018281038252602a815260200180611770602a913960400191505060405180910390fd5b60606114fa8484600085611502565b949350505050565b6060824710156115435760405162461bcd60e51b81526004018080602001828103825260268152602001806117296026913960400191505060405180910390fd5b61154c85611653565b61159d576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106115dc5780518252601f1990920191602091820191016115bd565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461163e576040519150601f19603f3d011682016040523d82523d6000602084013e611643565b606091505b50915091506108cd828286611659565b3b151590565b60608315611668575081611171565b8251156116785782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156116c25781810151838201526020016116aa565b50505050905090810190601f1680156116ef5780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe426f6d6247656e65736973506f6f6c3a2063616c6c6572206973206e6f7420746865206f70657261746f72416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a26469706673582212209c534ecbfe2f1b1bbfe638b5a717791c8325e42353b35838b5bcd9c984f1465364736f6c634300060c0033";

type BombGenesisRewardPoolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BombGenesisRewardPoolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BombGenesisRewardPool__factory extends ContractFactory {
  constructor(...args: BombGenesisRewardPoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _bomb: string,
    _cake: string,
    _poolStartTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BombGenesisRewardPool> {
    return super.deploy(
      _bomb,
      _cake,
      _poolStartTime,
      overrides || {}
    ) as Promise<BombGenesisRewardPool>;
  }
  getDeployTransaction(
    _bomb: string,
    _cake: string,
    _poolStartTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _bomb,
      _cake,
      _poolStartTime,
      overrides || {}
    );
  }
  attach(address: string): BombGenesisRewardPool {
    return super.attach(address) as BombGenesisRewardPool;
  }
  connect(signer: Signer): BombGenesisRewardPool__factory {
    return super.connect(signer) as BombGenesisRewardPool__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BombGenesisRewardPoolInterface {
    return new utils.Interface(_abi) as BombGenesisRewardPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BombGenesisRewardPool {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BombGenesisRewardPool;
  }
}
