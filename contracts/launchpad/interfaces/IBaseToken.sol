// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import "../utils/TokenType.sol";

interface IBaseToken {
    event TokenCreated(
        address indexed owner,
        address indexed token,
        TokenType tokenType,
        uint256 version
    );
}