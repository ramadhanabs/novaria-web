import ArrowDownIcon from "@/components/icon/ArrowDownIcon"
import ClockIcon from "@/components/icon/ClockIcon"
import FuelIcon from "@/components/icon/FuelIcon"
import Preloader from "@/components/Preloader"
import { Input, NovariaTokenLogo, WBTCTokenLogo } from "@/components/ui/Input"
import mockErc20 from "@/data/mockERC20.json"
import mockVault from "@/data/mockVault.json"
import { FUNDING_VAULT_ADDRESS, MOCK_TOKEN_ADDRESS } from "@/utils/constants"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import {
  useWriteContract,
  useWaitForTransactionReceipt,
  useAccount,
  useReadContract,
  useSimulateContract,
} from "wagmi"

export const Mint = () => {
  const [mintAmount, setMintAmount] = useState<number>(0)
  
  const { address } = useAccount()

  const { data: mockBalance } = useReadContract({
    abi: mockErc20,
    address: MOCK_TOKEN_ADDRESS,
    functionName: "balanceOf",
    args: [address],
  })

  const {
    data: transactionHash,
    isPending: isPendingTransaction,
    writeContractAsync,
  } = useWriteContract()

  const simulateResult = useSimulateContract({
    abi: mockVault,
    address: FUNDING_VAULT_ADDRESS,
    functionName: "deposit",
    args: [BigInt(mintAmount)],
  })

  const { isLoading, isSuccess: _ } = useWaitForTransactionReceipt({
    hash: transactionHash,
  })

  const handleMintAndApprove = async () => {
    // Approve
    writeContractAsync({
      abi: mockErc20,
      address: MOCK_TOKEN_ADDRESS,
      functionName: "approve",
      args: [FUNDING_VAULT_ADDRESS, BigInt(mintAmount)],
    })
      .then(async () => {
        // Mint
        await writeContractAsync({
          abi: mockVault,
          address: FUNDING_VAULT_ADDRESS,
          functionName: "deposit",
          args: [BigInt(mintAmount)],
        })

        toast.success(`Success Mint ${mintAmount} 🪙🪙🪙`)
      })
      .catch(err => {
        console.error(err)
        toast.error("Errror Mint Token")
      })
  }

  useEffect(() => {
    console.log({ simulateResult })
  }, [simulateResult])

  return (
    <>
      {(isPendingTransaction || isLoading) && <Preloader />}

      <>Your Balance {Number(mockBalance) / 1e18 - mintAmount}</>
      <div>Mint Amount {mintAmount}</div>

      <div className="rounded-3xl p-5 flex flex-col items-center justify-center mt-12 bg-zinc-900">
        <div>
          <div className="text-start w-full text-lg font-semibold mb-2">Input</div>
          <Input
            icon={<WBTCTokenLogo />}
            type="number"
            value={mintAmount}
            onChange={ev => {
              const value = ev.target.value
              const currentBalance = Number(mockBalance) / 1e18 - Number(value)

              if (currentBalance < 0) {
                return
              }
              setMintAmount(Number(value))
            }}
          />
        </div>

        <div className="bg-turquoise-100 text-black rounded-full p-2 mt-6 mb-2">
          <ArrowDownIcon />
        </div>

        <div>
          <div className="text-start w-full text-lg font-semibold mb-2">Output</div>
          <Input icon={<NovariaTokenLogo />} type="number" value={mintAmount / 10} />
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
          disabled={mintAmount < 1}
          className="mt-4 w-full disabled:bg-red-500 bg-main hover:bg-main/90 text-black py-2 rounded-lg lg:text-lg text-md font-bold"
          onClick={handleMintAndApprove}
        >
          Mint
        </button>
      </div>
    </>
  )
}
