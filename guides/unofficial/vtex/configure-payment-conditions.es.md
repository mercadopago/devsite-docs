# Configura planes de pago

Los **planes pago** son los métodos de pago que se muestran en el sitio web para la finalización de la compra. Permiten la configuración de cuotas, intereses, condiciones especiales, etc.

Luego de haber creado tu afiliación con **MercadoPagoV2**, debes configurar los **planes de pago** que se ofrecerán a los compradores.

> WARNING
>
> Importante
>
> Verifica en tu tienda de aplicaciones VTEX que la App **Mercado Pago Payment APP** este instalada para usar las condiciones de pago **MercadoPagoPro, MercadoPagoWallet y MercadoPagoOff** o solicita la instalación al equipo de VTEX a través de [Support VTEX](https://help.vtex.com/es/support).

La configuración de los planes de pago se realiza en la pestaña **Planes de pago** del menú **Configuración** en el módulo **Pagos** en el portal del administrador de la plataforma VTEX. En esta pestaña, debes hacer clic en el botón "+" (*Agregar nuevo plan de pago para ...*) y seleccionar uno de los siguientes planes de pago:

* **Tarjeta de Crédito:** se refiere a transacciones con tarjeta de crédito que se realizan en el sitio web de tu tienda. Esta configuración requiere que selecciones cada marca de tarjeta de crédito que desees en tu tienda. [Puedes hacer clic aquí para descubrir las marcas de tarjeta de crédito disponibles](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/unofficial/vtex/payment-methods). Además, dependiendo de las condiciones de pago que selecciones (Efectivo o Cuotas), tu configuración puede requerir que completes campos adicionales. Para obtener más información sobre cómo configurar las cuotas en VTEX, haz clic [aquí](https://help.vtex.com/es/tutorial/condicoes-de-pagamento--tutorials_455#parcelado-sem-juros). ----[mla, mlu, mlc, mlm, mpe, mco]----
* **Tarjeta de Débito:** se refiere a transacciones con tarjeta de débito. ------------
* **Otro:** se refiere a transacciones con **MercadoPagoOff**, **MercadoPagoWallet**, o **MercadoPagoPro**.
  * Si configuras **MercadoPagoPro**, el comprador realizará el pago en el entorno de Mercado Pago, a través de un formulario presentado directamente en tu tienda y tendrá acceso a todos los métodos de pago disponibles en la plataforma.
  * Si configuras **MercadoPagoWallet**, el comprador utilizará su billetera de Mercado Pago. Este modo es exclusivo para compradores registrados en Mercado Pago o Mercado Libre y sugerimos usarlo si eliges **Plan de Pago con Tarjeta de Crédito**.
  * Si configuras **MercadoPagoOff**, puedes contar con medios de pago en efectivo. ----[mlb]----
* **Boleto Bancário:** se refiere a transacciones con boleto bancário **exclusivamente**.
* **Pix:** se refiere a transacciones con Pix a través de **Código QR** o **Copiar y pegar**. Para configurar este plan de pago, debes tener una clave Pix registrada en tu cuenta de Mercado Pago. Para obtener más información sobre cómo crear tu clave Pix, haz clic [aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required). ------------

> NOTE
>
> Nota
> 
> También puedes configurar **condiciones especiales** de pago. Haz clic [aquí](https://help.vtex.com/es/tutorial/condicoes-especiais--tutorials_456?&utm_source=admin) para obtener más información.

![Configurar planes de pago](vtex/paymentconditions-imagenv2-es.gif)

En la pantalla siguiente, debes:

1. Escribir el **Nombre de la Regla**. Puedes escribir cualquier nombre para identificarla fácilmente.
2. Seleccionar **MercadoPagoV2** en la lista que ofrece el campo `Proceso con la afiliación`.
3. Activar la condición de pago desde el campo `Status`. Debe estar activado para que tu selección en el campo `Proceso con la afiliación` funcione.
4. Guardar tus cambios haciendo clic en `Salva`.

![Configurar planes de pag con tarjeta de crédito](vtex/paymentconditions-cc-imagenv2-es.gif)

> WARNING
>
> Importante
> 
> Los cambios en las Condiciones de pago pueden demorar hasta 10 minutos en aplicarse.
> <br>
> Si tu tienda tiene layout personalizado en el checkout, al agregar un nuevo plan de pago, verifica si resulta necesario realizar nuevas personalizaciones.

Para obtener más información sobre cómo configurar los términos de pago en VTEX, haz clic [aquí](https://help.vtex.com/es/tutorial/condicoes-de-pagamento--tutorials_455).

> NOTE
>
> Nota
>
> Las tasas e impuestos deben configurarse en la plataforma, ya que Mercado Pago los procesa de acuerdo a la información proporcionada por VTEX. Haz clic [aquí](https://help.vtex.com/es/tutorial/creando-la-tasaimpuesto/) para obtener más información.
> <br>
> <br>
> Si tienes dificultades durante tu integración, consulta nuestro [lista de errores](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/unofficial/vtex/common-errors) y nuestro documento sobre [logs de VTEX](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/unofficial/vtex/logs).

> LEFT_BUTTON_REQUIRED_ES
>
> Device Fingerprint
>
> Aprende a configurar fingerprint.
>
> [Device Fingerprint](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/unofficial/vtex/device-fingerprint)