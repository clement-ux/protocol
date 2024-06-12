// SPDX-License-Identifier: BlueOak-1.0.0
pragma solidity 0.8.19;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { VersionRegistry } from "./VersionRegistry.sol";

/**
 * @title Asset Plugin Registry
 * @notice A tiny contract for tracking asset plugins
 */
contract AssetPluginRegistry is Ownable {
    VersionRegistry public versionRegistry;
    // versionHash => asset => isValid
    mapping(bytes32 => mapping(address => bool)) public isValidAsset;

    error AssetPluginRegistry__InvalidAsset();
    error AssetPluginRegistry__InvalidVersion();
    error AssetPluginRegistry__LengthMismatch();

    event AssetPluginRegistryUpdated(bytes32 versionHash, address asset, bool validity);

    constructor(address _versionRegistry) Ownable() {
        versionRegistry = VersionRegistry(_versionRegistry);

        _transferOwnership(versionRegistry.owner());
    }

    function registerAsset(address _asset, bytes32[] calldata validForVersions) external onlyOwner {
        if (_asset == address(0)) {
            revert AssetPluginRegistry__InvalidAsset();
        }

        for (uint256 i = 0; i < validForVersions.length; ++i) {
            bytes32 versionHash = validForVersions[i];
            if (address(versionRegistry.deployments(versionHash)) == address(0)) {
                revert AssetPluginRegistry__InvalidVersion();
            }

            isValidAsset[versionHash][_asset] = true;

            emit AssetPluginRegistryUpdated(versionHash, _asset, true);
        }
    }

    function updateVersionsByAsset(
        address _asset,
        bytes32[] calldata _versionHashes,
        bool[] calldata _validities
    ) external onlyOwner {
        if (_versionHashes.length != _validities.length) {
            revert AssetPluginRegistry__LengthMismatch();
        }

        if (_asset == address(0)) {
            revert AssetPluginRegistry__InvalidAsset();
        }

        for (uint256 i = 0; i < _versionHashes.length; ++i) {
            bytes32 versionHash = _versionHashes[i];
            if (address(versionRegistry.deployments(versionHash)) == address(0)) {
                revert AssetPluginRegistry__InvalidVersion();
            }

            isValidAsset[versionHash][_asset] = _validities[i];

            emit AssetPluginRegistryUpdated(versionHash, _asset, _validities[i]);
        }
    }

    function updateAssetsByVersion(
        bytes32 _versionHash,
        address[] calldata _assets,
        bool[] calldata _validities
    ) external onlyOwner {
        if (_assets.length != _validities.length) {
            revert AssetPluginRegistry__LengthMismatch();
        }

        if (address(versionRegistry.deployments(_versionHash)) == address(0)) {
            revert AssetPluginRegistry__InvalidVersion();
        }

        for (uint256 i = 0; i < _assets.length; ++i) {
            address asset = _assets[i];
            if (asset == address(0)) {
                revert AssetPluginRegistry__InvalidAsset();
            }

            isValidAsset[_versionHash][asset] = _validities[i];

            emit AssetPluginRegistryUpdated(_versionHash, asset, _validities[i]);
        }
    }
}
