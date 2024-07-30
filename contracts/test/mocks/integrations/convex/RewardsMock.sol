// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

contract RewardsMock {
    address public rewardToken;

    constructor(address _rewardToken) {
        rewardToken = _rewardToken;
    }
}
