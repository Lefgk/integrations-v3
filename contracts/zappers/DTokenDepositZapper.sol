// SPDX-License-Identifier: GPL-2.0-or-later

pragma solidity ^0.8.17;

import {DepositTrait} from "./traits/DepositTrait.sol";
import {DTokenTrait} from "./traits/DTokenTrait.sol";
import {ZapperBase} from "./ZapperBase.sol";

/// @title dToken deposit zapper
/// @notice Zapper that allows to migrate liquidity from older to newer pools
contract DTokenDepositZapper is DTokenTrait, DepositTrait {
    constructor(address newPool, address oldPool) ZapperBase(newPool) DTokenTrait(oldPool) {}
}
