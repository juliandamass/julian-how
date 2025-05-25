import { CircleHelp, FileText, Mail, Phone } from "lucide-react";
import Container from "../layout/Container";
import SectionTitle from "../section/SectionTitle";

const Contact = () => {
  return (
    <section id="contact" className="pt-10 pb-20 lg:pt-24 lg:pb-36">
      <Container>
        <div className="flex justify-center w-full">
          <div className="w-full lg:w-10/12 h-full grid gap-3">
            <div className="grid grid-cols-3 gap-3 auto-rows-[95px] lg:auto-rows-[120px]">
              <div className="bg-gray-100 w-full h-full flex justify-center items-center text-center overflow-clip group rounded-[35px] cursor-pointer bg-transparent overflow-visible">
                <SectionTitle number={4} title="Contact" />
              </div>
              <a href="mailto:juliandamass@gmail.com">
                <div className="bg-gray-100 w-full h-full flex justify-center items-center text-center overflow-clip rounded-t-[35px] rounded-l-[35px] cursor-pointer hover:text-yellow-400 hover:font-bold transition-all ease-in-out duration-500">
                  <div className="flex flex-col items-center justify-center">
                    <Mail className="w-10 h-10" />
                    <span className="font-semibold whitespace-pre-wrap">
                      Email
                    </span>
                  </div>
                </div>
              </a>
              <a href="tel:+6282170701070">
                <div className="bg-gray-100 w-full h-full flex justify-center items-center text-center overflow-clip rounded-br-[35px] rounded-t-[35px] cursor-pointer hover:text-yellow-400 hover:font-black transition-all ease-in-out duration-500">
                  <div className="flex flex-col items-center justify-center">
                    <Phone className="w-10 h-10" />
                    <span className="font-semibold whitespace-pre-wrap">
                      Phone
                    </span>
                  </div>
                </div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="/files/cv.pdf">
                <div className="bg-gray-100 w-full h-full flex justify-center items-center text-center overflow-clip rounded-[35px] cursor-pointer hover:text-yellow-400 hover:font-black transition-all ease-in-out duration-500">
                  <div className="flex flex-col items-center justify-center">
                    <FileText className="w-10 h-10" />
                    <span className="font-semibold whitespace-pre-wrap">
                      CV
                    </span>
                  </div>
                </div>
              </a>
              <div className="bg-gray-100 w-full h-full flex justify-center items-center text-center overflow-clip group rounded-b-[35px] rounded-tl-[35px] cursor-pointer">
                <div className="bento-grid-container h-[120px] flex items-center justify-center">
                  <h1 className="text-orange-400 text-[150%] lg:text-[200%] font-black leading-none group-hover:scale-105 transition-all ease-in-out duration-500">
                    Hire
                    <br />
                    me.
                  </h1>
                </div>
              </div>
              <div className="bg-yellow-200 w-full h-full flex justify-center items-center text-center overflow-clip row-span-2 rounded-r-[45px] cursor-pointer hover:text-yellow-400 transition-all ease-in-out duration-500">
                <span className="text-lg font-semibold [writing-mode:vertical-lr] rotate-180 uppercase">
                  {/* Side Projects */}
                </span>
              </div>
              <div className="bg-yellow-200 w-full h-full flex justify-center items-center text-center overflow-clip col-span-2 rounded-t-[40px] cursor-pointer rounded-l-[40px] font-semibold hover:text-yellow-400 hover:font-bold transition-all ease-in-out duration-500">
                {/* TODO */}
              </div>
              <a href="https://linkedin.com/in/juliandamass" target="_blank">
                <div className="bg-gray-100 w-full h-full flex justify-center items-center text-center overflow-clip rounded-b-[35px] rounded-l-[35px] cursor-pointer hover:text-[#0A66C2] transition-all ease-in-out duration-500">
                  <svg
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    className="w-8 h-8 lg:w-10 lg:h-10"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </div>
              </a>
              <a href="https://github.com/juliandamass" target="_blank">
                <div className="bg-gray-100 w-full h-full flex justify-center items-center text-center overflow-clip rounded-b-[35px] rounded-l-[35px] cursor-pointer hover:text-gray-400 transition-all ease-in-out duration-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 lg:w-10 lg:h-10"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"></path>
                  </svg>
                </div>
              </a>
              <div className="bg-gray-100 w-full h-full flex justify-center items-center text-center overflow-clip rounded-b-[35px] rounded-r-[35px] cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-500">
                <CircleHelp className="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
