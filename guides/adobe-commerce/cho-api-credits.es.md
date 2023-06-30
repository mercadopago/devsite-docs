----[mlb]----
# Financiación vía Pix en hasta 12 veces
Con Checkout Transparente, es posible ofrecer **Financiación vía Pix en hasta 12 veces**. Con esta línea de crédito, administrada por Mercado Pago, el dinero se acredita en su totalidad en la cuenta del vendedor, mientras que el cliente puede optar por pagar en hasta 12 pagos fijos mensuales, sin necesidad de contar con una tarjeta.
Actualmente, Financiación vía Pix en hasta 12 veces es ofrecido en nuestro [Checkout Pro](/developers/es/docs/checkout-pro/landing), y ahora también es posible acceder directo desde el checkout de la tienda vía Checkout Transparente.


Para configurar Financiación vía Pix en hasta 12 veces en el checkout de la tienda, sigue los pasos a continuación.
1. En el Panel de Control de la tienda, accede a **Stores> Configuration> Sales>Payments Methods**.
2. En **Other Payments Methods**, haz click en **Configure** dentro del plugin de Mercado Pago.
3. Selecciona la opción **Financiación vía Pix en hasta 12 veces** y configura los campos de acuerdo a las indicaciones siguientes.
   1. El campo **Activado** define si el medio de pago estará disponible en el checkout de la tienda. Selecciona “Sí”, o deja el valor definido por sistema en caso de que coincida.
   2. En **Título**, define el nombre con el que el medio de pago será exhibido en el checkout de la tienda. Recomendamos usar “Parcelamento via Pix em até 12x”.
   3. En **Plazo límite para el pago**, elige el tiempo que el cliente tiene para finalizar su pago.
   4. En **Medio de pago finalizado**, elige "Redireccionamiento" para que el cliente sea redireccionado al sitio de Mercado Pago y pueda finalizar su pago financiado sin tarjeta.

![Pantalla de configuración del medio de pago](/images/adobe-commerce/cho-api-config2-mlb-pt.png)

## Definiciones comunes de medios de pago
En la sección **Common Payment Method Definitions**, puedes definir algunas características generales de la plataforma para el uso de Checkout Transparente. Completa cada uno de los campos solicitados de acuerdo con la descripción a continuación.
1. En la opción **Monto mínimo del pedido**, define el valor mínimo para que un pedido pueda ser procesado. Deberás ingresar números enteros. El medio de pago solo se mostrará al consumidor si el valor del pedido es igual o mayor al que has indicado.
2. En la opción **Monto máximo del pedido**, define un valor máximo para que el pedido pueda ser procesado. Deberás ingresar números enteros. El medio de pago solo se mostrará al consumidor si el valor del pedido es igual o menor al que has indicado.
3. En la opción **Pago de países específicos**, selecciona los países que pueden utilizar este medio de pago. Solo los consumidores cuya dirección de pago sea de uno de los países que has seleccionado podrán ver esta forma de pago.
4. En la opción **Orden de visualización**, define un orden creciente de exhibición de este medio de pago en el checkout. Por ejemplo, si es 1, cualquier otro medio de pago con un orden mayor se mostrará después de él.

![Pantalla de definiciones comunes de medios de pago](/images/adobe-commerce/cho-api-credits-definitions-mlb-pt.png)

Haz clic en **Guardar configuración** para guardar los cambios, ¡y listo! Ya puedes ofrecer Financiación vía Pix en hasta 12 veces como medio de pago en el checkout de tu tienda.
------------


----[mla]----
# Hasta 12 cuotas sin tarjeta con Mercado Pago
Con Checkout API, es posible ofrecer **Hasta 12 cuotas sin tarjeta con Mercado Pago**. Con esta línea de crédito, administrada por Mercado Pago, el dinero se acredita en su totalidad en la cuenta del vendedor, mientras que el cliente puede optar por pagar en hasta 12 pagos fijos mensuales, sin necesidad de contar con una tarjeta.
Actualmente, Hasta 12 cuotas sin tarjeta con Mercado Pago es ofrecido en nuestro [Checkout Pro](/developers/es/docs/checkout-pro/landing), y ahora también es posible acceder directo desde el checkout de la tienda via Checkout API.


Para configurar Hasta 12 cuotas sin tarjeta con Mercado Pago en el checkout de la tienda, sigue los pasos a continuación.
1. En el Panel de Control de la tienda, accede a **Stores> Configuration> Sales>Payments Methods**.
2. En **Other Payments Methods**, haz click en **Configure** dentro del plugin de Mercado Pago.
 ![Pantalla con las opciones dentro del plugin de Mercado Pago](/images/adobe-commerce/cho-api-credits-config-mla-es.png)
3. Selecciona la opción **Hasta 12 cuotas sin tarjeta con Mercado Pago** y configura los campos de acuerdo a las indicaciones siguientes.
 1. El campo **Activado** define si el medio de pago estará disponible en el checkout de la tienda. Selecciona “Sí”, o deja el valor definido por sistema en caso de que coincida.
 2. En **Título**, define el nombre con el que el medio de pago será exhibido en el checkout de la tienda. Recomendamos usar “Hasta 12 cuotas sin tarjeta con Mercado Pago”.
 3. En **Plazo límite para el pago**, elige el tiempo que el cliente tiene para finalizar su pago.
 4. En **Medio de pago finalizado**, elige "Redireccionamiento" para que el cliente sea redireccionado al sitio de Mercado Pago y pueda finalizar su pago financiado sin tarjeta.

