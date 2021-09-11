const SwapContract = artifacts.require('Multiswap.sol');

module.exports = function(deployer) {
    deployer.deploy(SwapContract);
}