---
sites_supported:
  - mla
  - mlb
  - mlv
  - mco
  - mlm
  - global

---

# Sucursales y Cajas

## Introducción

Las **sucursales** y **cajas** son importantes para recibir pagos presenciales con QR. Te permiten crear tu tienda y asignar sus puntos de venta.

| Término       |  Descripción                                                 |
| ------------- | ------------------------------------------------------------ |
| Sucursal      | Es una **tienda física** en la que tus clientes pueden adquirir tus productos o servicios. Puedes tener varias sucursales en una misma cuenta. |
| Caja           | Es un **punto de venta** que existe en una sucursal o tienda física. Cada caja tendrá vinculado un código QR unívoco. |

> ![Cajas y Sucursales](/images/stores_pos.es.png) 



## Sucursales

### ¿Cuáles son los beneficios de crear sucursales?

Los beneficios de crear Sucursales son:

- **Lograr trazabilidad**. Cada pago quedará asociado a una sucursal y al momento de obtener tus reportes de conciliación será valioso para identificar transacciones por sucursal.
- **Visibilidad en mapas de sucursales**. Las sucursales creadas aparecen en el mapa de las app de Mercado Pago o Mercado Libre a medida que vayan teniendo pagos. De esta manera, dan visibilidad a todos los clientes sobre la existencia de la tienda. 
- **Aportar una mejor organización de las cajas**.

### ¿Cómo crear una sucursal?

Para crear un sucursal tienes que declarar su nombre, horarios de trabajo, ubicación y alguna referencia que lo identifique. 

Ejecuta el siguiente código para generarla:

[[[
 ```curl
===
API de creación de Sucursales
===
curl -X POST https://api.mercadopago.com/users/$COLLECTOR_ID/stores?access_token=PROD_ACCESS_TOKEN -d
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

Puedes obtener más información en la [Referencias de API](https://www.mercadopago.com.ar/developers/es/reference/).

## Cajas

Al tener creadas tus sucursales, puedes crear tus cajas. Ten en cuenta lo siguiente:

| Término       |  Descripción                                                 |
| ------------- | ------------------------------------------------------------ |
| `EXTERNAL_STORE_ID`     | Vincula la Caja con la Sucursal. Es un campo requerido y es el mismo *external_id* de la Sucursal previamente creada. |
| `EXTERNAL_ID`           | Identifica unívocamente cada caja. Es requerido y no se puede modificar, tampoco repetir en una misma cuenta de Mercado Pago. |
| `URL`           | Sólamente es utilizado en el modelo desatendido. En este campo se declara la URL de un servicio de tu dominio al cual Mercado Pago consultará si hay una orden disponible. |

[[[
 ```curl
===
API de creación de Cajas
===
curl -X POST https://api.mercadopago.com/pos?access_token=PROD_ACCESS_TOKEN -d     
{
  "name":"Caja Principal", 
  "fixed_amount": true,
  "category": 621102,
  "external_store_id": "STORE001",
  "external_id": "CAJA0001",
  "url": "https://www.miempresa.com/pay-mp?locationId=6232&positionId=1"
}
```
]]]

Puedes obtener más información en la [Referencias de API](https://www.mercadopago.com.ar/developers/es/reference/).

Una vez creada la caja, podremos ver en el “Response” los links a distintos entregables del QR, junto con otros datos relevantes de la caja. 



### Próximos pasos

<div>
<a href="https://www.mercadopago.com.ar/developers/es/guides/instore-payments/qr-payments/qr-attended-part1/" style="text-decoration:none;color:inherit">       
<blockquote class="next-step-card next-step-card-left">
<p class="card-note-title">Integrar QR modelo atendido<span class="card-status-tag card-status-tag-recommended">RECOMENDADO</span></p>
 <p>Si en tu proceso de venta, es necesario que participe un operador, revisa este modelo!</p>
</blockquote>
</a>    
<a href="https://www.mercadopago.com.ar/developers/es/guides/instore-payments/qr-payments/qr-disregarded-part1/" style="text-decoration:none;color:inherit">
<blockquote class="next-step-card next-step-card-right">
<p class="card-note-title">Integrar QR modelo desatendido<span class="card-status-tag card-status-tag-recommended">RECOMENDADO</span></p>
 <p>Si puede concretarse la venta solamente con la acción del cliente, este es tu modelo!</p>
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