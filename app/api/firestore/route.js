import { getFirestore, collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db, auth } from '../../../src/firebase/firebase';

import { NextResponse } from "next/server";

const firestore = getFirestore(db);

export async function GET() {
    const snapshot = await getDocs(collection(firestore, "cartas"));

    const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
    }));

    return NextResponse.json(data);
}

export async function POST(req) {
    const { data } = await req.json();

    try {
        const docRef = doc(collection(firestore, "cartas"));
        const id = docRef.id;
        await setDoc(docRef, { ...data, id });

        return NextResponse.json({ id: id, ...data });
    } catch (error) {

        return NextResponse.json({ error: "Failed to add document " + error });
    }
}