import React from "react";
import BannerMain from "./components/BannerMain";
import BannerInfo from "./components/BannerInfo";
import BannerExplore from "./components/BannerExplore";
import BannerChip from "./components/BannerChip";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main>
        <section>
          <article>
            <BannerMain />
            <BannerInfo />
            <BannerExplore />
            <BannerChip />
          </article>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
