// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import {VelodromeV2RouterAdapter, Route} from "../../../../adapters/velodrome/VelodromeV2RouterAdapter.sol";

contract VelodromeV2AdapterHarness is VelodromeV2RouterAdapter {
    constructor(address creditManager, address router) VelodromeV2RouterAdapter(creditManager, router) {}

    function validatePath(Route[] memory routes)
        external
        view
        returns (bool valid, address tokenIn, address tokenOut)
    {
        (valid, tokenIn, tokenOut) = _validatePath(routes);
    }
}
