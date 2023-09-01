## Criar preferência

É possível criar uma preferência utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar preferência](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/preferences/_checkout_preferences/post).

----[mla, mlb, mlu, mpe, mlm]----

[[[
```node
// SDK do Mercado Pago
const mercadopago = require ('mercadopago');

// Configure as credenciais
mercadopago.configure({
  access_token: 'PROD_ACCESS_TOKEN'
});

// Crie um objeto de preferência
let preference = {
  items: [
    {
      title: 'Meu produto',
      unit_price: 100,
      quantity: 1,
    }
  ]
};

mercadopago.preferences.create(preference)
.then(function(response){
// Este valor substituirá a string "<%= global.id %>" no seu HTML
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
// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

// Configure as credenciais
mercadopago.configure({
  access_token: 'PROD_ACCESS_TOKEN'
});

// Crie um objeto de preferência
let preference = {
  items: [
    {
      title: 'Meu produto',
      unit_price: 100,
      quantity: 1,
    }
  ]
};

mercadopago.preferences.create(preference)
.then(function(response){
// Este valor substituirá a string "<%= global.id %>" no seu HTML
  global.id = response.body.id;
}).catch(function(error){
  console.log(error);
});
```
]]]

------------