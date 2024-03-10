import React from "react";
import Container from "./Container";
import Title from "./Title";
import Link from "next/link";

const resourcesArray = [
  {
    href: "/api/posts",
    total: "GET",
  },
  {
    href: "/api/posts/1",
    total: "GET",
  },
  {
    href: "/posts/1/comments",
    total: "GET",
  },
  {
    href: "/comments?postId=1",
    total: "GET",
  },
  {
    href: "/posts",
    total: "POST",
  },
  {
    href: "/posts/1",
    total: "PUT",
  },
  {
    href: "/posts/1",
    total: "PATCH",
  },
  {
    href: "/posts/1",
    total: "DELETE",
  },
];

const Routes = () => {
  return (
    <Container>
      <Title title="Routes" />
      <p className="my-5 text-sm">
        All HTTP methods are supported. You can use http or https for your
        requests.
      </p>
      <div className="my-5 flex flex-col gap-y-2">
        {resourcesArray.map((item) => (
          <div
            key={item?.href}
            className="flex items-center w-72 justify-between"
          >
            <p>{item?.total}</p>
            <Link key={item?.href} href={item?.href} className="text-left w-40">
              {item?.href}
            </Link>
          </div>
        ))}
        <p className="mt-5 text-sm tracking-wide">
          <span className="font-bold">Note</span>: see{" "}
          <span className="underline">guide</span> for usage examples.
        </p>
      </div>
    </Container>
  );
};

export default Routes;
