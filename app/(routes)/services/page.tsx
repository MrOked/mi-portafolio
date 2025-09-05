import CircleImage from "@/components/circle-image";
import AvatarServices from "@/components/avatar-services";
import TransitionPage from "@/components/transition-page";
import SliderServices from "@/components/slider-services";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />

      <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
        <div className="max-w-[450px]">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            Mis <span className="font-bold text-green-500">Servicios</span>
          </h1>

          <p className="mb-3 text-xl text-white">
            Desarrollo páginas web simples con HTML y CSS, tengo conocimientos básicos de bases de datos y realizo pequeños proyectos para seguir aprendiendo y mejorar mis habilidades en frontend.
          </p>

          <button className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl 
                             border-green-400 text-green-400 hover:shadow-xl hover:shadow-green-500/60">
            Contacta conmigo
          </button>
        </div>
        <div>
        <SliderServices />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
