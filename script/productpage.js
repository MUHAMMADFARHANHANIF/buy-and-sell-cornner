import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "./config.js";


onAuthStateChanged(auth, (User) => {
  if (User) {
      // image.innerHTML =  ` <img alt="Tailwind CSS Navbar component" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
                
                
      // `
      const uid = User.uid;
    
      // ...



let productarray = JSON.parse(localStorage.getItem('products'))

console.log(productarray);


let productshow = document.querySelector('#productshow')

productshow.innerHTML = `

<div class="w-[100%] h-[90vh] justify-center   content-center ">
       

        <form id="form">

        <div id="hero"  class="w-[90%] flex flex-wrap border-2 border-slate-500	 rounded-box mt-3 p-2 h-[110%] justify-center bg-[#FFF6F6]  m-auto items-center   text-center">
            
            
            <div class="text-left w-[80%]">
        
            <h1 class=" text-[2.5rem] m-4 mx-10  capitalize">${productarray[0].producttitle}</h1>
            </div>
            
            <!-- image div  -->
            <div  class="w-[80%] flex flex-wrap  h-[70vh] content-center p-1 border-2 border-slate-300	 rounded-2xl   m-auto   	" >
            <div class="   w-[30%]  content-center items-center    h-[100%]">
                
                <div class="carousel rounded-box w-[100%] h-full">
                    <div class="carousel-item w-full">
                      <img
                        src=${productarray[0].productdimage}
                        class="w-full"
                        alt="Tailwind CSS Carousel component" />
                    </div>
                    <div class="carousel-item w-full">
                      <img class="w-52"
                        src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                        class="w-full"
                        alt="Tailwind CSS Carousel component" />
                    </div>
                    <div class="carousel-item w-full">
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                        class="w-full"
                        alt="Tailwind CSS Carousel component" />
                    </div>
                    <div class="carousel-item w-full">
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                        class="w-full"
                        alt="Tailwind CSS Carousel component" />
                    </div>
                    <div class="carousel-item w-full">
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                        class="w-full"
                        alt="Tailwind CSS Carousel component" />
                    </div>
                    <div class="carousel-item w-full">
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                        class="w-full"
                        alt="Tailwind CSS Carousel component" />
                    </div>
                    <div class="carousel-item w-full">
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                        class="w-full"
                        alt="Tailwind CSS Carousel component" />
                    </div>
                  </div>
               
                <!-- <img  src="https://eezepc.com/wp-content/uploads/2023/10/Apple-15-Pro-Max-256GB-Blue-Titanium-price-in-pakistan-eezepc-1-1024x1024.jpg" alt=""> -->
            </div>
            
            <div class=" w-[70%] content-center m-uto  p-6   h-[100%]">
                
                <div class=" text-left flex flex-wrap justify-between  text-4xl">
                    <div>

                        <h1 >$${productarray[0].productdprice}</h1>
                    </div>
                    <div class="flex gap-2">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
                          </svg>
                          

                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                        </svg>
                        
                    </div>
                    <!-- <h1>80000</h1> -->
                </div>
                <div class=" text-left m-4 ">
                    <h1 class="text-2xl text-bold capitalize">${productarray[0].producttitle}</h1>
                    <p class="capitalize" >${productarray[0].productdiscription}</p>
                </div>

                <!-- <div class="bg-blue-900 text-white w-[100%] items-cen rounded-2xl  h-[40%]"> -->


                    
                <div class=" bg-[#4C68FF] mx-auto text-white p-4 rounded-lg shadow-md">

                    <div class="mt-4">
                        <div class="flex items-center  ">
                            <div class="w-12 h-12 rounded-full bg-blue-2 m-3">
                            <img class="rounded-full h-12 " alt="Tailwind CSS Navbar component" src=${productarray[0].userinfo.userimage} />

                            </div>
                            <div class="text-left " >
                                <p class="font-bold text-2xl capitalize">${productarray[0].userinfo.firstname}</p>
                                <p class="text-sm text-gray-100">+92${productarray[0].ownernumber}</p>
                            </div>
                        </div>
                        
                        <div class="flex mt-4 space-x-4">
                            <button class="bg-green-800 text-white px-4 py-2 rounded">Call Now</button>
                            <button class="bg-gray-300 text-gray-800 px-4 py-2 rounded">Chat</button>
                        </div>
                    </div>
                    <div class="mt-4 flex justify-between">
                        <p class="text-l text-gray-200">${productarray[0].userinfo.email}</p>
                        <button class="bg-black text-white px-4 py-2 rounded" id="addtocart">Add to Cart</button>
                    </div>


                </div>
            </div>






            </div>
<div class="flex w-[70vw] content-center m-auto">


    <section class="w-[40%] mx-auto bg-white mt-6 p-4 rounded-lg shadow-md">
        <h3 class="text-xl font-bold mb-4">Details</h3>
        <table class="w-full text-left text-gray-600">
            <tr>
                <th class="py-2">Is Deliverable</th>
                <td class="py-2">NO</td>
            </tr>
            <tr>
                <th class="py-2">Brand</th>
                <td class="py-2">Apple</td>
            </tr>
            <tr>
                <th class="py-2">Price</th>
                <td class="py-2">$${productarray[0].productdprice}</td>
            </tr>
            <tr>
                <th class="py-2">Condition</th>
                <td class="py-2">Used</td>
            </tr>
        </table>
    </section>
    
    <!-- Description Section -->
    <section class="w-[50%] mx-auto bg-white mt-6 p-4 rounded-lg shadow-md">
        <h3 class="text-xl font-bold mb-4">Discription</h3>
        <p class="text-gray-600 uppercase">${productarray[0].productdiscription}</p>
    </section>
<!-- </div> -->


</div>
        
  
    </div>

</form>
</div>


`


let addtocart =document.querySelector('#addtocart')
addtocart.addEventListener('click',()=>{
    alert('Your product has been deliverd')
})

} else {
    alert('Please login first then buy the products')
    window.location = 'login.html'
      
    
  }
});