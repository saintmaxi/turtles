/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

// const turtlesAddress = "";
// const turtlesAbi = () => {
//     return ``;
// };

// const shellAddress = "";
// const shellAbi = () => {
//     return ``;
// };

// const stakedTurtlesAddress = "";
// const stakedTurtlesAbi = () => {
//     return ``;
// };

// const baseImageURI = "";

// const etherscanBase = `https://etherscan.io/tx/`;
// const correctChain = 1;

/*********************************************************************************/
/********************************DEV CONFIG********************************/
/*********************************************************************************/

const turtlesAddress = "0x5e5668C2D3cC65239eFb8B5E6b996c1aac79FB14";
const turtlesAbi = () => {
    return `[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Mint", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "oldOwner_", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner_", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "from", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Received", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "_ownerOf", "outputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint40", "name": "timestamp", "type": "uint40" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_publicMintEnabled", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_publicMintTime", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_whitelistMintTime", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "addressToEmergencyUnlocked", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "addressToWlMints", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "balance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "balanceOfStaked", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "balanceOfUnstaked", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "emergencyWithdrawEther", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "getTimestampOfToken", "outputs": [ { "internalType": "uint40", "name": "", "type": "uint40" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "isStaked", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "bytes32[]", "name": "proof_", "type": "bytes32[]" } ], "name": "isWhitelisted", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxMintsPerTx", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxMintsPerWl", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "mintPrice", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" }, { "internalType": "bytes", "name": "data_", "type": "bytes" } ], "name": "multiSafeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" } ], "name": "multiTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "tos_", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts_", "type": "uint256[]" }, { "internalType": "bool", "name": "stakeOnMint_", "type": "bool" } ], "name": "ownerMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "payableGovernanceAddresses", "outputs": [ { "internalType": "address payable[]", "name": "", "type": "address[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "payableGovernanceShares", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amount_", "type": "uint256" }, { "internalType": "bool", "name": "stakeOnMint_", "type": "bool" } ], "name": "publicMint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "publicMintStatus", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "reouncePayableGovernancePermissions", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "resetPayableGovernanceShareholders", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "sCT", "outputs": [ { "internalType": "contract isCT", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "bytes", "name": "data_", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator_", "type": "address" }, { "internalType": "bool", "name": "approved_", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "uri_", "type": "string" } ], "name": "setBaseTokenURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "ext_", "type": "string" } ], "name": "setBaseTokenURI_EXT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "maxTokens_", "type": "uint256" } ], "name": "setMaxTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "merkleRoot_", "type": "bytes32" } ], "name": "setMerkleRoot", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "mintPrice_", "type": "uint256" } ], "name": "setMintPrice", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address payable[]", "name": "addresses_", "type": "address[]" }, { "internalType": "uint256[]", "name": "shares_", "type": "uint256[]" } ], "name": "setPayableGovernanceShareholders", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "bool_", "type": "bool" }, { "internalType": "uint256", "name": "time_", "type": "uint256" } ], "name": "setPublicMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setStaker", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "bool_", "type": "bool" }, { "internalType": "uint256", "name": "time_", "type": "uint256" } ], "name": "setWhitelistMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setsCT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" } ], "name": "stakeTurtles", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stakingContract", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId_", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tokenIdStartsAt", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "index_", "type": "uint256" } ], "name": "tokenOfOwnerByIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner_", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "unlockEmergencyFunctionsAsShareholder", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" } ], "name": "unstakeTurtles", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" } ], "name": "updateTurtles", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "viewWithdrawAmounts", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "walletOfOwner", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "walletOfOwnerStaked", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "walletOfOwnerUnstaked", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32[]", "name": "proof_", "type": "bytes32[]" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" }, { "internalType": "bool", "name": "stakeOnMint_", "type": "bool" } ], "name": "whitelistMint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "whitelistMintStatus", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "withdrawEther", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" } ]`;
};

