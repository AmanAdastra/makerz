import CtaComponent from "@/components/Cta/CtaComponent";
import InfoComponent from "@/components/Info/InfoComponent";
import BackgroundVideoComponent from "@/components/BackgroundVideo/BackgroundVideoComponent";


export default function Home() {
  return (
      <div className="h-screen w-screen lg:h-[90vh]">
        <BackgroundVideoComponent />
        <div className="absolute w-full md:w-auto h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="flex h-full flex-col md:flex-row flex-wrap justify-center items-center">
              <InfoComponent/>
              {/* <CtaComponent/> */}
          </div>
        </div>
      </div>
      
  );
}
