# Medios offline

----[mlb]----
Con Checkout Transparente, es posible ofrecer dos medios de pago offline: **boleto bancario** y **pago en agencias de lotería**.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
Con Checkout API, es posible ofrecer dos medios de pago offline: **boleto bancario** y **pago en agencias de lotería**.

------------

En esta sección encontrarás todos los pasos necesarios para configurar cada uno de ellos.


## Agencias de lotería

1. En el panel de control de la tienda, ve a **Stores > Configuration > Sales > Payment method**.
2. En el complemento de Mercado Pago, haz clic en **Configure**.
3. Haz clic en la pestaña **Checkout Transparent**.
4. En la opción **Lottery Houses**, completa los campos de acuerdo con las descripciones a continuación:
    1. En **Enabled**, elige entre "Yes" o "No". Esta opción define si el método de pago estará disponible para su uso.
    2. En **Title**, define cómo deseas que aparezca este método de pago en el checkout.
    3. En **Deadline for payment**, elige el tiempo que el cliente tiene para completar el pago.


## Boleto bancario

1. En el Panel de Control de la tienda, accede a **Stores > Configuration > Sales > Payment Methods**.
2. En el plugin de Mercado Pago, haz clic en **Configure**.
3. Haz clic en la pestaña **Checkout Transparent**.
4. En la opción Boleto bancario, completa los campos de acuerdo con las descripciones a continuación.
    1. En **Enabled**, elige entre "Yes" o "No". Esta opción define si el método de pago estará disponible para su uso.
    2. En **Title**, define la forma en que deseas que este medio de pago aparezca en el checkout.
    3. En **Deadline for payment**, elige el tiempo que el cliente tiene para completar el pago.


## Definiciones comunes de los medios de pago

----[mlb]----
En la sección **Common Payment Method Definitions**, puedes definir algunas características generales de la plataforma para el pago en agencias de lotería en Checkout Transparente. Completa cada uno de los campos solicitados de acuerdo con la descripción a continuación.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
En la sección **Common Payment Method Definitions**, puedes definir algunas características generales de la plataforma para el pago en agencias de lotería en Checkout API. Completa cada uno de los campos solicitados de acuerdo con la descripción a continuación.

------------

1. En la opción **Minimum order total**, define el valor mínimo para que se pueda procesar un pedido. En este campo, ingresa números enteros. El método de pago solo se mostrará al consumidor si el valor del pedido es igual o mayor al que informaste.
2. En **Maximum order amount**, define un valor máximo para que se procese el pedido. En este campo, ingresa números enteros. El método de pago solo se mostrará al consumidor si el valor del pedido es igual o menor al que informaste.
3. En **Payment From Specific Countries**, selecciona los países que pueden usar este medio de pago. Solo los consumidores cuya dirección de pago sea de uno de los países que seleccionaste podrán ver esta forma de pago.
4. En la opción **Sort Order**, define un orden ascendente de visualización de esta forma de pago en el checkout. Cuanto menor sea el número que ingreses, menor será la posición de esta forma de pago entre todas las demás. Por ejemplo, si es 1, cualquier otra forma de pago con un orden mayor se mostrará después de ella.
5. Haz clic en **Save Configuration** para guardar los cambios realizados.