// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import {UniswapV2Adapter} from "../../../../adapters/uniswap/UniswapV2.sol";

contract UniswapV2AdapterHarness is UniswapV2Adapter {
    constructor(address creditManager, address router) UniswapV2Adapter(creditManager, router) {}

    function validatePath(address[] memory path)
        external
        view
        returns (bool valid, address tokenIn, address tokenOut)
    {
        (valid, tokenIn, tokenOut) = _validatePath(path);
    }
}
