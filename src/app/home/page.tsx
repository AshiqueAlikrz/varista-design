import TeamExample from "@/components/home";
import ImageRevealEffect from "@/components/ImageRevealEffect";
import ButtonAppBar from "@/components/navbar";

export default function Homepage() {
  return (
    <div className="overflow-x-hidden">
      <ButtonAppBar />
      <TeamExample />
        {/* <ImageRevealEffect /> */}
    </div>
  );
}
