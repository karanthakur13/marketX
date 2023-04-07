const { expect } = require("chai")
const { ethers } = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Marketx", () => {
  it('has a name', async () => {
    const Marketx = await ethers.getContractFactory("Marketx")
    marketx = await Marketx.deploy()
    const name = await marketx.name()
    expect (name).to.equal("Marketx")
  })  
})
