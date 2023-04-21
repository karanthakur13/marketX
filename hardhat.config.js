
require("@nomiclabs/hardhat-waffle")

module.exports = {
  solidity: '0.8.9',
  networks: {
    Sepolia:{
      url: 'https://eth-sepolia.g.alchemy.com/v2/z-9WdPlIftl6ad8D_r1wjGpS6UDUv0Fm',
      accounts: [ '56ea715d602b739c313d519e55c0a9bcc3069d6fe07d7b22e6f91cede4e29159']
    }
  }
}
