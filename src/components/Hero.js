import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section id="hero">
      <div className="section-container my-6">
        <div className="flex items-center justify-between flex-col md:flex-row">
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-bold mb-10 md:text-6xl md:leading-relaxed">
              We boost growth for your statup business
            </h1>
            <p className="text-xl mb-20 md:text-2xl">
              Our goal is top at the heart of creativity services industry as a
              digital creator. In has a after comment
            </p>
            <div className="flex items-center space-x-20">
              <button className="main-btn px-6 py-2">Get started</button>
              <Link href="more" className="font-semibold hover:text-mainColor">
                Learn more
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-10 -left-40">
              <img src="/Background_data.png" />
            </div>
            <div className="relative">
              <img src="/hero_joyful.png" className="w-full" />
              <div className="absolute top-16 left-0">
                <img src="/hero_image_bg.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
