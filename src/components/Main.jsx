import React from 'react'
import img1 from "./images/main-rem.png"
import img2 from "./images/tips.png"
import img3 from "./images/schemes.png"
import img4 from "./images/title-rem.png"

export default function Main() {
  return (
    <>
    <div class="text-gray-200 bg-[#001f00]">
      <div class="flex justify-center py-8 ">
       <div class="pt-40 pr-60 text-left">
        <h1 class="text-4xl">One Stop Solution</h1>
        <p class="text-xl">For all health related queries </p>
       </div> 
        <img src={img4} alt="Doctor With Nurse"  class="h-100 pl-10"/>
      </div>  
    </div>
    <div class="bg-lime-50">
     <div class="flex justify-center py-4">
        <img src={img3} alt="Doctors" class="h-60 rounded-full px-10"/>
       <div class="px-20 text-left">
        <h1 class="text-3xl ">Healtcare Schemes </h1>
        <p class="py-8 ">Lorem ipsum is placeholder text commonly used in the graphic, 
        print, and publishing industries for previewing layouts and visual mockups.</p>
        <button class="bg-green-800 text-white rounded-full px-4 py-2 hover:bg-green-500 hover:text-gray-200">Know More</button>
       </div>   
     </div>
     <div class="flex justify-between py-4 px-10">
       <div class="px-20 text-left"> 
         <h1 class="text-3xl">Daily Tips</h1>
         <p class=" py-12">Lorem ipsum is placeholder text commonly used in the graphic, 
         print, and publishing industries for previewing layouts and visual mockups.</p>
         <button class="bg-green-800 text-white rounded-full px-5 py-2 hover:bg-green-500 hover:text-gray-200">Learn More</button>
       </div> 
        <img src={img2} alt="fruits with stethoscope" class="h-60 rounded-full"/>
     </div>
     <div class="flex justify-center py-4">
        <img src={img1} alt="Doctors" class="h-60 rounded px-10"/>
      <div class="px-20 text-left">
       <h1 class="text-3xl ">Connect with Our Experts</h1>
       <p class="py-8 ">Lorem ipsum is placeholder text commonly used in the graphic, 
        print, and publishing industries for previewing layouts and visual mockups.</p>
       <button class="bg-green-800 text-white rounded-full px-4 py-2 hover:bg-green-500 hover:text-gray-200">Connect</button>
      </div>   
     </div>
    </div>
    </>
  )
}
