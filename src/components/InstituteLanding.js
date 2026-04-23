import Header from "./Header";
import HeroBanner from "./HeroBanner";
import AcademicPrograms from "./AcademicPrograms";
import WhyUs from "./WhyUs";
import ExamTraining from "./ExamTraining";
import Achievements from "./Achievements";
import SchoolFacilities from "./SchoolFacilities";
import ElfsightInstagramFeed from "./ElfsightInstagramFeed";
import Contact from "./Contact";
import SmartSchool from "./SmartSchool";
import Footer from "./Footer";

export default function InstituteLanding() {
  return (
    <>
      <Header />
      <HeroBanner />
      <AcademicPrograms />
      <WhyUs />
      <ExamTraining />
      {/* <ElfsightInstagramFeed /> */}
      <SchoolFacilities />
      {/* <Achievements /> */}
            <SmartSchool />

      <Contact />
      <Footer />
    </>
  );
}
