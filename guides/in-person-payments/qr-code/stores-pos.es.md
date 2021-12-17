# Sucursales y Cajas

## Introducción

Las **sucursales** y **cajas** son importantes para recibir pagos presenciales con QR. Te permiten crear tu tienda y asignar sus puntos de venta.

![Cajas y Sucursales](/images/mobile/stores_pos.es.png) 


## Sucursales

Es una **tienda física** en la que tus clientes pueden adquirir tus productos o servicios. Puedes tener varias sucursales en una misma cuenta.

### ¿Cuáles son los beneficios de crear sucursales?

Los beneficios de crear sucursales son:

- **Lograr trazabilidad**. Cada pago quedará asociado a una sucursal y al momento de obtener tus reportes de conciliación será valioso para identificar transacciones por sucursal.
- **Visibilidad en mapas de sucursales**. Las sucursales creadas aparecen en el mapa de las app de Mercado Pago o Mercado Libre a medida que vayan teniendo pagos. De esta manera, dan visibilidad a todos los clientes sobre la existencia de la tienda. 
- **Aportar una mejor organización de las cajas**.

### ¿Cómo crear una sucursal?

Para crear una sucursal tienes que declarar su nombre, horarios de trabajo, ubicación y alguna referencia que lo identifique. 

Ejecuta el siguiente código para generarla:

[[[
 ```curl
curl -X POST \
-H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
https://api.mercadopago.com/users/$USER_ID/stores \
-d \
{  
   "name":"Sucursal Instore",
   "business_hours":{  
      "monday":[  
         {  
            "open":"08:00",
            "close":"13:00"
         },
         {  
            "open":"15:00",
            "close":"18:00"
         }
      ],
      "tuesday":[  
         {  
            "open":"08:00",
            "close":"18:00"
         }
      ]   
   },
   "location":{  
      "street_number":"3039",
      "street_name":"Caseros",
      "city_name":"Belgrano",
      "state_name":"Capital Federal",
      "latitude":-32.8897322,
      "longitude":-68.8443275,
      "reference":"3er Piso"
   },
   "external_id":"STORE001"
}
```
]]]

Puedes obtener más información en la [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/stores/_users_user_id_stores/post).

> WARNING
> 
> Importante
> 
> 1. Debes conocer tu `country_id` del país donde te encuentres en [nuestra API de países](https://api.mercadolibre.com/countries).
> 2. El `state_name` debe coincidir con los **estados** según el país en cuestión (https://api.mercadolibre.com/countries/$country_id).
> 3. El `city_name` debe coincidir con las **ciudades** según sus estados. (https://api.mercadolibre.com/states/$state_id).

## Cajas

Es un **punto de venta** que existe en una sucursal o tienda física. Cada caja tendrá vinculado un código QR unívoco.

### ¿Cómo crear una caja?

Al tener creadas tus sucursales, puedes crear tus cajas. Ten en cuenta lo siguiente:

| Término | Descripción |
| --- | --- |
| `EXTERNAL_STORE_ID` | Vincula la caja con la sucursal. Es un campo requerido y es el mismo *external_id* de la Sucursal previamente creada. |
| `EXTERNAL_ID` | Identifica unívocamente cada caja. Es requerido y no se puede modificar, tampoco repetir en una misma cuenta de Mercado Pago. También lo puedes encontrar como `EXTERNAL_POS_ID`. |


[[[
 ```curl
curl -X POST \
-H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
https://api.mercadopago.com/pos \
-d \    
{
  "name":"Caja Principal", 
  "fixed_amount": true,
  "category": 621102,
  "external_store_id": "STORE001",
  "external_id": "CAJA0001"
}
```
]]]

Puedes obtener más información en la [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/pos/_pos/post).

> WARNING 
> 
> Importante
> 
> A partir del 20 de abril de 2021, no se podrán crear cajas sin una sucursal asignada.

Una vez creada la caja, podremos ver en el _Response_ los links a distintos entregables del QR, junto con otros datos relevantes de la caja.

---
### Próximos pasos


> LEFT_BUTTON_RECOMMENDED_ES
>
> Integrar QR modelo atendido
>
> Conoce paso a paso cómo asociar una orden a la caja para realizar cobros.
>
> [Integrar QR modelo atendido](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/qr-code/qr-attended/introduction)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Integrar QR modelo dinámico
>
> Ofrece la opción de pagar con el monto a cobrar ya incluido en el código QR.
>
> [Integrar QR modelo dinámico](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/qr-code/qr-dynamic/introduction)
