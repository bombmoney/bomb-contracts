// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/*

$$$$$$$\   $$$$$$\  $$\      $$\ $$$$$$$\                                                            
$$  __$$\ $$  __$$\ $$$\    $$$ |$$  __$$\                                                           
$$ |  $$ |$$ /  $$ |$$$$\  $$$$ |$$ |  $$ |    $$$$$$\$$$$\   $$$$$$\  $$$$$$$\   $$$$$$\  $$\   $$\ 
$$$$$$$\ |$$ |  $$ |$$\$$\$$ $$ |$$$$$$$\ |    $$  _$$  _$$\ $$  __$$\ $$  __$$\ $$  __$$\ $$ |  $$ |
$$  __$$\ $$ |  $$ |$$ \$$$  $$ |$$  __$$\     $$ / $$ / $$ |$$ /  $$ |$$ |  $$ |$$$$$$$$ |$$ |  $$ |
$$ |  $$ |$$ |  $$ |$$ |\$  /$$ |$$ |  $$ |    $$ | $$ | $$ |$$ |  $$ |$$ |  $$ |$$   ____|$$ |  $$ |
$$$$$$$  | $$$$$$  |$$ | \_/ $$ |$$$$$$$  |$$\ $$ | $$ | $$ |\$$$$$$  |$$ |  $$ |\$$$$$$$\ \$$$$$$$ |
\_______/  \______/ \__|     \__|\_______/ \__|\__| \__| \__| \______/ \__|  \__| \_______| \____$$ |
                                                                                           $$\   $$ |
                                                                                           \$$$$$$  |
    http://bomb.money                                                                      \______/ 
*/


contract TaxOracle is Ownable {
    using SafeMath for uint256;

    IERC20 public bomb;
    IERC20 public btcb;
    address public pair;

    constructor(
        address _bomb,
        address _btcb,
        address _pair
    ) public {
        require(_bomb != address(0), "bomb address cannot be 0");
        require(_btcb != address(0), "btcb address cannot be 0");
        require(_pair != address(0), "pair address cannot be 0");
        bomb = IERC20(_bomb);
        btcb = IERC20(_btcb);
        pair = _pair;
    }

    function consult(address _token, uint256 _amountIn) external view returns (uint144 amountOut) {
        require(_token == address(bomb), "token needs to be bomb");
        uint256 bombBalance = bomb.balanceOf(pair);
        uint256 btcbBalance = btcb.balanceOf(pair);
        return uint144(bombBalance.mul(_amountIn).div(btcbBalance));
    }

    function getBombBalance() external view returns (uint256) {
	return bomb.balanceOf(pair);
    }

    function getBtcbBalance() external view returns (uint256) {
	return btcb.balanceOf(pair);
    }

    function getPrice() external view returns (uint256) {
        uint256 bombBalance = bomb.balanceOf(pair);
        uint256 btcbBalance = btcb.balanceOf(pair);
        return bombBalance.mul(1e18).div(btcbBalance);
    }


    function setBomb(address _bomb) external onlyOwner {
        require(_bomb != address(0), "bomb address cannot be 0");
        bomb = IERC20(_bomb);
    }

    function setBtcb(address _btcb) external onlyOwner {
        require(_btcb != address(0), "btcb address cannot be 0");
        btcb = IERC20(_btcb);
    }

    function setPair(address _pair) external onlyOwner {
        require(_pair != address(0), "pair address cannot be 0");
        pair = _pair;
    }



}