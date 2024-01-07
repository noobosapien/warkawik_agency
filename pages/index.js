import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Hero from "@/components/Home/Hero";
import Difference from "@/components/Home/Difference";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Difference />
      </Layout>
    </>
  );
}
