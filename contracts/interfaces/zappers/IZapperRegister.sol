// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import {IVersion} from "@gearbox-protocol/core-v2/contracts/interfaces/IVersion.sol";

interface IZapperRegisterEvents {
    event AddZapper(address);

    event RemoveZapper(address);
}

interface IZapperRegister is IVersion, IZapperRegisterEvents {
    function zappers(address pool) external view returns (address[] memory);

    function addZapper(address zapper) external;

    function removeZapper(address zapper) external;
}
