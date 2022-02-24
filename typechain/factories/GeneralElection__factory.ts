/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GeneralElection,
  GeneralElectionInterface,
} from "../GeneralElection";

const _abi = [
  {
    inputs: [
      {
        internalType: "string[]",
        name: "_parties",
        type: "string[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "Voted",
    type: "event",
  },
  {
    inputs: [],
    name: "checkOvervoting",
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
        internalType: "string",
        name: "_party",
        type: "string",
      },
    ],
    name: "getPartyVotes",
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
    name: "getTotalVotes",
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
    name: "parties",
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
        name: "_party",
        type: "string",
      },
    ],
    name: "validateParty",
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
        internalType: "string",
        name: "_party",
        type: "string",
      },
    ],
    name: "voteForParty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "votecast",
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

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200110a3803806200110a833981810160405281019062000037919062000372565b80600090805190602001906200004f929190620000be565b5060405180604001604052806000151581526020016000815250600660008201518160000160006101000a81548160ff02191690831515021790555060208201518160010155905050604051806020016040528060008152506005600082015181600001559050505062000556565b82805482825590600052602060002090810192821562000112579160200282015b82811115620001115782518290805190602001906200010092919062000125565b5091602001919060010190620000df565b5b509050620001219190620001b6565b5090565b82805462000133906200047b565b90600052602060002090601f016020900481019282620001575760008555620001a3565b82601f106200017257805160ff1916838001178555620001a3565b82800160010185558215620001a3579182015b82811115620001a257825182559160200191906001019062000185565b5b509050620001b29190620001de565b5090565b5b80821115620001da5760008181620001d09190620001fd565b50600101620001b7565b5090565b5b80821115620001f9576000816000905550600101620001df565b5090565b5080546200020b906200047b565b6000825580601f106200021f575062000240565b601f0160209004906000526020600020908101906200023f9190620001de565b5b50565b60006200025a6200025484620003e0565b620003b7565b905080838252602082019050828560208602820111156200027a57600080fd5b60005b85811015620002c957815167ffffffffffffffff8111156200029e57600080fd5b808601620002ad898262000345565b855260208501945060208401935050506001810190506200027d565b5050509392505050565b6000620002ea620002e4846200040f565b620003b7565b9050828152602081018484840111156200030357600080fd5b6200031084828562000445565b509392505050565b600082601f8301126200032a57600080fd5b81516200033c84826020860162000243565b91505092915050565b600082601f8301126200035757600080fd5b815162000369848260208601620002d3565b91505092915050565b6000602082840312156200038557600080fd5b600082015167ffffffffffffffff811115620003a057600080fd5b620003ae8482850162000318565b91505092915050565b6000620003c3620003d6565b9050620003d18282620004b1565b919050565b6000604051905090565b600067ffffffffffffffff821115620003fe57620003fd62000516565b5b602082029050602081019050919050565b600067ffffffffffffffff8211156200042d576200042c62000516565b5b620004388262000545565b9050602081019050919050565b60005b838110156200046557808201518184015260208101905062000448565b8381111562000475576000848401525b50505050565b600060028204905060018216806200049457607f821691505b60208210811415620004ab57620004aa620004e7565b5b50919050565b620004bc8262000545565b810181811067ffffffffffffffff82111715620004de57620004dd62000516565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610ba480620005666000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80639a0e7d661161005b5780639a0e7d6614610112578063c2b4065314610130578063cc6346311461014c578063efee03e61461016a5761007d565b8063030d2243146100825780635f885792146100b257806370651a18146100e2575b600080fd5b61009c60048036038101906100979190610543565b61019a565b6040516100a99190610805565b60405180910390f35b6100cc60048036038101906100c79190610543565b610210565b6040516100d99190610805565b60405180910390f35b6100fc60048036038101906100f79190610584565b61023e565b60405161010991906107a3565b60405180910390f35b61011a6102ea565b6040516101279190610805565b60405180910390f35b61014a60048036038101906101459190610543565b6102f7565b005b6101546103e5565b6040516101619190610805565b60405180910390f35b610184600480360381019061017f9190610543565b6103f2565b6040516101919190610788565b60405180910390f35b60006101a5826103f2565b156101d0576001826040516101ba919061072c565b908152602001604051809103902054905061020b565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610202906107c5565b60405180910390fd5b919050565b6001818051602081018201805184825260208301602085012081835280955050505050506000915090505481565b6000818154811061024e57600080fd5b90600052602060002001600091509050805461026990610992565b80601f016020809104026020016040519081016040528092919081815260200182805461029590610992565b80156102e25780601f106102b7576101008083540402835291602001916102e2565b820191906000526020600020905b8154815290600101906020018083116102c557829003601f168201915b505050505081565b6000600560000154905090565b60006006600101541461033f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610336906107e5565b60405180910390fd5b610348816103f2565b156103e2576001808260405161035e919061072c565b9081526020016040518091039020600082825461037b91906108b2565b9250508190555060016005600001600082825461039891906108b2565b9250508190555060016006600101819055507fcb6783276e8a4347387036bbfea000268f0a4b1f8c46ac79980609f2af8d2acd336040516103d9919061075a565b60405180910390a15b50565b6000600660010154905090565b600080600090505b6000805490508110156104bb5782604051602001610418919061072c565b6040516020818303038152906040528051906020012060008281548110610468577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020016040516020016104829190610743565b6040516020818303038152906040528051906020012014156104a85760019150506104c1565b80806104b3906109f5565b9150506103fa565b50600090505b919050565b60006104d96104d484610845565b610820565b9050828152602081018484840111156104f157600080fd5b6104fc848285610950565b509392505050565b600082601f83011261051557600080fd5b81356105258482602086016104c6565b91505092915050565b60008135905061053d81610b57565b92915050565b60006020828403121561055557600080fd5b600082013567ffffffffffffffff81111561056f57600080fd5b61057b84828501610504565b91505092915050565b60006020828403121561059657600080fd5b60006105a48482850161052e565b91505092915050565b6105b681610908565b82525050565b6105c58161091a565b82525050565b60006105d68261088b565b6105e08185610896565b93506105f081856020860161095f565b6105f981610acb565b840191505092915050565b600061060f8261088b565b61061981856108a7565b935061062981856020860161095f565b80840191505092915050565b6000815461064281610992565b61064c81866108a7565b945060018216600081146106675760018114610678576106ab565b60ff198316865281860193506106ab565b61068185610876565b60005b838110156106a357815481890152600182019150602081019050610684565b838801955050505b50505092915050565b60006106c1601983610896565b91506106cc82610adc565b602082019050919050565b60006106e4600d83610896565b91506106ef82610b05565b602082019050919050565b6000610707601283610896565b915061071282610b2e565b602082019050919050565b61072681610946565b82525050565b60006107388284610604565b915081905092915050565b600061074f8284610635565b915081905092915050565b600060408201905061076f60008301846105ad565b8181036020830152610780816106b4565b905092915050565b600060208201905061079d60008301846105bc565b92915050565b600060208201905081810360008301526107bd81846105cb565b905092915050565b600060208201905081810360008301526107de816106d7565b9050919050565b600060208201905081810360008301526107fe816106fa565b9050919050565b600060208201905061081a600083018461071d565b92915050565b600061082a61083b565b905061083682826109c4565b919050565b6000604051905090565b600067ffffffffffffffff8211156108605761085f610a9c565b5b61086982610acb565b9050602081019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b60006108bd82610946565b91506108c883610946565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156108fd576108fc610a3e565b5b828201905092915050565b600061091382610926565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561097d578082015181840152602081019050610962565b8381111561098c576000848401525b50505050565b600060028204905060018216806109aa57607f821691505b602082108114156109be576109bd610a6d565b5b50919050565b6109cd82610acb565b810181811067ffffffffffffffff821117156109ec576109eb610a9c565b5b80604052505050565b6000610a0082610946565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610a3357610a32610a3e565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f766f7465207265636f72646564207375636365737366756c7900000000000000600082015250565b7f696e76616c696420706172747900000000000000000000000000000000000000600082015250565b7f63616e20766f7465206f6e6c79206f6e63650000000000000000000000000000600082015250565b610b6081610946565b8114610b6b57600080fd5b5056fea26469706673582212208f5791472d7d665a10e73e7aedccb396f36e99a958affba59a31fffa239f32f264736f6c63430008040033";

export class GeneralElection__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _parties: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GeneralElection> {
    return super.deploy(_parties, overrides || {}) as Promise<GeneralElection>;
  }
  getDeployTransaction(
    _parties: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_parties, overrides || {});
  }
  attach(address: string): GeneralElection {
    return super.attach(address) as GeneralElection;
  }
  connect(signer: Signer): GeneralElection__factory {
    return super.connect(signer) as GeneralElection__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GeneralElectionInterface {
    return new utils.Interface(_abi) as GeneralElectionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GeneralElection {
    return new Contract(address, _abi, signerOrProvider) as GeneralElection;
  }
}
