"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  return (
    <header id="header" className="fixed top-0 w-full py-10">
      <div className="relative mx-auto flex max-w-screen-xl items-center justify-between">
        <Link href="/" className="h-50 z-50">
          Computer Graphics HS24 - Pascal Derungs
        </Link>
        <div className="items-center space-x-10">
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="/project">Porsche 935</MenuItem>
        </div>
      </div>
    </header>
  );
};

const MenuItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`${href}`}
      className="relative text-2xl uppercase"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 h-[1px] w-full bg-black"
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  );
};

export default Header;
