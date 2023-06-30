## Create preference

It is possible to create Preferences using the SDK below. For details on request parameters, check the [Create preference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post) API.

----[mla, mlb, mlu, mpe, mlm]----

[[[
```node
// Mercado Pago SDK
const mercadopago = require ('mercadopago');

// Add Your credentials
mercadopago.configure({
  access_token: 'PROD_ACCESS_TOKEN'
});

// Create a preference object
let preference = {
  items: [
    {
      title: 'My Item',
      unit_price: 100,
      quantity: 1,
    }
  ]
};

mercadopago.preferences.create(preference)
.then(function(response){
// This value replaces the String "<%= global.id %>" in your HTML
  global.id = response.body.id;
}).catch(function(error){
  console.log(error);
});
```
]]]

------------

----[mlc, mco]----

[[[
```node
// Mercado Pago SDK
const mercadopago = require ('mercadopago');

// Add Your credentials
mercadopago.configure({
  access_token: 'PROD_ACCESS_TOKEN'
});

// Create a preference object
let preference = {
  items: [
    {
      title: 'My Item',
      unit_price: 100,
      quantity: 1,
    }
  ]
};

mercadopago.preferences.create(preference)
.then(function(response){
// This value replaces the String "<%= global.id %>" in your HTML
  global.id = response.body.id;
}).catch(function(error){
  console.log(error);
});
```
]]]

------------