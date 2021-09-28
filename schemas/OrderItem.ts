<<<<<<< HEAD
import { integer, relationship, select, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
=======
import { integer, relationship, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
>>>>>>> 174ad752374eaafa0d3858c41c3a9d1cc18ddf1b

export const OrderItem = list({
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
<<<<<<< HEAD
        displayMode: "textarea",
      },
    }),
    photo: relationship({
      ref: "ProductImage",
      ui: {
        displayMode: "cards",
        cardFields: ["image", "altText"],
        inlineCreate: { fields: ["image", "altText"] },
        inlineEdit: { fields: ["image", "altText"] },
=======
        displayMode: 'textarea',
      },
    }),
    photo: relationship({
      ref: 'ProductImage',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
>>>>>>> 174ad752374eaafa0d3858c41c3a9d1cc18ddf1b
      },
    }),
    price: integer(),
    quantity: integer(),
<<<<<<< HEAD
    order: relationship({ ref: "Order.items" }),
=======
    order: relationship({ ref: 'Order.items' }),
>>>>>>> 174ad752374eaafa0d3858c41c3a9d1cc18ddf1b
  },
});
