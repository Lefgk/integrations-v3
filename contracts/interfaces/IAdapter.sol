// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import { AdapterType } from "./AdapterType.sol";

/// @title Adapter interface
interface IAdapter {
    function _gearboxAdapterType() external view returns (AdapterType);

    function _gearboxAdapterVersion() external view returns (uint16);

    function creditManager() external view returns (address);

    function addressProvider() external view returns (address);

    function targetContract() external view override returns (address);
}
