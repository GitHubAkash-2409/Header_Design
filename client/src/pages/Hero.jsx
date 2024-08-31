const Hero = () => {
  return (
    <section className="bg-yellow-300 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 sm:py-14 md:py-40 lg:py-48">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-purple-600">
            <span>WANT TO</span> <br />
            <span>INVEST IN</span> <br />
            <span>PROPERTY</span>
          </h1>
          <div className="flex justify-center items-center gap-1 mt-4">
            <div className="bg-purple-600 text-white py-2 px-6 sm:py-4 sm:px-8 rounded-full shadow-md">
              <span className="text-lg sm:text-xl md:text-4xl lg:text-6xl font-bold">PROPERTY</span>
            </div>
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">?</span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4">
            Do you want to invest in property but don't know where to invest? I will guide to help you find the best property to invest today.
          </p>
          <button className="mt-6 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full shadow-md transition duration-300 transform hover:scale-105">
            START HERE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
