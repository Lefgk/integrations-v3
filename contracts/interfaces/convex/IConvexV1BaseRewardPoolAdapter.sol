// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import {IAdapter} from "@gearbox-protocol/core-v2/contracts/interfaces/IAdapter.sol";

/// @title Convex V1 BaseRewardPool adapter interface
interface IConvexV1BaseRewardPoolAdapter is IAdapter {
    function curveLPtoken() external view returns (address);

    function stakingToken() external view returns (address);

    function stakedPhantomToken() external view returns (address);

    function extraReward1() external view returns (address);

    function extraReward2() external view returns (address);

    function extraReward3() external view returns (address);

    function extraReward4() external view returns (address);

    function curveLPTokenMask() external view returns (uint256);

    function stakingTokenMask() external view returns (uint256);

    function stakedTokenMask() external view returns (uint256);

    function rewardTokensMask() external view returns (uint256);

    function stake(uint256) external returns (uint256 tokensToEnable, uint256 tokensToDisable);

    function stakeDiff(uint256 leftoverAmount) external returns (uint256 tokensToEnable, uint256 tokensToDisable);

    function getReward() external returns (uint256 tokensToEnable, uint256 tokensToDisable);

    function withdraw(uint256, bool claim) external returns (uint256 tokensToEnable, uint256 tokensToDisable);

    function withdrawDiff(uint256 leftoverAmount, bool claim)
        external
        returns (uint256 tokensToEnable, uint256 tokensToDisable);

    function withdrawAndUnwrap(uint256, bool claim)
        external
        returns (uint256 tokensToEnable, uint256 tokensToDisable);

    function withdrawDiffAndUnwrap(uint256 leftoverAmount, bool claim)
        external
        returns (uint256 tokensToEnable, uint256 tokensToDisable);
}
