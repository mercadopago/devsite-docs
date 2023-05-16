# Tarjetas de crédito y débito

1. En el Panel de Control de la tienda, ve a **Stores > Configuration > Sales > Payment Methods**.
2. En el plugin de Mercado Pago, haz clic en **Configure**.
3. Haz clic en la pestaña **Checkout Transparent** y luego en **Credit and debit cards**, y completa los campos de acuerdo con las siguientes descripciones.
    1. En **Enabled**, selecciona entre "Yes" o "No". Esta opción define si el método de pago estará disponible para su uso.
    2. En **Title**, define el título de cómo se mostrará la forma de pago en el checkout de la tienda.
    3. En **Enable vault**, selecciona para permitir que el consumidor guarde o utilice la tarjeta en el futuro.
    4. En el campo **Payment Action**, selecciona entre **Authorization for future capture** o **Authorization for immediate capture**. Esta configuración definirá cómo Mercado Pago procesará el pedido, siendo "Authorization for immediate capture" un flujo en el que no se requiere ninguna acción futura (en este escenario el cliente paga y Mercado Pago retira el valor del saldo de la tarjeta). Con la opción "Authorization for future capture", Mercado Pago solo sensibilizará el valor en el saldo del cliente, y sólo después de su acción manual es que el valor se capturará de hecho.
    5. En **Use Binary Mode**, selecciona entre **Yes, Processed Order Synchronous** o **No, Processed Order Asynchronous**. Este campo define si se aceptarán pagos donde el estado final se recibe de inmediato.

![](/images/adobe-commerce/credito_e_debito.png)


----[mlb]----
## Captura de datos del cliente en el formulario de pago

Esta función permite capturar documentos de clientes a partir de un campo adicional en el formulario de pago. Si la tienda aún no captura estos datos, simplemente seleccione la opción **Enable** en **Capture document identification**. 

La activación de esta funcionalidad proporciona la inserción automática del CPF del cliente en el formulario de pago, optimizando la experiencia de llenado de datos.


> WARNING
>
> Importante
>
> Nuestro módulo intentará capturar la información del campo `vat_id` de tu tienda. Si no lo encuentra, sobrescribirá su configuración, ya que este es un valor obligatorio para el pago.

------------

## Definiciones comunes de medios de pago

[TXTSNIPPET][/guides/snippets/test-integration/adobe-commerce-common-definitions]

## Plazos e intereses

La configuración de financiación e intereses se realiza directamente en tu cuenta de Mercado Pago. Para ello, sigue los pasos que se describen a continuación.

1. Haz clic en el botón **Set up installments and interest** e inicia sesión en tu cuenta de vendedor de Mercado Pago.
2. Selecciona la opción **QR y pagos online**, habilita el pago en veces y selecciona la cantidad que deseas ofrecer en el checkout. Las opciones van desde 1 hasta 12 veces.

![Installment and interest](/images/adobe-commerce/parcelamento.gif)

¡Listo! Finalizadas estas etapas, la financiación en el checkout estará configurada y lista para procesar ventas. 