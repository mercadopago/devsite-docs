# Crear usuario de prueba

La etapa de prueba te permite analizar si la integración se realizó correctamente y si los pagos se están procesando sin errores.

Para realizar la prueba de integración se necesitarán usuarios de prueba que permitan evaluar el funcionamiento del checkout a través de flujos de pago en un entorno idéntico al de la integración.

A continuación, enumeramos los dos tipos de usuarios necesarios para realizar el flujo de pago de Checkout Pro.

* **Vendedor:** Esta es la cuenta que utilizas para configurar la aplicación y las credenciales para la facturación.
* **Comprador:** Esta es la cuenta que utilizas para probar el proceso de compra.

Para crear un usuario de prueba, envía tu **credencial de producción** _Access token_ al endpoint [/users/test](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/test_user/_users_test_user/post) y ejecuta la solicitud.

> NOTE
>
> Importante
>
> Es posible generar hasta 10 cuentas de usuario de prueba al mismo tiempo. Por lo tanto, recomendamos guardar el correo electrónico y la contraseña de cada uno. Los usuarios de prueba caducan después de 60 días sin actividad en Mercado Pago. Tanto el comprador como el vendedor deben ser usuarios de prueba.

> PREV_STEP_CARD_ES
>
> Billetera Mercado Pago   
>
> Vea cómo configurar pagos con Billetera Mercado Pago. 
>
> [Billetera Mercado Pago](/developers/es/docs/checkout-pro/checkout-customization/mp-wallet)

> NEXT_STEP_CARD_ES
>
> Compra de prueba  
>
> Aprenda cómo hacer una compra de prueba y asegúrese de que la integración funcione correctamente. 
>
> [Compra de prueba](/developers/es/docs/checkout-pro/integration-test/test-purchase)