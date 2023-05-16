# Dos tarjetas de crédito y débito
----[mlb]----
Para habilitar el pago vía dos tarjetas de crédito y débito en el Checkout Transparente, sigue los siguientes pasos:
------------

----[mla, mpe, mco, mlm, mco, mlu, mlc]----
Para habilitar el pago vía dos tarjetas de crédito y débito en el Checkout API, sigue los siguientes pasos:
------------

1. En el Panel de Control de la tienda, accede a **Stores > Configuration > Sales > Payment Methods**.
2. En el plugin de Mercado Pago, haz clic en **Configure**.
3. Selecciona la pestaña **Checkout Transparent**.
4. Haz clic en **Two debit and credit cards** y completa los campos de acuerdo con las descripciones a continuación:

    1. En **Enabled**, elige entre "Yes" o "No". Esta opción define si el método de pago estará disponible para su uso.
    2. En **Title**, define el título de cómo se mostrará la forma de pago en el checkout de la tienda.
    3. En **Enable vault**, selecciona para permitir que el consumidor guarde o use la tarjeta en el futuro.
    4. En el campo **Payment Action**, selecciona entre **Authorization for future capture** o **Authorization for immediate capture**. Esta configuración definirá cómo Mercado Pago procesará el pedido, siendo "Authorization for immediate capture" un flujo en el que no se requiere ninguna acción futura (en este escenario el cliente paga y Mercado Pago retira el valor del saldo de la tarjeta). En cambio, para la opción "Authorization for future capture", Mercado Pago solo sensibilizará el valor en el saldo del cliente y sólo después de su acción manual es que el valor será capturado de hecho.

![Two cards](/images/magento-two/dois_cartoes.png)

Al finalizar el llenado de estos campos, el pago vía tarjeta habrá sido habilitado en el Checkout Transparente. Haz clic en **Save Configuration** para guardar los cambios realizados o, si lo prefieres, sigue al siguiente paso y configura el pago a plazos y los intereses para tarjetas.


## Definiciones comunes de medios de pago

[TXTSNIPPET][/guides/snippets/test-integration/adobe-commerce-common-definitions]

## Plazos e intereses

La configuración de pago a plazos e intereses se realiza directamente en tu cuenta Mercado Pago. Para ello, sigue los pasos descritos a continuación.

1. Haz clic en el botón **Set up installments and interest** e inicia sesión en tu cuenta de vendedor de Mercado Pago.
2. Selecciona la opción **Código QR y pagos en línea**, habilita el pago a plazos y selecciona el número de cuotas que deseas ofrecer en el Checkout. Las opciones van de 1 a 12 veces.

![Installment and interest](/images/magento-two/parcelamento.gif)

¡Listo! Finalizadas estas etapas, el pago a plazos en el checkout estará configurado y listo para procesar ventas.