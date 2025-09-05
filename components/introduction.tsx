"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
    return (  
        <div className="z-20 w-full bg-darkBG/60">
             <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width ="325" height="325" alt="Profile pic"/>

             <div className="flex flex-col justify-center max-w-md">
                <h1 className="mb-5 text-2xl leading-tigth text-center md:text-left
                md:text-4xl md:mb-10
                ">Si puedes pensarlo,
                <TypeAnimation
                sequence={[
                   "todo empieza con una idea",
                    1000,
                    "cada línea de código cuenta",
                    1000,
                    "aprender es crear",
                    1000,
                    "el progreso nunca se detiene",
                    1000,

                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="block font-bold text-green-500"
                />
                
                </h1>
                <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
                    Desarrollador en formación con conocimientos básicos en programación. 
                    Me interesa seguir aprendiendo y mejorar tanto en <span className="font-semibold text-green-400">frontend</span>{" "}
                    como en <span className="font-semibold">backend</span>, con el objetivo de crecer como desarrollador integral.
                                    </p>
                <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <Link
                            href="/projects"
                            className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl 
                            hover:shadow-xl hover:shadow-green-400/50"
                        >
                            Ver proyectos
                        </Link>

                        <Link
                            href="/contact"
                            className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl 
                            border-green-400 text-green-400 hover:shadow-xl hover:shadow-green-500/60"
                        >
                            Contáctame
                        </Link>

                </div>

             </div>
                    
             </div>
        </div>
    );
}
 
export default Introduction;
