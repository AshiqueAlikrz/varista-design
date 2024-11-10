import TeamExample from "@/components/home";
import ButtonAppBar from "@/components/navbar";
import AboutPage from "../about/page";
import ServicePage from "../services/page";
import Media from "../media/page";
import Feature from "../feature/feature";
import Review from "../review/page";

export default function Homepage() {
  return (
    <div>
      <ButtonAppBar />
      <TeamExample />
      <Feature />
      <Media />
      <ServicePage />
      <Review />
      <AboutPage />
      {/* <Dedict /> */}
      {/* <ImageRevealEffect /> */}
    </div>
  );
}
