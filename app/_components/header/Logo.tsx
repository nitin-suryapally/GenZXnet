import { logo } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <Link href="/">
        <Image src={logo} alt="logo" width={165} height={55} />
      </Link>
    </div>
  );
};

export default Logo;
