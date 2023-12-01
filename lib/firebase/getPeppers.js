import { db } from "@/lib/firebase/firebaseConfig"

export async function getPeppers() {
    const dbRef = db.ref('/pepperData')
    const dataSnapshot = await dbRef.once('value')
    return dataSnapshot.val()
}