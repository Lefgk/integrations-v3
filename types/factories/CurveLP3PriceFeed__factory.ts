/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  CurveLP3PriceFeed,
  CurveLP3PriceFeedInterface,
} from "../CurveLP3PriceFeed";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "addressProvider",
        type: "address",
      },
      {
        internalType: "address",
        name: "_curvePool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_priceFeed1",
        type: "address",
      },
      {
        internalType: "address",
        name: "_priceFeed2",
        type: "address",
      },
      {
        internalType: "address",
        name: "_priceFeed3",
        type: "address",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "CallerNotConfiguratorException",
    type: "error",
  },
  {
    inputs: [],
    name: "CallerNotControllerException",
    type: "error",
  },
  {
    inputs: [],
    name: "CallerNotPausableAdminException",
    type: "error",
  },
  {
    inputs: [],
    name: "CallerNotUnPausableAdminException",
    type: "error",
  },
  {
    inputs: [],
    name: "ChainPriceStaleException",
    type: "error",
  },
  {
    inputs: [],
    name: "IncorrectLimitsException",
    type: "error",
  },
  {
    inputs: [],
    name: "NotImplementedException",
    type: "error",
  },
  {
    inputs: [],
    name: "PriceOracleNotExistsException",
    type: "error",
  },
  {
    inputs: [],
    name: "ValueOutOfRangeException",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddressException",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroPriceException",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newController",
        type: "address",
      },
    ],
    name: "NewController",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "lowerBound",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "upperBound",
        type: "uint256",
      },
    ],
    name: "NewLimiterParams",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "_acl",
    outputs: [
      {
        internalType: "contract IACL",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "controller",
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
    name: "curvePool",
    outputs: [
      {
        internalType: "contract ICurvePool",
        name: "",
        type: "address",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimalsDivider",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "delta",
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
    name: "description",
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
    name: "externalController",
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
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    name: "getRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lowerBound",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    name: "priceFeed1",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceFeed2",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceFeed3",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceFeedType",
    outputs: [
      {
        internalType: "enum PriceFeedType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newController",
        type: "address",
      },
    ],
    name: "setController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_lowerBound",
        type: "uint256",
      },
    ],
    name: "setLimiter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "skipPriceCheck",
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
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "upperBound",
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
    name: "version",
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
] as const;

const _bytecode =
  "0x6101606040526000805460ff60b01b1916600160b01b1790553480156200002557600080fd5b5060405162001e4a38038062001e4a8339810160408190526200004891620004bc565b6000805460ff191690558585828260c882826001600160a01b0381166200008257604051635919af9760e11b815260040160405180910390fd5b806001600160a01b031663087376956040518163ffffffff1660e01b8152600401602060405180830381865afa158015620000c1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000e79190620005ed565b6001600160a01b03166080816001600160a01b031681525050806001600160a01b031663087376956040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200013f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001659190620005ed565b6001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015620001a3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001c99190620005ed565b600080546001600160a01b039290921661010002610100600160a81b0319909216919091179055506002620001ff8282620006a1565b505060a052506001600160a01b0382166200022d57604051635919af9760e11b815260040160405180910390fd5b6001600160a01b03821660c0819052670de0b6b3a764000060e05260408051630176f71760e71b815290516000929163bb7b8b809160048083019260209291908290030181865afa15801562000287573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002ad91906200076d565b9050620002ba8162000333565b505050506001600160a01b0384161580620002dc57506001600160a01b038316155b80620002ef57506001600160a01b038216155b156200030e57604051635919af9760e11b815260040160405180910390fd5b506001600160a01b039283166101005290821661012052166101405250620007f09050565b80158062000354575062000352816200034c81620003c0565b620003f4565b155b1562000373576040516309aadd6f60e41b815260040160405180910390fd5b60018190557f82e7ee47180a631312683eeb2a85ad264c9af490d54de5a75bbdb95b968c6de281620003a581620003c0565b6040805192835260208301919091520160405180910390a150565b60a05160009061271090620003d690826200079d565b620003e29084620007b3565b620003ee9190620007cd565b92915050565b60008060c0516001600160a01b031663bb7b8b806040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000438573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200045e91906200076d565b9050838110806200046e57508281115b156200047f576000915050620003ee565b5060019392505050565b80516001600160a01b0381168114620004a157600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60008060008060008060c08789031215620004d657600080fd5b620004e18762000489565b95506020620004f281890162000489565b9550620005026040890162000489565b9450620005126060890162000489565b9350620005226080890162000489565b60a08901519093506001600160401b03808211156200054057600080fd5b818a0191508a601f8301126200055557600080fd5b8151818111156200056a576200056a620004a6565b604051601f8201601f19908116603f01168101908382118183101715620005955762000595620004a6565b816040528281528d86848701011115620005ae57600080fd5b600093505b82841015620005d25784840186015181850187015292850192620005b3565b60008684830101528096505050505050509295509295509295565b6000602082840312156200060057600080fd5b6200060b8262000489565b9392505050565b600181811c908216806200062757607f821691505b6020821081036200064857634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200069c57600081815260208120601f850160051c81016020861015620006775750805b601f850160051c820191505b81811015620006985782815560010162000683565b5050505b505050565b81516001600160401b03811115620006bd57620006bd620004a6565b620006d581620006ce845462000612565b846200064e565b602080601f8311600181146200070d5760008415620006f45750858301515b600019600386901b1c1916600185901b17855562000698565b600085815260208120601f198616915b828110156200073e578886015182559484019460019091019084016200071d565b50858210156200075d5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000602082840312156200078057600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b80820180821115620003ee57620003ee62000787565b8082028115828204841417620003ee57620003ee62000787565b600082620007eb57634e487b7160e01b600052601260045260246000fd5b500490565b60805160a05160c05160e0516101005161012051610140516115ab6200089f6000396000818161028c0152610c120152600081816103e10152610b530152600081816103970152610aac0152600081816103700152610d6f0152600081816101d101528181610cd301526111520152600081816101970152610e930152600081816103490152818161045e015281816105da015281816106c6015281816107c101526109d901526115ab6000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c806392eefe9b116100e3578063b09ad8a01161008c578063e5693f4111610066578063e5693f41146103dc578063f77c479114610403578063feaf968c1461042857600080fd5b8063b09ad8a0146103b9578063bc489a65146103c1578063d62ada11146103d457600080fd5b8063a50cf2c8116100bd578063a50cf2c814610344578063a834559e1461036b578063ab0ca0e11461039257600080fd5b806392eefe9b146102de5780639a6fc8f5146102f1578063a384d6ff1461033b57600080fd5b80633fd0875f116101455780635c975abb1161011f5780635c975abb146102b65780637284e416146102c15780638456cb59146102d657600080fd5b80633fd0875f14610272578063427cb6fe1461028757806354fd4d50146102ae57600080fd5b806325e223701161017657806325e2237014610218578063313ce5671461024e5780633f4ba83a1461026857600080fd5b806312b495a814610192578063218751b2146101cc575b600080fd5b6101b97f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b6101f37f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101c3565b60005461023e907501000000000000000000000000000000000000000000900460ff1681565b60405190151581526020016101c3565b610256600881565b60405160ff90911681526020016101c3565b610270610430565b005b61027a600381565b6040516101c39190611207565b6101f37f000000000000000000000000000000000000000000000000000000000000000081565b6101b9600181565b60005460ff1661023e565b6102c961051e565b6040516101c39190611248565b6102706105ac565b6102706102ec3660046112b4565b610698565b6103046102ff366004611309565b6108e0565b6040805169ffffffffffffffffffff968716815260208101959095528401929092526060830152909116608082015260a0016101c3565b6101b960015481565b6101f37f000000000000000000000000000000000000000000000000000000000000000081565b6101b97f000000000000000000000000000000000000000000000000000000000000000081565b6101f37f000000000000000000000000000000000000000000000000000000000000000081565b6101b961091a565b6102706103cf366004611326565b61092c565b61023e600181565b6101f37f000000000000000000000000000000000000000000000000000000000000000081565b6000546101f390610100900473ffffffffffffffffffffffffffffffffffffffff1681565b610304610a9b565b6040517fd4eb5db00000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063d4eb5db090602401602060405180830381865afa1580156104ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104de919061133f565b610514576040517f10332dee00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61051c610db1565b565b6002805461052b90611361565b80601f016020809104026020016040519081016040528092919081815260200182805461055790611361565b80156105a45780601f10610579576101008083540402835291602001916105a4565b820191906000526020600020905b81548152906001019060200180831161058757829003601f168201915b505050505081565b6040517f3a41ec640000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690633a41ec6490602401602060405180830381865afa158015610636573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065a919061133f565b610690576040517fd794b1e700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61051c610e2e565b6040517f5f259aba0000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635f259aba90602401602060405180830381865afa158015610722573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610746919061133f565b61077c576040517f61081c1500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f5f259aba00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301527f00000000000000000000000000000000000000000000000000000000000000001690635f259aba90602401602060405180830381865afa158015610808573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061082c919061133f565b600080547fffffffffffffffffffff000000000000000000000000000000000000000000ff1691157501000000000000000000000000000000000000000000027fffffffffffffffffffffff0000000000000000000000000000000000000000ff169190911761010073ffffffffffffffffffffffffffffffffffffffff841690810291909117825560405190917fe253457d9ad994ca9682fc3bbc38c890dca73a2d5ecee3809e548bac8b00d7c691a250565b60008060008060006040517f24e46f7000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610927600154610e89565b905090565b6000547501000000000000000000000000000000000000000000900460ff16156109ab57600054610100900473ffffffffffffffffffffffffffffffffffffffff1633146109a6576040517f0129bb9900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a8f565b6040517f5f259aba0000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635f259aba90602401602060405180830381865afa158015610a35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a59919061133f565b610a8f576040517f0129bb9900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a9881610ed2565b50565b6000806000806000806000806000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015610b15573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3991906113b4565b939d50919b50995097509550610b518a8a8989610f70565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015610bbc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be091906113b4565b939850919650945092509050610bf885858484610f70565b88841215610c10578499508398508297508196508095505b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015610c7b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9f91906113b4565b939850919650945092509050610cb785858484610f70565b88841215610ccf578499508398508297508196508095505b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bb7b8b806040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d3c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d60919061140c565b9050610d6b8161100b565b90507f0000000000000000000000000000000000000000000000000000000000000000610d98828c611454565b610da291906114cf565b99505050505050509091929394565b610db961106f565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b610e366110e0565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610e043390565b6000612710610eb87f000000000000000000000000000000000000000000000000000000000000000082611537565b610ec2908461154a565b610ecc9190611561565b92915050565b801580610eee5750610eec81610ee783610e89565b61114d565b155b15610f25576040517f9aadd6f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018190557f82e7ee47180a631312683eeb2a85ad264c9af490d54de5a75bbdb95b968c6de281610f5581610e89565b6040805192835260208301919091520160405180910390a150565b60008313610faa576040517f56e05d2b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8369ffffffffffffffffffff168169ffffffffffffffffffff161080610fce575081155b15611005576040517fb1cf675500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b6001546000908083101561104b576040517f6477ba0800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061105682610e89565b90508084116110655783611067565b805b949350505050565b60005460ff1661051c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064015b60405180910390fd5b60005460ff161561051c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a207061757365640000000000000000000000000000000060448201526064016110d7565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bb7b8b806040518163ffffffff1660e01b8152600401602060405180830381865afa1580156111bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111df919061140c565b9050838110806111ee57508281115b156111fd576000915050610ecc565b5060019392505050565b60208101600e8310611242577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b600060208083528351808285015260005b8181101561127557858101830151858201604001528201611259565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b6000602082840312156112c657600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146112ea57600080fd5b9392505050565b69ffffffffffffffffffff81168114610a9857600080fd5b60006020828403121561131b57600080fd5b81356112ea816112f1565b60006020828403121561133857600080fd5b5035919050565b60006020828403121561135157600080fd5b815180151581146112ea57600080fd5b600181811c9082168061137557607f821691505b6020821081036113ae577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b600080600080600060a086880312156113cc57600080fd5b85516113d7816112f1565b8095505060208601519350604086015192506060860151915060808601516113fe816112f1565b809150509295509295909350565b60006020828403121561141e57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808202600082127f80000000000000000000000000000000000000000000000000000000000000008414161561148c5761148c611425565b8181058314821517610ecc57610ecc611425565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000826114de576114de6114a0565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83147f80000000000000000000000000000000000000000000000000000000000000008314161561153257611532611425565b500590565b80820180821115610ecc57610ecc611425565b8082028115828204841417610ecc57610ecc611425565b600082611570576115706114a0565b50049056fea26469706673582212203603b4bf554e43a43d9428e78173a8f2d4cd5991ed12c7bba72873470ea29a1c64736f6c63430008110033";

type CurveLP3PriceFeedConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CurveLP3PriceFeedConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CurveLP3PriceFeed__factory extends ContractFactory {
  constructor(...args: CurveLP3PriceFeedConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "CurveLP3PriceFeed";
  }

  override deploy(
    addressProvider: PromiseOrValue<string>,
    _curvePool: PromiseOrValue<string>,
    _priceFeed1: PromiseOrValue<string>,
    _priceFeed2: PromiseOrValue<string>,
    _priceFeed3: PromiseOrValue<string>,
    _description: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CurveLP3PriceFeed> {
    return super.deploy(
      addressProvider,
      _curvePool,
      _priceFeed1,
      _priceFeed2,
      _priceFeed3,
      _description,
      overrides || {}
    ) as Promise<CurveLP3PriceFeed>;
  }
  override getDeployTransaction(
    addressProvider: PromiseOrValue<string>,
    _curvePool: PromiseOrValue<string>,
    _priceFeed1: PromiseOrValue<string>,
    _priceFeed2: PromiseOrValue<string>,
    _priceFeed3: PromiseOrValue<string>,
    _description: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      addressProvider,
      _curvePool,
      _priceFeed1,
      _priceFeed2,
      _priceFeed3,
      _description,
      overrides || {}
    );
  }
  override attach(address: string): CurveLP3PriceFeed {
    return super.attach(address) as CurveLP3PriceFeed;
  }
  override connect(signer: Signer): CurveLP3PriceFeed__factory {
    return super.connect(signer) as CurveLP3PriceFeed__factory;
  }
  static readonly contractName: "CurveLP3PriceFeed";

  public readonly contractName: "CurveLP3PriceFeed";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CurveLP3PriceFeedInterface {
    return new utils.Interface(_abi) as CurveLP3PriceFeedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CurveLP3PriceFeed {
    return new Contract(address, _abi, signerOrProvider) as CurveLP3PriceFeed;
  }
}
