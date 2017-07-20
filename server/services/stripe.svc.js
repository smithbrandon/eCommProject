var stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.charge = function(token, amt){
    return stripe.charges.create({
        amount: amt*100,
        currency: 'usd',
        source: token,
        description: 'Covalence Student Shop Purchase'
    })
}