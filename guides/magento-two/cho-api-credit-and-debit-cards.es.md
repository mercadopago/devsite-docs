# Tarjetas de crédito y débito

1. En el Panel de Control de la tienda, ve a **Stores > Configuration > Sales > Payment Methods**.
2. En el plugin de Mercado Pago, haz clic en **Configure**.
3. Haz clic en la pestaña **Checkout Transparent** y luego en **Credit and debit cards**, y completa los campos de acuerdo con las siguientes descripciones.
    1. En **Enabled**, selecciona entre "Yes" o "No". Esta opción define si el método de pago estará disponible para su uso.
    2. En **Title**, define el título de cómo se mostrará la forma de pago en el checkout de la tienda.
    3. En **Enable vault**, selecciona para permitir que el consumidor guarde o utilice la tarjeta en el futuro.
    4. En el campo **Payment Action**, selecciona entre **Authorization for future capture** o **Authorization for immediate capture**. Esta configuración definirá cómo Mercado Pago procesará el pedido, siendo "Authorization for immediate capture" un flujo en el que no se requiere ninguna acción futura (en este escenario el cliente paga y Mercado Pago retira el valor del saldo de la tarjeta). Con la opción "Authorization for future capture", Mercado Pago solo sensibilizará el valor en el saldo del cliente, y sólo después de su acción manual es que el valor se capturará de hecho.
    5. En **Use Binary Mode**, selecciona entre **Yes, Processed Order Synchronous** o **No, Processed Order Asynchronous**. Este campo define si se aceptarán pagos donde el estado final se recibe de inmediato.

![](/images/magento-two/credito_e_debito.png)


----[mlb]----


------------


## Definiciones comunes de medios de pago

En la sección **Common Payment Method Definitions**, es posible definir algunas características generales de la plataforma para el uso de Checkout Pro. Completa cada uno de los campos solicitados de acuerdo con sus respectivas descripciones.

1. En la opción **Minimum order total**, define el valor mínimo para que un pedido pueda ser procesado. Deberás ingresar números enteros. El medio de pago solo se mostrará al consumidor si el valor del pedido es igual o mayor al que has indicado.
2. En la opción **Maximum order amount**, define un valor máximo para que el pedido pueda ser procesado. Deberás ingresar números enteros. El medio de pago solo se mostrará al consumidor si el valor del pedido es igual o menor al que has indicado.
3. En la opción **Payment From Specific Countries**, selecciona los países que pueden utilizar este medio de pago. Solo los consumidores cuya dirección de pago sea de uno de los países que has seleccionado podrán ver esta forma de pago.
4. En la opción **Sort Order**, define un orden creciente de exhibición de este medio de pago en el checkout. Cuanto menor sea el número que ingreses, menor será su posición entre todas las demás. Por ejemplo, si es 1, cualquier otro medio de pago con un orden mayor se mostrará después de él.
5. Haz clic en **Save Configuration** para guardar los cambios realizados.


## Installment and interest

La configuración de financiación e intereses se realiza directamente en tu cuenta de Mercado Pago. Para ello, sigue los pasos que se describen a continuación.

1. Haz clic en el botón **Set up installments and interest** e inicia sesión en tu cuenta de vendedor de Mercado Pago.
2. Selecciona la opción **QR y pagos online**, habilita el pago en veces y selecciona la cantidad que deseas ofrecer en el checkout. Las opciones van desde 1 hasta 12 veces.

![Installment and interest](/images/magento-two/parcelamento.gif)

¡Listo! Finalizadas estas etapas, la financiación en el checkout estará configurada y lista para procesar ventas. 