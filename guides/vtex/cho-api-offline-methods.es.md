# Medios de pago offline

----[mlb]----

Configurando Checkout Transparente en tiendas VTEX, puedes ofrecer pagos por medios offline, como Boleto Bancário ou Pix.

> WARNING
>
> Pagos con Pix
>
> Para ofrecer Pix como método de pago, debes asegurarte, primero, de tener configurada tu llave Pix. Si no lo has hecho todavía, sigue las instrucciones proporcionadas en [nuestra documentación](https://www.mercadopago.com.br/ajuda/17843).

------------

----[mco]----

Configurando Checkout API en tiendas VTEX, puedes ofrecer pagos por medios offline, como PSE ou Efecty.

> WARNING
>
> Pagos con PSE
>
> Para ofrecer PSE como método de pago, debes asegurarte, primero, de instalar la **App de PSE desarrollada por VTEX**. Si todavía no lo has hecho, dirígete a **Configuración de Cuenta > Aplicaciones > Tienda de Aplicaciones** y busca por **Banks for PSE**. 
> <br>
> En caso de no encontrar la App en la tienda, debes solicitar su instalación al equipo de VTEX a través de un ticket en [Support VTEX](https://help.vtex.com/es/support).

------------

----[mla]----

Configurando Checkout API en tiendas VTEX, puedes ofrecer pagos por medios offline, como Pago Fácil, Rapipago, Red Link ou Provincia Net.

------------

----[mlm]----

Configurando Checkout API en tiendas VTEX, puedes ofrecer pagos por medios offline, como Oxxo, Paycash, Banamex ou Bancomer.
------------


----[mlu]----

Configurando Checkout API en tiendas VTEX, puedes ofrecer pagos por medios offline, como Abitab ou Redpagos.
------------

----[mlc]----

Configurando Checkout API en tiendas VTEX, puedes ofrecer pagos por medios offline, como Wip.
------------

----[mpe]----

Configurando Checkout API en tiendas VTEX, puedes ofrecer pagos por medios offline, como Pago Efectivo.
------------


Para configurar estos medios de pago, dirígete al panel de administración de tu plataforma VTEX> **Pagos> Configuración > Planes de pago**. Luego, sigue los pasos a continuación:

1. Haz clic en el botón "+ (Agregar nuevo plan de pago para ...)”.
2. Dentro de la categoría **Otro**, busca por el medio de pago offline que estás queriendo ofrecer. Puedes elegir más de uno, pero deberás realizar las configuraciones siguientes de manera individual.
3. Completa los campos que te mostrará la pantalla siguiente:
    * Escribe el **Nombre de la Regla**, que te permitirá identificar este medio de pago.
    * En **Proceso con la afiliación**, selecciona **MercadoPagoV2**. 
    * Activa la condición de pago desde el campo **Status**, utilizando el botón slider. 

4. Haz clic en **Guardar** para activar la configuración.

![Configurar condições de pagamento](/images/vtex/paymentconditions-imagenv2-pt.gif)

> WARNING
>
> Importante
>
> Los cambios en las condiciones de pago pueden demorar hasta 10 minutos en aplicarse.