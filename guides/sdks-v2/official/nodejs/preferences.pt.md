## Criar preferência

É possível criar uma preferência utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar preferência](/developers/pt/reference/preferences/_checkout_preferences/post).

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

## Associar Facebook Ads

É possível associar a preferência a um pixel para acompanhamento das conversões do Facebook Ads. Para detalhamento dos parâmetros de requisição, verifique a API [Criar preferência](/developers/pt/reference/preferences/_checkout_preferences/post).

[[[
```node
===
Adicione o código na preferência e substitua o valor <code>pixel_id</code> pelo seu identificador.
===
  // Criar um objeto preferência
var preference = {
  // Associe seu píxel do Facebook
  tracks: [
        {
          type: "facebook_ad",
          values: {
            "pixel_id": 'PIXEL_ID'
          }
        }
      ]
  //...
};
```
]]]

## Associar Google Ads

É possível associar uma tag à preferência para acompanhamento das conversões do Google Ads. Para detalhamento dos parâmetros de requisição, verifique a API [Criar preferência](/developers/pt/reference/preferences/_checkout_preferences/post).

[[[
```node
===
Adicione o código na preferência e substitua os valores <code>CONVERSION\_ID</code> e <code>CONVERSION\_LABEL</code> pelos dados da sua _tag_.
===
  // Criar um objeto preferência
var preference = {
 
  // Associar sua tag do Google ads
  tracks: [
        {
            type: "google_ad",
            values: {
              conversion_id: "CONVERSION_ID",
              conversion_label: "CONVERSION_LABEL"
            } 
        }
      ]
  ...
};
```
]]]