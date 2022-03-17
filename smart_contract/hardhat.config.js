require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/mEJIAuxHnE2HsvBATUIEBiTLrd-dN5X3',
      accounts: [
        'ea19ec5ecb035b084b3f34c61066b1fe6daf6618b9bd5702525468b08d687af7',
      ],
    },
  },
}