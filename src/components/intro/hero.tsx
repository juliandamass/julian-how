"use client";

const Hero = () => {
  return (
    <section className="relative z-10 mx-auto flex max-w-screen-lg flex-col items-center justify-center p-4 md:py-8 min-h-[100svh]">
      <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full bg-transparent bg-[radial-gradient(#1E293930_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      <div>
        <h1 className="text-5xl text-center">
          yo <span className="font-black">Julian</span>, how?
        </h1>
      </div>
    </section>
  );
};

export default Hero;
