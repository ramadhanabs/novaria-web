// import { config } from "@/lib/config";
import { useBalance } from "@/hooks/useBalance";
import { wagmiContractConfig } from "@/lib/wagmiContractConfig";
import { HexAddress } from "@/types";
import { useAccount } from "wagmi";

export const Swap = () => {
  const { address } = useAccount();
  const { balance, error } = useBalance(
    address as HexAddress,
    wagmiContractConfig.address
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>
        Balance:{" "}
        {balance ? parseInt((balance as bigint).toString()) / 10 ** 6 : "0"}
      </h1>
    </div>
  );
};
