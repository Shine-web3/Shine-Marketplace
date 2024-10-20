// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./ITeleporterMessenger.sol";
import "./ITeleporterReceiver.sol";

contract ShineNFT is ERC721, ITeleporterReceiver {
    ITeleporterMessenger public immutable messenger =
        ITeleporterMessenger(0x253b2784c75e510dD0fF1da844684a1aC0aa5fcf);

    /**
     * @notice tokenId => popularity
     */
    mapping(uint256 => uint256) public popularity;

    constructor() ERC721("Shine", "SHH") {}

    address public linkport = 0x253b2784c75e510dD0fF1da844684a1aC0aa5fcf;

    function setLinkport(address linkport_) external {
        linkport = linkport_;
    }

    // Minting function for the owner of the contract
    function mint(address to, uint256 id) public {
        _mint(to, id);
        // _updateNFT(id);
    }

    function receiveTeleporterMessage(
        bytes32,
        address,
        bytes calldata message
    ) external {
        // Only the Teleporter receiver can deliver a message.
        require(
            msg.sender == address(messenger),
            "SenderOnCChain: unauthorized TeleporterMessenger"
        );

        // Store the message.
        (uint256 tokenId, uint256 rank) = abi.decode(
            message,
            (uint256, uint256)
        );

        // update NFT Info
        popularity[tokenId] = rank;
    }

    function _updateNFT(uint256 tokenId) internal {
        messenger.sendCrossChainMessage(
            TeleporterMessageInput({
                // Replace with blockchainID of your Subnet (see instructions in Readme)
                destinationBlockchainID: 0x609fa1886e1fbc9585127fa22b6e77a785ebdeecc01049f294638c7909e53c5e,
                destinationAddress: linkport,
                feeInfo: TeleporterFeeInfo({
                    feeTokenAddress: address(0),
                    amount: 0
                }),
                requiredGasLimit: 2000000,
                allowedRelayerAddresses: new address[](0),
                message: abi.encode(tokenId)
            })
        );
    }
}
