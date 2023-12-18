# Medios offline (ticket)

----[mlb]----
Con **ticket**, ofrezca al comprador la opción de realizar pagos mediante medios de pago fuera de línea (boleto bancário y cajero automático), usando [Checkout Transparente](/developers/es/guides/checkout-api/landing).

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
Con **ticket**, ofrezca al comprador la opción de realizar pagos utilizando medios de pago fuera de línea (efectivo y cajero automático), utilizando la [Checkout API](/developers/es/guides/checkout-api/landing).

------------

Para integrar el método de pago, siga los pasos a continuación.

1. Ve al menú **Stores > Configuration > Sales > Payment Methods**.
2. Para activar los pagos con tarjeta acceda a la sección **Mercado Pago > Custom Checkout - Offline Payments Methods (Ticket)**.
3. Seleccione **Sí** para habilitar la experiencia de pagos fuera de línea en el pago de su tienda.
4. Si es necesario, **cambie el título del método de pago** que aparecerá para el comprador.
5. Si lo deseas, puedes personalizar un **banner** con los métodos de pago disponibles cambiando la URL de la imagen en cuestión. Por defecto, el módulo de Mercado Pago configurará un banner con los métodos de pago disponibles según tu país.
6. En el campo **Exclude Payment Methods**, seleccione solo los métodos de pago fuera de línea que desea aceptar en su tienda. De manera predeterminada, el módulo mostrará al comprador todos los métodos de pago de boletos y cajeros automáticos (ATM).
7. En **Checkout Position**, indique la posición en la que el método de pago estará disponible para el comprador en el flujo de pago.
8. Luego haga clic en **Save Config** para guardar sus preferencias.

