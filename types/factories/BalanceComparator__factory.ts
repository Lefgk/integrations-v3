/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  BalanceComparator,
  BalanceComparatorInterface,
} from "../BalanceComparator";

const _abi = [
  {
    inputs: [
      {
        internalType: "string[]",
        name: "_stages",
        type: "string[]",
      },
      {
        internalType: "enum Tokens[]",
        name: "_tokensToTrack",
        type: "uint8[]",
      },
      {
        internalType: "contract TokensTestSuite",
        name: "_tokenTestSuite",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "StageNotAllowed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "log",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "log_address",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "log_bytes",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "log_bytes32",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    name: "log_int",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "val",
        type: "address",
      },
    ],
    name: "log_named_address",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "val",
        type: "bytes",
      },
    ],
    name: "log_named_bytes",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "val",
        type: "bytes32",
      },
    ],
    name: "log_named_bytes32",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "val",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "log_named_decimal_int",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "log_named_decimal_uint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "val",
        type: "int256",
      },
    ],
    name: "log_named_int",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "val",
        type: "string",
      },
    ],
    name: "log_named_string",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
    ],
    name: "log_named_uint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "log_string",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "log_uint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "logs",
    type: "event",
  },
  {
    inputs: [],
    name: "IS_TEST",
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
        name: "holder",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "stage",
            type: "string",
          },
          {
            internalType: "enum Tokens",
            name: "token",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
        ],
        internalType: "struct BalanceBackup[]",
        name: "savedSnapshots",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "expectedError",
        type: "uint256",
      },
    ],
    name: "compareAllSnapshots",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "stage",
            type: "string",
          },
          {
            internalType: "enum Tokens",
            name: "token",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
        ],
        internalType: "struct BalanceBackup[]",
        name: "savedSnapshots",
        type: "tuple[]",
      },
    ],
    name: "compareAllSnapshots",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
    ],
    name: "exportSnapshots",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "stage",
            type: "string",
          },
          {
            internalType: "enum Tokens",
            name: "token",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
        ],
        internalType: "struct BalanceBackup[]",
        name: "result",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "failed",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "stages",
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
        internalType: "string",
        name: "stage",
        type: "string",
      },
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
    ],
    name: "takeSnapshot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenTestSuite",
    outputs: [
      {
        internalType: "contract TokensTestSuite",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "tokensToTrack",
    outputs: [
      {
        internalType: "enum Tokens",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526000805460ff191660011790553480156200001e57600080fd5b5060405162002467380380620024678339810160408190526200004191620002c9565b600880546001600160a01b0319166001600160a01b038316179055815160005b81811015620000de57600984828151811062000081576200008162000419565b602090810291909101810151825460018101845560009384529282902091830490910180549192909160ff601f9092166101000a91820219169083603f811115620000d057620000d06200042f565b021790555060010162000061565b5050825160005b818110156200018a57600b85828151811062000105576200010562000419565b60209081029190910181015182546001810184556000938452919092200190620001309082620004d4565b506001600c8683815181106200014a576200014a62000419565b6020026020010151604051620001619190620005a0565b908152604051908190036020019020805491151560ff19909216919091179055600101620000e5565b5050505050620005be565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715620001d657620001d662000195565b604052919050565b60006001600160401b03821115620001fa57620001fa62000195565b5060051b60200190565b60005b838110156200022157818101518382015260200162000207565b50506000910152565b600082601f8301126200023c57600080fd5b81516020620002556200024f83620001de565b620001ab565b82815260059290921b840181019181810190868411156200027557600080fd5b8286015b84811015620002a157805160408110620002935760008081fd5b835291830191830162000279565b509695505050505050565b80516001600160a01b0381168114620002c457600080fd5b919050565b600080600060608486031215620002df57600080fd5b83516001600160401b0380821115620002f757600080fd5b818601915086601f8301126200030c57600080fd5b815160206200031f6200024f83620001de565b82815260059290921b8401810191818101908a8411156200033f57600080fd5b8286015b84811015620003d5578051868111156200035d5760008081fd5b8701603f81018d13620003705760008081fd5b8481015160408882111562000389576200038962000195565b6200039d601f8301601f19168801620001ab565b8281528f82848601011115620003b35760008081fd5b620003c48389830184870162000204565b865250505091830191830162000343565b5091890151919750909350505080821115620003f057600080fd5b50620003ff868287016200022a565b9250506200041060408501620002ac565b90509250925092565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b600181811c908216806200045a57607f821691505b6020821081036200047b57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620004cf57600081815260208120601f850160051c81016020861015620004aa5750805b601f850160051c820191505b81811015620004cb57828155600101620004b6565b5050505b505050565b81516001600160401b03811115620004f057620004f062000195565b620005088162000501845462000445565b8462000481565b602080601f831160018114620005405760008415620005275750858301515b600019600386901b1c1916600185901b178555620004cb565b600085815260208120601f198616915b82811015620005715788860151825594840194600190910190840162000550565b5085821015620005905787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008251620005b481846020870162000204565b9190910192915050565b611e9980620005ce6000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063845ddcb211610076578063ba414fa61161005b578063ba414fa61461017e578063efba191e14610196578063fa7626d4146101a957600080fd5b8063845ddcb21461014b578063a51ad8841461016b57600080fd5b80630ae89c6d146100a857806330194d6d146100d15780635b52bd05146100e657806360c8975d1461012b575b600080fd5b6100bb6100b636600461160b565b6101b6565b6040516100c89190611707565b60405180910390f35b6100e46100df366004611a03565b610434565b005b6008546101069073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100c8565b61013e610139366004611a5c565b610c5d565b6040516100c89190611a75565b61015e610159366004611a5c565b610c91565b6040516100c89190611a89565b6100e4610179366004611a9c565b610d3d565b610186610d4d565b60405190151581526020016100c8565b6100e46101a4366004611aec565b610ead565b6000546101869060ff1681565b600b546009546060919080820267ffffffffffffffff8111156101db576101db6117af565b60405190808252806020026020018201604052801561024457816020015b60408051606080820183528152600060208083018290529282015282527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9092019101816101f95790505b50925060005b8281101561042c5760005b828110156104235760006009828154811061027257610272611b3e565b90600052602060002090602091828204019190069054906101000a900460ff1690506000600b84815481106102a9576102a9611b3e565b9060005260206000200180546102be90611b6d565b80601f01602080910402602001604051908101604052809291908181526020018280546102ea90611b6d565b80156103375780601f1061030c57610100808354040283529160200191610337565b820191906000526020600020905b81548152906001019060200180831161031a57829003601f168201915b50505050509050604051806060016040528082815260200183603f8111156103615761036161169d565b8152602001600a836040516103769190611bc0565b9081526020016040518091039020600085603f8111156103985761039861169d565b603f8111156103a9576103a961169d565b815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548152508786860285018151811061040e5761040e611b3e565b60209081029190910101525050600101610255565b5060010161024a565b505050919050565b815160005b818110156104ea57600084828151811061045557610455611b3e565b602002602001015190508060400151600a82600001516040516104789190611bc0565b908152602001604051809103902060008360200151603f81111561049e5761049e61169d565b603f8111156104af576104af61169d565b81526020808201929092526040908101600090812073c4375b7de8af5a38a93548eb8453a498222c4ff2825290925290205550600101610439565b5050600954600b5460005b81811015610c555760005b83811015610c4c5760006009828154811061051d5761051d611b3e565b90600052602060002090602091828204019190069054906101000a900460ff1690506000600b848154811061055457610554611b3e565b90600052602060002001805461056990611b6d565b80601f016020809104026020016040519081016040528092919081815260200182805461059590611b6d565b80156105e25780601f106105b7576101008083540402835291602001916105e2565b820191906000526020600020905b8154815290600101906020018083116105c557829003601f168201915b50505050509050866000036107e0576107db600a826040516106049190611bc0565b9081526020016040518091039020600084603f8111156106265761062661169d565b603f8111156106375761063761169d565b815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600a836040516106939190611bc0565b9081526020016040518091039020600085603f8111156106b5576106b561169d565b603f8111156106c6576106c661169d565b81526020808201929092526040908101600090812073c4375b7de8af5a38a93548eb8453a498222c4ff28252909252908190205460085491517f440864fa0000000000000000000000000000000000000000000000000000000081529091859173ffffffffffffffffffffffffffffffffffffffff9091169063440864fa90610753908990600401611a75565b600060405180830381865afa158015610770573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526107b69190810190611bdc565b6040516020016107c7929190611c53565b604051602081830303815290604052611105565b610c42565b6000600a826040516107f29190611bc0565b9081526020016040518091039020600084603f8111156108145761081461169d565b603f8111156108255761082561169d565b8152602001908152602001600020600073c4375b7de8af5a38a93548eb8453a498222c4ff273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600a836040516108959190611bc0565b9081526020016040518091039020600085603f8111156108b7576108b761169d565b603f8111156108c8576108c861169d565b815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411610a2357600a826040516109299190611bc0565b9081526020016040518091039020600084603f81111561094b5761094b61169d565b603f81111561095c5761095c61169d565b815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600a836040516109b89190611bc0565b9081526020016040518091039020600085603f8111156109da576109da61169d565b603f8111156109eb576109eb61169d565b81526020808201929092526040908101600090812073c4375b7de8af5a38a93548eb8453a498222c4ff2825290925290205403610b57565b600a82604051610a339190611bc0565b9081526020016040518091039020600084603f811115610a5557610a5561169d565b603f811115610a6657610a6661169d565b8152602001908152602001600020600073c4375b7de8af5a38a93548eb8453a498222c4ff273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600a83604051610ad69190611bc0565b9081526020016040518091039020600085603f811115610af857610af861169d565b603f811115610b0957610b0961169d565b815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054035b6008546040517f440864fa000000000000000000000000000000000000000000000000000000008152919250610c409183918b91869173ffffffffffffffffffffffffffffffffffffffff169063440864fa90610bb8908a90600401611a75565b600060405180830381865afa158015610bd5573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610c1b9190810190611bdc565b604051602001610c2c929190611cd5565b604051602081830303815290604052611152565b505b5050600101610500565b506001016104f5565b505050505050565b60098181548110610c6d57600080fd5b9060005260206000209060209182820401919006915054906101000a900460ff1681565b600b8181548110610ca157600080fd5b906000526020600020016000915090508054610cbc90611b6d565b80601f0160208091040260200160405190810160405280929190818152602001828054610ce890611b6d565b8015610d355780601f10610d0a57610100808354040283529160200191610d35565b820191906000526020600020905b815481529060010190602001808311610d1857829003601f168201915b505050505081565b610d4982826000610434565b5050565b60008054610100900460ff1615610d6d5750600054610100900460ff1690565b6000737109709ecfa91a80626ff3989d68f67f5b1dd12d3b15610ea85760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190527f6661696c6564000000000000000000000000000000000000000000000000000082840152825180830384018152606083019093526000929091610e12917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc491608001611d7c565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610e4a91611bc0565b6000604051808303816000865af19150503d8060008114610e87576040519150601f19603f3d011682016040523d82523d6000602084013e610e8c565b606091505b5091505080806020019051810190610ea49190611dc4565b9150505b919050565b600c82604051610ebd9190611bc0565b9081526040519081900360200190205460ff16610f1157816040517fb488255d000000000000000000000000000000000000000000000000000000008152600401610f089190611a89565b60405180910390fd5b60095460005b818110156110ff57600060098281548110610f3457610f34611b3e565b6000918252602080832090820401546008546040517f67b42645000000000000000000000000000000000000000000000000000000008152601f9093166101000a90910460ff16935073ffffffffffffffffffffffffffffffffffffffff16906367b4264590610fa8908590600401611a75565b602060405180830381865afa158015610fc5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fe99190611de6565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff878116600483015291909116906370a0823190602401602060405180830381865afa158015611057573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061107b9190611e03565b905080600a8760405161108e9190611bc0565b9081526020016040518091039020600084603f8111156110b0576110b061169d565b603f8111156110c1576110c161169d565b81526020808201929092526040908101600090812073ffffffffffffffffffffffffffffffffffffffff8a1682529092529020555050600101610f17565b50505050565b81831461114d577f280f4446b28a1372417dda658d30b95b2992b12ac9c7f378535f29a97acf35838160405161113b9190611e1c565b60405180910390a161114d838361119b565b505050565b8183111561114d577f280f4446b28a1372417dda658d30b95b2992b12ac9c7f378535f29a97acf3583816040516111899190611e1c565b60405180910390a161114d8383611308565b808214610d49577f41304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f506040516112279060208082526022908201527f4572726f723a2061203d3d2062206e6f7420736174697366696564205b75696e60408201527f745d000000000000000000000000000000000000000000000000000000000000606082015260800190565b60405180910390a160408051818152600a818301527f202045787065637465640000000000000000000000000000000000000000000060608201526020810183905290517fb2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a89181900360800190a160408051818152600a918101919091527f2020202041637475616c000000000000000000000000000000000000000000006060820152602081018390527fb2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a8906080015b60405180910390a1610d4961146a565b80821115610d49577f41304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f506040516113959060208082526022908201527f4572726f723a2061203c3d2062206e6f7420736174697366696564205b75696e60408201527f745d000000000000000000000000000000000000000000000000000000000000606082015260800190565b60405180910390a1604080518181526009818301527f202056616c75652061000000000000000000000000000000000000000000000060608201526020810184905290517fb2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a89181900360800190a1604080518181526009918101919091527f202056616c7565206200000000000000000000000000000000000000000000006060820152602081018290527fb2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a8906080016112f8565b737109709ecfa91a80626ff3989d68f67f5b1dd12d3b156115b85760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190527f6661696c656400000000000000000000000000000000000000000000000000009282019290925260016060820152600091907f70ca10bbd0dbfd9020a9f4b13402c16cb120705e0d1c0aeab10fa353ae586fc490608001604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290526115399291602001611d7c565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905261157191611bc0565b6000604051808303816000865af19150503d80600081146115ae576040519150601f19603f3d011682016040523d82523d6000602084013e6115b3565b606091505b505050505b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16610100179055565b73ffffffffffffffffffffffffffffffffffffffff8116811461160857600080fd5b50565b60006020828403121561161d57600080fd5b8135611628816115e6565b9392505050565b60005b8381101561164a578181015183820152602001611632565b50506000910152565b6000815180845261166b81602086016020860161162f565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60408110611703577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b838110156117a1577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc089840301855281516060815181865261177282870182611653565b915050888201516117858a8701826116cc565b509087015193870193909352938601939086019060010161172e565b509098975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611801576118016117af565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561184e5761184e6117af565b604052919050565b600067ffffffffffffffff821115611870576118706117af565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126118ad57600080fd5b81356118c06118bb82611856565b611807565b8181528460208386010111156118d557600080fd5b816020850160208301376000918101602001919091529392505050565b600082601f83011261190357600080fd5b8135602067ffffffffffffffff80831115611920576119206117af565b8260051b61192f838201611807565b938452858101830193838101908886111561194957600080fd5b84880192505b858310156119f7578235848111156119675760008081fd5b88016060818b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00181131561199d5760008081fd5b6119a56117de565b87830135878111156119b75760008081fd5b6119c58d8a8387010161189c565b8252506040808401358181106119db5760008081fd5b898301529190920135908201528252918401919084019061194f565b98975050505050505050565b600080600060608486031215611a1857600080fd5b8335611a23816115e6565b9250602084013567ffffffffffffffff811115611a3f57600080fd5b611a4b868287016118f2565b925050604084013590509250925092565b600060208284031215611a6e57600080fd5b5035919050565b60208101611a8382846116cc565b92915050565b6020815260006116286020830184611653565b60008060408385031215611aaf57600080fd5b8235611aba816115e6565b9150602083013567ffffffffffffffff811115611ad657600080fd5b611ae2858286016118f2565b9150509250929050565b60008060408385031215611aff57600080fd5b823567ffffffffffffffff811115611b1657600080fd5b611b228582860161189c565b9250506020830135611b33816115e6565b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c90821680611b8157607f821691505b602082108103611bba577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60008251611bd281846020870161162f565b9190910192915050565b600060208284031215611bee57600080fd5b815167ffffffffffffffff811115611c0557600080fd5b8201601f81018413611c1657600080fd5b8051611c246118bb82611856565b818152856020838501011115611c3957600080fd5b611c4a82602083016020860161162f565b95945050505050565b7f42616c616e63657320617265206e6f7420657175616c20666f72200000000000815260008351611c8b81601b85016020880161162f565b80830190507f20666f7220000000000000000000000000000000000000000000000000000000601b8201528351611cc981602084016020880161162f565b01602001949350505050565b7f42616c616e63652064696666206c6172676572207468616e206578706563746581527f64206572726f7220666f72200000000000000000000000000000000000000000602082015260008351611d3381602c85016020880161162f565b7f20666f7220000000000000000000000000000000000000000000000000000000602c918401918201528351611d7081603184016020880161162f565b01603101949350505050565b7fffffffff000000000000000000000000000000000000000000000000000000008316815260008251611db681600485016020870161162f565b919091016004019392505050565b600060208284031215611dd657600080fd5b8151801515811461162857600080fd5b600060208284031215611df857600080fd5b8151611628816115e6565b600060208284031215611e1557600080fd5b5051919050565b60408152600560408201527f4572726f720000000000000000000000000000000000000000000000000000006060820152608060208201526000611628608083018461165356fea264697066735822122016897e10a80d872acf79ac1181f843d0be980cacd56289a3a7a830d9144bee7164736f6c63430008110033";

type BalanceComparatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BalanceComparatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BalanceComparator__factory extends ContractFactory {
  constructor(...args: BalanceComparatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "BalanceComparator";
  }

  override deploy(
    _stages: PromiseOrValue<string>[],
    _tokensToTrack: PromiseOrValue<BigNumberish>[],
    _tokenTestSuite: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BalanceComparator> {
    return super.deploy(
      _stages,
      _tokensToTrack,
      _tokenTestSuite,
      overrides || {}
    ) as Promise<BalanceComparator>;
  }
  override getDeployTransaction(
    _stages: PromiseOrValue<string>[],
    _tokensToTrack: PromiseOrValue<BigNumberish>[],
    _tokenTestSuite: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _stages,
      _tokensToTrack,
      _tokenTestSuite,
      overrides || {}
    );
  }
  override attach(address: string): BalanceComparator {
    return super.attach(address) as BalanceComparator;
  }
  override connect(signer: Signer): BalanceComparator__factory {
    return super.connect(signer) as BalanceComparator__factory;
  }
  static readonly contractName: "BalanceComparator";

  public readonly contractName: "BalanceComparator";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BalanceComparatorInterface {
    return new utils.Interface(_abi) as BalanceComparatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BalanceComparator {
    return new Contract(address, _abi, signerOrProvider) as BalanceComparator;
  }
}
