import React from "react";
import AppAbout from "../home/about";
import AppFeature from "../home/feature";
import AppHero from "../home/hero";
import AppWork from "../home/work";
import AppFaq from "../home/faq";
import AppPricing from "../home/pricing";
import AppContact from "../home/contact";
import AppFooter from "../common/footer";

function AppHome() {

  return (
    <div id="home">
      <AppHero />
      <AppAbout />
      <AppFeature />
      <AppWork />
      <AppFaq />
      <AppPricing/>
      <AppContact/>
    </div>
  );
}

export default AppHome;
