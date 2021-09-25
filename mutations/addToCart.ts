/* eslint-disable */

import { KeystoneContext } from '@keystone-next/types';
import { CartItemCreateInput } from '../.keystone/schema-types';
import { Session } from '../types';

async function addToCart(
  root: any,
  { productId }: { productId: string },
  context: KeystoneContext
): Promise<CartItemCreateInput> {
  console.log('adding to cart');
  // 1. query the current user to see if theyre signed in
  const sesh = context.session as Session;
  if (!sesh.itemId) {
    throw new Error('you must be logged in to do this!');
  }
  // 2. query the current users cart
  const allCartItems = await context.lists.CartItem.findMany({
    where: { user: { id: sesh.itemId }, product: { id: productId } },
    resolveFields: 'id, quantity',
  });

  const [existingCartItem] = allCartItems;
  console.log('🍕');

  if (existingCartItem) {
    console.log(existingCartItem);

    console.log(
      `There are already ${existingCartItem.quantity} in the cart, increment by 1`
    );
    // 3. see if the current item is in their cart
    // 4. if it is increment by 1
    return await context.lists.CartItem.updateOne({
      id: existingCartItem.id,
      data: { quantity: existingCartItem.quantity + 1 },
      resolveFields: false,
    });
  }
  // 5. if it isnt then create a new cart item
  return await context.lists.CartItem.createOne({
    data: {
      product: { connect: { id: productId } },
      user: { connect: { id: sesh.itemId } },
    },
  });
}

export default addToCart;