const shellAddress = "0xb4B1f5Eec780f7D89522B77aa1132384b1769439";
const shellAbi = () => {
    return `[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "oldOwner_", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner_", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "burnFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "to_", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts_", "type": "uint256[]" } ], "name": "multiTransfer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "from_", "type": "address[]" }, { "internalType": "address[]", "name": "to_", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts_", "type": "uint256[]" } ], "name": "multiTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "bool", "name": "bool_", "type": "bool" } ], "name": "setController", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner_", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" } ]`;
};

const stakedTurtlesAddress = "0x774378292Fc9755FC3e0E1C47B2eE3ce46dd8D47";
const stakedTurtlesAbi = () => {
    return `[ { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "oldOwner_", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner_", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "CT", "outputs": [ { "internalType": "contract iCT", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "CTAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SHELL", "outputs": [ { "internalType": "contract iShell", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" } ], "name": "claim", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "getPendingTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" } ], "name": "getPendingTokensMany", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getPendingTokensOfAddress", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "mintStakedTokenAsCyberTurtles", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setCT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setShell", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" } ], "name": "stakeTurtles", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId_", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner_", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" } ], "name": "unstakeTurtles", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "walletOfOwner", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "yieldEndTime", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "yieldRate", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "yieldStartTime", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" } ]`;
};

const baseImageURI = "";

const etherscanBase = `https://rinkeby.etherscan.io/tx/`;
const correctChain = 4;

/*********************************END CONFIG************************************/

if (window.ethereum == undefined) {
    displayErrorMessage('Use a web3 enabled browser with MetaMask or the MetaMask mobile app to claim $SHELL!');
    $("#available-turtle-images").empty();
    $("#available-turtle-images").append("<br><p>No turtles available...</p>");
}

const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
const signer = provider.getSigner();
const turtles = new ethers.Contract(turtlesAddress, turtlesAbi(), signer);
const shell = new ethers.Contract(shellAddress, shellAbi(), signer);
const stakedTurtles = new ethers.Contract(stakedTurtlesAddress, stakedTurtlesAbi(), signer);


const connect = async()=>{
    await provider.send("eth_requestAccounts", []);
    await revealMintPrompt();
};

const getAddress = async()=>{
    return await signer.getAddress()
};

const formatEther = (balance_)=>{
    return ethers.utils.formatEther(balance_)
};

const parseEther = (eth_)=>{
    return ethers.utils.parseEther(eth_)
};

const getChainId = async()=>{
    return await signer.getChainId()
};

// Turtles owned and SHELL functions

const getTurtlesEnum = async()=>{
    let userAddress = await getAddress();
    let ownedTurtlesCount = await turtles.balanceOfUnstaked(userAddress);
    return ownedTurtlesCount;
};

const getTurtlesOwned = async() => {
    let userAddress = await getAddress();
    let ownedTurtles = await turtles.walletOfOwnerUnstaked(userAddress);
    return [...ownedTurtles].sort((a, b) => a - b);
}

const getStakedTurtlesEnum = async()=>{
    let userAddress = await getAddress();
    let ownedStakedTurtlesCount = await turtles.balanceOfStaked(userAddress);
    return ownedStakedTurtlesCount;
};

const getStakedTurtlesOwned = async() => {
    let userAddress = await getAddress();
    let ownedStakedTurtles = await turtles.walletOfOwnerStaked(userAddress);
    return [...ownedStakedTurtles].sort((a, b) => a - b);
}

const getShellBalance = async()=>{
    let userAddress = await getAddress();
    return (formatEther(await shell.balanceOf(userAddress)));
};

const getPendingShellBalance = async()=>{
    let userAddress = await getAddress();
    const pendingShell = await stakedTurtles.getPendingTokensOfAddress(userAddress);
    $("#claimable-shell").text(`${Number(formatEther(pendingShell)).toFixed(2)}`);
};

const claimShell = async()=>{
    let userAddress = await getAddress();
    if (await stakedTurtles.getPendingTokensOfAddress(userAddress) == 0) {
        await displayErrorMessage('You have no $SHELL to claim!')
    }
    else {
        let ownedStakedTurtles = await turtles.walletOfOwnerStaked(userAddress);
        await stakedTurtles.claim(ownedStakedTurtles).then( async(tx_) => {
            await waitForTransaction(tx_);
        });
    }
};

