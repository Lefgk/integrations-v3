// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import {UniswapV3Adapter} from "../../../../adapters/uniswap/UniswapV3.sol";

contract UniswapV3AdapterHarness is UniswapV3Adapter {
    constructor(address creditManager, address router) UniswapV3Adapter(creditManager, router) {}

    function validatePath(bytes memory path) external view returns (bool valid, address tokenIn, address tokenOut) {
        (valid, tokenIn, tokenOut) = _validatePath(path);
    }
}
