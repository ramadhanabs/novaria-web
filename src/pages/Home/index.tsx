export const Home = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center flex-col">
        <div className="flex flex-col lg:items-center justify-center lg:w-[800px] text-center lg:space-y-14 space-y-6">
          <h1 className="lg:text-6xl text-3xl text-blue-200 leading-tight px-4 lg:px-0">
            Financial Stability Starts with Fixed Income Solutions
          </h1>
          <p className="lg:text-lg text-blue-100 px-4 lg:px-0">
            Harness the power of funding rates and blockchain technology to
            generate predictable, steady income streams. Our solutions are
            designed to bring stability to your crypto investments.
          </p>
        </div>
        <div className="w-full">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:space-x-6 space-y-6 lg:space-y-0 px-4 lg:px-0 mt-10">
            <button className="lg:w-80 w-full bg-main text-black py-2 rounded-lg lg:text-lg text-md font-bold">
              Get Started
            </button>
            <button className="lg:w-80 w-full bg-transparent border border-main text-blue-100 py-2 rounded-lg lg:text-lg text-md font-bold">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
