import ArrowDownIcon from "@/components/icon/ArrowDownIcon";
import ClockIcon from "@/components/icon/ClockIcon";
import FuelIcon from "@/components/icon/FuelIcon";
import { Input, NovariaTokenLogo, WBTCTokenLogo } from "@/components/ui/Input";
import mockErc20 from "@/data/mockERC20.json";
import mockVault from "@/data/mockVault.json";
import { FUNDING_VAULT_ADDRESS, MOCK_TOKEN_ADDRESS } from "@/utils/constants";
import {
  useAccount,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";

export const Mint = () => {
  const { address } = useAccount();

  const { data: hash, isPending, writeContract } = useWriteContract();

  const { isLoading } = useWaitForTransactionReceipt({
    hash: hash,
  });

  const handleMint = () => {
    writeContract({
      abi: mockVault,
      address: FUNDING_VAULT_ADDRESS,
      functionName: "deposit",
      args: [BigInt(100)],
    });
  };

  const handleFaucet = () => {
    writeContract({
      abi: mockErc20,
      address: MOCK_TOKEN_ADDRESS,
      functionName: "mint",
      args: [address, BigInt(1000e18)],
    });
  };

  const handleApprove = () => {
    writeContract({
      abi: mockErc20,
      address: MOCK_TOKEN_ADDRESS,
      functionName: "approve",
      args: [FUNDING_VAULT_ADDRESS, BigInt(100)],
    });
  };

  return (
    <div className="rounded-3xl p-5 flex flex-col items-center justify-center mt-12 bg-zinc-900">
      <div>
        <div className="text-start w-full text-lg font-semibold mb-2">
          Input
        </div>
        <Input icon={<WBTCTokenLogo />} />
      </div>

      <div className="bg-turquoise-100 text-black rounded-full p-2 mt-6 mb-2">
        <ArrowDownIcon />
      </div>

      <div>
        <div className="text-start w-full text-lg font-semibold mb-2">
          Output
        </div>
        <Input icon={<NovariaTokenLogo />} />
        {/* <Input icon={<NovariaTokenLogo type="yt" />} className="mt-4" /> */}
      </div>

      <div className="w-full mt-6">
        <div className="p-2 w-full rounded-2xl flex items-center justify-between">
          <span className="flex gap-2">
            <ClockIcon />
            <p>Est. Processing Time</p>
          </span>

          <p>~5 s</p>
        </div>
        <div className="p-2 w-full rounded-2xl flex items-center justify-between">
          <span className="flex gap-2">
            <FuelIcon />
            <p>Network Fee</p>
          </span>

          <p>0.001</p>
        </div>
      </div>
      <button
        disabled={isPending}
        className="mt-4 w-full bg-main hover:bg-main/90 text-black py-2 rounded-lg lg:text-lg text-md font-bold"
        onClick={handleApprove}
      >
        {isPending ? "loading" : "Approve"}
      </button>
      {` `}
      <button
        className="mt-4 w-full bg-main hover:bg-main/90 text-black py-2 rounded-lg lg:text-lg text-md font-bold"
        onClick={handleMint}
      >
        {isPending ? "loading mint" : "Mint"}
      </button>
      <button
        className="mt-4 w-full bg-main hover:bg-main/90 text-black py-2 rounded-lg lg:text-lg text-md font-bold"
        onClick={handleFaucet}
      >
        Faucet
      </button>
      {isLoading ? "loading transaction" : ""}
    </div>
  );
};
