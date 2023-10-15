import { db } from "./db.js";
import { collection, query, where, onSnapshot, collectionGroup } from "firebase/firestore";

const q = query(collectionGroup(db, "messages"));
const unsubscribe = onSnapshot(q, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
        console.log("Added: ", change.doc.data());
    }
    if (change.type === "modified") {
        console.log("Modified: ", change.doc.data());
    }
    if (change.type === "removed") {
        console.log("Removed: ", change.doc.data());
    }
  });
});

setTimeout(() => {
    unsubscribe();
}, 20000);