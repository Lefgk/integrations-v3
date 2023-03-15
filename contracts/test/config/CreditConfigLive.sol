// SPDX-License-Identifier: UNLICENSED
// Gearbox. Generalized leverage protocol that allows to take leverage and then use it across other DeFi protocols and platforms in a composable way.
// (c) Gearbox Holdings, 2022
pragma solidity ^0.8.10;

import {Tokens} from "./Tokens.sol";
import {Contracts} from "./SupportedContracts.sol";

/// @dev A struct containing parameters for a recognized collateral token in the system
struct CollateralTokenHuman {
    /// @dev Address of the collateral token
    Tokens token;
    /// @dev Address of the liquidation threshold
    uint16 liquidationThreshold;
}

/// @dev A struct representing the initial Credit Manager configuration parameters
struct CreditManagerHumanOpts {
    Tokens underlying;
    /// @dev The minimal debt principal amount
    uint128 minBorrowedAmount;
    /// @dev The maximal debt principal amount
    uint128 maxBorrowedAmount;
    /// @dev The initial list of collateral tokens to allow
    CollateralTokenHuman[] collateralTokens;
    /// @dev Address of DegenNFT, address(0) if whitelisted mode is not used
    address degenNFT;
    /// @dev Address of BlacklistHelper, address(0) if the underlying is not blacklistable
    address blacklistHelper;
    /// @dev Whether the Credit Manager is connected to an expirable pool (and the CreditFacade is expirable)
    bool expirable;
    /// @dev Whether to skip normal initialization - used for new Credit Configurators that are deployed for existing CMs
    bool skipInit;
    /// @dev Contracts which should become adapters
    Contracts[] contracts;
}

