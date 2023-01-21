import { AiFillMessage } from "react-icons/ai";
import { IoVideocam } from "react-icons/io5";
import { MdOutlineGraphicEq } from "react-icons/md";

function Vision() {
  return (
    <section id="vision">
      <div className="section-container my-40 md:my-20">
        <div className="mb-20">
          <p className="text-gray-400 text-center mb-2">SERVICE</p>
          <h2 className="text-center">Our Vison & Our Goal</h2>
        </div>

        <div className="flex flex-col text-center space-y-8 md:space-y-0 md:flex-row md:space-x-10">
          {/* item 1 */}
          <div className="flex flex-col items-center p-4 py-10 rounded-xl space-y-10 shadow-2xl ">
            <AiFillMessage size="60" />
            <h4 className="text-4xl font-semibold">Graphic Design</h4>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus
              laoreet dolor nec imperdiet.
            </p>
            <button className="main-btn px-6 py-2">Learn more</button>
          </div>
          {/* item 2 */}
          <div className="flex flex-col items-center p-4 py-10 rounded-xl space-y-10 shadow-2xl">
            <IoVideocam size="60" />
            <h4 className="text-4xl font-semibold">Video Editing</h4>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus
              laoreet dolor nec imperdiet.
            </p>
            <button className="main-btn px-6 py-2">Learn more</button>
          </div>
          {/* item 3 */}
          <div className="flex flex-col items-center p-4 py-10 rounded-xl space-y-10 shadow-2xl">
            <MdOutlineGraphicEq size="60" />
            <h4 className="text-4xl font-semibold">Digital Marketing</h4>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus
              laoreet dolor nec imperdiet.
            </p>
            <button className="main-btn px-6 py-2">Learn more</button>
          </div>
        </div>

        {/* more video */}
        <div className="mt-40 flex items-center flex-col space-y-6 md:space-y-0 md:space-x-10 md:flex-row">
          <div className="flex flex-col space-y-10 w-full md:w-1/2">
            <p className="font-semibold text-2xl text-blue-400">
              Many Blocks and Components
            </p>
            <p className="md:max-w-sm">
              Startup Framework contains components and complex blocks which can
              easily be integrated into almost any design.
            </p>
            <div className="md:pt-20">
              <button className="text-blue-600 mx-auto  md:mx-0 font-semibold w-44 bg-white rounded-full px-6 py-2 border-2 border-gray-400 hover:text-white hover:bg-blue-600">
                Explore
              </button>
            </div>
          </div>
          <div>
            <img src="/explore_img.png" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
