> CLIENT_SIDE
>
> h1
>
> Cambiar textos

Wallet Brick ofrece dos niveles de lectura: el **call to action (botón)** y la **propuesta de valor**. En ambos casos, el texto se puede personalizar de acuerdo a las opciones brindadas por Mercado Pago.

> WARNING
>
> Atención
>
> Para ofrecer una mejor experiencia acorde con nuestra propuesta de marca, actualmente no es posible personalizar completamente los textos.

| - | Descripción |
| --- | --- |
| Momento de personalización  | Al renderizar el Brick  |
| Propiedad  | customization.texts.{action, valueProp} |
| Tipo  | String  |
| Observaciones  | Al enviar texto vacío, la pantalla presentará el texto definido por el layout predeterminado. Por otro lado, al enviar un texto alternativos, reemplazará el texto predeterminado. Para comprobar cuáles son los textos por defecto, consulta la tabla a continuación. |

Consulte a continuación los textos disponibles para modificar y un código de ejemplo.

----[mla, mlb]----
| Clave | Opciones disponibles | Predeterminado |
|--- |--- | --- |
| action | pay, buy | pay |
| valueProp | practicality, convenience, security_details, security_safety, smart_option | security_safety |

Consulte los textos relacionados con cada opción:

| Clave | Opción | Texto |
|--- |--- | --- |
|action |pay | Pagar con Mercado Pago |
|action |buy | Comprar con Mercado Pago |
|valueProp |practicality | Usá tarjetas guardadas o dinero en cuenta |
|valueProp |convenience | Cuotas con o sin tarjeta |
|valueProp |security_details | Todos tus datos protegidos |
|valueProp |security_safety | Pagá de forma segura |
|valueProp |smart_option| El texto será elegido automáticamente por Wallet Brick para aumentar las posibilidades de venta según las características de la compra. |

------------
----[mlm]----
| Clave | Opciones disponibles | Predeterminado |
|--- |--- | --- |
| action | pay, buy | pay |
| valueProp | practicality, convenience, security_details, security_safety, smart_option | security_safety |

Consulte los textos relacionados con cada opción:

| Clave | Opción | Texto |
|--- |--- | --- |
|action |pay | Pagar con Mercado Pago |
|action |buy | Comprar con Mercado Pago |
|valueProp |practicality | Usa tarjetas guardadas o saldo en cuenta |
|valueProp |convenience | Meses con o sin tarjeta de crédito |
|valueProp |security_details | Todos tus datos protegidos |
|valueProp |security_safety | Paga de forma segura |
|valueProp |smart_option| El texto será elegido automáticamente por Wallet Brick para aumentar las posibilidades de venta según las características de la compra. |

------------
----[mlu, mlc, mco, mpe]----
| Clave | Opciones disponibles | Predeterminado |
|--- |--- | --- |
| action | pay, buy | pay |
| valueProp | practicality, security_details, security_safety, smart_option | security_safety |

Consulte los textos relacionados con cada opción:

| Clave | Opción | Texto |
|--- |--- | --- |
|action |pay | Pagar con Mercado Pago |
|action |buy | Comprar con Mercado Pago |
|valueProp |practicality | Usa tarjetas guardadas o dinero en cuenta |
|valueProp |security_details | Todos tus datos protegidos |
|valueProp |security_safety | Paga de forma segura |
|valueProp |smart_option| El texto será elegido automáticamente por Wallet Brick para aumentar las posibilidades de venta según las características de la compra. |

------------

[[[
```javascript
const settings = {
    ...,
    customization: {
         texts: {
             action: 'buy',
             valueProp: 'security_details',
         },
    },
}
```
```react-jsx
const customization = {
 visual: {
   texts: {
     action: 'buy',
     valueProp: 'security_details'
     ...,
   }
 }
};
```
]]]