// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import {N_COINS} from "../../integrations/curve/ICurvePool_4.sol";
import {ICurveV1Adapter} from "./ICurveV1Adapter.sol";

/// @title Curve V1 4 assets adapter interface
interface ICurveV1_4AssetsAdapter is ICurveV1Adapter {
    function add_liquidity(uint256[N_COINS] calldata amounts, uint256)
        external
        returns (uint256 tokensToEnable, uint256 tokensToDisable);

    function remove_liquidity(uint256, uint256[N_COINS] calldata)
        external
        returns (uint256 tokensToEnable, uint256 tokensToDisable);

    function remove_liquidity_imbalance(uint256[N_COINS] calldata amounts, uint256)
        external
        returns (uint256 tokensToEnable, uint256 tokensToDisable);
}
