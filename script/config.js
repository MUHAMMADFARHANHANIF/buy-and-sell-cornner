import { initializeApp,getApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth,onAuthStateChanged, signOut, } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore,collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";






  const firebaseConfig = {
    apiKey: "AIzaSyDomDtUphESxHqUetVDDULW9LEkCoOvS4Q",
    authDomain: "buy-and-sells-corner.firebaseapp.com",
    projectId: "buy-and-sells-corner",
    storageBucket: "buy-and-sells-corner.appspot.com",
    messagingSenderId: "1085549781419",
    appId: "1:1085549781419:web:7496b3b3e1b554fe6672ee",
    measurementId: "G-0RJ0Q85RBQ"
  };



  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
export const db = getFirestore(app);
 const firebaseApp = getApp();

export const storage = getStorage(firebaseApp, "gs://buy-and-sells-corner.appspot.com");

export let productnumber = []










// check status \\\


export 
let image = document.querySelector('#userimage')
let loginAvater = document.querySelector('#loginAvater')

 let arr = {}


  async function alluser(params) {

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
                    // console.log(arr);


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
            loginAvater.innerHTML = `

 <a href="login.html"><button class="btn btn-primary rounded-full text-xl">Login</button></a>

`
          
        }
    });



}
alluser()



