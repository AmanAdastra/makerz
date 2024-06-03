import CtaComponent from "@/components/Cta/CtaComponent";
import InfoComponent from "@/components/Info/InfoComponent";
import BackgroundVideoComponent from "@/components/BackgroundVideo/BackgroundVideoComponent";


// w-[calc(100% - 350px - 21px - 21px)]

export default function Home() {
  return (
      <div id="hero-section" className="h-screen">
        <BackgroundVideoComponent />
        <div className="max-w-[1200px] flex flex-wrap flex-col md:flex-row mx-auto h-[100%] items-center z-50">
            <InfoComponent/>
            <CtaComponent/>
        </div>
      </div>
      
  );
}
