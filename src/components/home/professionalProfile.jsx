// import {
//   AiFillStar,
//   AiOutlineStar,
//   AiOutlineMessage,
//   AiOutlineCheckCircle,
// } from "react-icons/ai";
// import { BsClock } from "react-icons/bs";

// export default function ProfessionalProfile() {
//   const ratingCategories = [
//     { name: "Service", score: 5.0 },
//     { name: "Punctuality", score: 4.8 },
//     { name: "Kindness", score: 5.0 },
//     { name: "Value for money", score: 4.9 },
//     { name: "Professionalism", score: 5.0 },
//   ];

//   return (
//     <div className="max-w-2xl mx-auto p-6 space-y-8">
//       {/* Profile Header */}
//       <div className="flex items-center space-x-4">
//         <img
//           src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20427322161-Nu156b181EgKw0WNZKE3UZNC7OL143.png"
//           alt="Caregiver profile"
//           className="w-24 h-24 rounded-full object-cover"
//         />
//         <div>
//           <h2 className="text-xl font-semibold">Elderly care</h2>
//           <div className="flex space-x-4 mt-2">
//             <div className="flex items-center space-x-1">
//               <AiOutlineMessage className="text-teal-500 w-5 h-5" />
//               <span className="text-sm text-gray-600">Quick replies</span>
//             </div>
//             <div className="flex items-center space-x-1">
//               <AiFillStar className="text-yellow-400 w-5 h-5" />
//               <span className="text-sm text-gray-600">Favorite</span>
//             </div>
//             <div className="flex items-center space-x-1">
//               <span className="text-sm text-gray-600">2</span>
//               <span className="text-sm text-gray-600">Service</span>
//             </div>
//             <div className="flex items-center space-x-1">
//               <AiOutlineCheckCircle className="text-blue-500 w-5 h-5" />
//               <span className="text-sm text-gray-600">Verified</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Questions Section */}
//       <div className="space-y-6">
//         <h3 className="text-lg font-semibold text-blue-600">
//           Some questions about me
//         </h3>

//         <div className="space-y-4">
//           <div>
//             <h4 className="text-blue-600">
//               How much experience do you have as a carer of the elderly?
//             </h4>
//             <p className="mt-1 text-gray-600">5-10 years experience</p>
//           </div>

//           <div>
//             <h4 className="text-blue-600">
//               Do you have a qualification, diploma or degree as a health worker?
//             </h4>
//             <p className="mt-1 text-gray-600">Yes</p>
//           </div>
//         </div>
//       </div>

//       {/* About Section */}
//       <div>
//         <h3 className="text-lg font-semibold mb-2">About me</h3>
//         <p className="text-gray-600">
//           Welcome to my bio! I am a highly trained professional with a passion
//           for excellence and a commitment to providing top-notch care. With my
//           experience, I specialize in delivering superior service.
//         </p>
//         <button className="text-blue-600 mt-2">View more</button>
//       </div>

//       {/* Gallery */}
//       <div>
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-lg font-semibold">Gallery</h3>
//           <button className="text-blue-600">View gallery</button>
//         </div>
//         <div className="grid grid-cols-3 gap-4">
//           <img
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20427322161-Nu156b181EgKw0WNZKE3UZNC7OL143.png"
//             alt="Care service"
//             className="w-full h-32 object-cover rounded-lg"
//           />
//         </div>
//       </div>

//       {/* Ratings */}
//       <div>
//         <div className="flex items-center space-x-2 mb-6">
//           <span className="text-4xl font-bold">5.0</span>
//           <AiFillStar className="w-8 h-8 text-yellow-400" />
//           <span className="text-gray-500">(3 ratings)</span>
//         </div>

//         <div className="space-y-4">
//           {ratingCategories.map((category) => (
//             <div
//               key={category.name}
//               className="flex items-center justify-between"
//             >
//               <span className="text-gray-600">{category.name}</span>
//               <div className="flex items-center">
//                 <div className="w-48 h-2 bg-orange-200 rounded-full mr-2">
//                   <div
//                     className="h-full bg-orange-500 rounded-full"
//                     style={{ width: `${(category.score / 5) * 100}%` }}
//                   />
//                 </div>
//                 <span className="text-gray-600">{category.score}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Comments */}
//       <div>
//         <h3 className="text-lg font-semibold mb-4">Comments</h3>
//         <div className="flex items-center space-x-4">
//           <img
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20427322161-Nu156b181EgKw0WNZKE3UZNC7OL143.png"
//             alt="Commenter"
//             className="w-12 h-12 rounded-full"
//           />
//           <div>
//             <div className="flex items-center space-x-2">
//               <BsClock className="text-gray-400" />
//               <span className="text-gray-500">6 Hours Ago</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <AiOutlineCheckCircle className="text-blue-500" />
//               <span className="text-gray-500">Verified service</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Price and Availability */}
//       <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t flex justify-between items-center">
//         <div className="text-2xl font-bold">$10/h</div>
//         <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors">
//           View availability
//         </button>
//       </div>
//     </div>
//   );
// }

