"use client";

import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Container from "./Container";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <header
        className={cn(
          "z-50 top-0 flex items-center w-full h-[60px] lg:h-[80px]",
          isMenuOpen ? "fixed" : "sticky bg-white/30 backdrop-blur-md",
        )}
      >
        <Container size="lg">
          <div className="w-full flex items-center justify-between gap-4">
            <div className="flex items-center justify-center gap-3">
              <p className="text-xl font-bold leading-none text-right">
                <span>Julian</span>{" "}
                <span className="hidden lg:inline-block">D.</span>
                <br />
                <span className="hidden lg:inline-block">Suryawan</span>
              </p>
              <div className="hidden lg:inline-block w-24 h-12 bg-yellow-400 rounded-full transition-all"></div>
            </div>

            {/* Menu for desktop */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="#" className="font-medium">
                Projects
              </Link>
              <span className="text-gray-300">/</span>
              <Link href="#" className="font-medium">
                Experience
              </Link>
              <span className="text-gray-300">/</span>
              <Link href="#" className="font-medium">
                Contact
              </Link>
              <span className="text-gray-300">/</span>
              <button className="flex items-center justify-center gap-2">
                <span>CV</span>
                <Download className="w-4 h-4" />
              </button>
            </div>

            {/* Menu for mobile */}
            <button
              className="lg:hidden relative w-6 h-6"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div
                className={cn(
                  "absolute w-6 h-0.5 top-2 right-0 bg-foreground transition-all origin-[17.5px]",
                  isMenuOpen ? "-rotate-45" : "",
                )}
              ></div>
              <div
                className={cn(
                  "absolute h-0.5 top-4 right-0 bg-foreground transition-all origin-[17.5px] delay-100",
                  isMenuOpen ? "w-6 rotate-45" : "w-4",
                )}
              ></div>
            </button>
          </div>
        </Container>
      </header>
      {isMenuOpen && (
        <div className="fixed z-40 top-0 left-0 w-screen h-screen bg-white/30 backdrop-blur-md">
          <div className="flex flex-col gap-6 w-full px-10 pt-20">
            <Link href="#" className="text-xl font-medium">
              Projects
            </Link>
            <Link href="#" className="text-xl font-medium">
              Experience
            </Link>
            <Link href="#" className="text-xl font-medium">
              Contact
            </Link>
            <button className="flex items-center gap-2">
              <span className="text-xl">CV</span>
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
