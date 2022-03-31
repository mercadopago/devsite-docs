# Prueba tu integración

Es muy importante que antes de salir a producción realices pruebas del flujo de pagos, verificando que las configuraciones que realizaste a nivel de preferencia se reflejen efectivamente en el checkout.
Debes verificar que:

+ La información del bien o servicio a pagar es correcta.
+ Se reconoce la cuenta del cliente, porque envías el e-mail.
+ Ofreces la formas de pago que deseas.
+ La experiencia de pagos es la adecuada y se informa el resultado del pago.

## Para probar la integración sigue estos pasos:

1. Configura la [Public Key]([FAKER][CREDENTIALS][URL]) del usuario de prueba en tu aplicación.
2. Crea la preferencia en tu servidor con el [Access Token]([FAKER][CREDENTIALS][URL]).
3. Completa los datos del formulario, ingresando los dígitos de una tarjeta de prueba. En fecha de expiración debes ingresar cualquier fecha posterior a la actual y en código de seguridad 3 o 4 dígitos dependiendo de la tarjeta.
4. Para **probar distintos resultados de pago**, ingresa el dato que quieras en el nombre del titular de la tarjeta. Vea más información en [Disponibilidad de productos y medios de pago.](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/localization/consult-payment-methods)