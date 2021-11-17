# Configura planes de pago

Los **planes pago** son los métodos de pago que se muestran en el sitio web para la finalización de la compra. Permiten la configuración de cuotas, intereses, condiciones especiales, etc.

Luego de haber creado tu afiliación con **MercadoPagoV2**, debes configurar los **planes de pago** que se ofrecerán a los compradores.

> WARNING
>
> Importante
>
> Verifica en tu tienda de aplicaciones VTEX que la App **Mercado Pago Payment APP** este instalada para usar las condiciones de pago **MercadoPagoPro, MercadoPagoWallet y MercadoPagoOff** o solicita la instalación por parte del equipo de VTEX a través de un ticket en [Support VTEX](https://help.vtex.com/es/support).

La configuración de los **planes de pago** se realiza en la pestaña **Planes de pago** del menú **Configuración** en el módulo **Pagos** en el portal del administrador de la plataforma VTEX.

En esta pestaña, debes hacer clic en el botón "+" (*Agregar nuevo plan de pago para ...*) y seleccionar uno de los siguientes planes de pago:

* **Tarjeta de Crédito:** se refiere a transacciones con tarjeta de crédito. Configurar planes de pago con **tarjeta de crédito** requiere que selecciones la marca de tarjeta de crédito que deseas agregar. [Puedes hacer clic aquí para descubrir que marcas de tarjeta de crédito puedes seleccionar](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/unofficial/vtex/payment-methods). Además, su configuración puede requerir que completes campos adicionales a los campos comunes a todos los planes de pago, dependiendo de si seleccionas **A Vista** o **En Cuotas**. Para obtener más información sobre cómo configurar las cuotas en VTEX, haz clic [aquí](https://help.vtex.com/es/tutorial/condicoes-de-pagamento--tutorials_455#parcelado-sem-juros).
* **Tarjeta de Débito:** se refiere a transacciones con tarjeta de débito.
* **Otro:** puede referirse a transacciones con **MercadoPagoOff**, **MercadoPagoWallet**, o **MercadoPagoPro**.
  * Si configuras **MercadoPagoPro**, el comprador pagará en el entorno de Mercado Pago a través del formulario web modal directamente en tu tienda.
  * Si configuras **MercadoPagoWallet**, el comprador completa el pago con la billetera de Mercado Pago exclusivamente para usuarios registrados y una vez finalizado el proceso, regresará a tu tienda.
  * Si configuras **MercadoPagoOff**, puedes contar con Boleto Bancário y Pagos con PEC (en tiendas de lotería), utilizando su afiliación con MercadoPagoV2. ----[mlb]----
* **Boleto Bancário:** se refiere a transacciones con boleto bancário.
* **Pix:** Se refiere a las transacciones con Pix. Para configurar Pix en tu integración con Mercado Pago es necesario que tu clave Pix esté configurada. Para obtener más información sobre cómo crear tu clave Pix, haz clic [aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required). Si ya tienes tu clave Pix, el proceso sigue los pasos comunes a los otros planes de pago. ------------

> NOTE
>
> Nota
> 
> También puedes configurar **condiciones especiales** de pago. Haz clic [aquí](https://help.vtex.com/es/tutorial/condicoes-especiais--tutorials_456?&utm_source=admin) para obtener más información.

![Configurar planes de pago](/images/vtex/paymentconditions-es.gif)

En la pantalla siguiente, debes:

1. Escribir el **Nombre de la Regla**. Puedes escribir cualquier nombre para identificarla fácilmente.
2. Seleccionar **MercadoPagoV2** en la lista que ofrece el campo `Proceso con la afiliación`.
3. Activar la condición de pago desde el campo `Status`. Debe estar activado para que tu selección en el campo `Proceso con la afiliación` funcione.
4. Guardar tus cambios haciendo clic en `Salva`.

![Configurar planes de pag con tarjeta de crédito crédito](/images/vtex/paymentconditions-cc-es.gif)

> WARNING
>
> Importante
> 
> Los cambios en las Condiciones de pago pueden demorar hasta 10 minutos en aplicarse.

Para obtener más información sobre cómo configurar los términos de pago en VTEX, haz clic [aquí](https://help.vtex.com/es/tutorial/condicoes-de-pagamento--tutorials_455).

> NOTE
>
> Nota
> 
> Si tienes dificultades durante tu integración, consulta nuestro [lista de errores](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/unofficial/vtex/common-errors) y nuestro documento sobre [logs de VTEX](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/unofficial/vtex/logs).

> LEFT_BUTTON_REQUIRED_ES
>
> Device Fingerprint
>
> Aprende a configurar fingerprint.
>
> [Device Fingerprint](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/unofficial/vtex/device-fingerprint)