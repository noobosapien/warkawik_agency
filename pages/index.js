import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Hero from "@/components/Home/Hero";
import Difference from "@/components/Home/Difference";
import StayingAhead from "@/components/Home/StayingAhead";
import Featured from "@/components/Home/Featured";
import Science from "@/components/Home/Science";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Difference />
        <StayingAhead />
        <Science />
        <Featured />
      </Layout>
    </>
  );
}
