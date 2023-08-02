# Configurar pagos con ----[mlb]---- Checkout Transparente ------------ ----[mla, mpe, mco, mlu, mlc]---- Checkout API ------------

----[mlb]----
Con el [Checkout Transparente](/developers/es/guides/checkout-api/landing), todo el proceso de pago se realizará dentro del entorno de la tienda en línea, sin necesidad de redirigir a una página externa. Además de permitir un mayor control en el proceso de personalización e integración, el checkout ofrece una estructura completa para el procesamiento de pagos con los principales medios disponibles en el mercado.

> WARNING
>
> Importante
>
> Para ofrecer la opción de pago con Pix, debes tener registrada una llave Pix en la cuenta del vendedor. Este dato es único, sirve para identificar tu cuenta y te permitirá utilizar las funcionalidades del medio de pago. Si aún no las creaste, [haz clic aquí](https://www.youtube.com/watch?v=60tApKYVnkA) y consulta el paso a paso.

Para integrar Checkout Transparente, siga los pasos a continuación.

------------
----[mla, mpe, mco, mlu, mlc]----
Con el [Checkout API](/developers/es/guides/checkout-api/landing), todo el proceso de pago se realizará dentro del entorno de la tienda en línea, sin necesidad de redirigir a una página externa. Además de permitir un mayor control en el proceso de personalización e integración, el checkout ofrece una estructura completa para el procesamiento de pagos con los principales medios disponibles en el mercado.

Para integrar Checkout API, siga los pasos a continuación.

------------

1. Accede a las ----[mlb]---- [configuraciones de medios de pago](https://lojavirtualnuvem.com.br/admin/payments/) ------------ ----[mla, mlm, mlc, mlu, mpe, mco]---- [configuraciones de medios de pago](https://mitiendanube.com/admin/payments/) ------------ en el menú de tu tienda, busca "Mercado Pago" y selecciona "Editar".
2. En el ítem "Tipo de integración" cambia a la opción "Proceso de compra sin dejar la tienda".
----[mlb]----
3. Selecciona las opciones de pago que deseas ofrecer en tu tienda. Estas pueden ser Tarjeta de crédito, Boleto Bancario y Pix.
4. Si deseas que el pago con boleto bancario tenga un descuento, introduce el porcentaje de descuento en el campo "Descuento por pagos con boleto bancario".
5. Finalmente, haz clic en "Guardar cambios". ------------
----[mlc, mlu, mpe, mco]---- 
3. Finalmente, haz clic en "Guardar cambios". ------------

----[mlb]----
![Payments Checkout Transparente - Nuvem Shop](/images/nuvemshop/nuvemshop_checkout_transparente_2.gif) 

------------
----[mla, mlc, mlu, mpe, mco]----
![Payments Checkout Transparente - Nuvem Shop](/images/nuvemshop/mx_tiendanube_checkout_transparente.gif)

------------

> NOTE
>
> Nota
>
> Luego de instalar Mercado Pago, todos los medios de pago estarán activos por defecto.