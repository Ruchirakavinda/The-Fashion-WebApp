
import CurrentStatus from "./components/home/currentStatus";
import GetStarted from "./components/home/getStarted";
import ProductCarousel from "./components/home/productCarousel";
import Types from "./components/home/types";

export default function Home() {
  return (
    
    <main>
      <GetStarted/>
      <ProductCarousel/>
      <Types/>
      <CurrentStatus/>
    </main>
  );
}
