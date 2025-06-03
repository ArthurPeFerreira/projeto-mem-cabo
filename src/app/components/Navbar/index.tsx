import ifcLogo from "./../../../../public/Logo_IFC_horizontal.png"
import Image from "next/image";

export default function Navbar(){
    return (<nav className="w-full bg-gray-800">
        <Image src={ifcLogo} alt="logo" height={80} width={240}  />
    </nav>)
}