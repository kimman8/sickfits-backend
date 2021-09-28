import {
  integer,
  relationship,
  select,
  text,
  virtual,
<<<<<<< HEAD
} from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import formatMoney from "../lib/formatMoney";
=======
} from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import formatMoney from '../lib/formatMoney';
>>>>>>> 174ad752374eaafa0d3858c41c3a9d1cc18ddf1b

export const Order = list({
  fields: {
    label: virtual({
<<<<<<< HEAD
      graphQLReturnType: "String",
=======
      graphQLReturnType: 'String',
>>>>>>> 174ad752374eaafa0d3858c41c3a9d1cc18ddf1b
      resolver(item) {
        return `KIM IS COOL ${formatMoney(item.total)}`;
      },
    }),
    total: integer(),
<<<<<<< HEAD
    items: relationship({ ref: "OrderItem.order", many: true }),
    user: relationship({ ref: "User.orders" }),
=======
    items: relationship({ ref: 'OrderItem.order', many: true }),
    user: relationship({ ref: 'User.orders' }),
>>>>>>> 174ad752374eaafa0d3858c41c3a9d1cc18ddf1b
    charge: text(),
  },
});