// Staking functions

const stakeTurtlesToShell = async()=>{
    if (selectedForStaking.size == 0) {
        displayErrorMessage("Select at least 1 turtle to stake!")
    }
    else if ((await getTurtlesEnum()) == 0) {
        displayErrorMessage("No available turtles to stake!")
    }
    else {
        const turtlesArray = Array.from(selectedForStaking);
    
        await stakedTurtles.stakeTurtles(turtlesArray).then( async(tx_) => {
            for (let i = 0; i < turtlesArray.length; i++) {
                $(`#turtle-${turtlesArray[i]}`).remove();
            }
            selectedForStaking = new Set();
            $("#selected-for-staking").text("None");
            $("#your-turtles").html(`Your Available Turtles (<span class="one">.</span><span class="two">.</span><span class="three">.</span>)`);
            await waitForTransaction(tx_);
        });
    }
};

const unstakeByIds = async()=>{
    const numStaked = await getStakedTurtlesEnum();
    if (numStaked == 0) {
        displayErrorMessage("No turtles staked!")
    }
    else if (selectedForUnstaking.size == 0) {
        displayErrorMessage("Select at least 1 turtle to unstake!")
    }
    else {
        const turtlesArray = Array.from(selectedForUnstaking);
        await stakedTurtles.unstakeTurtles(turtlesArray).then( async(tx_) => {
            for (let i = 0; i < turtlesArray.length; i++) {
                $(`#turtle-${turtlesArray[i]}`).remove();
            }
            selectedForUnstaking = new Set();
            $("#selected-for-unstaking").text("None");
            $("#shell-to-claim").text(`$SHELL to Claim: 0`);
            $("#your-staked-turtles").html(`Your Staked Turtles (<span class="one">.</span><span class="two">.</span><span class="three">.</span>)`);
            await waitForTransaction(tx_);
        }); 
    }
}

var currentlyStaked = [];



const getTurtleImages = async()=>{
    $("#available-turtle-images").empty();
    $("#staked-turtle-images").empty();

    const yourTurtlesCount = await getTurtlesEnum();
    if (yourTurtlesCount == 0) {
        $("#available-turtle-images").append("<br><p>No turtles available...</p>");
    }
    else {
        const yourTurtles = await getTurtlesOwned();
        let batchFakeJSX = "";
        for (let i = 0; i < yourTurtles.length; i++) {
            let turtleId = yourTurtles[i];
            let active = "";
            if (selectedForStaking.has(Number(turtleId))) {
                active = "active";
            }
            // batchFakeJSX += `<div id="turtle-${turtleId}" class="your-turtle ${active}"><img onclick="selectForStaking(${turtleId})" src="${baseImageURI}${turtleId}.png"><p class="turtle-id">#${turtleId}</p></div>`
            batchFakeJSX += `<div id="turtle-${turtleId}" class="your-turtle ${active}"><img onclick="selectForStaking(${turtleId})" src="https://cyberturtles.gg/wp-content/uploads/2022/01/Turtle-n-traits-sample-28.png"><p class="turtle-id">#${turtleId}</p></div>`

        };
        $("#available-turtle-images").append(batchFakeJSX);
    }

    const yourStakedTurtlesCount = await getStakedTurtlesEnum();
    if (yourStakedTurtlesCount == 0) {
        $("#staked-turtle-images").append("<br><p>No turtles available...</p>");
    }
    else {
        const yourStakedTurtles = await getStakedTurtlesOwned();
        let batchFakeJSX = "";
        for (let i = 0; i < yourStakedTurtles.length; i++) {
            let turtleId = yourStakedTurtles[i];
            let active= "";
            if (selectedForUnstaking.has(Number(turtleId))) {
                active = "active";
            }
            let shellEarned = formatEther(Number(await stakedTurtles.getPendingTokens(turtleId)).toFixed(2));
            // batchFakeJSX += `<div id="turtle-${turtleId}" class="your-turtle ${active}"><img onclick="selectForUnstaking(${turtleId})" src="${baseImageURI}${turtleId}.png"><p class="turtle-id">#${turtleId}</p><p class="shell-earned"><span id="shell-earned-${turtleId}">${shellEarned}</span></p></div>`
            batchFakeJSX += `<div id="turtle-${turtleId}" class="your-turtle ${active}"><img onclick="selectForUnstaking(${turtleId})" src="https://cyberturtles.gg/wp-content/uploads/2022/01/Turtle-n-traits-sample-28.png">#${turtleId}</p><p class="shell-earned"><span id="shell-earned-${turtleId}">${shellEarned}</span></p></div>`
        
        };
        $("#staked-turtle-images").append(batchFakeJSX);
    }
}

