/* eslint-disable */

import { KeystoneContext } from "@keystone-next/types";
import { CartItemCreateInput } from "../.keystone/schema-types";
import { Session } from "../types";

const graphql = String.raw;

interface Arguments {
  token: string;
}

async function checkout(
  root: any,
  { token }: Arguments,
  context: KeystoneContext
): Promise<OrderCreateInput> {
  // 1. make sure theyre signed in
  const userId = context.session.itemId;
  if (!userId) {
    throw new Error("Sorry! you must be signed in to create an order!");
  }
  // 1.5. query the current user
  const user = await context.lists.User.findOne({
    where: { id: userId },
    resolveFields: graphql`
        name
        id
        email
        cart{
            id
            quantity
            product{
                name
                price
                description
                id
                photo{
                    id
                    image{
                        id
                        publicUrlTransformed
                    }
                }
            }
        }
    `,
  });
  console.log("🤶");

  console.dir(user, { depth: null });

  // 2. calculate total price for their order
  const cartItems = user.cart.filter((cartItem) => cartItem.product);
  const amount = cartItems.reduce(function (
    tally: number,
    cartItem: CartItemCreateInput
  ) {
    return tally + cartItem.quantity * cartItem.product.price;
  },
  0);
  console.log(amount);

  // 3. create the charge with the stripe library
  const charge = await stripeConfig.paymentIntents
    .create({
      amount,
      currency: "USD",
      confirm: true,
      payment_method: token,
    })
    .catch((err) => {
      console.log(err);
      throw new Error(err.message);
    });
  console.log(charge);

  // 4. convert the cartItems to orderItems
  // 5. create the order and return it
}

export default checkout;
