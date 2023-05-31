Utiliza cuentas de prueba para asegurar que tu integración soporta todos los flujos y escenarios posibles. Tienen las mismas características que una cuenta real de Mercado Pago, lo que te permite probar el funcionamiento de las integraciones que estás desarrollando.

Para realizar la prueba, debes tener al menos dos cuentas:

* **Vendedor**: cuenta requerida para **configurar la aplicación y las credenciales**. Esta es tu cuenta de usuario.
* **Comprador**: cuenta necesaria para **probar el proceso de compra**.

Además de estas cuentas, también es importante utilizar las [tarjetas de prueba](/developers/es/docs/testing/test-cards) para probar la integración de pago y simular el proceso de compra, así como el **saldo en la cuenta de Mercado Pago del usuario de prueba**. Te mostramos más detalles a continuación.

![testuser](test-user/create-test-users-es.png)

Para crear cuentas y probar el funcionamiento de las integraciones, sigue los siguientes pasos:

1. En el [Devsite](/developers/pt/docs), navega hasta **[Tus integraciones](/developers/panel/app)** y haz clic en la tarjeta correspondiente a tu aplicación.
2. En la página de la aplicación, ve a la sección **Cuentas de prueba** y haz clic en el botón **+ Crear cuenta de prueba**.
3. En la pantalla "Crear nueva cuenta", ingresa una descripción para identificar la cuenta. Por ejemplo: "Vendedor - tienda 1".
4. A continuación, selecciona el **país de operación** de la cuenta. Esta información **no se podrá editar más adelante**, y además, los usuarios Comprador y Vendedor deben ser del mismo país.
5. Ingresa un **valor ficticio en dinero** que servirá como referencia para probar tus aplicaciones. Este valor aparecerá como saldo en la cuenta de Mercado Pago del usuario de prueba y se podrá utilizar para simular pagos, al igual que con las [tarjetas de prueba](/developers/pt/docs/testing/test-cards).
6. Autoriza el uso de tus datos personales de acuerdo con la [Declaración de Privacidad](https://www.mercadopago.com.br/privacidade) y asegúrate de que tu cuenta utiliza las herramientas de Mercado Pago según los [Términos y Condiciones](https://www.mercadopago.com.br/developers/pt/docs/resources/legal/terms-and-conditions) marcando la casilla de selección.
7. Haz clic en **Crear cuenta de prueba**.

> WARNING
>
> Aviso
>
> Puedes generar hasta 15 cuentas de usuarios de prueba al mismo tiempo y, por ahora, no es posible eliminarlas.

¡Listo! La cuenta de prueba se ha creado y se mostrará en la tabla con la siguiente información:

* **País**: Lugar de origen de la cuenta seleccionado en tu registro.
* **Identificación de la cuenta**: Descripción para identificar la cuenta de prueba.
* **Usuario**: Nombre de usuario de la cuenta de prueba generado automáticamente. Este es el nombre de usuario que se utiliza para iniciar sesión con el test user.
* **Contraseña**: Contraseña de acceso a la cuenta del usuario de prueba generada automáticamente. Para generar una nueva contraseña, haz clic en los 3 puntos verticales al final de la línea de la tabla y selecciona la opción **Generar nueva contraseña**.
* **Creado en**: Fecha en que se creó la cuenta de prueba.

> NOTE
>
> Importante
>
> Para editar la **identificación de la cuenta** o **agregar más dinero ficticio** para probar tus aplicaciones, haz clic en los **3 puntos verticales** al final de la línea de la tabla y selecciona la opción **Editar datos**.