contract CreditConfigLive {
    mapping(uint256 => CreditManagerHumanOpts) creditManagerHumanOpts;
    uint256 numOpts;

    constructor() {
        CreditManagerHumanOpts storage cm;

        cm = creditManagerHumanOpts[numOpts];
        ++numOpts;
        cm.underlying = Tokens.DAI;
        cm.minBorrowedAmount = 150000000000000000000000;
        cm.maxBorrowedAmount = 1000000000000000000000000;
        cm.degenNFT = address(0);
        cm.blacklistHelper = address(0);
        cm.expirable = false;
        cm.skipInit = false;
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.WETH, liquidationThreshold: 8500}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.STETH, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.WBTC, liquidationThreshold: 8500}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.USDC, liquidationThreshold: 9200}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.USDT, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.sUSD, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.FRAX, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.GUSD, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.LUSD, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.steCRV, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxsteCRV, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvxsteCRV, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens._3Crv, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvx3Crv, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvx3Crv, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.FRAX3CRV, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxFRAX3CRV, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvxFRAX3CRV, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.LUSD3CRV, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxLUSD3CRV, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvxLUSD3CRV, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.crvPlain3andSUSD, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxcrvPlain3andSUSD, liquidationThreshold: 9000}));
        cm.collateralTokens.push(
            CollateralTokenHuman({token: Tokens.stkcvxcrvPlain3andSUSD, liquidationThreshold: 9000})
        );
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.gusd3CRV, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxgusd3CRV, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvxgusd3CRV, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.crvFRAX, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxcrvFRAX, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvxcrvFRAX, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvDAI, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvUSDC, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvWETH, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvWBTC, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvCurve_stETH, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvCurve_FRAX, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.CVX, liquidationThreshold: 2500}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.FXS, liquidationThreshold: 2500}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.LQTY, liquidationThreshold: 1}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.CRV, liquidationThreshold: 2500}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.LDO, liquidationThreshold: 1}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.SNX, liquidationThreshold: 2500}));
        cm.contracts.push(Contracts.UNISWAP_V3_ROUTER);
        cm.contracts.push(Contracts.UNISWAP_V2_ROUTER);
        cm.contracts.push(Contracts.SUSHISWAP_ROUTER);
        cm.contracts.push(Contracts.LIDO_STETH_GATEWAY);
        cm.contracts.push(Contracts.CURVE_3CRV_POOL);
        cm.contracts.push(Contracts.CURVE_FRAX_USDC_POOL);
        cm.contracts.push(Contracts.CURVE_STETH_GATEWAY);
        cm.contracts.push(Contracts.CURVE_FRAX_POOL);
        cm.contracts.push(Contracts.CURVE_SUSD_POOL);
        cm.contracts.push(Contracts.CURVE_LUSD_POOL);
        cm.contracts.push(Contracts.CURVE_GUSD_POOL);
        cm.contracts.push(Contracts.CURVE_SUSD_DEPOSIT);
        cm.contracts.push(Contracts.YEARN_DAI_VAULT);
        cm.contracts.push(Contracts.YEARN_USDC_VAULT);
        cm.contracts.push(Contracts.YEARN_WETH_VAULT);
        cm.contracts.push(Contracts.YEARN_WBTC_VAULT);
        cm.contracts.push(Contracts.YEARN_CURVE_FRAX_VAULT);
        cm.contracts.push(Contracts.YEARN_CURVE_STETH_VAULT);
        cm.contracts.push(Contracts.CONVEX_FRAX3CRV_POOL);
        cm.contracts.push(Contracts.CONVEX_LUSD3CRV_POOL);
        cm.contracts.push(Contracts.CONVEX_GUSD_POOL);
        cm.contracts.push(Contracts.CONVEX_SUSD_POOL);
        cm.contracts.push(Contracts.CONVEX_3CRV_POOL);
        cm.contracts.push(Contracts.CONVEX_FRAX_USDC_POOL);
        cm.contracts.push(Contracts.CONVEX_STECRV_POOL);
        cm.contracts.push(Contracts.CONVEX_BOOSTER);
        cm.contracts.push(Contracts.CONVEX_CLAIM_ZAP);
        cm.contracts.push(Contracts.UNIVERSAL_ADAPTER);
        cm = creditManagerHumanOpts[numOpts];
        ++numOpts;
        cm.underlying = Tokens.USDC;
        cm.minBorrowedAmount = 150000000000;
        cm.maxBorrowedAmount = 1000000000000;
        cm.degenNFT = address(0);
        cm.blacklistHelper = address(0);
        cm.expirable = false;
        cm.skipInit = false;
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.WETH, liquidationThreshold: 8500}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.STETH, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.WBTC, liquidationThreshold: 8500}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.DAI, liquidationThreshold: 9200}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.USDT, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.sUSD, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.FRAX, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.GUSD, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.LUSD, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.steCRV, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxsteCRV, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvxsteCRV, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens._3Crv, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvx3Crv, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvx3Crv, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.FRAX3CRV, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxFRAX3CRV, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvxFRAX3CRV, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.LUSD3CRV, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxLUSD3CRV, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvxLUSD3CRV, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.crvPlain3andSUSD, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxcrvPlain3andSUSD, liquidationThreshold: 9000}));
        cm.collateralTokens.push(
            CollateralTokenHuman({token: Tokens.stkcvxcrvPlain3andSUSD, liquidationThreshold: 9000})
        );
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.gusd3CRV, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxgusd3CRV, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvxgusd3CRV, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.crvFRAX, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxcrvFRAX, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvxcrvFRAX, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvDAI, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvUSDC, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvWETH, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvWBTC, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvCurve_stETH, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvCurve_FRAX, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.CVX, liquidationThreshold: 2500}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.FXS, liquidationThreshold: 2500}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.LQTY, liquidationThreshold: 1}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.CRV, liquidationThreshold: 2500}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.LDO, liquidationThreshold: 1}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.SNX, liquidationThreshold: 2500}));
        cm.contracts.push(Contracts.UNISWAP_V3_ROUTER);
        cm.contracts.push(Contracts.UNISWAP_V2_ROUTER);
        cm.contracts.push(Contracts.SUSHISWAP_ROUTER);
        cm.contracts.push(Contracts.LIDO_STETH_GATEWAY);
        cm.contracts.push(Contracts.CURVE_3CRV_POOL);
        cm.contracts.push(Contracts.CURVE_FRAX_USDC_POOL);
        cm.contracts.push(Contracts.CURVE_STETH_GATEWAY);
        cm.contracts.push(Contracts.CURVE_FRAX_POOL);
        cm.contracts.push(Contracts.CURVE_SUSD_POOL);
        cm.contracts.push(Contracts.CURVE_LUSD_POOL);
        cm.contracts.push(Contracts.CURVE_GUSD_POOL);
        cm.contracts.push(Contracts.CURVE_SUSD_DEPOSIT);
        cm.contracts.push(Contracts.YEARN_DAI_VAULT);
        cm.contracts.push(Contracts.YEARN_USDC_VAULT);
        cm.contracts.push(Contracts.YEARN_WETH_VAULT);
        cm.contracts.push(Contracts.YEARN_WBTC_VAULT);
        cm.contracts.push(Contracts.YEARN_CURVE_FRAX_VAULT);
        cm.contracts.push(Contracts.YEARN_CURVE_STETH_VAULT);
        cm.contracts.push(Contracts.CONVEX_FRAX3CRV_POOL);
        cm.contracts.push(Contracts.CONVEX_LUSD3CRV_POOL);
        cm.contracts.push(Contracts.CONVEX_GUSD_POOL);
        cm.contracts.push(Contracts.CONVEX_SUSD_POOL);
        cm.contracts.push(Contracts.CONVEX_3CRV_POOL);
        cm.contracts.push(Contracts.CONVEX_FRAX_USDC_POOL);
        cm.contracts.push(Contracts.CONVEX_STECRV_POOL);
        cm.contracts.push(Contracts.CONVEX_BOOSTER);
        cm.contracts.push(Contracts.CONVEX_CLAIM_ZAP);
        cm.contracts.push(Contracts.UNIVERSAL_ADAPTER);
        cm = creditManagerHumanOpts[numOpts];
        ++numOpts;
        cm.underlying = Tokens.WETH;
        cm.minBorrowedAmount = 100000000000000000000;
        cm.maxBorrowedAmount = 600000000000000000000;
        cm.degenNFT = address(0);
        cm.blacklistHelper = address(0);
        cm.expirable = false;
        cm.skipInit = false;
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.STETH, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.WBTC, liquidationThreshold: 8500}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.USDC, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.DAI, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.USDT, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.sUSD, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.FRAX, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.GUSD, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.LUSD, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.steCRV, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxsteCRV, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvxsteCRV, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens._3Crv, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvx3Crv, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvx3Crv, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.FRAX3CRV, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxFRAX3CRV, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvxFRAX3CRV, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.LUSD3CRV, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxLUSD3CRV, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvxLUSD3CRV, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.crvPlain3andSUSD, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxcrvPlain3andSUSD, liquidationThreshold: 8000}));
        cm.collateralTokens.push(
            CollateralTokenHuman({token: Tokens.stkcvxcrvPlain3andSUSD, liquidationThreshold: 8000})
        );
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.gusd3CRV, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxgusd3CRV, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvxgusd3CRV, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.crvFRAX, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxcrvFRAX, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvxcrvFRAX, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvDAI, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvUSDC, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvWETH, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvWBTC, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvCurve_stETH, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvCurve_FRAX, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.CVX, liquidationThreshold: 2500}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.FXS, liquidationThreshold: 2500}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.LQTY, liquidationThreshold: 1}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.CRV, liquidationThreshold: 2500}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.LDO, liquidationThreshold: 1}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.SNX, liquidationThreshold: 2500}));
        cm.contracts.push(Contracts.UNISWAP_V3_ROUTER);
        cm.contracts.push(Contracts.UNISWAP_V2_ROUTER);
        cm.contracts.push(Contracts.SUSHISWAP_ROUTER);
        cm.contracts.push(Contracts.LIDO_STETH_GATEWAY);
        cm.contracts.push(Contracts.CURVE_3CRV_POOL);
        cm.contracts.push(Contracts.CURVE_FRAX_USDC_POOL);
        cm.contracts.push(Contracts.CURVE_STETH_GATEWAY);
        cm.contracts.push(Contracts.CURVE_FRAX_POOL);
        cm.contracts.push(Contracts.CURVE_SUSD_POOL);
        cm.contracts.push(Contracts.CURVE_LUSD_POOL);
        cm.contracts.push(Contracts.CURVE_GUSD_POOL);
        cm.contracts.push(Contracts.CURVE_SUSD_DEPOSIT);
        cm.contracts.push(Contracts.YEARN_DAI_VAULT);
        cm.contracts.push(Contracts.YEARN_USDC_VAULT);
        cm.contracts.push(Contracts.YEARN_WETH_VAULT);
        cm.contracts.push(Contracts.YEARN_WBTC_VAULT);
        cm.contracts.push(Contracts.YEARN_CURVE_FRAX_VAULT);
        cm.contracts.push(Contracts.YEARN_CURVE_STETH_VAULT);
        cm.contracts.push(Contracts.CONVEX_FRAX3CRV_POOL);
        cm.contracts.push(Contracts.CONVEX_LUSD3CRV_POOL);
        cm.contracts.push(Contracts.CONVEX_GUSD_POOL);
        cm.contracts.push(Contracts.CONVEX_SUSD_POOL);
        cm.contracts.push(Contracts.CONVEX_3CRV_POOL);
        cm.contracts.push(Contracts.CONVEX_FRAX_USDC_POOL);
        cm.contracts.push(Contracts.CONVEX_STECRV_POOL);
        cm.contracts.push(Contracts.CONVEX_BOOSTER);
        cm.contracts.push(Contracts.CONVEX_CLAIM_ZAP);
        cm.contracts.push(Contracts.UNIVERSAL_ADAPTER);
        cm = creditManagerHumanOpts[numOpts];
        ++numOpts;
        cm.underlying = Tokens.wstETH;
        cm.minBorrowedAmount = 100000000000000000000;
        cm.maxBorrowedAmount = 600000000000000000000;
        cm.degenNFT = address(0);
        cm.blacklistHelper = address(0);
        cm.expirable = false;
        cm.skipInit = false;
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.STETH, liquidationThreshold: 9450}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.WETH, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.WBTC, liquidationThreshold: 8500}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.USDC, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.DAI, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.USDT, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.sUSD, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.FRAX, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.GUSD, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.LUSD, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.steCRV, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxsteCRV, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvxsteCRV, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens._3Crv, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvx3Crv, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvx3Crv, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.FRAX3CRV, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxFRAX3CRV, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvxFRAX3CRV, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.LUSD3CRV, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxLUSD3CRV, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvxLUSD3CRV, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.crvPlain3andSUSD, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxcrvPlain3andSUSD, liquidationThreshold: 8000}));
        cm.collateralTokens.push(
            CollateralTokenHuman({token: Tokens.stkcvxcrvPlain3andSUSD, liquidationThreshold: 8000})
        );
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.gusd3CRV, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxgusd3CRV, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvxgusd3CRV, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.crvFRAX, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxcrvFRAX, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvxcrvFRAX, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvDAI, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvUSDC, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvWETH, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvWBTC, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvCurve_stETH, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvCurve_FRAX, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.CVX, liquidationThreshold: 2500}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.FXS, liquidationThreshold: 2500}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.LQTY, liquidationThreshold: 1}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.CRV, liquidationThreshold: 2500}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.LDO, liquidationThreshold: 1}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.SNX, liquidationThreshold: 2500}));
        cm.contracts.push(Contracts.UNISWAP_V3_ROUTER);
        cm.contracts.push(Contracts.UNISWAP_V2_ROUTER);
        cm.contracts.push(Contracts.SUSHISWAP_ROUTER);
        cm.contracts.push(Contracts.LIDO_STETH_GATEWAY);
        cm.contracts.push(Contracts.CURVE_3CRV_POOL);
        cm.contracts.push(Contracts.CURVE_FRAX_USDC_POOL);
        cm.contracts.push(Contracts.CURVE_STETH_GATEWAY);
        cm.contracts.push(Contracts.CURVE_FRAX_POOL);
        cm.contracts.push(Contracts.CURVE_SUSD_POOL);
        cm.contracts.push(Contracts.CURVE_LUSD_POOL);
        cm.contracts.push(Contracts.CURVE_GUSD_POOL);
        cm.contracts.push(Contracts.CURVE_SUSD_DEPOSIT);
        cm.contracts.push(Contracts.YEARN_DAI_VAULT);
        cm.contracts.push(Contracts.YEARN_USDC_VAULT);
        cm.contracts.push(Contracts.YEARN_WETH_VAULT);
        cm.contracts.push(Contracts.YEARN_WBTC_VAULT);
        cm.contracts.push(Contracts.YEARN_CURVE_FRAX_VAULT);
        cm.contracts.push(Contracts.YEARN_CURVE_STETH_VAULT);
        cm.contracts.push(Contracts.CONVEX_FRAX3CRV_POOL);
        cm.contracts.push(Contracts.CONVEX_LUSD3CRV_POOL);
        cm.contracts.push(Contracts.CONVEX_GUSD_POOL);
        cm.contracts.push(Contracts.CONVEX_SUSD_POOL);
        cm.contracts.push(Contracts.CONVEX_3CRV_POOL);
        cm.contracts.push(Contracts.CONVEX_FRAX_USDC_POOL);
        cm.contracts.push(Contracts.CONVEX_STECRV_POOL);
        cm.contracts.push(Contracts.CONVEX_BOOSTER);
        cm.contracts.push(Contracts.CONVEX_CLAIM_ZAP);
        cm.contracts.push(Contracts.UNIVERSAL_ADAPTER);
        cm.contracts.push(Contracts.LIDO_WSTETH);
        cm = creditManagerHumanOpts[numOpts];
        ++numOpts;
        cm.underlying = Tokens.WBTC;
        cm.minBorrowedAmount = 750000000;
        cm.maxBorrowedAmount = 5000000000;
        cm.degenNFT = address(0);
        cm.blacklistHelper = address(0);
        cm.expirable = false;
        cm.skipInit = false;
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.WETH, liquidationThreshold: 8500}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.STETH, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.USDC, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.DAI, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.USDT, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.sUSD, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.FRAX, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.GUSD, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.LUSD, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.steCRV, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxsteCRV, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvxsteCRV, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens._3Crv, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvx3Crv, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvx3Crv, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.FRAX3CRV, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxFRAX3CRV, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvxFRAX3CRV, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.LUSD3CRV, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxLUSD3CRV, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvxLUSD3CRV, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.crvPlain3andSUSD, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxcrvPlain3andSUSD, liquidationThreshold: 8000}));
        cm.collateralTokens.push(
            CollateralTokenHuman({token: Tokens.stkcvxcrvPlain3andSUSD, liquidationThreshold: 8000})
        );
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.gusd3CRV, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxgusd3CRV, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvxgusd3CRV, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.crvFRAX, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.cvxcrvFRAX, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.stkcvxcrvFRAX, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvDAI, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvUSDC, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvWETH, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvWBTC, liquidationThreshold: 9000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvCurve_stETH, liquidationThreshold: 8250}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.yvCurve_FRAX, liquidationThreshold: 8000}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.CVX, liquidationThreshold: 2500}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.FXS, liquidationThreshold: 2500}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.LQTY, liquidationThreshold: 1}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.CRV, liquidationThreshold: 2500}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.LDO, liquidationThreshold: 1}));
        cm.collateralTokens.push(CollateralTokenHuman({token: Tokens.SNX, liquidationThreshold: 2500}));
        cm.contracts.push(Contracts.UNISWAP_V3_ROUTER);
        cm.contracts.push(Contracts.UNISWAP_V2_ROUTER);
        cm.contracts.push(Contracts.SUSHISWAP_ROUTER);
        cm.contracts.push(Contracts.LIDO_STETH_GATEWAY);
        cm.contracts.push(Contracts.CURVE_3CRV_POOL);
        cm.contracts.push(Contracts.CURVE_FRAX_USDC_POOL);
        cm.contracts.push(Contracts.CURVE_STETH_GATEWAY);
        cm.contracts.push(Contracts.CURVE_FRAX_POOL);
        cm.contracts.push(Contracts.CURVE_SUSD_POOL);
        cm.contracts.push(Contracts.CURVE_LUSD_POOL);
        cm.contracts.push(Contracts.CURVE_GUSD_POOL);
        cm.contracts.push(Contracts.CURVE_SUSD_DEPOSIT);
        cm.contracts.push(Contracts.YEARN_DAI_VAULT);
        cm.contracts.push(Contracts.YEARN_USDC_VAULT);
        cm.contracts.push(Contracts.YEARN_WETH_VAULT);
        cm.contracts.push(Contracts.YEARN_WBTC_VAULT);
        cm.contracts.push(Contracts.YEARN_CURVE_FRAX_VAULT);
        cm.contracts.push(Contracts.YEARN_CURVE_STETH_VAULT);
        cm.contracts.push(Contracts.CONVEX_FRAX3CRV_POOL);
        cm.contracts.push(Contracts.CONVEX_LUSD3CRV_POOL);
        cm.contracts.push(Contracts.CONVEX_GUSD_POOL);
        cm.contracts.push(Contracts.CONVEX_SUSD_POOL);
        cm.contracts.push(Contracts.CONVEX_3CRV_POOL);
        cm.contracts.push(Contracts.CONVEX_FRAX_USDC_POOL);
        cm.contracts.push(Contracts.CONVEX_STECRV_POOL);
        cm.contracts.push(Contracts.CONVEX_BOOSTER);
        cm.contracts.push(Contracts.CONVEX_CLAIM_ZAP);
        cm.contracts.push(Contracts.UNIVERSAL_ADAPTER);
    }
}
