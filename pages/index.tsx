import { About } from "@components/about";
import Image from "next/image";
import { Feedback } from "@components/feedback";
import { Footer } from "@components/footer";
import { Header } from "@components/header";
import { HeroSection } from "@components/heroSection";
import { PrayerCards } from "@components/prayerCard";
import { PrayerPreparation } from "@components/prayerPrepration";
import { PageLayout } from "@src/layouts";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <div className="">
        <main className="max-w-screen">
          <div className="w-full  relative h-screen  bg-cover bg-bottom md:bg-top bg-no-repeat">
            <div>
              <Image
                priority
                layout="fill"
                className="object-top  object-cover pointer-events-none"
                src="/img/newhero-bg.jpg"
                alt=""
              />
              <div className="px-5 bg-black/70 min-h-screen relative z-1">
                <Header />
                <HeroSection />
              </div>
            </div>
          </div>
          <PrayerCards />
          <PrayerPreparation />
          <About />
          <Feedback />
        </main>
        <Footer />
      </div>
    </PageLayout>
  );
};

export default Home;
