import {  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { auth, db } from "./config.js";




// let Logout = document.querySelector('#logout')
// let image = document.querySelector('#userimage')
// let loginAvater = document.querySelector('#loginAvater')

// let arr = {}


//  async function alluser(params) {

//     onAuthStateChanged(auth, (User) => {
//         if (User) {
//             // image.innerHTML =  ` <img alt="Tailwind CSS Navbar component" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
                      
                      
//             // `
//             const uid = User.uid;
//             async function getdata() {
//                 const q = query(collection(db, "user"), where("uid", "==", User.uid));

//                 let querySnapshot = await getDocs(q);
//                 querySnapshot.forEach((doc) => {
//                     arr = (doc.data())
//                     // console.log(arr);


//                 });

//                 //   console.log(User.email);
//                 console.log(arr);



                
//                 // if (newarr.length == 0) {

//                 //     newarr = [{userimage:"https://cdn-icons-png.flaticon.com/512/149/149071.png"}]
//                 //     // return
//                 // }else{newarr = newarr}
//                 // console.log(newarr);

            
//                     image.innerHTML = `
    
//     <img alt="Tailwind CSS Navbar component" src="${arr.userimage}" />
    
    
//     `
                

//                 username.innerHTML = `
//                       <h5>${arr.firstname}</h5>
                      
//                       `

//             }





// Logout.addEventListener('click', async () => {

//                     signOut(auth).then(() => {
                       
//                         alert('logout succses')
//                     }).catch((error) => {
//                         console.log(error);
            
                       
//                     });
//                 })


//             getdata()













//             // ...
//         } else {
//             loginAvater.innerHTML = `

//  <a href="login.html"><button class="btn btn-primary">Login   </button></a>

// `
          
//         }
//     });




   




// }
// alluser()

// `
// <div class="form-control">
//             <input type="text" placeholder="Search" class="input input-bordered md:w-auto" />
//           </div>

//           <div class="dropdown dropdown-end">
//             <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
//               <div class="w-10 rounded-full">
//                 <img
//                   alt="Tailwind CSS Navbar component"
//                   src="https://firebasestorage.googleapis.com/v0/b/buy-and-sells-corner.appspot.com/o/farhansmitiij%40gmail.com?alt=media&token=06373e97-3719-4695-a769-46f3ee071387" />
//               </div>
//             </div>
//             <ul
//               tabindex="0"
//               class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//               <li>
//                 <a class="justify-between">
//                   Profile
//                   <span class="badge">New</span>
//                 </a>
//               </li>
//               <li><a href="login.html">Settings</a></li>
//               <li><a href="rigister.html">Logout</a></li>
//             </ul>
//           </div>

// `

















let productscards = document.querySelector('#productscards')



let allproducts = []    
async function getdata() {
    // const q = query(collection(db, "userproducts"), where("uid", "==", User.uid));

    let querySnapshot = await getDocs(collection(db, "userproducts"));
    querySnapshot.forEach((doc) => {
        allproducts.push(doc.data()) 
        // console.log(doc.data());

        // console.log(allproducts);
        
        
    });
    renderproducts(allproducts)
    
    
    // console.log(allproducts);
    
    
    
    // if (newarr.length == 0) {
      
    //     newarr = [{userimage:"https://cdn-icons-png.flaticon.com/512/149/149071.png"}]
    //     // return
    // }else{newarr = newarr}
    // console.log(newarr);
   
    
    
  }


  getdata()
  console.log(allproducts);

// productscards.inn
async function renderproducts(arr) {
    console.log(arr);
    
    await arr.forEach((element)=>{
        productscards.innerHTML += `
        <div class="card bg-base-100 w-80 shadow-xl">
        <figure>
          <img class="w-full h-52" src="${element.productdimage}" alt="Shoes" >

        </figure>
        <div class="card-body">
        <h2 class="card-title">
        ${element.producttitle}
        <div class="badge badge-secondary">${element.ownername}</div>
        </h2>
        <p>${element.productdiscription}</p>
        <h2 class="card-title">Phone:${element.ownernumber}</h2>
        <div class="card-actions justify-end p-2 gap-3 items-center">
        <h2 class="card-title text-xl">$${element.productdprice}</h2>
        <button class="btn btn-primary">Buy Now</button>
        </div>
        </div>
        </div>
        `
    })
    
    
}

