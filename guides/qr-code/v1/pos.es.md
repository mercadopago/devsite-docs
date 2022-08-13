# Cajas

Es un **punto de venta** que existe en una sucursal o tienda física. Cada caja tendrá vinculado un código QR unívoco.

## ¿Cómo crear una caja?

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
