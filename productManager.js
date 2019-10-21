const productManager = (function(){


    return Object.assign(this, {
        processProduct: function(product){
            let s = "\n\nI am a product.";            
            s+="\n"+product.stateToString();

            if(product.processTracking){
                s+="\n" + product.processTracking();
            }

            if(product.processLoyaltyMembership){
                s+="\n" + product.processLoyaltyMembership();
                s+="\nMy loyalty memberships count is: " + product.overridableMembershipsCount();
            }

            return s;
        }
    })
})

module.exports = {
    productManager
}