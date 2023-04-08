const { expect } = require("chai")
const { ethers } = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Marketx", () => {
  let marketx 
  let deployer ,buyer 
  

  beforeEach(async () =>{

    [deployer,buyer] = await ethers.getSigners()
    /* console.log(deployer.address,buyer.address) */
    const Marketx = await ethers.getContractFactory("Marketx")
    marketx = await Marketx.deploy()
  })

  describe("Deployment", () => {

    it('Sets the owner' ,async ()=>{
      expect(await marketx.owner()).to.equal(deployer.address)
    })
  })

  describe("Listing",() =>{
    let transaction
    let ID = 1

    beforeEach(async() =>{
      transaction = await marketx.connect(deployer).list(
        1,
        "shoes",
        "clothing",
        "ImAGE",
        12,
        4,
        10)
      await transaction.wait()
    })

    it("Returns item attributes",async()=>{
      const item = await marketx.items(ID)
      expect(item.id).to.equal(ID)
    })
  })
  
})