import {
  AiFillStar,
  AiOutlineMessage,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import CustomComponent from "../../../pages/shared/CustomComponent";
import { Divider } from "antd";

export default function ProfessionalProfile() {
  return (
    <CustomComponent>
      <div className="max-w-[738px] mx-auto">
        <div className="my-20">aaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
        <div className="flex flex-row justify-center items-center">
          <div className="max-w-md mx-auto p-4 space-y-6">
            {/* Profile Header */}
            <div className="flex flex-col items-center space-y-3">
              <img
                src="https://avatar.iran.liara.run/public/38"
                alt="Professional caregiver"
                className="w-24 h-24 rounded-full object-cover"
              />
              <h2 className="text-lg font-medium text-gray-800">NB Sujon</h2>
              <p className="text-md font-medium text-[#6A6D76]">Elderly care</p>
            </div>

            {/* Stats Bar */}
            <div className="rounded-full p-5">
              <div className="flex justify-around items-center p-5 rounded-lg border border-[#6A6D76]">
                <div>
                  <img
                    src="/ProfessionalProfile/a.png"
                    alt="Professional caregiver"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <Divider
                  variant="solid"
                  style={{ borderColor: "#6A6D76", height: "50px" }}
                  type="vertical"
                />

                <div className="flex flex-col  items-center space-x-2 ">
                  <div className="flex items-center">
                    5<AiFillStar className="text-yellow-400 w-6 h-6" />
                  </div>
                  <div className="text-gray-800 text-sm">1 reviews</div>
                </div>
                <Divider
                  variant="solid"
                  style={{ borderColor: "#6A6D76", height: "50px" }}
                  type="vertical"
                />
                <div className="flex flex-col items-center space-x-2 ">
                  <span className="text-gray-800">2</span>
                  <span className="text-gray-800 text-sm">Service</span>
                </div>
                <Divider
                  variant="solid"
                  style={{ borderColor: "#6A6D76", height: "50px" }}
                  type="vertical"
                />
                <div className="">
                  <img
                    src="/ProfessionalProfile/b.png"
                    alt="Professional caregiver"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="space-y-2">
              <h3 className="text-[#1C3E64] text-xl font-medium">About me</h3>
              <p className="text-gray-600 text-sm">
                Welcome to my bio! I am a highly trained professional with a
                passion for excellence and a commitment to providing top-notch
                care. With my experience, I specialize in delivering superior
                service.
              </p>
              <button className="text-[#0D0D0D] text-sm hover:underline">
                +View more
              </button>
            </div>

            {/* Gallery Section */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-[#1C3E64] text-xl font-medium">Gallery</h3>
                <button className="text-[#0D0D0D] text-sm hover:underline">
                  View gallery
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <img
                  src="/about.png"
                  alt="Care service example"
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>
            </div>
            <Divider
              variant="solid"
              style={{ borderColor: "#6A6D76" }}
              type="horizontal"
            />
            {/* Price and Availability */}
            <div className="p-5 flex justify-between items-center">
              <span className="text-[#1C3E64] text-2xl font-bold">$10/h</span>
              <button className="bg-teal-500 text-white px-6 py-2 rounded-lg">
                View availability
              </button>
            </div>
          </div>
          <div className="max-w-md mx-auto p-4 space-y-6">
            {/* Profile Header */}
            <div className="flex flex-col items-center space-y-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20427322159-MKiDAkLGQSgeZiCIdkw22ELAR8h0BU.png"
                alt="Professional caregiver"
                className="w-24 h-24 rounded-full object-cover"
              />
              <h2 className="text-lg font-medium text-gray-800">
                Elderly care
              </h2>
            </div>

            {/* Stats Bar */}
            <div className="bg-black rounded-full p-3">
              <div className="flex justify-between items-center px-4">
                <div className="flex items-center space-x-2">
                  <AiOutlineMessage className="text-teal-400 w-6 h-6" />
                  <span className="text-white text-sm">Quick replies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AiFillStar className="text-yellow-400 w-6 h-6" />
                  <span className="text-white text-sm">Favorite</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-white text-sm">2</span>
                  <span className="text-white text-sm">Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AiOutlineCheckCircle className="text-blue-400 w-6 h-6" />
                  <span className="text-white text-sm">Verified</span>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="space-y-2">
              <h3 className="text-blue-600 text-lg font-medium">About me</h3>
              <p className="text-gray-600 text-sm">
                Welcome to my bio! I am a highly trained professional with a
                passion for excellence and a commitment to providing top-notch
                care. With my experience, I specialize in delivering superior
                service.
              </p>
              <button className="text-blue-600 text-sm hover:underline">
                View more
              </button>
            </div>

            {/* Gallery Section */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-blue-600 text-lg font-medium">Gallery</h3>
                <button className="text-blue-600 text-sm hover:underline">
                  View gallery
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20427322159-MKiDAkLGQSgeZiCIdkw22ELAR8h0BU.png"
                  alt="Care service example"
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Price and Availability */}
            <div className="bg-white p-4 border-t flex justify-between items-center">
              <span className="text-2xl font-bold">$10/h</span>
              <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors">
                View availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </CustomComponent>
  );
}
