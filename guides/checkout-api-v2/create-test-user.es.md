# Crear usuarios de prueba

La etapa de prueba le permite analizar si la integración se realizó correctamente y si los pagos se están procesando sin errores.

Para realizar la prueba de integración se necesitarán usuarios de prueba que permitan evaluar el funcionamiento del checkout a través de flujos de pago en un entorno idéntico al de la integración.

A continuación, enumeramos los dos tipos de usuarios necesarios para probar el flujo de pago del Checkout API.

* **Vendedor:** Es la cuenta que usas para configurar la aplicación y credenciales para el cobro.
* **Comprador:** Es la cuenta que usas para probar el proceso de compra.

Para crear un usuario de prueba, envíe su **credencial de producción** _Access token_ al endpoiunt [/users/test_user](/developers/es/reference/test_user/_users_test_user/post) y ejecute la solicitud.

> WARNING
>
> Importante
>
> Puedes generar hasta 10 cuentas de usuarios de prueba en simultáneo. Por eso, te recomendamos guardar el email y password de cada uno. Además, los usuarios de prueba caducan luego de 60 días sin actividad en Mercado Pago. Tanto el comprador como el vendedor deben ser usuarios de prueba.



