// components/MintNFT.tsx

import React, { useState } from 'react';
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';
import { ethers } from 'ethers';

// Define types for contract ABI
const contractABI = [
  {
    "inputs": [
      { "internalType": "address", "name": "to", "type": "address" },
      { "internalType": "uint256", "name": "id", "type": "uint256" }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const; // Use 'as const' for ABI to be read-only

const contractAddress = "0xYourContractAddress"; // Replace with your contract address

const MintNFT: React.FC = () => {
  const { address } = useAccount();
  const [tokenId, setTokenId] = useState<string>('');

  // Prepare the transaction using usePrepareContractWrite hook
  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: contractABI,
    functionName: 'mint',
    args: [address, tokenId ? ethers.BigNumber.from(tokenId) : undefined],
  });

  // Execute the mint transaction using useContractWrite
  const { write, isLoading, isSuccess } = useContractWrite(config);

  const handleMint = () => {
    if (write) {
      write();
    }
  };

  return (
    <div>
      <h2>Mint Your NFT</h2>
      <input
        type="text"
        placeholder="Enter Token ID"
        value={tokenId}
        onChange={(e) => setTokenId(e.target.value)}
      />
      <button onClick={handleMint} disabled={isLoading || !write}>
        {isLoading ? 'Minting...' : 'Mint'}
      </button>
      {isSuccess && <p>Mint successful!</p>}
    </div>
  );
};

export default MintNFT;
