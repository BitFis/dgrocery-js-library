// @flow

import GroceryDatabase from './dgrocery/grocerylist';

var value = new GroceryDatabase();

console.log(`GroceryList ${value.toString()}`);

export {
    GroceryDatabase,
};
