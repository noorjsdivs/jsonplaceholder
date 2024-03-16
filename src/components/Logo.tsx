import clsx from "clsx";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"} className={clsx(`${className} text-base font-bold`)}>
      Rakib Sheikh
    </Link>
  );
};

export default Logo;
