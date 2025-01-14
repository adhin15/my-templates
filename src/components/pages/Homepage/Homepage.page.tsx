import Layout from "../../components/Layout";
import SectionFour from "./components/SectionFour";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";

const Homepage = () => {
  return (
    <Layout>
      <div className="px-12">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
    </Layout>
  );
};

export default Homepage;
