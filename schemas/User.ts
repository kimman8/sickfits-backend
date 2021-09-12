import { list } from '@keystone-next/keystone/schema';
import { text, password, relationship } from '@keystone-next/fields';

// this is a named export, we using it to make the imports a bit nicer
export const User = list({
  // access: {}
  // ui
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    // TODO: Add roles, cart and orders
  },
});
