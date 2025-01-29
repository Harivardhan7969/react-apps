// import React from 'react'
// import card from '@/assets/images/shoesImages.jpg';
// import data from "shoes.json"
// import { RiStarSFill } from "react-icons/ri";
// function Shopcard() {
//   return (
//     <>
//       <div class=" flex justify-center h-56   tracking-tighter" style={{ backgroundImage: `url(${card})` }}>
//         <h1 class="mt-16 font-semibold text-white  text-6xl">SHOP</h1>
//       </div>

//       <div class="w-full md:w-3/4   ">
//         <div className='flex justify-around'>
//           <div class="flex justify-between items-center mb-4 mt-4 ">
//             <h2 class="text-lg font-medium text-gray-600 ">Showing 1-10 of 300 results</h2>

//             <div class="flex justify-end space-x-4">
//               <p class="pt-2 text-gray-500">Short By:</p>


//               <select class="border rounded-full p-2">
//                 <p>Short By:</p>
//                 <option>Default Sorting</option>
//                 <option>Price: Low to High</option>
//                 <option>Price: High to Low</option>
//               </select>

//               <div>
//                 <select class="w-20 border rounded-full p-2">
//                   <option>Size</option>
//                   <option>Price: Low to High</option>
//                   <option>Price: High to Low</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='flex justify-around px-24'>
//           <div class="grid  grid-rows-5 md:grid-cols-3 gap-4 ">

//             {data.map((i) => (

//               <div class="border p-4 rounded-3xl w-60 bg-[#f5f5f5] " >
//                 <div class="flex justify-between">
//                   <div class="bg-gray text-center w-9 h-6 rounded-full text-white"><p>20%</p></div>
//                   {/* <div><img class="w-8" [src]="imageUrl" (click)="changeImage()" ></div> */}
//                 </div>
//                 <div class="flex justify-center">
//                   <img src={i.img} alt="Zenith Zephyr Chair" class=" h-36 object-cover mb-4" />
//                 </div>
//                 <div class="bg-gray-dark text-white rounded-lg   ">
//                   {/* <img class="w-12 float-right" src="/assets/carticon.png " routerLink="/cart" > */}
//                   <h3 class="text-md font-robot font-medium mt-2 text-gray-700 ml-6">{i.title}</h3>
//                   <div className='flex justify-around'>
//                     <p class="text-black ">{i.rate} </p>
//                     <div className='flex space-x-2'>
//                       {/* <RiStarSFill /> */}
//                       <RiStarFill />
//                       <span class="  line-through text-gray-700">

//                         {i.rating}</span>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             ))}

//           </div>

//         </div>


//       </div>

//     </>
//   )
// }

// export default Shopcard