const getShellEarnedByID = async(id) => {
    try {
        return Number(formatEther(await stakedTurtles.getPendingTokens(id))).toFixed(2);
    }
    catch {
        console.log('Metamask throws extra error. Token reward lookup was successful.')
        return 0;
    }
};

const updateShellEarned = async() => {
    let totalEarned = 0;
    for (let i = 0; i < currentlyStaked.length; i++) {
        let turtleId = currentlyStaked[i];
        let shellEarnedByID = await getShellEarnedByID(turtleId);
        $(`#shell-earned-${turtleId}`).text(shellEarnedByID);
        if (selectedForUnstaking.has(Number(turtleId))) {
            totalEarned += Number(shellEarnedByID);
        }
    };
    $("#shell-to-claim").text(`$SHELL to Claim: ${totalEarned.toFixed(2)}`);
};

const updateClaimingInfo = async()=>{
    if ((await getChainId()) === correctChain) {
        const loadingDiv = `<div class="loading-div" id="refresh-notification">REFRESHING <br>CLAIMING INTERFACE<span class="one">.</span><span class="two">.</span><span class="three">.</span>​</div><br>`;
        $("#pending-transactions").append(loadingDiv);
        await getTurtleImages();
        $("#your-shell").text(`${await getShellBalance()}`);
        await getPendingShellBalance();
        $("#your-staked-turtles").text(`YOUR STAKED TURTLES (${await getStakedTurtlesEnum()})`);
        $("#your-turtles").text(`YOUR AVAILABLE TURTLES (${await getTurtlesEnum()})`);
        $("#error-popup").remove();
        $("#refresh-notification").remove();
    } 
    else {
        $("#wallet").text(`Wrong Network!`);
        $("#available-turtle-images").empty();
        $("#available-turtle-images").text("Error: Wrong Network");
        $("#your-shell").html(`0.0`);
        $("#claimable-shell").html(`0.0`);
        displayErrorMessage("Error: Wrong Network", false);
    }
};

const updateCurrentChain = async() => {
    if ((await getChainId()) !== correctChain) {
        displayErrorMessage("Error: Wrong Network!", false);
    }
    else {
        $("#error-popup").remove();
        $("#block-screen-error").remove();
    }
}

provider.on("network", async(newNetwork, oldNetwork) => {
        if (oldNetwork) {
            $("#refresh-notification").remove();
            await updateCurrentChain();
            await updateClaimingInfo();
        }
    });

//selection helpers

var selectedForStaking = new Set();
var selectedForUnstaking = new Set();

async function selectForStaking(id) {
    if (!selectedForStaking.has(id)) {
        selectedForStaking.add(id);
        $(`#turtle-${id}`).addClass("active");
    }
    else {
        selectedForStaking.delete(id);
        $(`#turtle-${id}`).removeClass("active");
    }
    if (selectedForStaking.size == 0) {
        $("#selected-for-staking").text("None");
    }
    else {
        let selectedString = `${Array.from(selectedForStaking).sort((a, b) => a - b).join(' ')}`;
        $("#selected-for-staking").text(selectedString);
    }
}

