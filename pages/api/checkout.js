import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";

export default async function handle(req, res) {
  if (req.method !== "POST") {
    res.json("Should be a post request");
    return;
  }
  const { firstName, lastName, phone, email, street, zip, cartProducts } =
    req.body;

  await mongooseConnect();

  const productsId = cartProducts;
  const uniqueIds = [...new Set(productsId)];
  const productsInfo = await Product.find({ _id: uniqueIds });

  let line_items = [];
  for (const productId of uniqueIds) {
    const productInfo = productsInfo.find(
      (p) => p._id.toString() === productId,
    );
    const quantity = productsId.filter((id) => id === productId)?.length || 0;
    if (quantity > 0) {
      line_items.push({
        quantity,
        price_data: {
          currency: "USD",
          product_data: { name: productInfo.name },
          unit_amount: quantity * productInfo.price * 100,
        },
      });
    }
  }

  const orderDoc = await Order.create({
    line_items,
    firstName,
    lastName,
    phone,
    email,
    street,
    zip,
    paid: false,
  });
}

export const config = {
  api: {
    externalResolver: true,
  },
};
