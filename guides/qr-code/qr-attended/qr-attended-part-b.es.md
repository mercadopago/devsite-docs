---
sites_supported:
  - mla
  - mpe
  - mco
  - mlu
  - mlm
  - mlc
  - mlb
---

#  Cómo integrar QR modelo atendido

Para cobrar a través de un código QR modelo atendido, deberás crear una orden y asociarla a la caja en la quieras cobrar.

## Flujo del modelo

Te explicamos cómo funciona el modelo atendido: 

>![Flujo de pago en punto de venta QR Mercado Pago](/images/qr-user-flow.es.png)
--- 

1. El punto de venta registra un pedido (1a) y crea una orden asignada a una caja (1b). En este momento la orden se encuentra disponible para ser escaneada (2). 
2. Cuando el cliente escanea el QR (3) con la orden y realiza el pago (5), se recibe una notificación IPN (4a y 6b) al servidor del vendedor. Con esos datos, se obtiene el estado de la orden (7a), para validar que esté cerrada o siga abierta, pendiente de pago.


## Crear una orden

```curl
curl -X POST 
https://api.mercadopago.com/mpmobile/instore/qr/$USER_ID/$EXTERNAL_ID?access_token=PROD_ACCESS_TOKEN -d
{
    "external_reference": "Factura-0001",
    "notification_url": "www.yourserver.com",
    "items" :[{
    		   "title" : "Producto 1",
    		   "currency_id" : "[FAKER][CURRENCY][ACRONYM]",
    		   "unit_price" : 120.00,
    	     "quantity" : 1,
           "description": "Producto de Mercado Pago",
           "picture_url": "https://bit.ly/2lCRcEN"
    		    },
            {
    		   "title" : "Producto 2",
    		   "currency_id" : "[FAKER][CURRENCY][ACRONYM]",
    		   "unit_price" : 100.00,
    		   "quantity" : 2
    		    }],
    "sponsor_id": 446566691
}
```
Puedes obtener más información en la [Referencias de API](https://www.mercadopago.com.ar/developers/es/reference/instore_orders/_mpmobile_instore_qr_user_id_external_id/post/).

Una vez creada la orden, ya se encuentra disponible para ser **escaneada y pagada**.


> NOTE
> 
> Nota
> 
> Ten en cuenta que si no cargaste previamente el nombre de tu negocio o el logo en [tu cuenta de Mercado Pago](https://www.mercadopago.com.ar/settings/account), el título y la imagen de la orden que el cliente vea en la app serán las del primer ítem cargado. 


## Eliminar una orden

Para eliminar la orden asociada a un QR antes de que expire por vigencia, o se cierre, puedes hacerlo a través del siguiente método: 

```curl
curl -X DELETE https://api.mercadopago.com/mpmobile/instore/qr/$USER_ID/$EXTERNAL_ID?access_token=PROD_ACCESS_TOKEN  -d 
```
La respuesta será un `HTTP 204 No Content`.

## Recibe notificaciones de tus órdenes

Las notificaciones IPN (Instant Payment Notification) son la **forma automática de aviso de la creación de nuevas órdenes y las actualizaciones de sus estados**. Por ejemplo si fueron aprobados, rechazados o si se encuentran pendientes.

Implementa IPN de `merchant_order` junto con una búsqueda de la orden por `external_reference` como método de contigencia.

<a href="https://www.mercadopago.com.ar/developers/es/guides/notifications/ipn/" target="_blank">Recibir notificaciones IPN</a>

---
### Próximos pasos


> LEFT_BUTTON_REQUIRED_ES
>
> Integración avanzada
>
> Conoce las opciones que dispones para llevar tu integración al siguiente nivel.
>
> [Integración avanzada](https://www.mercadopago.com.ar/developers/es/guides/qr-code/final-steps/advanced-integration/)


> RIGHT_BUTTON_RECOMMENDED_ES
>
> Prueba tu integración
>
> Realiza los casos de uso más frecuentes para validar tu integración.
>
> [Prueba tu integración](https://www.mercadopago.com.ar/developers/es/guides/qr-code/final-steps/integration-test/)
