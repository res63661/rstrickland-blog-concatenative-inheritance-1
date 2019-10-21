/**factory.js
 * A simple module to contain our base classes and a few specializations.
 */
const baseProduct = function baseProduct() {

    return Object.assign(this, {
        stateToString: function(){
            return JSON.stringify({
                id: this.id,
                description: this.description
            }, null, 4);
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

const trackableProduct = function(){
    return Object.assign(this, {
        processTracking: function(){
            return "I can process tracking of shipments.";
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


module.exports = {
    baseProduct,
    trackableProduct,
    loyaltyMembershipProduct,
    dualLoyaltyMembershipProduct
}