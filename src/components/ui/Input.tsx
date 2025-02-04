export const Input = () => {
  return (
    <div className="flex gap-4 border-2 px-4 py-4 rounded-full">
      <div className="flex gap-2 hover:bg-red-600 cursor-pointer bg-red-400">
        <div className="bg-yellow-400 font-bold text-red-800 w-6 h-6 ring-2 ring-white ring-offset-2 ring-offset-zinc-600 justify-center flex items-center rounded-full text-sm">
          <span>N</span>
        </div>
        <span className="font-semibold">NOVA TOKEN</span>
      </div>
      <input
        className="focus:outline-none text-end [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        placeholder="0.00"
        type="number"
      />
    </div>
  )
}
