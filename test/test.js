const { expect } = require("chai");
const { ethers } = require("hardhat");
const fs = require('fs');

let Greeter
let greeter

beforeEach(async () => {
  signers = await ethers.getSigners();

  console.log("Hello, world!");
  Greeter = await ethers.getContractFactory("MerkleDistributor");
  greeter = await Greeter.deploy("0xfa6863a6507c94ed52e9276f8a72479924e77a36",
  "0x536eb1e65e99b56c85ad556ff70ba42ca2708fa7c981ddb06fdf78f1f7153dae");
  await greeter.deployed();    
});

describe("testing", function () {
  it("test of merkletree", async function () {

   
    // wait until the transaction is mined
    let resultbob = await greeter.connect(signers[0]).claim(0,"0xB9CcDD7Bedb7157798e10Ff06C7F10e0F37C6BdD", 
    5,
    ["0xb4d36c827bc9fbdf3d99d7b9e35fb7127935d32e97e3e7f14b1b4f0183207ff4"]);
    console.log(resultbob);

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
