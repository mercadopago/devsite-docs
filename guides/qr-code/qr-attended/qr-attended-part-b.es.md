---
sites_supported:
  - mla
  - mpe
  - mco
  - mlu
  - mlm
  - mlc
---

#  Cómo integrar QR modelo atendido

Para cobrar a través de un código QR modelo atendido, deberás crear una orden y asociarla a la caja en la quieras cobrar.

## Crear una orden

```curl
curl -X POST 
https://api.mercadopago.com/mpmobile/instore/qr/$USER_ID/$EXTERNAL_ID?access_token=PROD_ACCESS_TOKEN -d
{
    "external_reference": "Factura-0001",
    "notification_url": "www.yourserver.com",
    "items" :[{
    		   "title" : [FAKER][COMMERCE][PRODUCT_NAME],
    		   "currency_id" : [FAKER][CURRENCY][ACRONYM],
    		   "unit_price" : 120.00,
    	     "quantity" : 1,
           "description": "Producto de Mercado Pago",
           "picture_url": "https://bit.ly/2lCRcEN"
    		    },
            {
    		   "title" : [FAKER][COMMERCE][PRODUCT_NAME],
    		   "currency_id" : [FAKER][CURRENCY][ACRONYM],
    		   "unit_price" : 100.00,
    		   "quantity" : 2
    		    }],
    "sponsor_id": 446566691
}
```
Puedes obtener más información en la [Referencias de API](https://www.mercadopago.com.ar/developers/es/reference/instore_orders/_mpmobile_instore_qr_user_id_external_id/post/).

> NOTE
> 
> Nota
> 
> Ten en cuenta que si no cargaste previamente el nombre de tu negocio o el logo en [tu cuenta de Mercado Pago](https://www.mercadopago.com.ar/settings/account), el título y la imagen de la orden que el cliente vea en la app serán las del primer ítem cargado. 

## Vigencia de la orden

Por defecto, la orden del QR expira a los 10 minutos de ser creada o automáticamente al ser cerrada. 

Si se requiere un tiempo de expiración diferente, se puede enviar el header `X-Ttl-Store-Preference` con el tiempo deseado en segundos.
Por ejemplo, para que esté disponible durante 5 minutos se debe enviar el header `X-Ttl-Store-Preference`: 300.

## Eliminar una orden

Para eliminar la orden asociada a un QR antes de que expire por vigencia, o se cierre, puedes hacerlo a través del siguiente método: 

```curl
curl -X DELETE https://api.mercadopago.com/mpmobile/instore/qr/$USER_ID/$EXTERNAL_ID?access_token=PROD_ACCESS_TOKEN  -d 
```
La respuesta será un `HTTP 204 No Content`.

### Próximos pasos

<div>
<a href="https://www.mercadopago.com.ar/developers/es/guides/qr-code/final-steps/advanced-integration/" style="text-decoration:none;color:inherit">       
<blockquote class="next-step-card next-step-card-left">
<p class="card-note-title">Integración avanzada<span class="card-status-tag card-status-tag-required">REQUERIDO</span></p>
 <p>Conoce las opciones que dispones para llegar la integración al siguiente nivel.</p>
</blockquote>
</a>    
<a href="https://www.mercadopago.com.ar/developers/es/guides/qr-code/final-steps/integration-test/" style="text-decoration:none;color:inherit">
<blockquote class="next-step-card next-step-card-right">
<p class="card-note-title">Prueba tu integración<span class="card-status-tag card-status-tag-recommended">RECOMENDADO</span></p>
 <p>Realiza los casos de uso más frecuentes para validar tu integración.</p>
</blockquote>
</a>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

