# Crear usuario de prueba

El paso de prueba te permite analizar si la integración se realizó correctamente y si la adquisición de suscripción está funcionando sin errores.

Para realizar la prueba de integración se necesitarán usuarios de prueba que permitan evaluar el funcionamiento de la integración a través de flujos de pago en un entorno idéntico al de la integración.

A continuación enumeramos los dos tipos de usuarios necesarios para realizar las pruebas.

* **Vendedor:** esta es la cuenta que utiliza para configurar la aplicación y las credenciales de facturación.
* **Comprador:** esta es la cuenta que utiliza para probar el proceso de compra.

Para crear un usuario de prueba, envía un POST con su **credencial de producción** _Access token_ al [/users/test](/developers/es/reference/test_user/_users_test_user/post) y ejecuta la solicitud.
