/* eslint-disable node/no-missing-import */
import { expect, assert } from "chai";
import { ethers } from "hardhat";
import { GeneralElection } from "../typechain/GeneralElection";

// const address = 0x5FbDB2315678afecb367f032d93F642f64180aa3

// eslint-disable-next-line prettier/prettier
describe("GeneralElection", () => {
  let generalElection: GeneralElection;
  const testParty = "PPP";

  beforeEach(async () => {
    // const signers = await ethers.getSigners();
    const GeneralElection = await ethers.getContractFactory("GeneralElection");

    generalElection = await GeneralElection.deploy(["NPP", "NDC", "PPP"]);

    (await generalElection).deployed();
  });

  it("should deploy contract successfully", async () => {
    console.log(`deployed at ${generalElection.address}`);
  });

  it("should return an empty ballot box || total votes should be 0", async () => {
    // act
    const result = await generalElection.getTotalVotes();

    // assert
    expect(result).equals(0);
  });

  it("should return  0 for all parties at the start of the elections", async () => {
    // act
    const result = await generalElection.getPartyVotes(testParty);

    // assert
    expect(result).equals(0);
  });

  

  it("should increase the votes of a party by 1 when someone votes", async () => {
    // act
    await generalElection.voteForParty(testParty);
    const result = await generalElection.getTotalVotes();
    const partyResult = await generalElection.getPartyVotes("PPP");

    // assert
    expect(result).equals(1);
    expect(partyResult).equals(1);
  });

    it("should fail when voter has already voted", async () =>{
    // act
    // calling the method for the first time or first time voting
    await generalElection.voteForParty("PPP");

    // assert
   
    assert.throws(async () => await generalElection.voteForParty("PPP"), "can vote only once")
   
  });
  
  
});

