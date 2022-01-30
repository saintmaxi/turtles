/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

// const turtlesAddress = "";
// const turtlesAbi = () => {
    // return `[ { "inputs": [], "stateMutability": "payable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "oldOwner_", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner_", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "from", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Received", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "_ownerOf", "outputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint40", "name": "timestamp", "type": "uint40" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_publicMintEnabled", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_publicMintTime", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_whitelistMintTime", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "addressToEmergencyUnlocked", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "addressToOgMinted", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "addressToWlMints", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "balance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "balanceOfStaked", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "balanceOfUnstaked", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "emergencyWithdrawEther", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "getTimestampOfToken", "outputs": [ { "internalType": "uint40", "name": "", "type": "uint40" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "bytes32[]", "name": "proof_", "type": "bytes32[]" } ], "name": "isOG", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "isStaked", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "bytes32[]", "name": "proof_", "type": "bytes32[]" } ], "name": "isWhitelisted", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxMintsPerTx", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxMintsPerWl", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "mintPrice", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" }, { "internalType": "bytes", "name": "data_", "type": "bytes" } ], "name": "multiSafeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" } ], "name": "multiTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32[]", "name": "proof_", "type": "bytes32[]" }, { "internalType": "bool", "name": "stakeOnMint_", "type": "bool" } ], "name": "ogClaim", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "tos_", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts_", "type": "uint256[]" }, { "internalType": "bool", "name": "stakeOnMint_", "type": "bool" } ], "name": "ownerMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "payableGovernanceAddresses", "outputs": [ { "internalType": "address payable[]", "name": "", "type": "address[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "payableGovernanceShares", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amount_", "type": "uint256" }, { "internalType": "bool", "name": "stakeOnMint_", "type": "bool" } ], "name": "publicMint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "publicMintStatus", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "reouncePayableGovernancePermissions", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "resetPayableGovernanceShareholders", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "sCT", "outputs": [ { "internalType": "contract isCT", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "bytes", "name": "data_", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator_", "type": "address" }, { "internalType": "bool", "name": "approved_", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "uri_", "type": "string" } ], "name": "setBaseTokenURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "ext_", "type": "string" } ], "name": "setBaseTokenURI_EXT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "maxTokens_", "type": "uint256" } ], "name": "setMaxTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "merkleRoot_", "type": "bytes32" } ], "name": "setMerkleRoot", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "merkleRoot_", "type": "bytes32" } ], "name": "setMerkleRootOG", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "mintPrice_", "type": "uint256" } ], "name": "setMintPrice", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address payable[]", "name": "addresses_", "type": "address[]" }, { "internalType": "uint256[]", "name": "shares_", "type": "uint256[]" } ], "name": "setPayableGovernanceShareholders", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "bool_", "type": "bool" }, { "internalType": "uint256", "name": "time_", "type": "uint256" } ], "name": "setPublicMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "bool_", "type": "bool" }, { "internalType": "uint256", "name": "time_", "type": "uint256" } ], "name": "setWhitelistMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setsCT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" } ], "name": "stakeTurtles", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId_", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tokenIdStartsAt", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "index_", "type": "uint256" } ], "name": "tokenOfOwnerByIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner_", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "unlockEmergencyFunctionsAsShareholder", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" } ], "name": "unstakeTurtles", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" } ], "name": "updateTurtles", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner_", "type": "address" }, { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" } ], "name": "validateOwnershipOfStakedTokens", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner_", "type": "address" }, { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" } ], "name": "validateOwnershipOfTokens", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "viewWithdrawAmounts", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "walletOfOwner", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "walletOfOwnerStaked", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "walletOfOwnerUnstaked", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32[]", "name": "proof_", "type": "bytes32[]" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" }, { "internalType": "bool", "name": "stakeOnMint_", "type": "bool" } ], "name": "whitelistMint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "whitelistMintStatus", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "withdrawEther", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" } ]`;
// };

// const etherscanBase = `https://etherscan.io/tx/`;
// const correctChain = 1;
// const MAX_MINT = 10;
// const MAX_MINT_WL = 2;
// const MAX_SUPPLY = 5555;
// const priceWei = "70000000000000000";
// const priceEth = .07

/*********************************************************************************/
/********************************DEV CONFIG********************************/
/*********************************************************************************/

