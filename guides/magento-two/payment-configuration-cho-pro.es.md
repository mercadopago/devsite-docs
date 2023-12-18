# Checkout Pro 
 
Con [Checkout Pro](/developers/es/guides/checkout-pro/landing), el comprador será dirigido desde la tienda al sitio web de Mercado Pago donde deberá completar los datos solicitados y realizar el pago. De esta manera, la transacción se procesa y completa fuera del entorno de su tienda. No es necesario que el comprador tenga una cuenta de Mercado Pago y, al finalizar la transacción, el comprador puede ser devuelto a tu tienda.
 
Para integrar Checkout Pro, sigue los pasos a continuación.
 
1. Ve al menú **Tiendas > Configuración > Ventas > Métodos de pago**.
2. Para activar los pagos con tarjeta, accede a la sección **Mercado Pago > Checkout Pro**.
3. Selecciona **Sí** para activar la experiencia de Mercado Pago para pagos con tarjeta en la caja de tu tienda. Por defecto, el método de pago con tarjeta ya está activado.
4. Si es necesario, **cambia el título del método de pago** que aparecerá para el comprador.
5. En **Auto Return**, indica si el comprador regresará automáticamente a tu tienda al finalizar el pago aprobado.
6. En el campo **Exclude Payment Methods**, deja sin marcar los métodos de pago que deseas aceptar en su tienda. De forma predeterminada, el módulo mostrará al comprador todos los métodos de pago disponibles para su país.
7. Establece el **número máximo de cuotas** aceptadas en el flujo de pago con tarjeta de crédito.
8. En el campo **Statement Descriptor**, ingresa el texto que identificará el pago en el estado de cuenta de la tarjeta. Esta característica no está disponible en todos los países.
9. Habilita **modo binario** para configurar el rechazo automático de pagos que no son aprobados instantáneamente por bancos u otros adquirentes. Cuando está habilitado, este modo de procesamiento solo dará como resultado un estado de pago `approved` ou` rejected`. No habrá estados intermedios como `in_proccess` ou` pending`.
10. Si lo deseas, puedes personalizar un **banner** con los métodos de pago disponibles cambiando la URL de la imagen en cuestión. Por defecto, el módulo de Mercado Pago configurará un banner con los métodos de pago disponibles según tu país.
11. En **Checkout Position**, indica la posición en la que el método de pago estará disponible para el comprador en el flujo de pago.
12. Haz clic en **Configurar cuota e interés** para [configurar en Mercado Pago](https://www.mercadopago.com.ar/costs-section#from-section=menu) la tarifa que se pagará en cada compra y además ofrecer cuotas sin intereses a tus clientes.
13. Haz clic en **Save Config** para guardar tus preferencias.