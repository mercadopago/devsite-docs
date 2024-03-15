> CLIENT_SIDE
>
> h1
>
> Cambiar textos

Wallet Brick ofrece dos niveles de lectura: el **call to action (botón)** y la **propuesta de valor (Value Prop)**. En ambos casos, el texto se puede personalizar de acuerdo a las opciones brindadas por Mercado Pago.

El _call to action_ se divide en dos partes: la acción, determinada por la propiedad `Action`, y el complemento de la acción, determinado por la propiedad `Action Complement`.

> WARNING
>
> Atención
>
> Para ofrecer una mejor experiencia acorde con nuestra propuesta de marca, actualmente no admitimos la personalización completa de los textos.

| - | Descripción |
| --- | --- |
| Momento de personalización  | Al renderizar el Brick  |
| Propiedad  | customization.texts.{action, actionComplement, valueProp}  |
| Tipo  | String  |
| Observaciones  | Al enviar un texto vacío, la pantalla presentará el texto definido por el layout predeterminado que se muestra después de la [renderización del Brick](/developers/es/docs/checkout-bricks/wallet-brick/default-rendering#bookmark_renderizar_o_brick). Por otro lado, al enviar un texto alternativos, reemplazará el texto predeterminado. Para comprobar cuáles son los textos por defecto, consulta la tabla a continuación. |

Consulta a continuación los textos disponibles para cambiar, cómo se organizan en la pantalla y un ejemplo de código.

<center>

![wallet-brick-actioncomplement](checkout-bricks/wallet-brick-actioncomplement-es.png)

</center>

| Clave | Opciones disponibles | Predeterminado |
|--- |--- | --- |
| action | pay, buy | pay |
| actionComplement |brand, amount | brand |
| valueProp | practicality, convenience_all, security_details, security_safety, smart_option, convenience_credits, payment_methods_logos | security_safety |

Consulta los textos relacionados con cada opción:

----[mlm]----
| Clave | Opción | Texto |
|--- |--- | --- |
|action |pay | Pagar|
|action |buy | Comprar |
|actionComplement |brand | con Mercado Pago |
|actionComplement |amount | Monto de la compra obtenido a través de la preferencia, en el formato de la moneda del pago.  |
|valueProp |practicality | Usá tarjetas guardadas o dinero en cuenta |
|valueProp |convenience_all | Cuotas con o sin tarjeta |
|valueProp |security_details | Todos tus datos protegidos |
|valueProp |security_safety | Pagá de forma segura |
|valueProp |smart_option| El texto será elegido automáticamente por Wallet Brick para aumentar las posibilidades de venta según las características de la compra. |
|valueProp |convenience_credits <sup>1</sup> | Hasta 12 mensualidades sin tarjeta  |
|valueProp |payment_methods_logos <sup>2</sup> | Se mostrarán los logotipos de los métodos de pago disponibles. Para configurar los métodos de pago, utilice la _preference_.. |

------------
----[mlb, mla]----
| Clave | Opción | Texto |
|--- |--- | --- |
|action |pay | Pagar|
|action |buy | Comprar |
|actionComplement |brand | con Mercado Pago |
|actionComplement |amount | Monto de la compra obtenido a través de la preferencia, en el formato de la moneda del pago.  |
|valueProp |practicality | Usá tarjetas guardadas o dinero en cuenta |
|valueProp |convenience_all | Cuotas con o sin tarjeta |
|valueProp |security_details | Todos tus datos protegidos |
|valueProp |security_safety | Pagá de forma segura |
|valueProp |smart_option| El texto será elegido automáticamente por Wallet Brick para aumentar las posibilidades de venta según las características de la compra. |
|valueProp |convenience_credits* | Hasta 12 cuotas sin tarjeta  |
|valueProp |payment_methods_logos** | Se mostrarán los logotipos de los métodos de pago disponibles. Para configurar los métodos de pago, utilice la _preference_. |

------------
----[mpe, mco, mlu, mlc]----
| Clave | Opción | Texto |
|--- |--- | --- |
|action |pay | Pagar|
|action |buy | Comprar |
|actionComplement |brand | con Mercado Pago |
|actionComplement |amount | Monto de la compra obtenido a través de la preferencia, en el formato de la moneda del pago.  |
|valueProp |practicality | Usá tarjetas guardadas o dinero en cuenta |
|valueProp |convenience_all | Cuotas con o sin tarjeta |
|valueProp |security_details | Todos tus datos protegidos |
|valueProp |security_safety | Pagá de forma segura |
|valueProp |smart_option| El texto será elegido automáticamente por Wallet Brick para aumentar las posibilidades de venta según las características de la compra. |

------------

Al probar tu integración, asegúrate de que la `action`, `actionComplement` y `valueProp` tengan sentido en tu contexto.

----[mlm]----
> NOTE
>
> Importante
>
> * Para utilizar la _Value Prop_ de `convenience_credits`, es necesario que el Brick se [inicialice con una preferencia](/developers/es/docs/checkout-bricks/wallet-brick/default-rendering) y que la preferencia tenga el propósito de [onboarding_credits.](/developers/es/docs/checkout-bricks/wallet-brick/advanced-features/preferences)
> <br><br>
> ** Se recomienda la [inicialización con una preferencia](/developers/es/docs/checkout-bricks/wallet-brick/default-rendering) en el uso de la _Value Prop_ `payment_methods_logos`. En caso de que la preferencia tenga solo un método de pago válido, dejará de mostrar imágenes y mostrará el texto: "**Con saldo disponible o a meses sin tarjeta**".
> <br><br>
> Al eliminar de la preferencia un método de pago en _ticket_ ("paycash", por ejemplo) o un _ATM_ ("banamex", por ejemplo), no se mostrarán los íconos de los puntos de pago asociados a estos métodos.

------------
----[mlb, mla]----
> NOTE
>
> Importante
>
> * Para utilizar la _Value Prop_ de `convenience_credits`, es necesario que el Brick se [inicialice con una preferencia](/developers/es/docs/checkout-bricks/wallet-brick/default-rendering) y que la preferencia tenga el propósito de [onboarding_credits.](/developers/es/docs/checkout-bricks/wallet-brick/advanced-features/preferences)
> <br><br>
> ** Se recomienda la [inicialización con una preferencia](/developers/es/docs/checkout-bricks/wallet-brick/default-rendering) en el uso de la _Value Prop_ `payment_methods_logos`. En caso de que la preferencia tenga solo un método de pago válido, dejará de mostrar imágenes y mostrará el texto: "**Con dinero disponible o en cuotas sin tarjeta**".

------------
----[mpe, mco, mlu, mlc]----
> NOTE
>
> Importante
>
> ** Se recomienda la [inicialización con una preferencia](/developers/es/docs/checkout-bricks/wallet-brick/default-rendering) en el uso de la _Value Prop_ `payment_methods_logos`. En caso de que la preferencia tenga solo un método de pago válido, dejará de mostrar imágenes y mostrará el texto: "**Con dinero disponible**".

------------

[[[
```javascript
const settings = {
    ...,
    customization: {
         texts: {
             action: 'pay',
             actionComplement: 'amount',
             valueProp: 'payment_methods_logos',
         },
    },
}
```
```react-jsx
const customization = {
 visual: {
   texts: {
     action: 'pay',
     actionComplement: 'amount',
     valueProp: 'payment_methods_logos',
     ...,
   }
 }
};
```
]]]