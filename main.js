/**main.js
 * this is your main test class.
 */
const Factory = require('./factory');
const ProductManager = require('./productManager');

//Instance your new class.
const prod = Factory.baseProduct.call({id: 0});
//Test
console.log(`I am a simple basic product with state: ${prod.stateToString()}`);


//Create complex product.
const complexProduct = Object.assign(
    Factory.baseProduct.call(
    { 
        id: "1",
        description: "s1"
    }),
    Factory.loyaltyMembershipProduct.call({})
);

//Create a 2nd, more complex product.
const complexProduct2 = Object.assign(
    Factory.baseProduct.call(
    { 
        id: "2",
        description: "a loyalty program aware product that can manage a single membership"
    }),
    Factory.loyaltyMembershipProduct.call({}),
    Factory.trackableProduct.call({})
    
);

const myProductManager = ProductManager.productManager.call({});
console.log(myProductManager.processProduct(complexProduct));
console.log(myProductManager.processProduct(complexProduct2));

//Create a specialization of loyaltyMembershipProduct with overrides.
const dualLoyaltyProduct = Object.assign(
    Factory.baseProduct.call(
    { 
        id: "3",
        description: "a loyalty program aware product that has been specialized to manage dual loyalty memberships"
    }),
    Factory.loyaltyMembershipProduct.call({}),
    Factory.dualLoyaltyMembershipProduct.call({}),
    Factory.trackableProduct.call({})
    
);

console.log(myProductManager.processProduct(dualLoyaltyProduct));