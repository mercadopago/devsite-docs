Se requieren cuentas de prueba para verificar que el proceso de incorporación se realizó correctamente. Tienen las mismas características que una cuenta real de Mercado Pago, lo que te permite probar el funcionamiento de las integraciones que estás desarrollando.

Para realizar la prueba, debes tener al menos dos cuentas:

* **Usuario/Vendedor**: cuenta requerida para **configurar la aplicación y las credenciales de facturación**. Esta es tu cuenta de usuario.
* **Comprador**: cuenta necesaria para **probar el proceso de compra**.

Además de estas cuentas, también es importante utilizar las [tarjetas de prueba](/developers/es/guides/additional-content/testing/test-cards) para probar la integración de pago y simular el proceso de compra, así como el **saldo en la cuenta de Mercado Pago del usuario de prueba**. Te mostramos más detalles a continuación.

![testuser](test-user/test-user-admin-es.gif)

Para crear cuentas y probar cómo funcionan las integraciones, sigue los pasos a continuación.

1. En el [Devsite](/developers/es/docs), accede al menú **Tus integraciones > Cuentas de prueba** y haz clic en el botón **Crear cuenta de prueba**.
2. En la pantalla "Crear nueva cuenta", ingresa una descripción para la identificación de la cuenta. Ejemplo: "Vendedor - Tienda 1".
3. Luego, seleccione el **país de operación** para la cuenta. Esta información no se puede editar posteriormente y, además, los usuarios Comprador y Vendedor deben ser del mismo país.
4. Rellena una **cantidad de dinero ficticio** que te servirá de referencia para probar tus aplicaciones. Este monto aparecerá como saldo en la cuenta de Mercado Pago del usuario de prueba y podrá ser utilizado para simular pagos, así como con tarjeta de crédito.
5. Haz clic en **Crear cuenta de prueba**.

> Puede generar hasta 15 cuentas de usuario de prueba al mismo tiempo y aún no es posible eliminarlas.

¡Listo! La cuenta de prueba se ha creado y se mostrará en la tabla con la siguiente información:

* **País**: lugar de origen de la cuenta seleccionada en tu registro.
* **Identificación de cuenta**: descripción para la identificación de la cuenta de prueba.  
* **Usuario**: nombre de usuario de la cuenta de prueba generado automáticamente. Este nombre de usuario se utiliza para iniciar sesión con el usuario de prueba.
* **Contraseña**: contraseña de acceso a la cuenta de usuario de prueba generada automáticamente. Para generar una nueva contraseña, haz clic en los 3 puntos verticales al final de la fila de la tabla y selecciona la opción **Generar nueva contraseña**.
* **Creado en**: fecha en que se creó la cuenta de prueba.

> NOTE
>
> Importante
>
> Para editar la **Idemntificación de cuenta** o **agregar más dinero ficticio** para probar sus aplicaciones, haz clic en los **3 puntos verticales** al final de la fila de la tabla y seleccione la opción **Editar datos**.