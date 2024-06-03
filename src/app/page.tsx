import CtaComponent from "@/components/Cta/CtaComponent";
import InfoComponent from "@/components/Info/InfoComponent";
import BackgroundVideoComponent from "@/components/BackgroundVideo/BackgroundVideoComponent";
import SearchFilterComponent from "@/components/SearchFilter/SearchFilterComponent";


export default function Home() {
  return (
    <div className="m-0 p-0">
      <div id="hero-section" className="h-screen mb-10">
        <BackgroundVideoComponent />
        <div className="max-w-[1200px] flex flex-wrap flex-col md:flex-row mx-auto h-[100%] items-center z-50">
            <InfoComponent/>
            <CtaComponent/>
        </div>
      </div>
      <div className="h-screen  ">
        <SearchFilterComponent/>
      </div>
    </div>
      
  );
}