![Pantalla de configuración del medio de pago](/images/adobe-commerce/cho-api-credits-config2-mla-es.png)

## Definiciones comunes de medios de pago
En la sección **Common Payment Method Definitions**, puedes definir algunas características generales de la plataforma para el uso de Checkout API. Completa cada uno de los campos solicitados de acuerdo con la descripción a continuación.
1. En la opción **Monto mínimo del pedido**, define el valor mínimo para que un pedido pueda ser procesado. Deberás ingresar números enteros. El medio de pago solo se mostrará al consumidor si el valor del pedido es igual o mayor al que has indicado.
2. En la opción **Monto máximo del pedido**, define un valor máximo para que el pedido pueda ser procesado. Deberás ingresar números enteros. El medio de pago solo se mostrará al consumidor si el valor del pedido es igual o menor al que has indicado.
3. En la opción **Pago de países específicos**, selecciona los países que pueden utilizar este medio de pago. Solo los consumidores cuya dirección de pago sea de uno de los países que has seleccionado podrán ver esta forma de pago.
4. En la opción **Orden de visualización**, define un orden creciente de exhibición de este medio de pago en el checkout. Por ejemplo, si es 1, cualquier otro medio de pago con un orden mayor se mostrará después de él.

![Pantalla de definiciones comunes de medios de pago](/images/adobe-commerce/cho-api-credits-definitions-mla-es.png)

Haz clic en **Guardar configuración** para guardar los cambios, ¡y listo! Ya puedes ofrecer Hasta 12 cuotas sin tarjeta con Mercado Pago como medio de pago en el checkout de tu tienda.
------------


----[mlm]----
# Hasta 12 meses sin tarjeta con Mercado Pago
Con Checkout API, es posible ofrecer **Hasta 12 meses sin tarjeta con Mercado Pago**. Con esta línea de crédito, administrada por Mercado Pago, el dinero se acredita en su totalidad en la cuenta del vendedor, mientras que el cliente puede optar por pagar en hasta 12 pagos fijos mensuales, sin necesidad de contar con una tarjeta.
Actualmente, Hasta 12 meses sin tarjeta con Mercado Pago es ofrecido en nuestro [Checkout Pro](/developers/es/docs/checkout-pro/landing), y ahora también es posible acceder directo desde el checkout de la tienda via Checkout API.


Para configurar Hasta 12 meses sin tarjeta con Mercado Pago en el checkout de la tienda, sigue los pasos a continuación.
1. En el Panel de Control de la tienda, accede a **Stores> Configuration> Sales>Payments Methods**.
2. En **Other Payments Methods**, haz click en **Configure** dentro del plugin de Mercado Pago.
3. Selecciona la opción **Hasta 12 meses sin tarjeta con Mercado Pago** y configura los campos de acuerdo a las indicaciones siguientes.
   1. El campo **Activado** define si el medio de pago estará disponible en el checkout de la tienda. Selecciona “Sí”, o deja el valor definido por sistema en caso de que coincida.
   2. En **Título**, define el nombre con el que el medio de pago será exhibido en el checkout de la tienda. Recomendamos usar “Hasta 12 meses sin tarjeta con Mercado Pago”.
   3. En **Plazo límite para el pago**, elige el tiempo que el cliente tiene para finalizar su pago.
   4. En **Medio de pago finalizado**, elige "Redireccionamiento" para que el cliente sea redireccionado al sitio de Mercado Pago y pueda finalizar su pago financiado sin tarjeta.

![Pantalla de configuración del medio de pago](/images/adobe-commerce/cho-api-credits-config2-mlm-es.png)

## Definiciones comunes de medios de pago
En la sección **Common Payment Method Definitions**, puedes definir algunas características generales de la plataforma para el uso de Checkout API. Completa cada uno de los campos solicitados de acuerdo con la descripción a continuación.
1. En la opción **Monto mínimo del pedido**, define el valor mínimo para que un pedido pueda ser procesado. Deberás ingresar números enteros. El medio de pago solo se mostrará al consumidor si el valor del pedido es igual o mayor al que has indicado.
2. En la opción **Monto máximo del pedido**, define un valor máximo para que el pedido pueda ser procesado. Deberás ingresar números enteros. El medio de pago solo se mostrará al consumidor si el valor del pedido es igual o menor al que has indicado.
3. En la opción **Pago de países específicos**, selecciona los países que pueden utilizar este medio de pago. Solo los consumidores cuya dirección de pago sea de uno de los países que has seleccionado podrán ver esta forma de pago.
4. En la opción **Orden de visualización**, define un orden creciente de exhibición de este medio de pago en el checkout. Por ejemplo, si es 1, cualquier otro medio de pago con un orden mayor se mostrará después de él.

![Pantalla de definiciones comunes de medios de pago](/images/adobe-commerce/cho-api-credits-definitions-mla-es.png)

Haz clic en **Guardar configuración** para guardar los cambios, ¡y listo! Ya puedes ofrecer Hasta 12 meses sin tarjeta con Mercado Pago como medio de pago en el checkout de tu tienda.
------------