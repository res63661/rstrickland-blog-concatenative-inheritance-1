const Factory = require('./factory');
const ProductManager = require('./productManager');

//Test
//const prod = baseProduct.call({});
const prod = Factory.Factory.newBaseProduct({});

//Set variables.
prod.setId("0696d335-778b-46ad-947c-0f479e5c88aa");
console.log(`My base object id: ${prod.getId()}`);
console.log(`Can I access private vars directly?: ${prod._id?prod._id:"No I cannot."}`);



//Create next specialization
const productV1 = Factory.Factory.newProductV1(prod);
//Test productV1
console.log(`ProductV1.doSomething() returns: ${productV1.doSomething()}`);


//Create complex product.
const complexProduct = Object.assign(
    Factory.Factory.newBaseProduct(
    { 
        id: "1",
        description: "s1"
    }),
    Factory.loyaltyMembershipProduct.call({})
);

//Create a 2nd, more complex product.
const complexProduct2 = Object.assign(
    Factory.Factory.newBaseProduct(
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
    Factory.Factory.newBaseProduct(
    { 
        id: "3",
        description: "a loyalty program aware product that has been specialized to manage dual loyalty memberships"
    }),
    Factory.loyaltyMembershipProduct.call({}),
    Factory.dualLoyaltyMembershipProduct.call({}),
    Factory.trackableProduct.call({})
    
);

console.log(myProductManager.processProduct(dualLoyaltyProduct));