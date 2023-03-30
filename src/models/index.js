// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CartItem, Cart, Category, Product } = initSchema(schema);

export {
  CartItem,
  Cart,
  Category,
  Product
};