const turtlesAddress = "0x28E711482D94fF4AE3f2778BEE5D87aEd5169Ec7";
const turtlesAbi = () => {
    return `[ { "inputs": [], "stateMutability": "payable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "oldOwner_", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner_", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "from", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Received", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "_ownerOf", "outputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint40", "name": "timestamp", "type": "uint40" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_publicMintEnabled", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_publicMintTime", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_whitelistMintTime", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "addressToEmergencyUnlocked", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "addressToOgMinted", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "addressToWlMints", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "balance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "balanceOfStaked", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "balanceOfUnstaked", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "emergencyWithdrawEther", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "getTimestampOfToken", "outputs": [ { "internalType": "uint40", "name": "", "type": "uint40" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "bytes32[]", "name": "proof_", "type": "bytes32[]" } ], "name": "isOG", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "isStaked", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "bytes32[]", "name": "proof_", "type": "bytes32[]" } ], "name": "isWhitelisted", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxMintsPerTx", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxMintsPerWl", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "mintPrice", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" }, { "internalType": "bytes", "name": "data_", "type": "bytes" } ], "name": "multiSafeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" } ], "name": "multiTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32[]", "name": "proof_", "type": "bytes32[]" }, { "internalType": "bool", "name": "stakeOnMint_", "type": "bool" } ], "name": "ogClaim", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "tos_", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts_", "type": "uint256[]" }, { "internalType": "bool", "name": "stakeOnMint_", "type": "bool" } ], "name": "ownerMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "payableGovernanceAddresses", "outputs": [ { "internalType": "address payable[]", "name": "", "type": "address[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "payableGovernanceShares", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amount_", "type": "uint256" }, { "internalType": "bool", "name": "stakeOnMint_", "type": "bool" } ], "name": "publicMint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "publicMintStatus", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "reouncePayableGovernancePermissions", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "resetPayableGovernanceShareholders", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "sCT", "outputs": [ { "internalType": "contract isCT", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "bytes", "name": "data_", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator_", "type": "address" }, { "internalType": "bool", "name": "approved_", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "uri_", "type": "string" } ], "name": "setBaseTokenURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "ext_", "type": "string" } ], "name": "setBaseTokenURI_EXT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "maxTokens_", "type": "uint256" } ], "name": "setMaxTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "merkleRoot_", "type": "bytes32" } ], "name": "setMerkleRoot", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "merkleRoot_", "type": "bytes32" } ], "name": "setMerkleRootOG", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "mintPrice_", "type": "uint256" } ], "name": "setMintPrice", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address payable[]", "name": "addresses_", "type": "address[]" }, { "internalType": "uint256[]", "name": "shares_", "type": "uint256[]" } ], "name": "setPayableGovernanceShareholders", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "bool_", "type": "bool" }, { "internalType": "uint256", "name": "time_", "type": "uint256" } ], "name": "setPublicMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "bool_", "type": "bool" }, { "internalType": "uint256", "name": "time_", "type": "uint256" } ], "name": "setWhitelistMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setsCT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" } ], "name": "stakeTurtles", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId_", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tokenIdStartsAt", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "index_", "type": "uint256" } ], "name": "tokenOfOwnerByIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner_", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "unlockEmergencyFunctionsAsShareholder", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" } ], "name": "unstakeTurtles", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" } ], "name": "updateTurtles", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner_", "type": "address" }, { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" } ], "name": "validateOwnershipOfStakedTokens", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner_", "type": "address" }, { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" } ], "name": "validateOwnershipOfTokens", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "viewWithdrawAmounts", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "walletOfOwner", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "walletOfOwnerStaked", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "walletOfOwnerUnstaked", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32[]", "name": "proof_", "type": "bytes32[]" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" }, { "internalType": "bool", "name": "stakeOnMint_", "type": "bool" } ], "name": "whitelistMint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "whitelistMintStatus", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "withdrawEther", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" } ]`;
};

const etherscanBase = `https://rinkeby.etherscan.io/tx/`;
const correctChain = 4;
const MAX_MINT = 10;
const MAX_MINT_WL = 2;
const MAX_SUPPLY = 5555;
const priceWei = "70000000000000000";
const priceEth = .07


/*********************************END CONFIG************************************/

const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
const signer = provider.getSigner();
const turtles = new ethers.Contract(turtlesAddress, turtlesAbi(), signer);

const merkleProofSourceUrl = "https://api.nonfungiblecdn.com/cyberturtles/merkleproofs";

var whitelistIsLive;
var publicIsLive;

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

function decrementClaim() {
    let currentClaim = Number($("#number-to-mint").text());
    if (currentClaim > 1) {
        let newClaim = currentClaim - 1;
        $("#number-to-mint").text(newClaim);
    }
}

function updatePrice() {
    let currentClaim = Number($("#number-to-mint").text());
    $("#current-cost").text(`${(priceEth * currentClaim).toFixed(2)}`)
}

function incrementClaim() {
    let currentClaim = Number($("#number-to-mint").text());
    let max;
    if (whitelistIsLive && !publicIsLive) {
        max = MAX_MINT_WL;
    }
    else {
        max = MAX_MINT;
    }
    if (currentClaim != max) {
        let newClaim = currentClaim + 1;
        $("#number-to-mint").text(newClaim);
    }
}

const setMaxMint = async() => {
    if (whitelistIsLive && !publicIsLive) {
        $("#number-to-mint").text(MAX_MINT_WL);
        $("#current-cost").text((priceEth * MAX_MINT_WL).toFixed(2))
    }
    else {
        $("#number-to-mint").text(MAX_MINT);
        $("#current-cost").text((priceEth * MAX_MINT).toFixed(2))
    }
}

const getMerkleProof = async() => {
    const _senderAddress = await getAddress();
    const _proof = await fetch(`${merkleProofSourceUrl}/${_senderAddress}`).then(res => res.text());
    const _proofArray = _proof ? JSON.parse(_proof) : [];
    return _proofArray;
};

