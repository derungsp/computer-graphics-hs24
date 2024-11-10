"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  return (
    <header
      id="header"
      className="mb-20 flex h-[130px] items-center justify-between"
    >
      <Link href="/" className="h-50 z-50">
        Computer Graphics HS24 - Pascal Derungs
      </Link>
      <div className="hidden items-center space-x-10 md:block">
        <MenuItem href="/test">Porsche 935</MenuItem>
      </div>
      <div className="md:hidden">{/* <HeaderMobile links={links} /> */}</div>
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
