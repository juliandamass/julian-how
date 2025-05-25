import Image from "next/image";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="text-center py-4 lg:py-8">
      <span className="flex items-center justify-center text-gray-400">
        Copyright {year}. Crafted with{" "}
        <Image
          src="/images/heart-on-fire.gif"
          alt="Crafted"
          width={52}
          height={52}
          className="w-4 h-4 mx-1"
        />{" "}
        by Julian
      </span>
    </footer>
  );
};

export default Footer;