async function selectForUnstaking(id) {
    if (!selectedForUnstaking.has(id)) {
        selectedForUnstaking.add(id);
        $(`#turtle-${id}`).addClass("active");
    }
    else {
        selectedForUnstaking.delete(id);
        $(`#turtle-${id}`).removeClass("active");
    }
    if (selectedForUnstaking.size == 0) {
        $("#selected-for-unstaking").text("None");
        $("#shell-to-claim").text(`$SHELL to Claim: 0`);
    }
    else {
        let selectedForUnstakingArray = Array.from(selectedForUnstaking).sort((a, b) => a - b);
        let shellToClaim = 0;
        for (let i = 0; i < selectedForUnstakingArray.length; i++) {
            shellToClaim += Number(await getShellEarnedByID(selectedForUnstakingArray[i]));
        }
        $("#shell-to-claim").text(`$SHELL to Claim: ${shellToClaim.toFixed(2)}`);
        let selectedString = `${selectedForUnstakingArray.join(' ')}`;
        $("#selected-for-unstaking").text(selectedString);
    }
}

// Processing tx returns
const waitForTransaction = async(tx_) => {
    startLoading(tx_);
    provider.once(tx_.hash, async (transaction_) => {
        await endLoading(tx_, transaction_.status);
    });
};

// Resuming UI display, refreshing market for pending txs across pages
var pendingTransactions = localStorage.getItem("CyberturtlesPendingTxs");

if (!pendingTransactions) {
    pendingTransactions = new Set();
}
else {
    pendingTransactions = new Set(Array.from(JSON.parse(pendingTransactions)));
    pendingTxArray = Array.from(pendingTransactions);
    pendingTransactions = new Set();

    for (let i =0; i < pendingTxArray.length; i++) {
        waitForTransaction(pendingTxArray[i]);
    }
    localStorage.removeItem("CyberturtlesPendingTxs");
}

function cachePendingTransactions() {
    localStorage.setItem("CyberturtlesPendingTxs", JSON.stringify(Array.from(pendingTransactions)));
}

function startLoading(tx) {
    let txHash = tx.hash;
    const etherscanLink = `${etherscanBase}${txHash}`;
    const loadingDiv = `<a href="${etherscanLink}" class="etherscan-link" id="etherscan-link-${txHash}" target="_blank" rel="noopener noreferrer"><div class="loading-div" id="loading-div-${txHash}">PROCESSING<span class="one">.</span><span class="two">.</span><span class="three">.</span>​<br>CLICK FOR ETHERSCAN</div></a><br>`;
    $("#pending-transactions").append(loadingDiv);
    pendingTransactions.add(tx);
}

async function endLoading(tx, txStatus) {
    let txHash = tx.hash;
    $(`#loading-div-${txHash}`).html("");
    let status = txStatus == 1 ? "SUCCESS" : "ERROR";
    $(`#loading-div-${txHash}`).addClass("blinking");
    if (txStatus == 1) {
        $(`#loading-div-${txHash}`).addClass("success");
    }
    else if (txStatus == 0) {
        $(`#loading-div-${txHash}`).addClass("failure");
    }
    $(`#loading-div-${txHash}`).append(`TRANSACTION ${status}.<br>VIEW ON ETHERSCAN.`);
    await sleep(7000);
    $(`#etherscan-link-${txHash}`).remove();
    pendingTransactions.delete(tx);
    if (pendingTransactions.size == 0) {
        await updateClaimingInfo();
    }
}

const importShellToWallet = async() => {
    ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: shellAddress,
            symbol: 'SHELL',
            decimals: 18,
            image: '',
          },
        },
      });
}

const updateInfo = async () => {
    let userAddress = await getAddress();
    $("#account").text(`${userAddress.substr(0,9)}..`);
    $("#mobile-account").text(`${userAddress.substr(0,9)}...`);
};

setInterval(async()=>{
    await updateInfo();
    await getPendingShellBalance();
}, 5000)

setInterval(async()=> {
    await updateShellEarned();
}, 20000)


ethereum.on("accountsChanged", async(accounts_)=>{
    location.reload();
});

window.onload = async()=>{
    await updateInfo();
    if (pendingTransactions.size < 1) {
        await updateClaimingInfo();
    }
};

window.onunload = async()=>{
    cachePendingTransactions();
}