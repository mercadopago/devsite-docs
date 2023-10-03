## Crear preferencia

Es posible crear preferencias utilizando lo SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, consulte la API [Crear preferencia](/developers/es/reference/preferences/_checkout_preferences/post).

----[mla, mlb, mlu, mpe, mlm]----

[[[
```node
// SDK de Mercado Pago
const mercadopago = require ('mercadopago');
// Agrega credenciales
mercadopago.configure({
  access_token: 'PROD_ACCESS_TOKEN'
});
// Crea un objeto de preferencia
let preference = {
  items: [
    {
      title: 'Mi producto',
      unit_price: 100,
      quantity: 1,
    }
  ]
};
mercadopago.preferences.create(preference)
.then(function(response){
// Este valor reemplazará el string "<%= global.id %>" en tu HTML
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
// Agrega credenciales
mercadopago.configure({
  access_token: 'PROD_ACCESS_TOKEN'
});
// Crea un objeto de preferencia
let preference = {
  items: [
    {
      title: 'Mi producto',
      unit_price: 100,
      quantity: 1,
    }
  ]
};
mercadopago.preferences.create(preference)
.then(function(response){
// Este valor reemplazará el string "<%= global.id %>" en tu HTML
  global.id = response.body.id;
}).catch(function(error){
  console.log(error);
});
```
]]]

------------

## Asociar Facebook Ads

Puede asociar la preferencia con un píxel para rastrear las conversiones de anuncios de Facebook. Para obtener detalles sobre los parámetros de solicitud, consulte la API [Crear preferencia](/developers/es/reference/preferences/_checkout_preferences/post).

[[[
```node
===
Agrega el código en la preferencia y reemplaza el valor <code>PIXEL_ID</code> por tu identificador.
===
// Configura tu preferencia
var preference = {
  // Asocia tu píxel de Facebook
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

## Asociar Google Ads

Puede asociar una *tag* a la preferencia para realizar el seguimiento de las conversiones de Google Ads. Para obtener detalles sobre los parámetros de solicitud, consulte la API [Crear preferencia](/developers/es/reference/preferences/_checkout_preferences/post).

[[[
```node
===
Agrega el código en la preferencia y reemplaza los valores <code>CONVERSION\_ID</code> y <code>CONVERSION\_LABEL</code> por los datos de tu _tag_.
===
// Configura tu preferencia
var preference = {
 
  // Asocia tu tag
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