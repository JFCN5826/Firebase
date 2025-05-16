import { getFirestore, collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from '../../../firebase/firebase';
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const snapshot = await getDocs(collection(db, "cartas"));
        const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
        }));
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch documents: " + error.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const { data } = await req.json();
        const docRef = doc(collection(db, "cartas"));
        const id = docRef.id;
        await setDoc(docRef, { ...data, id });
        return NextResponse.json({ id: id, ...data });
    } catch (error) {
        return NextResponse.json({ error: "Failed to add document: " + error.message }, { status: 500 });
    }
}