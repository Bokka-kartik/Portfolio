import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 flex flex-col md:flex-row items-center justify-between dark:bg-gray-800 px-6 md:px-20 py-10">
      {/* left side part  */}
      <div className="max-w-lg space-y-4">
        <p className="text-lg">😊Hello ,I am </p>
        <h1 className="text-4xl md:text-6xl font-bold text-blue-600 dark:text-blue-400">
          KARTIK
        </h1>
        <p className="text-grey-600 dark:text-gray-300 text-xl">
          Web Developer /Freelancer
        </p>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="bg-blue-500 py-2 text-white rounded hover:bg-blue-600 "
          >
            Let's Connect
          </a>
          <a
            href="/documents/KartikSai_CV.pdf"
            className="px-4 py-2 border border-blue-500 rounded text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            Download CV
          </a>
        </div>
        {/* right side part  */}
      </div>
        <div className=" relative mt-10 md:mt-0">
          <img src="Images/hero/kartik.png"
          alt="Profile"
          className="rounded-full shadow-lg"
          height={100}
          width={166}
          />
          <div className="absolute top-[-20px] right-[-20px] bg-white dark:bg-gray-700 p-2 rounded-full shadow-md" >
          <img src="Images/hero/react.png" alt="React" className="w-8 h-8 "/>
        </div>
        <div className="absolute bottom-[-20px] left-[-20px] bg-white dark:bg-gray-700 p-2 rounded-full shadow-md" >
          <img src="Images/hero/graphql.png" alt="graphql" className="w-8 h-8 "/>
        </div>
        </div>
        
    </section>
  );
};

export default Hero;
