# Definiciones comunes de métodos de pago

En la sección **Common Payment Method Definitions**, puedes definir algunas características generales de la plataforma para el uso de Pix en Checkout. Completa cada uno de los campos solicitados según la descripción a continuación.

1. En la opción **Minimum order total**, define el valor mínimo para que un pedido pueda ser procesado. En este campo, ingresa números enteros. El método de pago solo se mostrará al consumidor si el valor del pedido es igual o mayor al que especificaste.
2. En **Maximum order amount**, define un valor máximo para que el pedido sea procesado. En este campo, ingresa números enteros. El método de pago solo se mostrará al consumidor si el valor del pedido es igual o menor al que especificaste.
3. En **Payment From Specific Countries**, seleccione los países que pueden usar determinado método de pago. Solo los consumidores cuya dirección de pago sea de uno de los países que haya seleccionado podrán ver esta forma de pago.
4. En la opción **Sort Order**, define un orden creciente de visualización de este método de pago en el checkout. Cuanto menor sea el número que ingreses, menor será la posición de este método de pago en comparación con los demás. Por ejemplo, si ingresas 1, cualquier otro método de pago con un orden mayor se mostrará después de él.

![Common definitions](/images/magento-two/definicoes_comuns.png)

Una vez que hayas completado estos campos, el pago a través de Pix estará habilitado en el Checkout.