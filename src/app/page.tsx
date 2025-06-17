import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Vivah Connect</title>
        <meta
          name="description"
          content="India's trusted marriage bureau to connect perfect matches"
        />
      </Head>
      <Hero />
      <About />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
