// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

contract ExtraRewardWrapperMock {
    address public token;

    constructor(address _token) {
        token = _token;
    }
}
