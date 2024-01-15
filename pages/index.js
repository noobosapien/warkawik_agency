import { Inter } from "next/font/google";
import Layout from "@/components/Nav/Layout";
import Hero from "@/components/Home/Hero/Hero";
import Difference from "@/components/Home//Difference/Difference";
import StayingAhead from "@/components/Home/StayingAhead/StayingAhead";
import Featured from "@/components/Home/Featured/Featured";
import Science from "@/components/Home/Science/Science";
import Innovation from "@/components/Home/Innovation/Innovation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout active="home">
        <Hero />
        <Difference />
        <StayingAhead />
        <Science />
        <Featured />
        <Innovation />
      </Layout>
    </>
  );
}
