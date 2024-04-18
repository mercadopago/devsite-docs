# Hacer compra de prueba

La etapa de prueba permite analizar si la integración se realizó correctamente y si los pagos se están procesando sin errores, evitando que aparezcan errores al poner el checkout a disposición de los compradores finales.

Para realizar una compra de prueba, debe usar las **credenciales de prueba** de su **usuario de producción**. Para obtenerlos, vaya a **Detalles de la aplicación > Credenciales** dentro del [Panel del desarrollador](/developers/panel/app) o en tu cuenta de Mercado Pago, accediendo a [Tu negocio > Configuraciones > Gestión y administración > Credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).

Con las credenciales configuradas, siga los pasos a continuación para realizar la compra de prueba.

1. Inicie la integración configurada con sus **Credenciales de prueba**.
2. Ingresa tu correo (recordando que debe ser diferente al correo que usas en Mercado Pago).
4. Ingresa los datos de una de nuestras [tarjetas de prueba](/developers/es/docs/checkout-api/additional-content/your-integrations/test/cards).
3. Confirma la compra.

¡Listo! Una vez que se completen estos pasos, la integración estará completa y podrá usar sus credenciales de producción para usar el ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API ------------. Para más información, consulte la sección [Requisitos para salir a producción](/developers/es/docs/checkout-api/integration-test/go-to-production-requirements)