import { Contract, ethers } from "ethers";

type runMetamaskParam = {
  run: (provider: ethers.providers.Web3Provider) => void;
};

export const metaMaskListeners = async () => {
  if (
    (window as any).ethereum !== null ||
    (window as any).ethereum !== "undefined"
  ) {
    let currentAccount: string | null = null;

    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );

    provider.on("accountsChanged", async () => {
      const accounts = await provider.send("eth_requestAccounts", []);
      if (accounts[0] !== currentAccount) {
        currentAccount = accounts[0];
      }
    });

    provider.on("chainChanged", () => window.location.reload());
  }
};

// request user to connect account on metaMask
const runMetamask = async (params: runMetamaskParam) => {
  // check if metaMask is installed by checking injected window.ethereum
  if (
    (window as any).ethereum !== null ||
    (window as any).ethereum !== "undefined"
  ) {
    // get metamask provider
    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );

    // get metaMask accounts. If no account , metaMask needs to be connected someway
    let accounts = [];
    try {
     accounts = await provider.send("eth_requestAccounts", []);
        
    } catch (error) {
        alert('please unlock metaMask');
    }
    // zero length means no account in the array
    if (accounts.length === 0) {
      alert("please connect to metaMask");
    } else {
      params.run(provider);
    }
  } else {
    alert("please install metaMask to use this functionality");
  }
};


type SendToChainParam = {
  address: string;
  abi: any;
  contractMethod: (contract: Contract) => void;
};

export const sendToChain = async (params: SendToChainParam) => {
  try {
    await runMetamask({
      run: (provider: ethers.providers.Web3Provider) => {
        // will require the user to sign the transaction
        // ethers has different account , we need the signer account
        const signer = provider!.getSigner();
        // create an instance of our contract
        const contract = new ethers.Contract(
          params.address,
          params.abi,
          signer
        );
        // run the call to the contract methods
        params.contractMethod(contract);
      },
    });
  } catch (error) {
    alert("please unlock metaMask");
  }
};

type GetFromChain = {
  address: string;
  abi: any;
  contractMethod: (contract: Contract) => {};
};

export const getFromChain = async (params: GetFromChain) => {
  try {
    await runMetamask({
      run: (provider: ethers.providers.Web3Provider) => {
        // get user account to get user from chain or just pass in provider
        // create a new contract instance
        const contract = new ethers.Contract(
          params.address,
          params.abi,
          provider
        );
        // run specific contract method
        params.contractMethod(contract);
      },
    });
  } catch (error) {
    alert("please unlock metaMask");
  }
};
