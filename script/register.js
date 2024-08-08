
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth, db, storage } from "./config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"; 
import { uploadBytes,getDownloadURL ,ref} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js"; 


let form = document.querySelector('#form')
let firstname =document.querySelector('#firstname')
let lastname =document.querySelector('#lastname')
let email =document.querySelector('#email')
let password =document.querySelector('#password')
let userimage =document.querySelector('#userimage')
// userimage







form.addEventListener('submit',async(event)=>{
  event.preventDefault()
  
  console.log(firstname.value);
  console.log(lastname.value);
  console.log(password.value);
  console.log(email.value);
  
  console.log(userimage);
  
  let userimageurl = await showUrl(userimage)



createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    let newuser = user
    console.log(user.uid);

    async function adddata() {
      
      try {
        const docRef = await addDoc(collection(db, "user"), {
          firstname: firstname.value,
          lastname: lastname.value,
          email: email.value,
          userimage: userimageurl,
          uid: user.uid
        });
        console.log("Document written with ID: ", docRef.id);
        window.location = 'login.html'
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    
    
    
    
    adddata()
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    
  });

  
  
})



async function showUrl(profile) {
  const files = profile.files[0]
  const storageRef =  ref(storage, email.value);


  try {
      const uplordimage = await uploadBytes(storageRef, files);
      const url = await getDownloadURL(storageRef);
      console.log(url);
      return url
    
  } catch (error) {
    console.log(error);
    
  }
    
}

// export newuser


// export let arr ={
//   firstname: firstname.value,
//   lastname: lastname.value,
//   email: email.value,
//   userimage: userimageurl,
// }
