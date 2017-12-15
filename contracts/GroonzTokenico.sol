pragma solidity ^0.4.15;

import 'zeppelin-solidity/contracts/token/ERC20Basic.sol';
import 'zeppelin-solidity/contracts/token/PausableToken.sol';


contract GroonzTokenIco is PausableToken {
    using SafeMath for uint256;

    string public name = "Groonz Token";
    string public symbol = "GRZ";
    uint256 public decimals = 18;

    uint256 public totalSupply = 1000000 * (10 ** decimals);

    address public fundsWallet;

    function GroonzTokenIco(address _fundsWallet) {
        fundsWallet = _fundsWallet;

        // initially assign all tokens to the fundsWallet
        balances[fundsWallet] = totalSupply;
        Transfer(0x0, fundsWallet, totalSupply);
    }
}
