import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";

async function POST(request) {
  const body = await request.formData();
  const price = body.get("price");
  const quantity = 1;
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: price,
        quantity: quantity,
      },
    ],
    success_url: `${headers().get("origin")}/success`,
    cancel_url: `${headers().get("origin")}/canceled`,
    automatic_tax: { enabled: false },
  });
  return Response.redirect(checkoutSession.url);
}

export { POST };
