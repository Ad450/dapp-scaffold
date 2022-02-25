import { Flex, Text, Button, HStack } from "@chakra-ui/react";
import { Contract } from "ethers";
import { getFromChain, sendToChain } from "../../../core/web3/web3";
import contract from "../../../contracts/contracts/general_election.sol/GeneralElection.json";

export const Voting = () => {
  // listen on voted
  // counterEvent.on("voted", async () => {
  //   await getVotes();

  //   await getVotesOfParty();
  // });

  // using test abi from greeting smart contract
  const abi = contract.abi;
  // put in contract address here
  const address: string = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const vote = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const party: string = event.currentTarget.innerHTML;

    await sendToChain({
      address: address,
      abi: abi,
      contractMethod: async (contract: Contract) => {
        // make sure party passed in is specified in the array of parties

        try {
          const voted = await contract.voteForParty(party);
          await voted.wait();
          if (voted) {
            //counterEvent.emit("voted");
            alert("Thank you for voting");
          }
        } catch (error) {
          console.log(error);

          alert("chain reverted");
        }
      },
    });
  };

  // get greeting and show to user as an alert
  const getVotes = async () => {
    await getFromChain({
      address: address,
      abi: abi,
      contractMethod: async (contract: Contract) => {
        const votes = await contract.getTotalVotes();
        alert(`total votes : ${votes}`);
      },
    });
  };

  const getVotesOfParty = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const party: string = event.currentTarget.innerHTML;
    await getFromChain({
      address: address,
      abi: abi,
      contractMethod: async (contract: Contract) => {
        const votes = await contract.getPartyVotes(party);
        alert(`${party} : ${votes}`);
      },
    });
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" bg="gray.900" p={12} rounded={6}>
        <Text align="center" mb={4}>
          {" "}
          Click one to vote{" "}
        </Text>
        <HStack mb={3}>
          <Button onClick={(e) => vote(e)} size="sm">
            Party A
          </Button>
          <Button onClick={(e) => vote(e)} size="sm">
            Party B
          </Button>
          <Button onClick={(e) => vote(e)} size="sm">
            Party C
          </Button>
        </HStack>
        <Button
          mb={3}
          onClick={async (e) => {
            //await getVotesOfParty(e);
            await getVotes();
          }}
        >
          Check total votes
        </Button>
        <Text mb={4}>Check results of parties below</Text>
        <HStack mb={3}>
          <Button onClick={async (e) => await getVotesOfParty(e)} size="sm">
            Party A
          </Button>
          <Button onClick={async (e) => await getVotesOfParty(e)} size="sm">
            Party B
          </Button>
          <Button onClick={async (e) => await getVotesOfParty(e)} size="sm">
            Party C
          </Button>
        </HStack>
      </Flex>
    </Flex>
  );
};
