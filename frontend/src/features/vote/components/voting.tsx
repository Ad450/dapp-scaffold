import { Flex, Text, Button, HStack, Heading } from "@chakra-ui/react";
import { Contract } from "ethers";
import { getFromChain, sendToChain } from "../../../core/web3/web3";
import contract from "../../../contracts/contracts/general_election.sol/GeneralElection.json";
import { useState } from "react";
import { CounterEvent } from "../../../core/events/app_events";

export const Voting = () => {
  const [votes, setVotes] = useState("");
  const counterEvent = new CounterEvent();

  // listen on voted
  counterEvent.on("voted", async () => {
    await getVotes();

    await getVotesOfParty();
  });

  // using test abi from greeting smart contract
  const abi = contract.abi;
  // put in contract address here
  const address: string = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

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
        setVotes(votes);
      },
    });
  };

  const getVotesOfParty = async () => {
    await getFromChain({
      address: address,
      abi: abi,
      contractMethod: async (contract: Contract) => {
        const votes = await contract.getPartyVotes("Party A");
        //alert(votes);
      },
    });
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" bg="gray.900" p={12} rounded={6}>
        <Text mb={4}> Vote for a party by clicking one of these </Text>
        <HStack>
          <Heading>{votes}</Heading>
          <Button onClick={(e) => vote(e)} size="sm">
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
