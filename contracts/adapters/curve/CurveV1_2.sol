// SPDX-License-Identifier: GPL-2.0-or-later

pragma solidity ^0.8.17;

import {AdapterType} from "@gearbox-protocol/sdk-gov/contracts/AdapterType.sol";
import {IAdapter} from "@gearbox-protocol/core-v2/contracts/interfaces/IAdapter.sol";

import {ICurvePool2Assets, N_COINS} from "../../integrations/curve/ICurvePool_2.sol";
import {ICurveV1_2AssetsAdapter} from "../../interfaces/curve/ICurveV1_2AssetsAdapter.sol";
import {CurveV1AdapterBase} from "./CurveV1_Base.sol";

/// @title Curve V1 2 assets adapter
/// @notice Implements logic allowing to interact with Curve pools with 2 assets
contract CurveV1Adapter2Assets is CurveV1AdapterBase, ICurveV1_2AssetsAdapter {
    function _gearboxAdapterType() external pure virtual override returns (AdapterType) {
        return AdapterType.CURVE_V1_2ASSETS;
    }

    /// @notice Constructor
    /// @param _creditManager Credit manager address
    /// @param _curvePool Target Curve pool address
    /// @param _lp_token Pool LP token address
    /// @param _metapoolBase Base pool address (for metapools only) or zero address
    constructor(address _creditManager, address _curvePool, address _lp_token, address _metapoolBase)
        CurveV1AdapterBase(_creditManager, _curvePool, _lp_token, _metapoolBase, N_COINS)
    {}

    /// @notice Add liquidity to the pool
    /// @param amounts Amounts of tokens to add
    /// @dev `min_mint_amount` parameter is ignored because calldata is passed directly to the target contract
    function add_liquidity(uint256[N_COINS] calldata amounts, uint256)
        external
        override
        creditFacadeOnly // U:[CRV2-1]
        returns (uint256 tokensToEnable, uint256 tokensToDisable)
    {
        (tokensToEnable, tokensToDisable) = _add_liquidity(amounts[0] > 1, amounts[1] > 1, false, false); // U:[CRV2-2]
    }

    /// @dev Returns calldata for adding liquidity in coin `i`
    function _getAddLiquidityOneCoinCallData(uint256 i, uint256 amount, uint256 minAmount)
        internal
        pure
        override
        returns (bytes memory)
    {
        uint256[2] memory amounts;
        amounts[i] = amount;
        return abi.encodeCall(ICurvePool2Assets.add_liquidity, (amounts, minAmount));
    }

    /// @dev Returns calldata for calculating the result of adding liquidity in coin `i`
    function _getCalcAddOneCoinCallData(uint256 i, uint256 amount)
        internal
        pure
        override
        returns (bytes memory, bytes memory)
    {
        uint256[2] memory amounts;
        amounts[i] = amount;
        return (
            abi.encodeCall(ICurvePool2Assets.calc_token_amount, (amounts, true)),
            abi.encodeWithSignature("calc_token_amount(uint256[2])", amounts)
        );
    }

    /// @notice Remove liquidity from the pool
    /// @dev '_amount' and 'min_amounts' parameters are ignored because calldata is directly passed to the target contract
    function remove_liquidity(uint256, uint256[N_COINS] calldata)
        external
        virtual
        creditFacadeOnly // U:[CRV2-1]
        returns (uint256 tokensToEnable, uint256 tokensToDisable)
    {
        (tokensToEnable, tokensToDisable) = _remove_liquidity(); // U:[CRV2-3]
    }

    /// @notice Withdraw exact amounts of tokens from the pool
    /// @param amounts Amounts of tokens to withdraw
    /// @dev `max_burn_amount` parameter is ignored because calldata is directly passed to the target contract
    function remove_liquidity_imbalance(uint256[N_COINS] calldata amounts, uint256)
        external
        virtual
        override
        creditFacadeOnly // U:[CRV2-1]
        returns (uint256 tokensToEnable, uint256 tokensToDisable)
    {
        (tokensToEnable, tokensToDisable) = _remove_liquidity_imbalance(amounts[0] > 1, amounts[1] > 1, false, false); // U:[CRV2-4]
    }
}
