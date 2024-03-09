import React from "react";
import Container from "./Container";
import Title from "./Title";
import Link from "next/link";

const resourcesArray = [
  {
    href: "/posts",
    total: "100 posts",
  },
  {
    href: "/comments",
    total: "500 comments",
  },
  {
    href: "/albums",
    total: "100 albums",
  },
  {
    href: "/photos",
    total: "5000 photos",
  },
  {
    href: "/todos",
    total: "200 todos",
  },
  {
    href: "/users",
    total: "10 users",
  },
];

const Resources = () => {
  return (
    <Container>
      <Title title="Resources" />
      <p className="my-5 text-sm">
        JSONPlaceholder comes with a set of 6 common resources:
      </p>
      <div className="my-5 flex flex-col gap-y-2">
        {resourcesArray.map((item) => (
          <div className="flex items-center w-72 justify-between">
            <Link key={item?.href} href={item?.href}>
              {item?.href}
            </Link>
            <p className="text-left w-32">{item?.total}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Resources;