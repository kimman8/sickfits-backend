import { list } from "@keystone-next/keystone/schema";
import { text, password, relationship } from "@keystone-next/fields";

// this is a named export, we using it to make the imports a bit nicer
export const User = list({
  // access: {}
  // ui
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    cart: relationship({
      ref: "CartItem.user",
      many: true,
      ui: {
        createView: { fieldMode: "hidden" },
        itemView: { fieldMode: "read" },
      },
    }),
<<<<<<< HEAD
    orders: relationship({ ref: "Order.user", many: true }),
=======
    orders: relationship({ ref: 'Order.user', many: true }),
>>>>>>> 174ad752374eaafa0d3858c41c3a9d1cc18ddf1b
  },
});
