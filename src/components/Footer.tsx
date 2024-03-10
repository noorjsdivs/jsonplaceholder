import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <Container className="flex items-center justify-between">
        <p className="text-sm">Coded and maintained with ❤️ by you © 2024</p>
        <p className="text-sm font-medium tracking-wide">
          All rights reserved @reactbd.com
        </p>
      </Container>
    </div>
  );
};

export default Footer;
