import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import { div } from "framer-motion/client";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const TestimonialsPage = () => {
    return ( 
        <>
        <TransitionPage/>
        <div className="flex flex-col justify-center h-lvh">
            <CircleImage/>
            <h1 className="">
              Algunos comentarios 
              <span className="block font-bold text-secondary">
                de mis clientes
              </span>
            </h1>

            <div className="flex items-center justify-center">
                <div>
                    <Swiper
                     breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 15
                                },
                            }}
                            freeMode={true}
                            pagination={{
                                clickable: true
                            }}
                            modules={[Pagination]}
                            className="h-[380px] md:h-[300px] w-[270px] md:w-[550px]"
                    
                        >

                    </Swiper>
                </div>
            </div>

        </div>
        </>
     );
}
 
export default TestimonialsPage;
