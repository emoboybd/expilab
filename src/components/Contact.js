import React from "react";

function Contact() {
  return (
    <section id="team">
      <div className="section-container my-40">
        <div>
          <p className="text-gray-400 text-center mb-2">Contact</p>
          <h2 className="text-center">Subscribe Our Newsleter</h2>
        </div>
        <div className="flex flex-col my-40 space-y-6 md:space-y-0 md:flex-row md:space-x-10 items-center md:max-w-6xl md:mx-auto">
          <img src="/mail_img_svg.svg" />
          <div className="flex flex-col space-y-16">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <input
              type="email"
              placeholder="Your E-mail here..."
              className="rounded-full py-4 drop-shadow-4xl px-6 placeholder:text-gray-600 border-2 border-gray-200 font-semibold text-lg focus:outline-none"
            />
            <button className="main-btn py-2">Subscribe Our Newsletter</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
