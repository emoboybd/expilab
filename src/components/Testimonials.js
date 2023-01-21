import React from "react";

function Testimonials() {
  return (
    <section id="testimonial">
      <div className="section-container my-40">
        <div>
          <p className="text-gray-400 text-center mb-2">TESTMONIALS</p>
          <h2 className="text-center">What Clients say about us</h2>
        </div>

        <div className="flex flex-col justify-center md:my-20 space-y-6 md:space-y-0 md:space-x-10 md:max-w-4xl mx-auto md:flex-row ">
          {/* testimonial 1 */}
          <div className="flex flex-start space-x-6">
            <img
              src="https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg"
              className="h-20 w-20 object-cover rounded-2xl"
            />
            <div className="flex flex-col space-y-6 items-start">
              <p className="font-semibold">
                Get a fully retina ready site when you build with Startup
                Framework. Websites look sharper and more gorgeous on devices
                with retina display support
              </p>
              <p className="text-gray-400 text-center">Rayhan Curran</p>
            </div>
          </div>
          {/* testimonial 2 */}
          <div className="flex flex-start space-x-6">
            <img
              src="https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg"
              className="h-20 w-20 object-cover rounded-2xl"
            />
            <div className="flex flex-col space-y-6 items-start">
              <p className="font-semibold">
                Get a fully retina ready site when you build with Startup
                Framework. Websites look sharper and more gorgeous on devices
                with retina display support
              </p>
              <p className="text-gray-400 text-center">Rayhan Curran</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center md:my-20 space-y-6 md:space-y-0 md:space-x-10 md:max-w-4xl mx-auto md:flex-row ">
          {/* testimonial 3 */}
          <div className="flex flex-start space-x-6">
            <img
              src="https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg"
              className="h-20 w-20 object-cover rounded-2xl"
            />
            <div className="flex flex-col space-y-6 items-start">
              <p className="font-semibold">
                Get a fully retina ready site when you build with Startup
                Framework. Websites look sharper and more gorgeous on devices
                with retina display support
              </p>
              <p className="text-gray-400 text-center">Rayhan Curran</p>
            </div>
          </div>
          {/* testimonial 4 */}
          <div className="flex flex-start space-x-6">
            <img
              src="https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg"
              className="h-20 w-20 object-cover rounded-2xl"
            />
            <div className="flex flex-col space-y-6 items-start">
              <p className="font-semibold">
                Get a fully retina ready site when you build with Startup
                Framework. Websites look sharper and more gorgeous on devices
                with retina display support
              </p>
              <p className="text-gray-400 text-center">Rayhan Curran</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
