import { useReadContract, useWriteContract } from 'wagmi';
import { CONTRACT_ADDRESSES, MARKET_ABI, ERC20_ABI } from '@/lib/contracts';

export function useMarketContract() {
  return {
    address: CONTRACT_ADDRESSES.MARKET,
    abi: MARKET_ABI,
  };
}

export function useERC20Contract(address: `0x${string}`) {
  return {
    address,
    abi: ERC20_ABI,
  };
}

export function useMarketRead(functionName: string, args?: any[]) {
  return useReadContract({
    address: CONTRACT_ADDRESSES.MARKET as `0x${string}`,
    abi: MARKET_ABI,
    functionName: functionName as any,
    args: args as any,
  });
}

export function useMarketWrite() {
  return useWriteContract();
}