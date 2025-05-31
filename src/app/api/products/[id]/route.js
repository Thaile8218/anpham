import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongdb";

export async function GET(request, { params }) {
  const { id } = params;
console.log("RRR", id);
  try {
    const client = await clientPromise;
    const db = client.db('shopDB');
    const collection = db.collection('product');

    const product = await collection.findOne({ _id: new ObjectId(id) });

    if (!product) {
      return Response.json({ error: 'Product not found' }, { status: 404 });
    }

    return Response.json({ product });

  } catch (error) {
    console.error(error);
    return Response.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
