"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Container from "../layout/Container";

const ChatHero = () => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100svh_-_60px)] lg:min-h-[calc(100svh_-_80px)]">
      {/* Dot grid background */}
      <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full bg-transparent bg-[radial-gradient(#1E293930_1.5px,transparent_1.5px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

      <Container className="relative -bottom-10 lg:bottom-4">
        <div className="flex flex-col gap-6 lg:gap-16 px-4 lg:px-0">
          <div className="flex items-end gap-4">
            <div className="shrink-0 w-20 h-20 bg-blue-400 border-8 border-blue-100 rounded-full">
              <Image
                src="/images/avatars/client-6.webp"
                alt="Julian"
                width="80"
                height="80"
                className="w-full h-full scale-125"
              />
            </div>
            <div
              className={cn(
                "relative px-6 py-3 mb-2 bg-gray-100 rounded-2xl -rotate-3 origin-bottom-left",
                "after:block after:absolute after:-left-[10px] after:bottom-4 after:w-0 after:h-0 after:border-r-[10px] after:border-r-gray-100 after:border-b-[10px] after:border-b-transparent after:border-t-[10px] after:border-t-transparent",
              )}
            >
              <h4 className="text-lg lg:text-2xl font-light">
                yo <b className="text-2xl lg:text-4xl font-bold">Julian</b>,
                how&apos;s the frontend?
              </h4>
            </div>
          </div>
          <div className="place-self-end flex flex-row-reverse items-end gap-4">
            <div className="shrink-0 w-20 h-20 bg-yellow-400 border-8 border-yellow-100 rounded-full overflow-hidden">
              <Image
                src="/images/avatars/avatar-1.webp"
                alt="Julian"
                width="80"
                height="80"
                className="w-full h-full scale-125"
              />
            </div>
            <div
              className={cn(
                "relative px-6 py-3 mb-4 bg-gray-100 rounded-2xl rotate-3 origin-right-left",
                "after:block after:absolute after:-right-[10px] after:bottom-6 after:w-0 after:h-0 after:border-l-[10px] after:border-l-gray-100 after:border-b-[10px] after:border-b-transparent after:border-t-[10px] after:border-t-transparent",
              )}
            >
              <h4 className="text-lg lg:text-2xl font-light">
                Improved frontend performance and consistency by refactoring
                legacy code and introducing reusable components, leading to
                faster feature delivery and reduced bugs 👌
              </h4>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ChatHero;
