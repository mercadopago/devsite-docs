> CLIENT_SIDE
>
> h1
>
> Cambiar textos de los botones

El botón de pago ofrece dos niveles de lectura: la **call to action (botón)** y la **propuesta de valor**. En ambos casos, el texto se puede personalizar de acuerdo a las opciones brindadas por Mercado Pago. De forma predeterminada, el botón de pago se muestra como en la siguiente imagen.

<center>

![cow-text-wallet-default](cow/cow-text-wallet-default.es.jpg)

</center>

Para cambiar los textos predeterminados, modifique la propiedad `customization` durante el renderizado.

| - | Descripción |
| --- |--- | 
| Momento de personalización | Al renderizar. |
| Propiedad | customization |
| Observaciones | Al enviar un texto vacío, la pantalla presentará el texto definido por el diseño predeterminado. Por otro lado, al enviar texto alternativo, reemplazará el texto predeterminado. Para comprobar qué textos alternativos están disponibles, consulte la siguiente tabla. |

Consulte a continuación los textos disponibles para modificar y un código de ejemplo.

| Clave | Opciones disponibles | Predeterminado |
| --- |--- | --- | 
| action | pay, buy | pay |
| valueProp | practicality, convenience, security_details, security_safety | security_safety |

Consulte los textos relacionados con cada opción:

----[mla, mlb, mpe, mco, mlu, mlc]----

| Clave | Opción | Texto |
| --- |--- | --- | 
| action | pay | Paga con Mercado Pago. |
| action | buy | Compra con Mercado Pago. |
| valueProp | practicality| Utilice las tarjetas guardadas o el saldo de su cuenta. |
| valueProp | convenience | Cuota con o sin tarjeta.|
| valueProp | security_details | Protección para sus datos.  |
| valueProp | security_safety| Pague de forma segura.|
| valueProp | none | - |

------------
----[mlm]----

| Clave | Opción | Texto |
| --- |--- | --- | 
| action | pay | Paga con Mercado Pago. |
| action | buy | Compra con Mercado Pago. |
| valueProp | practicality| Utilice las tarjetas guardadas o el saldo de su cuenta. |
| valueProp | convenience | Meses con o sin tarjeta de crédito.|
| valueProp | security_details | Protección para sus datos.  |
| valueProp | security_safety| Pague de forma segura.|
| valueProp | none | - |

------------

Ejemplo de personalización de textos de botones:

[[[
```Javascript
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
 texts: {
   action: 'buy',
   valueProp: 'security_details',
 },
}
```
]]]

Estos ejemplos de personalización generarán el resultado siguiente:

<center>

![cow-text-wallet](cow/cow-text-wallet.es.jpg)

</center>