import { useWaitForTransactionReceipt, useWriteContract } from "wagmi"
import mockErc20 from "@/data/mockERC20.json"
import mockVault from "@/data/mockVault.json"
import { Input, NovariaTokenLogo } from "@/components/ui/Input"
import ArrowSwapIcon from "@/components/icon/ArrowSwapIcon"
import ClockIcon from "@/components/icon/ClockIcon"
import FuelIcon from "@/components/icon/FuelIcon"
import { FUNDING_VAULT_ADDRESS, PRINCIPLE_TOKEN_ADDRESS } from "@/utils/constants"

export const Deposit = () => {
  const { data: hash, isPending, writeContract } = useWriteContract()

  const { isLoading, isSuccess } = useWaitForTransactionReceipt({
    hash: hash,
  })

  const handleDeposit = () => {
    writeContract({
      abi: mockVault,
      address: PRINCIPLE_TOKEN_ADDRESS,
      functionName: "deposit",
      args: [BigInt(100)],
    })
  }

  const handleApprove = () => {
    writeContract({
      abi: mockErc20,
      address: FUNDING_VAULT_ADDRESS,
      functionName: "approve",
      args: [PRINCIPLE_TOKEN_ADDRESS, BigInt(100)],
    })
  }

  return (
    <div className=" max-h-screen flex gap-12 h-screen w-screen pt-20 px-8">
      <div className="w-1/2">
        <div className="w-80 ">
          <h1 className="text-xl font font-semibold tracking-wide ">Markets</h1>
          <p className="text-sm mt-2 text-white">
            Exit anytime at market price. All yield is streamed to YT until
            maturity. PT can be redeemed for the underlying asset after
            maturity.
          </p>
        </div>

        <Table />
      </div>

      <div className="w-1/2 ">
        <div className="rounded-3xl p-5 flex flex-col items-center justify-center mt-12 bg-zinc-900 mx-auto w-[400px]">
          <div>
            <div className="text-start w-full text-lg font-semibold mb-2">
              Input
            </div>
            <Input icon={<NovariaTokenLogo />} />
          </div>

          <div className="bg-turquoise-100 text-black rounded-full p-2 mt-6 mb-2">
            <ArrowSwapIcon />
          </div>

          <div>
            <div className="text-start w-full text-lg font-semibold mb-2">
              Output
            </div>
            <Input icon={<NovariaTokenLogo type="PT" />} />
            <Input icon={<NovariaTokenLogo type="YT" />} className="mt-4" />
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
            className="mt-4 w-full bg-main hover:bg-main/90 text-black py-2 rounded-lg lg:text-lg text-md font-bold"
            onClick={handleApprove}>
            {isPending ? "loading" : "Approval"}
          </button>
          {` `}
          <button
            className="mt-4 w-full bg-main hover:bg-main/90 text-black py-2 rounded-lg lg:text-lg text-md font-bold"
            onClick={handleDeposit}>
            Deposit
          </button>
          {isLoading ? "loading transaction" : ""}
        </div>
      </div>
    </div>
  )
}

export const Table = () => {
  const items = [
    {
      id: "susde",
      label: "sUSDe",
      imgUrl:
        "https://storage.googleapis.com/prod-pendle-bucket-a/images/uploads/1fc3683f-3f25-44f0-8c79-55f7eedd53be.svg",
      date: "2025 Mar 02",
      liquidity: "$29.43M",
      leverage: "20x",
      fundingRate: "14.5%",
      fixedFundingRate: "20%",
    },
    {
      id: "lbtc",
      label: "LBTC (Corn)",
      imgUrl:
        "https://storage.googleapis.com/prod-pendle-bucket-a/images/uploads/2dae1fc4-645b-4278-9a45-e3708f9463da.svg",
      date: "2024 Dec 31",
      liquidity: "$9.1M",
      leverage: "20x",
      fundingRate: "14.5%",
      fixedFundingRate: "20%",
    },
    {
      id: "lbtc2",
      label: "LBTC (Corn)",
      imgUrl:
        "https://storage.googleapis.com/prod-pendle-bucket-a/images/uploads/2dae1fc4-645b-4278-9a45-e3708f9463da.svg",
      date: "2024 Dec 31",
      liquidity: "$9.1M",
      leverage: "20x",
      fundingRate: "14.5%",
      fixedFundingRate: "20%",
    },
    {
      id: "lbtc3",
      label: "LBTC (Corn)",
      imgUrl:
        "https://storage.googleapis.com/prod-pendle-bucket-a/images/uploads/2dae1fc4-645b-4278-9a45-e3708f9463da.svg",
      date: "2024 Dec 31",
      liquidity: "$9.1M",
      leverage: "20x",
      fundingRate: "14.5%",
      fixedFundingRate: "20%",
    },
  ]
  return (
    <table className="table-auto w-full mt-12">
      <thead>
        <tr className="text-sm text-teal-500 tracking-wider">
          <th className="py-2 px-8 pl-0 font-light min-w-fit whitespace-nowrap text-left">
            Market
          </th>
          <th className="py-2 px-8 font-light min-w-fit whitespace-nowrap text-right">
            Leverage
          </th>
          <th className="py-2 px-8 font-light min-w-fit whitespace-nowrap text-right">
            Funding Rate
          </th>
          <th className="py-2 px-8 font-light min-w-fit whitespace-nowrap text-right">
            Fixed Funding Rate
          </th>
          {/* <th className="py-2 px-8 font-light min-w-fit whitespace-nowrap text-right">
                  Buy / Sell
                </th> */}
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => {
          return (
            <tr key={index} className="group cursor-pointer relative">
              <td className="relative z-1 h-12 w-full px-8 pl-0 py-3">
                <div className="cursor-pointer">
                  <div className="relative flex items-center gap-4">
                    <img
                      src={item.imgUrl}
                      alt="LBTC (Corn)"
                      className="size-9"
                    />
                    <div className="flex flex-col">
                      <span className="relative leading-tight group-hover:font-semibold">
                        <span className="absolute blur inset-0 opacity-0 group-hover:opacity-100">
                          {item.label}
                        </span>
                        {item.label}
                      </span>
                      <span className="text-sm font-light leading-tight">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>
              </td>

              <td className="px-8">
                <div className="relative text-xl flex items-center justify-end group-hover:text-green-300">
                  <span className="absolute blur opacity-0 group-hover:opacity-100">
                    {item.leverage}
                  </span>

                  {item.leverage}
                </div>
              </td>
              <td className="px-8">
                <div className="relative text-lg flex items-center justify-end group-hover:text-green-300">
                  <span className="absolute blur opacity-0 group-hover:opacity-100">
                    {item.fundingRate}
                  </span>

                  {item.fundingRate}
                </div>
              </td>
              <td className="px-8">
                <div className="relative text-lg flex items-center justify-end group-hover:text-green-300">
                  <span className="absolute blur opacity-0 group-hover:opacity-100">
                    {item.fixedFundingRate}
                  </span>

                  {item.fixedFundingRate}
                </div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
