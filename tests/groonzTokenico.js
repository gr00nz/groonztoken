const GroonzTokenIco = artifacts.require('../GroonzTokenIco.sol');

contract('GroonzTokenIco', accounts => {

  it('should have initial supply of 1,000,000 units assigned to funds wallet', async () => {
    const fundsWallet = accounts[1];
    const groonzToken = await GroonzTokenIco.new(fundsWallet);

    const expectedSupply = 1000000 * Math.pow(10, 18);
    
    const totalSupply = await groonzToken.totalSupply();
    assert.equal(totalSupply, expectedSupply, 'Total supply mismatch');
    
    const fundsWalletBalance = await groonzToken.balanceOf(fundsWallet);
    assert.equal(fundsWalletBalance.toNumber(), expectedSupply, 'Initial funds wallet balance mismatch');
  });
});
