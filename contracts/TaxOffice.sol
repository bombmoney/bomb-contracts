// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "./owner/Operator.sol";
import "./interfaces/ITaxable.sol";

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
contract TaxOffice is Operator {
    address public bomb;

    constructor(address _bomb) public {
        require(_bomb != address(0), "bomb address cannot be 0");
        bomb = _bomb;
    }

    function setTaxTiersTwap(uint8 _index, uint256 _value) public onlyOperator returns (bool) {
        return ITaxable(bomb).setTaxTiersTwap(_index, _value);
    }

    function setTaxTiersRate(uint8 _index, uint256 _value) public onlyOperator returns (bool) {
        return ITaxable(bomb).setTaxTiersRate(_index, _value);
    }

    function enableAutoCalculateTax() public onlyOperator {
        ITaxable(bomb).enableAutoCalculateTax();
    }

    function disableAutoCalculateTax() public onlyOperator {
        ITaxable(bomb).disableAutoCalculateTax();
    }

    function setTaxRate(uint256 _taxRate) public onlyOperator {
        ITaxable(bomb).setTaxRate(_taxRate);
    }

    function setBurnThreshold(uint256 _burnThreshold) public onlyOperator {
        ITaxable(bomb).setBurnThreshold(_burnThreshold);
    }

    function setTaxCollectorAddress(address _taxCollectorAddress) public onlyOperator {
        ITaxable(bomb).setTaxCollectorAddress(_taxCollectorAddress);
    }

    function excludeAddressFromTax(address _address) external onlyOperator returns (bool) {
        return ITaxable(bomb).excludeAddress(_address);
    }

    function includeAddressInTax(address _address) external onlyOperator returns (bool) {
        return ITaxable(bomb).includeAddress(_address);
    }

    function setTaxableBombOracle(address _bombOracle) external onlyOperator {
        ITaxable(bomb).setBombOracle(_bombOracle);
    }

    function transferTaxOffice(address _newTaxOffice) external onlyOperator {
        ITaxable(bomb).setTaxOffice(_newTaxOffice);
    }
}
