import Image from "next/image";
import Logo from "public/images/logo.png";

export default function Navbar() {
  return (
    <nav className="flex flex-1 items-center justify-center h-[13vh]">
      <Image src={Logo} alt="logo leadster" />
    </nav>
  );
}
