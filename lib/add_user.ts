import { collection, addDoc } from "firebase/firestore";
import { db } from "./store";

// const addUser = async (username: string, password: string) => {
//   try {
//     const userRef = await addDoc(collection(db, "users"), {
//       username,
//       password,
//     });
//     console.log("User registered with ID: ", userRef.id);
//   } catch (e) {
//     console.error("Error:", e);
//   }
// };
