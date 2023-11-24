import { initializeApp } from "firebase/app";

import firebaseConfig from "../firebaseConfig";
import { user } from "../types/info";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const SaveInfoin= async (info: user) => {

    try {
         await addDoc(collection(db, "user"), info);
        
      } catch (e) {
        console.error("Error adding document: ", e);
     
      }
}



export default { SaveInfoin }