---
  sites_supported:
      - mla
      - mlb
      - mlc
      - mco
      - mlm
---

# Tiendanube
## ¿Qué es Tiendanube?

Tiendanube es una **plataforma de e-commerce que permite recibir pagos con Mercado Pago**. ----[mlb]---- Puedes ofrecer a tus clientes la posibilidad de pagar con tarjeta de crédito, boleto bancario o Pix y [vender directo en tu sitio](#bookmark_checkout_transparente) o [cobrar por el sitio de Mercado Pago](#bookmark_checkout_pro). ------------ ----[mla, mlm, mlc, mlu, mpe]---- Ofrece a tus clientes pagar con tarjeta de crédito, débito o el medio de pago que prefieran y [vender directo en tu sitio](#bookmark_checkout_transparente) o [cobrar por el sitio de Mercado Pago](#bookmark_checkout_pro). ------------ ----[mco]---- Ofrece a tus clientes pagar con tarjeta de crédito, banca en línea o efectivo y [vender directo en tu sitio](#bookmark_checkout_transparente) o [cobrar por el sitio de Mercado Pago](#bookmark_checkout_pro). ------------

<!-- -->
----[mlu, mpe]----
> WARNING
>
> Importante
>
> Ten en cuenta que Tiendanube está optimizada para operar solo en los siguientes países: Argentina, Brasil, México, Colombia y Chile.
------------

## Pasos para configurar

Los **pasos para comenzar a cobrar con Mercado Pago** son los siguientes:


1. Crea una [cuenta vendedor](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) en Mercado Pago si todavía no tienes una.
1. Instala la aplicación dentro de la tienda.
1. Configura las formas de pago con Mercado Pago.

## Activa Mercado Pago en tu tienda

Para **vincular tu cuenta de Mercado Pago a Tiendanube**, sigue estos pasos:

1. Accede a las ----[mlb]---- [configuraciones de medios de pago](https://lojavirtualnuvem.com.br/admin/payments/) ------------ ----[mla, mlm, mlc, mlu, mpe, mco]---- [configuraciones de medios de pago](https://mitiendanube.com/admin/payments/) ------------ en el menú de tu tienda.
2. Busca en la lista de medios de pago a Mercado Pago.
3. Haz clic en "Configurar" y luego en "Activar".
4. Vas a ser redirigido a Mercado Pago para que ingreses con los datos de tu cuenta. Para autorizar la conexión, haz clic en "Permitir".
<p>&nbsp;</p>
----[mlb]----
![Payments Connect - Nuvem Shop](/images/nuvemshop/nuvemshop_connect_1.gif)
------------
----[mla]----
![Payments Connect - Nuvem Shop](/images/nuvemshop/ar_tientanube_connect.gif)
------------
----[mlm, mlc, mlu, mpe, mco]----
![Payments Connect - Nuvem Shop](/images/nuvemshop/mx_tientanube_connect.gif)
------------
<p>&nbsp;</p>
¡Y listo! Mercado Pago ya se encuentra instalado en tu tienda.

> WARNING
>
> Importante
>
> Por defecto, Tiendanube va a tomar información de la cuenta que está recibiendo el pago como la configuración de correo electrónico, país y la moneda correspondiente a su cuenta de Mercado Pago.

<!-- -->
> NOTE
>
> Cambiar cuenta de Mercado Pago
>
> Si quieres cambiar la cuenta de Mercado Pago asociada a tu tienda, es necesarios cerrar y reinstalar el aplicativo.
>
> 1. Cierra tu cuenta de Mercado Pago si la tienes abierta en tu navegador.
> 2. Selecciona "Salir" en el menú de opciones.
> 3. Accede a las ----[mlb]---- [configuraciones de medios de pago](https://lojavirtualnuvem.com.br/admin/payments/) ------------ ----[mla, mlm, mlc, mlu, mpe, mco]---- [configuraciones de medios de pago](https://mitiendanube.com/admin/payments/) ------------ en el menú de tu tienda, busca "Mercado Pago" y selecciona "Editar".
> 4. Finalmente, haz clic en "Cambiar usuario" para desvincular tu cuenta actual.
> 5. ¡Y listo! La desvinculación fue exitosa y ahora puedes [agregar una nueva cuenta](#bookmark_activa_mercado_pago_en_tu_tienda).

## Configura las formas de pago

**Elige cómo integrar Mercado Pago en tu tienda.** Puedes [recibir los pagos directamente en tu tienda](#bookmark_checkout_transparente) o cobrar a través del [sitio de Mercado Pago](#bookmark_checkout_pro). Solo es posible activar una de las dos opciones.

También tienes la opción de ----[mlm]---- [ofrecer cuotas sin interés](#bookmark_configura_las_cuotas_sin_interés_en_tu_cuenta_de_mercado_pago) ------------ ----[mla, mlb, mlc, mlu, mpe, mco]---- [ofrecer mensualidades sin interés](#bookmark_configura_las_mensualidades_sin_interés_en_tu_cuenta_de_mercado_pago) ------------ y configurar las [tasas y plazos](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/release-options) de tus ventas online cuando quieras.


### Checkout Transparente

Permite que el **cliente finalice la compra en tu tienda**, sin ser redireccionado para otro sitio----[mlb]----, y recibe pagos con tarjeta de crédito, boleto bancario, Pix y Checkout Pro------------.

----[mlb]----
> WARNING
>
> Importante
>
> Para ofrecer la opción de pago con Pix, debes tener registrada una clave pix en la cuenta del vendedor. Este dato es único, sirve para identificar tu cuenta y te permitirá utilizar las funcionalidades del medio de pago.<br><br>
> [Conoce cómo crear una clave pix](https://www.mercadopago.com.br/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required)
------------

1. Accede a las ----[mlb]---- [configuraciones de medios de pago](https://lojavirtualnuvem.com.br/admin/payments/) ------------ ----[mla, mlm, mlc, mlu, mpe, mco]---- [configuraciones de medios de pago](https://mitiendanube.com/admin/payments/) ------------ en el menú de tu tienda, busca "Mercado Pago" y selecciona "Editar".
2. En el ítem "Tipo de integración" cambia a la opción "Proceso de compra sin dejar la tienda".
----[mlb]----
3. Selecciona las opciones de pago que deseas ofrecer en tu tienda. Estas pueden ser Tarjeta de crédito, Boleto Bancario y Pix.
4. Si deseas que el pago con boleto bancario tenga un descuento, introduce el porcentaje de descuento en el campo "Descuento por pagos con boleto bancario".
5. Finalmente, haz clic en "Guardar cambios". ------------
----[mla, mlm, mlc, mlu, mpe, mco]---- 
3. Finalmente, haz clic en "Guardar cambios". ------------
<p>&nbsp;</p>
----[mlb]----
![Payments Checkout Transparente - Nuvem Shop](/images/nuvemshop/nuvemshop_checkout_transparente_2.gif)
------------
----[mla]----
![Payments Checkout Transparente - Nuvem Shop](/images/nuvemshop/ar_tiendanube_checkout_transparente.gif)
------------
----[mlm, mlc, mlu, mpe, mco]----
![Payments Checkout Transparente - Nuvem Shop](/images/nuvemshop/mx_tiendanube_checkout_transparente.gif)
------------


### Checkout Pro

**El comprador será redireccionado a Mercado Pago** para realizar el pago y terminar la compra----[mlb]---- utilizando medios de pago como Pix, boleto parcelado, débito virtual de Caixa y dinero en cuenta de Mercado Pago. Una vez finalizado el pago, el comprador regresará a su tienda ------------. 

1. Accede a las ----[mlb]----[configuraciones de medios de pago](https://lojavirtualnuvem.com.br/admin/payments/) ------------ ----[mla, mlm, mlc, mlu, mpe, mco]---- [configuraciones de medios de pago](https://mitiendanube.com/admin/payments/) ------------ en el menú de tu tienda, busca "Mercado Pago" y selecciona "Editar".
2. En el ítem "Tipo de integración" cambia a la opción "Proceso de compra en el sitio de Mercado Pago".
----[mlb]----
3. Selecciona las opciones de pago que deseas ofrecer en tu tienda. Estos pueden ser Tarjeta de crédito, Boleto Bancario y Pix.
4. Finalmente, haz clic en "Guardar cambios". ------------
----[mla, mlm, mlc, mlu, mpe, mco]---- 
3. Finalmente, haz clic en "Guardar cambios". ------------
<p>&nbsp;</p>
----[mlb]----
![Payments Checkout Pro - Nuvem Shop](/images/nuvemshop/nuvemshop_checkout_redirect_3.gif)
------------
----[mla]----
![Payments Checkout Pro - Nuvem Shop](/images/nuvemshop/ar_tiendanube_checkout_redirect.gif)
------------
----[mlm, mlc, mlu, mpe, mco]----
![Payments Checkout Pro - Nuvem Shop](/images/nuvemshop/mx_tiendanube_checkout_redirect.gif)
------------

> NOTE
>
> Nota
>
> Luego de instalar Mercado Pago, todos los medios de pago estarán activos por defecto.

----[mla, mlb, mlc, mlu, mco, mpe]----
## Configuración de cuotas
------------
----[mlm]----
## Configuración de mensualidades
------------

Tiendanube utiliza la configuración de financiación de tu cuenta de Mercado Pago. Si hiciste cambios, ten en cuenta que se van a ver reflejados en tu tienda en las próximas 24 hs.

----[mlb]----
Si deseas **sincronizar tus configuraciones manualmente** o aplicar un monto mínimo de cuotas, realiza los siguientes pasos: ------------
----[mlm, mla, mlc, mlu, mpe, mco]----
También puedes sincronizar los últimos cambios manualmente de la siguiente manera: ------------

1. Accede a las ----[mlb]----[configuraciones de medios de pago](https://lojavirtualnuvem.com.br/admin/payments/) ------------ ----[mlm, mla, mlc, mlu, mpe, mco]---- [configuraciones de medios de pago](https://mitiendanube.com/admin/payments/) ------------ en el menú de tu tienda, busca "Mercado Pago" y selecciona "Editar".
----[mlb]----
2. Si deseas aplicar un monto mínimo de cuotas para pagos con Checkout Transparente, informa el monto en el campo "Cuotas".
3. En la sección de cuotas, haz clic en "Reflejar ahora".
4. Finalmente, haz clic en "Guardar cambios". ------------
----[mla, mlc, mlu, mpe, mco]---- 
2. En la sección de cuotas, haz clic en "Reflejar ahora".
3. Finalmente, haz clic en "Guardar cambios". ------------
----[mlm]---- 
2. En la sección de meses, haz clic en "Reflejar ahora".
3. Finalmente, haz clic en "Guardar cambios". ------------

<p>&nbsp;</p>
----[mlb]----
![Payments Installment - Nuvem Shop](/images/nuvemshop/nuvemshop_installments_4.gif)
------------
----[mla]----
![Payments Installment - Nuvem Shop](/images/nuvemshop/ar_tiendanube_installments.gif)
------------
----[mlm, mlc, mlu, mpe, mco]----
![Payments Installment - Nuvem Shop](/images/nuvemshop/mx_tiendanube_istallments.gif)
------------

----[mlb, mlc, mlu, mpe, mco, mla]----
## Configura las cuotas sin interés en tu cuenta de Mercado Pago
------------
----[mlm]----
## Configura las mensualidades sin interés en tu cuenta de Mercado Pago
------------

1. Ingresa a tu [cuenta de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/business#from-section=menu) y ve a "Tu negocio".
2. Accede en la opción "Configuraciones", navega hasta----[mlb, mlc, mlu, mpe, mco]---- "Ofrecer cuotas sin interés"------------ ----[mlm]----"Ofrecer mensualidades sin interés"------------ y haz clic en "Activar".
3. Elige "¿Cuántas quieres ofrecer?" y confirma los cambios con el botón "Activar".

<p>&nbsp;</p>
----[mlb]----
![Payments Installments - Nuvem Shop](/images/nuvemshop/nuvemshop_account_installments_5.gif)
------------
----[mla]----
![Payments Installments - Nuvem Shop](/images/nuvemshop/ar_tiendanube_account_installments_cropped.gif)
------------
----[mlm, mlc, mlu, mpe, mco]----
![Payments Installments - Nuvem Shop](/images/nuvemshop/mx_tiendanube_account_installments_cropped.gif)
------------
<p>&nbsp;</p>
¡Y listo! Ya estás ofreciendo----[mlb, mlc, mlu, mpe, mco, mla]---- cuotas sin interés------------ ----[mlm]---- mensualidades sin interés------------ con el costo de financiación que hayas configurado.

<!-- -->
----[mlb, mla]----
> WARNING
>
> Importante
>
> Por el momento, el servicio de Mercado Envíos no se encuentra disponible.
------------

<!-- -->
> Para más información, visita el ----[mlb]---- [sitio oficial de Tiendanube](https://www.nuvemshop.com.br). ------------ ----[mla, mlm, mlc, mlu, mpe, mco]---- [sitio oficial de Tiendanube](https://www.tiendanube.com). ------------
