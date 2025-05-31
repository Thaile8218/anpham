import clientPromise from "@/app/lib/mongdb";


export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('shopDB');
    const collection = db.collection('User');


    const data = await collection.find({}).toArray();


    return Response.json({ data });
  } catch (error) {
    console.log("RRR", error);
    
    return Response.json({ error: error});
  }
}
