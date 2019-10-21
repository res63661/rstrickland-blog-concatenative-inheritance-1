const myBaseProduct = function baseProduct() {
    let _name, _id;

    return Object.assign(this, {
        getName:function() { return _name; }
        , setName:function(name) { _name = name; }

        , getId:function() { return _id; }
        , setId:function(id) { _id = id; }
        , stateToString: function(){
            return JSON.stringify({
                id: this.id,
                description: this.description
            }, null, 4);
        }

    })
}


//Now let's extend baseProduct to 
const productV1 = function () {
    return Object.assign(this, {
        doSomething: function () {
            return `ProductV1.doSomething(): I am an extension of baseProduct.`;
        }
    });
}

const trackableProduct = function(){
    return Object.assign(this, {
        processTracking: function(){
            return "I can process tracking of shipments.";
        }
    })
}

const loyaltyMembershipProduct = function(){
    this.servicesDescription = "I can process Loyalty Memberships";

    return Object.assign(this, {        
        processLoyaltyMembership: function(){
            return this.servicesDescription;
        }

        ,overridableMembershipsCount: function(){
            return 1;
        }
    })
}

const dualLoyaltyMembershipProduct = function(){
    this.servicesDescription = "I can process dual Loyalty Memberships";

    return Object.assign(this, {
        overridableMembershipsCount: function(){
            return 3;
        }
    })
}

const theFactory = (function factory() {
    return Object.assign(this, {
        newBaseProduct(toCompose) {
            return myBaseProduct.call(toCompose);
        }
        , newProductV1(base) {
            return productV1.call(base);
        }
    })
}).call({})


module.exports = {
    Factory: theFactory,
    trackableProduct,
    loyaltyMembershipProduct,
    dualLoyaltyMembershipProduct
}