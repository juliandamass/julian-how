"use client";

import { animate } from "framer-motion";

interface ISmoothScrollLink {
  href: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const SmoothScrollLink = ({
  href,
  className,
  onClick,
  children,
}: ISmoothScrollLink) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      event.preventDefault();

      const offset = 96; // adjust this value as needed
      const top = element.getBoundingClientRect().top + window.scrollY - offset;

      animate(window.scrollY, top, {
        duration: 0.8,
        ease: [0.42, 0, 0.58, 1], // easeInOut
        onUpdate: (v) => window.scrollTo(0, v),
      });
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default SmoothScrollLink;