const isWhitelistOnly = async() => {
    let whitelistLive = await turtles.whitelistMintStatus()
    whitelistIsLive = whitelistLive;
    return whitelistLive;
}

const isPublic = async() => {
    let publicLive = await turtles.publicMintStatus();
    publicIsLive = publicLive;
    return publicLive;
}

const checkMintingLive = async() => {
    const whitelistLive = await isWhitelistOnly();
    const publicLive = await isPublic();
    if (!whitelistLive && !publicLive) {
        $("#mint-tools").addClass("hidden");
        $("#mint-closed").removeClass("hidden");
    }
    else {
        if (publicLive && whitelistLive) {
            $("#whitelisted").html('');
        }
        $("#mint-tools").removeClass("hidden");
        $("#mint-closed").addClass("hidden");
    }
}

const checkWhitelistStatus = async() => {
    const whitelistLive = await isWhitelistOnly();

    if (whitelistLive) {
        const _merkleProof = await getMerkleProof();
        const addr = await getAddress();
        const _isWhitelisted = await turtles.isWhitelisted(addr, _merkleProof).catch(err => console.log(err));
        if (!publicIsLive) {
            $("#whitelisted").html(_isWhitelisted ? "Congratulations, you made the whitelist!" : "Sorry, you are not whitelisted. Please wait for our public sale.");
        }
        return _isWhitelisted;
    }
};

const mint = async(stakeOnMint) => {
    const whitelistLive = await isWhitelistOnly();
    const publicLive = await isPublic();
    const numberToMint = Number($("#number-to-mint").text());

    try {
        if (publicLive) {
            if (numberToMint > MAX_MINT) {
                await displayErrorMessage(`Max ${MAX_MINT} mints per transaction!`);
            }

            const cost = ethers.BigNumber.from(priceWei).mul(numberToMint);
            console.log(priceWei, numberToMint, cost)
            const gasLimit = await turtles.estimateGas.publicMint(numberToMint, stakeOnMint, {value: cost})
            const newGasLimit = parseInt((gasLimit * 1.2)).toString();
        
            await turtles.publicMint(numberToMint, stakeOnMint, { value: cost, gasLimit: newGasLimit}).then( async(tx_) => {
                await waitForTransaction(tx_);
            });   
        }
        else if (whitelistLive) {
            const whitelisted = checkWhitelistStatus();
            if (!whitelisted){
                await displayErrorMessage("You are not whitelisted!");
            }

            if (numberToMint > MAX_MINT_WL) {
                await displayErrorMessage(`Max ${MAX_MINT_WL} mints for WL!`);
            }
    
            const merkleProof = await getMerkleProof();
            const cost = ethers.BigNumber.from(priceWei).mul(numberToMint); 
            const gasLimit = await turtles.estimateGas.whitelistMint(merkleProof, numberToMint, stakeOnMint, {value: cost});
            const newGasLimit = parseInt((gasLimit * 1.2)).toString();
            
            await turtles.whitelistMint(merkleProof, numberToMint, stakeOnMint, {value: cost, gasLimit: newGasLimit}).then( async(tx_) => {
                await waitForTransaction(tx_);
            });
        }
        else {
            await displayErrorMessage("Minting not yet live!")
        }
    }
    catch (error) {
        if ((error.message).includes("You dont have enough whitelist mints!")) {
            await displayErrorMessage(`Error: Max ${MAX_MINT_WL} mints for WL!`)
        }
        else if ((error.message).includes("You are not whitelisted")) {
            await displayErrorMessage(`Error: You are not whitelisted!`)
        }
        else if ((error.message).includes("insufficient funds")) {
            await displayErrorMessage(`Error: Insufficient ETH!`)
        }
        else {
            await displayErrorMessage("An error occurred. See console and window alert for details...")
            window.alert(error);
            console.log(error);
        }
    }

};

const updateMintInfo = async() => {
    let minted = Number(await turtles.totalSupply());
    $("#num-minted").text(minted);
    if (minted == MAX_SUPPLY) {
        $("#sold-out").html(`SOLD OUT. <br><br>AVAILABLE ON <a href="" target="_blank" class="w-inline-block" style="text-decoration:none;color:blue;">OPENSEA⬈</a> & <a href="" target="_blank" class="w-inline-block" style="text-decoration:none;color:green;">LOOKSRARE⬈</a>`);
        $("#mint-button").remove();
        $("#mint-n-stake-button").remove();
        $("#quantity-controls").remove();
    }
}

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
            await updateMintInfo();
        }
    });

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
        await updateMintInfo();
    }
}

setInterval(async()=>{
    await updateInfo();
    await updateMintInfo();
    await checkMintingLive();
}, 5000)

const updateInfo = async () => {
    let userAddress = await getAddress();
    $("#account").text(`${userAddress.substr(0,9)}..`);
};

ethereum.on("accountsChanged", async(accounts_)=>{
    location.reload();
});

window.onload = async()=>{
    await updateInfo();
    await checkMintingLive();
    await updateMintInfo();
    await checkWhitelistStatus();
};

window.onunload = async()=>{
    cachePendingTransactions();
}