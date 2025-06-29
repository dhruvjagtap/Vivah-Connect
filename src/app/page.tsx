"use client";

import { Button } from "@/components/ui/button";
import { Heart, Shield, MessageCircle, Sparkles, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      <Head>
        <title>Vivah Connect | Modern Indian Matchmaking</title>
        <meta
          name="description"
          content="Vivah Connect is a modern AI-powered marriage bureau helping singles find meaningful matches with cultural sensitivity and privacy."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-800 leading-tight">
                  Find Your Forever with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">
                    Vivah Connect
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                  A modern, AI-powered marriage bureau designed for today&apos;s
                  generation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/biodata">Find Your Match</Link>
                </Button>
              </div>
              <div className="pt-4 border-t border-rose-200">
                <p className="text-sm md:text-base text-gray-600 italic">
                  &quot;Join India&apos;s next-generation matchmaking experience
                  — built with heart, powered by tech.&quot;
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl p-8 shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/32632282/pexels-photo-32632282.jpeg"
                  alt="Illustration of a happy couple using Vivah Connect"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                  <Heart className="w-6 h-6 text-rose-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                  <Sparkles className="w-6 h-6 text-pink-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
              What Makes Vivah Connect Different
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We blend the wisdom of tradition with the power of modern
              technology to create meaningful connections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Sparkles />}
              title="AI-Driven Matchmaking"
              description="Advanced algorithms that understand compatibility beyond surface-level preferences."
            />
            <FeatureCard
              icon={<Heart />}
              title="Tradition Meets Modern Love"
              description="Honoring cultural values while embracing contemporary relationship dynamics."
            />
            <FeatureCard
              icon={<Globe />}
              title="Cultural Sensitivity"
              description="Respectful matching based on religion, language, caste, and personal preferences."
            />
            <FeatureCard
              icon={<Shield />}
              title="Safe & Private"
              description="Your privacy is paramount. Secure platform with verified profiles and protected data."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-rose-500 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to meet someone who truly understands you?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of individuals who have found their perfect match
              through our thoughtful approach to modern matchmaking.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <CTAItem icon={<Heart />} text="Find True Love" />
              <CTAItem icon={<Shield />} text="Complete Privacy" />
              <CTAItem icon={<MessageCircle />} text="Guided Conversations" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-rose-600 hover:bg-gray-50 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                <Link href="/biodata">Connect</Link>
              </Button>

              <Button
                size="lg"
                className="bg-white text-rose-600 hover:bg-gray-50 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                <Link href="/login">Login</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">
                Vivah Connect
              </h3>
              <p className="text-gray-600">Where hearts meet, futures begin.</p>
            </div>

            <nav className="flex flex-wrap justify-center gap-6 mb-6">
              <FooterLink href="#" text="About" />
              <FooterLink href="#" text="Privacy Policy" />
              <FooterLink href="#" text="Contact Us" />
              {/* <FooterLink href="#" text="Success Stories" /> */}
              {/* <FooterLink href="#" text="Help & Support" /> */}
            </nav>

            <div className="border-t border-rose-200 pt-6">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Vivah Connect. All rights reserved.
                Made with ❤️ for meaningful connections.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center group">
      <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl p-6 mb-4 group-hover:shadow-lg transition-all duration-300">
        <div className="w-8 h-8 mx-auto mb-4 text-rose-500">{icon}</div>
        <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

type CTAItemProps = {
  icon: React.ReactNode;
  text: string;
};

function CTAItem({ icon, text }: CTAItemProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-6 h-6">{icon}</div>
      <span className="text-sm md:text-base">{text}</span>
    </div>
  );
}

type FooterLinkProps = {
  href: string;
  text: string;
};

function FooterLink({ href, text }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:text-rose-600 transition-colors duration-200"
    >
      {text}
    </Link>
  );
}
