import { socialNetworks } from "@/data";
import MotionTransition from "./transition-component";
import Link from "next/link";

const Header = () => {
    return (  
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">
        <header>
            <div className="container justify-between max-6-xl mx-auto md:flex">
            <Link href="/">
             <h1 className="my-3 text-4xl font-bold text-center md:text-left">
                Javier
                <span className="text-secondary text-green-500">
                    Valdes
                </span>
             </h1>
            </Link>
            <div className="flex items-center justify-center gap-7">
                {socialNetworks.map(({logo,src,id}) => (
                    <Link key={id}
                    href={src}
                    target="_blank"
                    className="transition-all duration-300  hover:bg-green-500"
                    >
                    {logo}
                    
                    </Link>
                ))}

            </div>
            </div>
        </header>
        </MotionTransition>
    );
}
 
export default Header;