import { Flex, Text, Button, HStack } from "@chakra-ui/react";
import { Contract } from "ethers";
import { getFromChain, sendToChain } from "../../../core/web3/web3";
import contract from "../../../contracts/contracts/general_election.sol/GeneralElection.json";

export const Voting = () => {
  // using test abi from greeting smart contract
  const abi = contract.abi;
  const address: string = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";

  const vote = async () => {
    await sendToChain({
      address: address,
      abi: abi,
      contractMethod: async (contract: Contract) => {
        // make sure party passed in is specified in the array of parties
        try {
          const voted = await contract.voteForParty("NPP");
          if (voted) {
            alert("Thank you for voting");
          }
        } catch (error) {
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
        alert(votes);
      },
    });
  };

  const getVotesOfParty = async () => {
    await getFromChain({
      address: address,
      abi: abi,
      contractMethod: async (contract: Contract) => {
        const votes = await contract.getPartyVotes("NPP");
        alert(votes);
      },
    });
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" bg="gray.900" p={12} rounded={6}>
        <Text mb={4}> Vote for a party by clicking one of these </Text>
        <HStack>
          <Button onClick={(e) => vote()} size="sm">
            Party A
          </Button>
          <Button onClick={(e) => getVotes()} size="sm">
            Party B
          </Button>
          <Button onClick={(e) => getVotesOfParty()} size="sm">
            Party C
          </Button>
        </HStack>
      </Flex>
    </Flex>
  );
};
