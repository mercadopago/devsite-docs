# Configurar los medios de pago

----[mlb]----
Para comenzar a recibir pagos con Checkout Pro, Checkout Transparente y Pix, sigue los pasos que se describen a continuación.

------------
----[mlm, mla]----
Para comenzar a recibir pagos con Mercado Pago y Checkout Transparente, sigue los pasos que se describen a continuación.

------------
----[mlu, mpe, mco, mlc]----
Para comenzar a recibir pagos con Mercado Pago y Checkout Transparente, sigue los pasos que se describen a continuación.

------------
## Activar los medios de pago

A continuación, te explicamos cómo activar cada medio de pago en tu tienda Salesforce:

* [Configurar Checkout Pro](/developers/es/docs/salesforce-commerce-cloud/payments-configuration/checkout-pro)
* [Configurar Checkout Transparente](/developers/es/docs/salesforce-commerce-cloud/payments-configuration/checkout-api)
----[mlb]----
* [Configurar pagos con Pix](/developers/es/docs/salesforce-commerce-cloud/payments-configuration/checkout-api/pix)
* [Financiación vía Pix en hasta 12 veces](/developers/es/docs/salesforce-commerce-cloud/payments-configuration/checkout-api/credits)
------------
----[mla]----
* [Hasta 12 cuotas sin tarjeta con Mercado Pago](/developers/es/docs/salesforce-commerce-cloud/payments-configuration/checkout-api/credits)
------------
----[mlm]----
* [Hasta 12 meses sin tarjeta con Mercado Pago](/developers/es/docs/salesforce-commerce-cloud/payments-configuration/checkout-api/credits)
------------

## Elegir la ubicación de los medios de pago

Por defecto, el cartucho de Mercado Pago mostrará los medios de pago en un orden determinado. 

----[mlb]----
![payment_methods_v2](salesforce/payment_methods_v2.png)

------------

Si deseas modificar este orden, sigue estos pasos.

1. Dentro de tu tienda Salesforce Commerce Cloud, ve al menú **Merchant Tools** y haz clic en la opción **Payment Methods** que se encuentra dentro del grupo de opciones Ordering. También puedes encontrar la opción utilizando el buscador del menú.
2. Dentro del cuadro, busca la columna **Sort Order**. En esta columna, asígnale un orden numérico a los medios de pago de tu tienda para definir la posición en la que quieras mostrarlos.