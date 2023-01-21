import React from "react";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineDribbble,
} from "react-icons/ai";

function Team() {
  return (
    <section id="team">
      <div className="section-container my-40">
        <div>
          <p className="text-gray-400 text-center mb-2">OUR TEAM</p>
          <h2 className="text-center">Meet The Team</h2>
        </div>

        <div className="flex flex-col justify-between items-center  md:my-20 space-y-6 md:space-y-0 md:flex-row md:space-x-10 md:max-w-5xl md:mx-auto">
          {/* person 1 */}
          <div className="">
            <div className="border-2 border-gray-200 items-center space-y-4 flex flex-col rounded-t-xl  px-20 py-10">
              <img
                src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000"
                className="object-cover w-20 h-20 rounded-full"
              />
              <p className="font-semibold">Vanessa Laird</p>
              <p className="text-gray-400 text-center">UI Designer</p>
            </div>
            <div className="flex justify-between p-2 border-2 border-gray-200 rounded-b-xl">
              <div className="border-r-2 px-4">
                <AiOutlineTwitter size="36" color="gray" />
              </div>
              <div className="border-r-2 px-4">
                <AiFillFacebook size="36" color="gray" />
              </div>
              <div className=" px-4">
                <AiOutlineDribbble size="36" color="gray" />
              </div>
            </div>
          </div>
          {/* person 2 */}
          <div className="">
            <div className="border-2 border-gray-200 items-center space-y-4 flex flex-col rounded-t-xl  px-20 py-10">
              <img
                src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000"
                className="object-cover w-20 h-20 rounded-full"
              />
              <p className="font-semibold">Vanessa Laird</p>
              <p className="text-gray-400 text-center">UI Designer</p>
            </div>
            <div className="flex justify-between p-2 border-2 border-gray-200 rounded-b-xl">
              <div className="border-r-2 px-4">
                <AiOutlineTwitter size="36" color="gray" />
              </div>
              <div className="border-r-2 px-4">
                <AiFillFacebook size="36" color="gray" />
              </div>
              <div className=" px-4">
                <AiOutlineDribbble size="36" color="gray" />
              </div>
            </div>
          </div>
          {/* person 3 */}
          <div className="">
            <div className="border-2 border-gray-200 items-center space-y-4 flex flex-col rounded-t-xl  px-20 py-10">
              <img
                src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000"
                className="object-cover w-20 h-20 rounded-full"
              />
              <p className="font-semibold">Vanessa Laird</p>
              <p className="text-gray-400 text-center">UI Designer</p>
            </div>
            <div className="flex justify-between p-2 border-2 border-gray-200 rounded-b-xl">
              <div className="border-r-2 px-4">
                <AiOutlineTwitter size="36" color="gray" />
              </div>
              <div className="border-r-2 px-4">
                <AiFillFacebook size="36" color="gray" />
              </div>
              <div className=" px-4">
                <AiOutlineDribbble size="36" color="gray" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
