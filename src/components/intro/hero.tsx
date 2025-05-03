"use client";

import Container from "../layout/Container";

const Hero = () => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-[100svh]">
      {/* Dot grid background */}
      <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full bg-transparent bg-[radial-gradient(#1E293930_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

      <Container>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ratione
          est ullam accusamus ipsa cumque sit architecto neque numquam itaque
          provident optio tempora voluptas nihil, quod, laborum minus! Aperiam,
          facere.
        </p>
      </Container>
    </section>
  );
};

export default Hero;
