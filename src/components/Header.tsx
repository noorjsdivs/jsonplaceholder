import React from "react";
import Container from "./Container";
import Link from "next/link";
import Logo from "./Logo";

const navigation = [
  {
    title: "Guide",
    href: "/guide",
  },
  {
    title: "Sponsor this project",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "My JSON Server",
    href: "/server",
  },
  {
    title: "Playground",
    href: "/playground",
  },
];

const Header = () => {
  return (
    <div className="border-b-[1px] border-b-gray-300 bg-white shadow-sm sticky top-0 z-50">
      <Container className="flex flex-col md:flex-row items-start md:items-center justify-between">
      <p className="text-3xl -ml-32 -mr-32 font-bold">T<span className="text-red-600">X</span></p>
        <Logo />
        <div className="flex items-center gap-x-5">
          {navigation.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className="text-base font-light"
            >
              {item?.title}
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Header;
