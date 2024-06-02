import CtaComponent from "@/components/Cta/CtaComponent";
import CurveBling from "@/components/svg/CurveBling";
import InfoComponent from "@/components/Info/InfoComponent";
import BackgroundVideoComponent from "@/components/BackgroundVideo/BackgroundVideoComponent";


export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="relative w-full h-full lg:h-[90vh]">
        <BackgroundVideoComponent />
        <div className="absolute h-[600px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <div className="relative flex items-center justify-between ">
              <InfoComponent />
              <CtaComponent />
          </div>
        </div>
      </div>
      <CurveBling />
    </div>
  );
}
