import { collection, getDocs,addDoc, query, where } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { storage, db,auth, productnumber } from "./config.js";
import { uploadBytes,getDownloadURL ,ref} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js"; 
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";




const form = document.querySelector('#form')
const producttitle = document.querySelector('#producttitle')
const productdiscription = document.querySelector('#productdiscription')
const productdprice = document.querySelector('#productprice')
const ownername = document.querySelector('#ownername')
const ownernumber = document.querySelector('#ownernumber')



let image = document.querySelector('#userimage')
let arr = {}
// let productnumber = []


onAuthStateChanged(auth, (User) => {
  if (User) {
      // image.innerHTML =  ` <img alt="Tailwind CSS Navbar component" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
                
                
      // `
      const uid = User.uid;
      async function getdata() {
          const q = query(collection(db, "user"), where("uid", "==", User.uid));

          let querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
              arr = (doc.data())
              console.log(productnumber.length);

              productnumber.push(doc.data())
              console.log(User.length);



          });

          //   console.log(User.email);
          // console.l
      
              image.innerHTML = `

<img alt="Tailwind CSS Navbar component" src="${arr.userimage}" />


`
          

          

      }







      getdata()

      // ...
  } else {
alert('please login first then add a new product')
    window.location = "login.html"
  } 
});























 // JavaScript to handle the click event
 let productimage = document.getElementById('productimage')

 productimage.addEventListener('click', function() {
  document.getElementById('fileInput').click(); // Trigger the file input click
});

let file

// Optional: Handle file selection
let fileInput = document.getElementById('fileInput')
fileInput.addEventListener('change', function(event) {
   file = event.target.files[0];
  if (file) {
      // Display the selected image (optional)
      const reader = new FileReader();
      reader.onload = function(e) {
          document.querySelector('#productimage img').src = e.target.result;
      };
      reader.readAsDataURL(file);
      console.log(file);

      
    }
  });
  
  async function showUrl(file) {
    const storageRef =  ref(storage, ownername.value);
  
  
    try {
        const uplordimage = await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        console.log(url);
        return url
      
    } catch (error) {
      console.log(error);
      
    }
      
  }
// let allproducts = []


form.addEventListener('submit',async(event)=>{
    event.preventDefault()
    console.log(producttitle.value);
    console.log(productdiscription.value);
    console.log(productdprice.value);
    console.log(ownername.value);
    console.log(ownernumber.value);
    let userimageurl = await showUrl(file)

    async function adddata() {
        
        try {
          const docRef = await addDoc(collection(db, "userproducts"), {
            ownername: ownername.value,
            ownernumber: ownernumber.value,
            producttitle:producttitle.value,
            productdiscription: productdiscription.value,
            productdprice: productdprice.value,
            productdimage: userimageurl,
            userinfo:arr,
            itemnumber: productnumber.length 

            

          });
          console.log("Document written with ID: ", docRef.id);
        //   window.location = 'i.html'
        alert('your product add')
       
      
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
      
      
      
      
      adddata()

      ownername.value= ""
      ownernumber.value= ""
      producttitle.value=""
      productdiscription.value=""
      productdprice.value=""
      file = ""
      document.querySelector('#productimage img').src = '../add_photo_alternate_outlined.png';



})






// async function getdata() {
//     // const q = query(collection(db, "userproducts"), where("uid", "==", User.uid));

//     let querySnapshot = await getDocs(collection(db, "userproducts"));
//     querySnapshot.forEach((doc) => {
//         allproducts = (doc.data())
//         // console.log(doc.data());


//     });

//     console.log(allproducts);
    
    
    
//     // if (newarr.length == 0) {
      
//     //     newarr = [{userimage:"https://cdn-icons-png.flaticon.com/512/149/149071.png"}]
//     //     // return
//     // }else{newarr = newarr}
//     // console.log(newarr);
    
    
    
//   }


//   getdata()


