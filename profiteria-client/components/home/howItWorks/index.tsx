import CreateProfile from "./CreateProfile";
import ChooseInvPlan from "./ChooseInvPlan";
import InvestClick from "./InvestClick";
import KeepTrack from "./KeepTrack";

const HowItWorks = () => {
  return (
    <>
      <h2 className="text-center my-8 mb-16 px-8 text-orange-red">
        How it works: 4 Simple Steps
      </h2>
      <CreateProfile />
      <ChooseInvPlan />

      <KeepTrack />
    </>
  );
};

export default HowItWorks;
