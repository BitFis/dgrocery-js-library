//@flow

import GroceryList from "./grocerylist";

describe("GroceryList", () => {

    it("#constructor", () => {
        const groceryList = new GroceryList();
        expect(groceryList).not.toBeUndefined();
        expect(groceryList).toMatchObject({});
    });

});
