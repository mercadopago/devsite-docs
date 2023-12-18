---
  sites_supported:
      - mla
      - mlb
      - mlc
      - mco
      - mlm
---

# Configura las formas de pago

----[mlb]----
**Elige cómo integrar Mercado Pago en tu tienda.** Puedes [recibir los pagos directamente en tu tienda](#bookmark_checkout_transparente) o cobrar a través del [sitio de Mercado Pago](#bookmark_checkout_pro). Solo es posible activar una de las dos opciones.
------------

----[mla, mlm, mlc, mlu, mpe, mco]----
**Elige cómo integrar Mercado Pago en tu tienda.** Puedes [recibir los pagos directamente en tu tienda](#bookmark_checkout_api) o cobrar a través del [sitio de Mercado Pago](#bookmark_checkout_pro). Solo es posible activar una de las dos opciones.
------------

También tienes la opción de ----[mlm]---- [ofrecer cuotas sin interés](#bookmark_configura_las_cuotas_sin_interés_en_tu_cuenta_de_mercado_pago) ------------ ----[mla, mlb, mlc, mlu, mpe, mco]---- [ofrecer mensualidades sin interés](#bookmark_configura_las_mensualidades_sin_interés_en_tu_cuenta_de_mercado_pago) ------------ y configurar las [tasas y plazos](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/release-options) de tus ventas online cuando quieras.

## Checkout Pro

**El comprador será redireccionado a Mercado Pago** para realizar el pago y terminar la compra----[mlb]---- utilizando medios de pago como Pix, boleto parcelado, débito virtual de Caixa y dinero en cuenta de Mercado Pago------------. Una vez finalizado el pago, el comprador regresará a su tienda.

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


----[mlb]----
## Checkout Transparente
------------

----[mla, mlm, mlc, mlu, mpe, mco]----
## Checkout API
------------

Permite que el **cliente finalice la compra en tu tienda**, sin ser redireccionado para otro sitio ----[mlb]----, y recibe pagos con tarjeta de crédito, boleto bancario, Pix y Checkout Pro------------ ----[mla, mlm, mlc, mlu, mpe, mco]----, y recibe pagos con tarjeta de crédito y Checkout Pro------------.

----[mlb]----
> WARNING
>
> Importante
>
> Para ofrecer la opción de pago con Pix, debes tener registrada una llave Pix en la cuenta del vendedor. Este dato es único, sirve para identificar tu cuenta y te permitirá utilizar las funcionalidades del medio de pago.<br><br>
> [Conoce cómo crear una llave Pix](https://www.mercadopago.com.br/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required)
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


> NOTE
>
> Nota
>
> Luego de instalar Mercado Pago, todos los medios de pago estarán activos por defecto.