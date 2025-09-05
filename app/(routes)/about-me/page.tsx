import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/counter-services";
import TransitionPage from "@/components/transition-page";
import TimeLine from "@/components/time-line";



const PageAboutme = () => {
    return ( 
        <>
       <TransitionPage />
      <ContainerPage>
        <Avatar />
       <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10"> Toda mi {""}
       <span className="font-bold text-green-500">trayectoria como desarrollador junior
        </span>
       </h1>
       <CounterServices/>
       <TimeLine/>

      </ContainerPage>
        </>
     );
}
 
export default PageAboutme;