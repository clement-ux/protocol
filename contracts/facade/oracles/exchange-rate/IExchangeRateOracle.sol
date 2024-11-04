// SPDX-License-Identifier: BlueOak-1.0.0
pragma solidity 0.8.19;

interface IExchangeRateOracle {
    function exchangeRate() external view returns (uint256);
}
