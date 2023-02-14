import Navbar from "./navbar";
import MainContent from "./main-content";
import Steps from "./steps";
import Company from "./company";
import Footer from "./footer";
import Rights from "./rights";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <MainContent />
      <Steps />
      <Company />
      <Footer />
      <Rights />
    </div>
  );
}

export default LandingPage;
