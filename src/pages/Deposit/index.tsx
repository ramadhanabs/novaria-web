import ArrowSwapIcon from "@/components/icon/ArrowSwapIcon"
import ClockIcon from "@/components/icon/ClockIcon"
import FuelIcon from "@/components/icon/FuelIcon"
import { Input, NovariaTokenLogo } from "@/components/ui/Input"

export const Deposit = () => {
  return (
    <div className="rounded-3xl p-5 flex flex-col items-center justify-center mt-12 bg-zinc-900">
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
      <button className="mt-4 w-full bg-main hover:bg-main/90 text-black py-2 rounded-lg lg:text-lg text-md font-bold">
        Deposit
      </button>
    </div>
  )
}
