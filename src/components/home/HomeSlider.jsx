// "use client"

// import * as React from "react"
// import { Button } from "@/components/ui/button"

// interface SlideContent {
//   title: string
//   description: string
//   image: string
// }

// const slides: SlideContent[] = [
//   {
//     title: "Find your at-home service",
//     description: "We offer almost everything: cleaning, private classes, beauty...",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20427322201%20(1)-KvzX5VSdTpvJIMctFu9B6fFpKQSl88.png",
//   },
//     {
//     title: "Find your at-home service",
//     description: "We offer almost everything: cleaning, private classes, beauty...",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20427322201%20(1)-KvzX5VSdTpvJIMctFu9B6fFpKQSl88.png",
//   },
//   // Add more slides as needed
// ]

// export function OnboardingSlider() {
//   const [currentSlide, setCurrentSlide] = React.useState(0)

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length)
//   }

//   return (
//     <div className="relative min-h-screen bg-black text-white">
//       {/* Skip button */}
//       <button className="absolute right-4 top-4 text-teal-400">Skip</button>

//       {/* Main content */}
//       <div className="flex min-h-screen flex-col items-center justify-between p-6">
//         {/* Image */}
//         <div className="relative mt-12 flex-1">
//           <img
//             src={slides[currentSlide].image || "/placeholder.svg"}
//             alt="Onboarding illustration"
//             className="h-auto w-full max-w-md"
//           />
//         </div>

//         {/* Text content */}
//         <div className="w-full space-y-4 text-center">
//           <h1 className="text-2xl font-semibold text-white">{slides[currentSlide].title}</h1>
//           <p className="text-gray-400">{slides[currentSlide].description}</p>

//           {/* Navigation dots */}
//           <div className="flex justify-center gap-2 py-6">
//             {slides.map((_, index) => (
//               <div
//                 key={index}
//                 className={`h-2 w-2 rounded-full ${currentSlide === index ? "bg-teal-400" : "bg-gray-600"}`}
//               />
//             ))}
//           </div>

//           {/* Next button */}
//           <Button onClick={nextSlide} className="w-full bg-teal-400 py-6 text-black hover:bg-teal-500">
//             Next
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

